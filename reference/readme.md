# Bismark Reference Implementation

Intended to be easy to understand. So simple that it's almost embarrasing.

## Status

### Parser levels

0. [Block elements](./src/parser/block.ts)
1. Inline elements
2. Bracket elements

### Targets

- [HTML](./src/targets/html.ts) (block level)
- [Markdown](./src/targets/markdown.ts) (block level)
- [Micron](./src/targets/micron.ts) (block level)

Requires the [Bun](https://bun.com/) runtime (for now).

## Roadmap

- [ ] Block elements (Level 0)
	- [x] Header
	- [x] Paragraph
	- [x] Quote
	- [x] Verbatim
	- [x] Lists
		- [x] Unordered
		- [ ] Ordered
		- [ ] Multiline items
	- [x] Dinkus
	- [ ] Nested elements
- [ ] Common targets
	- [x] HTML
	- [x] Markdown
	- [x] Micron
	- [ ] Djot
- [ ] Test suite
- [ ] Inline elements (Level 1)
	- [ ] Styling
		- [ ] Bold
		- [ ] Italic
		- [ ] Verbatim
	- [ ] Links
	- [ ] Checkboxes
	- [ ] Beautification
- [ ] Bracket elements (Level 2)
	- [ ] Comments
	- [ ] Definitions and references
	- [ ] Extensions
		- [ ] Spoilers
		- [ ] Images
		- [ ] Tables

---

100% hand-written. No brain cells atrophied during the making of this parser.
