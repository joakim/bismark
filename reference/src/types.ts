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
	paragraphLine: BlockDetails & { text: string; continuation: boolean }
	paragraphOpen: BlockDetails
	paragraphClose: BlockDetails
	quoteLine: BlockDetails & { text: string }
	quoteOpen: BlockDetails
	quoteClose: BlockDetails
	verbatimLine: BlockDetails & { text: string }
	verbatimOpen: BlockDetails
	verbatimClose: BlockDetails
	listItem: BlockDetails & { text: string; listType: ListType }
	listOpen: BlockDetails & { listType: ListType }
	listClose: BlockDetails & { listType: ListType }
	dinkus: BlockDetails & { text: string }
}
