export type BlockType =
	| 'blank'
	| 'header'
	| 'paragraphOpen'
	| 'paragraphLine'
	| 'paragraphClose'
	| 'quoteOpen'
	| 'quoteLine'
	| 'quoteClose'
	| 'verbatimOpen'
	| 'verbatimLine'
	| 'verbatimClose'
	| 'listOpen'
	| 'listItem'
	| 'listClose'
	| 'dinkus'

export type BlockDetails = {
	[p: string]: unknown
	raw: string
	type: BlockType | undefined
}

export type ListType = '•' | '*' | '-'

/**
 * This may be used to type the parameter of handler functions in subclasses.
 * This is necessary because TypeScript doesn't infer parameter types when
 * overriding functions of the base class. Example: ./targets/markdown.ts
 */
export type BismarkBlockHandlers = {
	blank: BlockDetails
	header: BlockDetails & { text: string; level: number }
	paragraphOpen: BlockDetails
	paragraphLine: BlockDetails & { text: string; continuation: boolean }
	paragraphClose: BlockDetails
	quoteOpen: BlockDetails
	quoteLine: BlockDetails & { text: string }
	quoteClose: BlockDetails
	verbatimOpen: BlockDetails & { text: string; depth: number }
	verbatimLine: BlockDetails & { text: string; depth: number }
	verbatimClose: BlockDetails & { text: string; depth: number }
	listOpen: BlockDetails & { listType: ListType }
	listItem: BlockDetails & { text: string; listType: ListType }
	listClose: BlockDetails & { listType: ListType }
	dinkus: BlockDetails & { text: string }
}
