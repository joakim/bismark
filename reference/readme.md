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

- [x] Block elements (Level 0)
- [x] HTML target
- [x] Markdown target
- [x] Micron target
- [ ] Test suite
- [ ] Nested block elements (Level 0)
- [ ] Inline elements (Level 1)
- [ ] Bracket elements (Level 2)
	- [ ] Comments
	- [ ] Definitions and references
	- [ ] Extensions
		- [ ] Spoilers
		- [ ] Images
		- [ ] Tables
- [ ] Beautification

---

100% hand-written. No brain cells atrophied during the making of this parser.
