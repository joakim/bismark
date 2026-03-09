/**
 * Bismark to HTML.
 */

import type { BismarkBlockHandlers } from '../types'

import { BismarkBlocks } from '../parser/block'

let listTypes = {
	'•': 'disc',
	'*': 'circle',
	'-': 'square',
}

/** Bismark to HTML parser. */
export class BismarkHTML extends BismarkBlocks {
	/** Output buffer. */
	#out: string[] = []

	/** Buffer for continuation lines. */
	#continuation: string[] = []

	constructor(out: typeof process.stdout) {
		super(out)
		this.on('done', () => this.out.write(this.#out.join('\n')))
	}

	header({ text, level }: BismarkBlockHandlers['header']) {
		this.#out.push(`<h${level}>${text.trim()}</h${level}>`)
	}

	paragraphOpen() {
		this.#out.push('<p>')
	}

	paragraphLine({ text, continuation }: BismarkBlockHandlers['paragraphLine']) {
		if (continuation) {
			this.#continuation.push(text)
		} else {
			if (this.previous.type === 'paragraphLine') this.#out[this.#out.length - 1] += '<br/>'
			if (this.#continuation.length) {
				text = this.#continuation.join('') + text
				this.#continuation = []
			}
			this.#out.push(`  ${text}`)
		}
	}

	paragraphClose() {
		this.#out.push('</p>')
	}

	quoteOpen() {
		this.#out.push('<blockquote>')
	}

	quoteLine({ text }: BismarkBlockHandlers['quoteLine']) {
		if (this.previous.type === 'quoteLine') this.#out[this.#out.length - 1] += '<br/>'
		this.#out.push(`  ${text.trimStart()}`)
	}

	quoteClose() {
		this.#out.push('</blockquote>')
	}

	verbatimOpen() {
		this.#out.push('<pre>')
	}

	verbatimLine({ text }: BismarkBlockHandlers['verbatimLine']) {
		this.#out.push(text)
	}

	verbatimClose() {
		this.#out.push('</pre>')
	}

	listOpen({ listType }: BismarkBlockHandlers['listOpen']) {
		this.#out.push(`<ul style="list-style-type: ${listTypes[listType]};">`)
	}

	listItem({ text }: BismarkBlockHandlers['listItem']) {
		this.#out.push(`  <li>${text.trim()}</li>`)
	}

	listClose() {
		this.#out.push('</ul>')
	}

	dinkus() {
		this.#out.push('<hr>')
	}
}
