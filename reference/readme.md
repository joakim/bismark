# Bismark Reference Implementation (WIP)

Intended to be easy to understand. So simple that it's almost embarrasing.

## Status

### Parser levels

0. [Block elements](./src/parser/block.ts)
1. Inline elements
2. Extras

### Targets

- [HTML](./src/targets/html.ts)
- [Markdown](./src/targets/markdown.ts)
- [Micron](./src/targets/micron.ts)

Requires the [Bun](https://bun.com/) runtime (for now).

---

100% hand-written. No brain cells atrophied during the making of this parser.
