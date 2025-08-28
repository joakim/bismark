# Extras

Note: This is a draft.

A Bismark editor should clearly show which extra features it supports. Either within its toolbar or in a popover.

For example:

> **[Basic Bismark](/readme.md)**  
> \+ [Beautification](#beautification): Ellipsis, En-dash, Em-dash, Smart quotes  
> \+ [Inline Styles](#inline-styles): Highlight, Superscript, Subscript  
> \+ [References](#references): Citations, Notes  
> \+ [Comments](#comments)  
> \+ [Extensions](#extensions): Image, Table, TeX  
> \+ [Syntax Highlighting](#syntax-highlighting): JavaScript, Clojure, Rebol  
> \+ [Inline Code](#inline-code): JavaScript  

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


### References

A reference is a key enclosed in square brackets `[…]` that matches a [definition](#definitions).

	According to <Wikipedia [wikipedia]>'s article on [wiki en Structured Query Language], [?SQL] was originally called SEQUEL.[^1][*a]

> According to <a href="https://www.wikipedia.org/">Wikipedia</a>'s article on [Structured Query Language](https://en.wikipedia.org/wiki/Structured%20Query%20Language), <abbr title="Structured Query Language">SQL</abbr> was originally called SEQUEL.[^1][^a]


#### Definitions

Definitions are used for abbreviations, citations, notes, snippets and templates.

Definitions have the syntax `[key]: value` and are [referenced](#references) using `[key]`.

If the `key` starts with a `?`, it's an abbreviation.  
If the `key` starts with a `^`, it's a citation.  
If the `key` starts with a `*`, it's a note.  
Otherwise, it's a snippet.  

If the snippet's key is followed by space and one or more variable names, specified in curly brackets `{…}` and separated by space, it's a template. The last variable name consumes any remaining text, including whitespace, until `]` is encountered. Variable names are referenced within the template using curly brackets `{…}`.

The `key` and any variables are case insensitive and cannot start with `-` or contain spaces, `[` or `]`.

`[*]` is a valid note reference, as is `[**]`, `[***]`, etc.

	[?SQL]: Structured Query Language
	[^1]: D.D. Chamberlin, <Oral history interview with Donald D. Chamberlin https://hdl.handle.net/11299/107215> (Charles Babbage Institute, 2001).
	[*a]: In fact, many still pronounce it "sequel".
    [Wikipedia]: https://www.wikipedia.org/
	[wiki {lang} {title}]: <{title} https://{lang}.wikipedia.org/wiki/{title}>

Definitions take precedence over extensions.


### Comments

Comments are enclosed in square brackets that start with and optionally end with `-`.

	[- A comment for future reference -]

	[-
	This is a _block_ comment.
	-]

Uses cases include:

- Notes to self
- Placeholders
- Corrections
- Exclusion from output


### Extensions

Bismark renderers can be extended by sub-renderers to provide additonal features.

Enclosing a section of text in square brackets `[…]` prefixed with the name of an extension, will cause it to be rendered by that extension.

Which renderers are supported depend on the environment. If a renderer is not supported, the contents should be rendered as usual. Note how the image will fall back to a link in the first example.

#### Examples

An image within a spoiler alert:

	[spoiler
	  [image <A happy little quokka holding a twig https://i.imgur.com/KLsmqqR.jpeg>]
	]

> <details>
> <summary>Spoiler</summary>
>   <img title="A happy little quokka holding a twig" src="https://i.imgur.com/KLsmqqR.jpeg"/>
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

	Because [md *why not!* ]

> Because *why not!*


### Syntax Highlighting

[Verbatim blocks](/readme.md#verbatim-blocks) may be syntax highlighted by specifying a supported language.

	```rebol
	print "Hello, world!"
	```

> ```rebol
> print "Hello, world!"
> ```


### Inline Code

Code enclosed in double curly braces `{{…}}` will be evaluated inline when rendered.

	The answer is... {{ 2 * 3 * 7 }}!
	
	Last updated: {{ Temporal.Now.plainDateTimeISO().toLocaleString('se') }}

> The answer is… 42!
> 
> Last updated: 2025-06-20 16:16:59

Only one language can be supported at a time, to be specified by the renderer. While this is not very portable, it could be a powerful feature within an environment.

Because `{{` and `}}` may occur in programming languages, parsers must track nested `{{…}}` to reach the closing `}}` of the inline code element.

---

[^1]: D.D. Chamberlin, [Oral history interview with Donald D. Chamberlin](https://hdl.handle.net/11299/107215) (Charles Babbage Institute, 2001).  
[^a]: In fact, many still pronounce it "sequel".
