/**
 * Bismark Micron.
 */

import type { BismarkBlockHandlers } from '../types'

import { BismarkBlocks } from '../parser/block'

/** Bismark to Micron parser. */
export class BismarkMicron extends BismarkBlocks {
	/** Current header level. */
	#level = 1

	/** Buffer for continuation lines. */
	#continuation: string[] = []

	blank() {
		this.out.write('\n')
	}

	header({ text, level }: BismarkBlockHandlers['header']) {
		this.out.write(`${'>'.repeat(level)}${this.#escape(text)}\n`)
		this.#level = level
	}

	paragraphLine({ text, continuation }: BismarkBlockHandlers['paragraphLine']) {
		if (continuation) {
			this.#continuation.push(text)
		} else {
			if (this.#continuation.length) {
				text = this.#continuation.join('') + text
				this.#continuation = []
			}

			// Keep track of Micron dedents
			if (text[0] === '<') this.#level = Math.max(0, this.#level - 1)

			this.out.write(`${this.#escape(text)}\n`)
		}
	}

	quoteOpen() {
		this.out.write(`${this.#indent()}\n`)
	}

	quoteLine({ text }: BismarkBlockHandlers['quoteLine']) {
		this.out.write(`${this.#escape(text).trim()}\n`)
	}

	quoteClose() {
		this.out.write(`${this.#dedent()}\n`)
	}

	verbatimOpen() {
		this.out.write('`=\n')
	}

	verbatimLine({ text }: BismarkBlockHandlers['verbatimLine']) {
		this.out.write(`${text}\n`)
	}

	verbatimClose() {
		this.out.write('`=\n')
	}

	listOpen() {
		// todo: can't pop a stream!
		// if (this.previous.type === 'listClose') this.out.pop()
		this.out.write(`${this.#indent()}\n`)
	}

	listItem({ text, listType }: BismarkBlockHandlers['listItem']) {
		this.out.write(`${listType === '-' ? '\\-' : listType} ${this.#escape(text)}\n`)
	}

	listClose() {
		this.out.write(`${this.#dedent()}\n`)
	}

	dinkus({ text }: BismarkBlockHandlers['dinkus']) {
		this.out.write(`\`c${text}\n\`a\n`)
	}

	#indent() {
		return '>'.repeat(this.#level + 1)
	}

	#dedent() {
		return '>'.repeat(this.#level)
	}

	#escape(text: string) {
		return text.replaceAll('`', '\\`')
	}
}
