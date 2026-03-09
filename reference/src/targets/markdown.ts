/**
 * Bismark to Markdown.
 */

import type { BismarkBlockHandlers } from '../types'

import { BismarkBlocks } from '../parser/block'

/** Bismark to Markdown parser. */
export class BismarkMarkdown extends BismarkBlocks {
	/** Output buffer. */
	#out: string[] = []

	constructor(out: typeof process.stdout) {
		super(out)
		this.on('done', () => this.out.write(this.#out.join('\n')))
	}

	blank() {
		this.#out.push('')
	}

	header({ text, level }: BismarkBlockHandlers['header']) {
		this.#out.push(`${'#'.repeat(level)}${text}`)
	}

	paragraphLine({ text }: BismarkBlockHandlers['paragraphLine']) {
		if (this.previous.type === 'paragraphLine') this.#out[this.#out.length - 1] += '  '
		this.#out.push(`${text}`)
	}

	quoteLine({ text }: BismarkBlockHandlers['quoteLine']) {
		if (this.previous.type === 'quoteLine') this.#out[this.#out.length - 1] += '  '
		this.#out.push(`>${text}`)
	}

	verbatimLine({ text }: BismarkBlockHandlers['verbatimLine']) {
		this.#out.push(text)
	}

	verbatimOpen() {
		this.#out.push('```')
	}

	verbatimClose() {
		this.#out.push('```')
	}

	listItem({ text, listType }: BismarkBlockHandlers['listItem']) {
		this.#out.push(`${listType.replace('•', '*')} ${text}`)
	}

	dinkus() {
		this.#out.push('---')
	}
}
