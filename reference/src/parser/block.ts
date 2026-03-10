/**
 * Bismark level 0: block elements.
 */

import type { BlockDetails, BlockType, ListType } from '../types'

import { EventEmitter } from 'node:events'

/** The symbols of the different list types. */
const listSymbols = new Set<ListType>(['•', '*', '-'])

/** The symbols that a dinkus may consist of. */
const dinkusSymbols = new Set([...listSymbols, ' '])

/** Checks whether a line only contains dinkus symbols and therefore must be a dinkus. */
function isDinkus(line: string) {
	for (let char of line) if (!dinkusSymbols.has(char)) return false
	return true
}

/** Bismark block parser. */
export abstract class BismarkBlocks extends EventEmitter {
	out: typeof process.stdout
	previous: BlockDetails = { type: undefined, raw: '' }

	constructor(out: typeof process.stdout) {
		super()
		this.out = out
	}

	/** Parses Bismark from stdin. */
	async parseStdin(input: typeof console) {
		let i = 0
		for await (let line of input) this.parseLine(line, ++i)
		this.emit('done')
	}

	/** Parses a line of Bismark. */
	parseLine(raw: string, number: number) {
		let line = raw.trim()

		this.emit('line', raw)

		// Header
		if (line[0] == '>') {
			let level = 1
			if (line[1] == '>') {
				level = 2
				if (line[2] == '>') level = 3
			}
			this.output('header', { raw, text: line.slice(level), level })
		}

		// Quote line
		else if (line[0] == '|') {
			this.output('quoteLine', { raw, text: line.slice(1) })
		}

		// Verbatim open/close
		else if (line.startsWith('```')) {
			let type: 'verbatimOpen' | 'verbatimClose' =
				this.previous.type === 'verbatimOpen' || this.previous.type === 'verbatimLine'
					? 'verbatimClose'
					: 'verbatimOpen'
			this.output(type)
		}

		// Verbatim line
		else if (this.previous.type === 'verbatimOpen' || this.previous.type === 'verbatimLine') {
			this.output('verbatimLine', { raw, text: line })
		}

		// Dinkus
		else if (line.length > 0 && isDinkus(line)) {
			this.output('dinkus', { raw, text: line })
		}

		// List item (must come after the Dinkus clause, as they share symbols)
		else if (listSymbols.has(<ListType>line[0]) && line[1] === ' ') {
			let listType = <ListType>line[0]

			// A change of type closes the list, triggering a transition to a new list
			if (this.previous.type === 'listItem' && this.previous.listType !== listType) {
				this.output('listClose', { listType }, false)
			}

			this.output('listItem', { raw, text: line.slice(2), listType })
		}

		// Text line
		else {
			if (line.length === 0) {
				this.output('blank')
			} else {
				let continuation = line.at(-1) === '\\'
				let text = continuation ? line.slice(0, -1) : line
				this.output('paragraphLine', { raw, text, continuation })
			}
		}
	}

	output(type: BlockType, details: Partial<BlockDetails> = {}, transition = true) {
		let previous = this.previous
		let current: BlockDetails = { raw: '', type, ...details }

		this.emit('output', current, previous)

		// Transition between different types
		if (transition == true && current.type !== previous.type) {
			this.emit('transition', current, previous)

			// Close any opened block element when transitioning from…
			if (previous.type === 'paragraphLine') {
				// If there's a trailing continuation line, emit an empty line so that it can be output
				if (previous.continuation) this.output('paragraphLine', { raw: '', text: '', continuation: false }, false)
				this.output('paragraphClose', undefined, false)
			} else if (previous.type === 'quoteLine') {
				this.output('quoteClose', undefined, false)
			} else if (previous.type === 'listItem') {
				this.output('listClose', { listType: previous.listType }, false)
			}

			// Open a new block element when transitioning to…
			if (current.type === 'paragraphLine' && !previous.continuation) {
				this.output('paragraphOpen', undefined, false)
			} else if (current.type === 'quoteLine') {
				this.output('quoteOpen', undefined, false)
			} else if (current.type === 'listItem') {
				this.output('listOpen', { listType: current.listType }, false)
			}
		}

		// Call the implementation's listener and handler functions
		this.emit(type, current, previous)
		this[type](current)

		this.previous = current
	}

	// To be overridden. See also: BismarkBlockHandlers in ../types.ts
	blank(current: BlockDetails) {}
	header(current: BlockDetails) {}
	paragraphLine(current: BlockDetails) {}
	paragraphOpen(current: BlockDetails) {}
	paragraphClose(current: BlockDetails) {}
	quoteLine(current: BlockDetails) {}
	quoteOpen(current: BlockDetails) {}
	quoteClose(current: BlockDetails) {}
	verbatimLine(current: BlockDetails) {}
	verbatimOpen(current: BlockDetails) {}
	verbatimClose(current: BlockDetails) {}
	listItem(current: BlockDetails) {}
	listOpen(current: BlockDetails) {}
	listClose(current: BlockDetails) {}
	dinkus(current: BlockDetails) {}
}
