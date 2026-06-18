# Extras

Note: This is a draft.

<sup>Some examples on this page require certain Markdown extensions to render correctly.</sup>

---

### Beautification

Because [typography matters](https://practicaltypography.com/).

	... is an ellipsis
	-- is an en-dash
	--- is an em-dash

> … is an ellipsis  
> – is an en-dash  
> — is an em-dash  

“Smart quotes” may be provided as an option by the renderer.


### Inline Styles

Inline [styles](/readme.md#styling) (bold, italic and verbatim) may be extended with additional styles from a predetermined set.

	==highlighted==
	~~redacted~~
	++inserted++
	^superscript^
	~subscript~

> <mark>highlighted</mark>  
> <del>redacted</del>  
> <ins>inserted</ins>  
> <sup>superscript</sup>  
> <sub>subscript</sub>


### Definitions and References

#### Definitions

Definitions are used for abbreviations, citations, notes, snippets and links.

A definition is a line with the syntax `[key]: value`. It may be [referenced](#references) anywhere in the source (except in definitions) using `[key]`.

Keys are case insensitive, cannot start with `-` or `#` and cannot contain `:`, `[` or `]`.

If the `key` starts with a `?`, it's an abbreviation.  
If the `key` starts with a `^`, it's a citation.  
If the `key` starts with a `*`, it's a note.  
Otherwise, it's a snippet.

A snippet may contain named variables in curly brackets (`{name}`), making it a template snippet. Variable names are case insensitive and cannot contain `:`, `[`, `]` or space.

`[x]` and `[ ]` are reserved for checkboxes.

`[*]` is a valid note reference, as is `[**]`, `[***]`, etc.

	[?sql]: Structured Query Language
	[^1]: D.D. Chamberlin, <Oral history interview with Donald D. Chamberlin https://hdl.handle.net/11299/107215> (Charles Babbage Institute, 2001).
	[*a]: In fact, many still pronounce it "sequel".
	[wiki]: <{title} https://{lang}.wikipedia.org/wiki/{title}>
	[wikipedia]: https://www.wikipedia.org/
	[twitter]: https://x.com/

Definitions take precedence over [extensions](#extensions).


#### References

A reference is an inline element whose text, enclosed in square brackets `[…]`, matches a [definition](#definitions)'s `key` (case insensitive).

If the definition is a template snippet, the `key` may be followed by a list of `name:value` pairs separated by space. If a `value` contains spaces, it must be enclosed in quotation marks.

	According to [Wikipedia]<>'s article on [wiki lang:en title:"Structured Query Language"], [?SQL] was originally called SEQUEL.[^1][*a]

> According to <a href="https://www.wikipedia.org/">Wikipedia</a>'s article on [Structured Query Language](https://en.wikipedia.org/wiki/Structured%20Query%20Language), <abbr title="Structured Query Language">SQL</abbr> was originally called SEQUEL.[^1][^a]


#### Links

Links may be composed using snippets.

    <X [twitter]>

> [X](https://x.com/)

A definition may be rendered as a link by appending `<>` to the reference. The reference must match the definition's `key` (case insensitive) and will be the link's text. The definition's `value` will be the links's destination.

	[Wikipedia]<>

> [Wikipedia](https://wikipedia.org/)


##### Anchors

Anchor references may be used to link to headings in the same document. If `<>` is appended to an anchor reference, it will be rendered as a link with the heading as the link's text.

	<see here [#Definitions and References]>  
	[#Definitions and References]<>

> [see here](#definitions-and-references)  
> [Definitions and References](#definitions-and-references)


### Comments

Comments are enclosed in square brackets that start and end with `-`.

	[- An inline comment for future reference -]

	[-
	This is a _block_ comment.
	-]

Uses cases include:

- Notes to self
- Placeholders
- Corrections
- Exclusion from output


### Attributes

Equivalent to Djot's [inline](https://htmlpreview.github.io/?https://github.com/jgm/djot/blob/master/doc/syntax.html#inline-attributes) and [block](https://htmlpreview.github.io/?https://github.com/jgm/djot/blob/master/doc/syntax.html#block-attributes) attributes, except swapping `:` and `=`, not having comments and quotes only being required if an attribute's `value` contains spaces.

	An attribute on _emphasized text_{#foo .bar .baz key:"my value"}

	{source:Iliad}
	Sing, muse, of the wrath of Achilles


### Extensions

Bismark renderers can be extended by sub-renderers to provide additonal features.

Enclosing a section of text in square brackets `[…]` prefixed with the name of an extension, will cause it to be rendered by that extension.

Which renderers are supported depend on the environment. If a renderer is not supported, the contents should be rendered as usual. Note how the image will fall back to a link in the first example. The link's text is used as the image's alternative text.

Extension elements are always block elements.

#### Examples

An image within a spoiler/disclosure element:

	[spoiler
	  [image <A happy little quokka holding a twig https://i.imgur.com/KLsmqqR.jpeg>]
	]

> <details>
> <summary>Spoiler</summary>
>   <img alt="A happy little quokka holding a twig" src="https://i.imgur.com/KLsmqqR.jpeg"/>
> </details>

Tables, using Markdown's table syntax:

	[table
	| Bismark    | Markdown                |
	| ---------- | ----------------------- |
	| `*bold*`   | `**bold**` / `__bold__` |
	| `_italic_` | `*italic*` / `_italic_` |
	]

> | Bismark    | Markdown                |
> | ---------- | ----------------------- |
> | `*bold*`   | `**bold**` / `__bold__` |
> | `_italic_` | `*italic*` / `_italic_` |

Math formulas, assuming the environment supports TeX:

	[tex \dfrac{\partial y}{\partial x} = x ]

> $$ \dfrac{\partial y}{\partial x} = x $$

Markdown inside Bismark:

	[md *why not!* ]

> *why not!*

(Actually, that's a bad idea…)


### Syntax Highlighting

[Verbatim blocks](/readme.md#verbatim-blocks) may be syntax highlighted by specifying a supported language.

	``` rebol
	print "Hello, world!"
	```

> ```rebol
> print "Hello, world!"
> ```

[^1]: D.D. Chamberlin, [Oral history interview with Donald D. Chamberlin](https://hdl.handle.net/11299/107215) (Charles Babbage Institute, 2001).  
[^a]: In fact, many still pronounce it "sequel".
