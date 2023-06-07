# Extras

Note: This is all very experimental.

A Bismark editor should clearly show which extra features it supports. Either within its toolbar or in a popover.

For example:

> **[Basic Bismark](/readme.md)**  
> \+ [Inline Styles](#inline-styles): Highlight, Superscript, Subscript  
> \+ [References](#references): Citations, Notes  
> \+ [Comments](#comments)  
> \+ [Extensions](#extensions): Image, Table, TeX  
> \+ [Syntax Highlighting](#syntax-highlighting): JavaScript, Clojure, Rebol  
> \+ [Inline Code](#inline-code): JavaScript  
> \+ [Code Blocks](#code-blocks): JavaScript, Clojure

<sup>Some examples on this page require certain Markdown extensions to render correctly.</sup>

---

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

	<According to Wikipedia [+wikipedia]/SQL>, [?SQL] was originally called SEQUEL.[^1][*a]

> [According to Wikipedia](https://en.wikipedia.org/wiki/SQL), <abbr title="Structured Query Language">SQL</abbr> was originally called SEQUEL.[^1][^a]


#### Definitions

Definitions have the syntax `[key]: value` and are [referenced](#references) using `[key]`.

Definitions are used for snippets, abbreviations, citations and notes.

For snippets, the `key` must start with a `+`.  
For abbreviations, the `key` must start with a `?`.  
For citations, the `key` must start with a `^`.  
For notes, the `key` must start with a `*`.

The `key` is case insensitive and can't contain spaces, `[` or `]`.

	[+wikipedia]: http://en.wikipedia.org/wiki/
	[?SQL]: Structured Query Language
	[^1]: D.D. Chamberlin, <Oral history interview with Donald D. Chamberlin https://hdl.handle.net/11299/107215> (Charles Babbage Institute, 2001).
	[*a]: In fact, many still pronounce it "sequel".

`[*]` is a valid note reference, as is `[**]` and `[***]`.


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

Code enclosed in curly braces `{…}` will be evaluated inline when rendered.

	The answer is... { 2 * 3 * 7 }!
	
	Last updated: { Temporal.Now.plainDateTimeISO().toLocaleString('se') }

> The answer is… 42!
> 
> Last updated: 2023-01-31 14:27:01

Only one language can be supported at a time, to be specified by the renderer. While this is not very portable, it could be a powerful feature within an environment.

Because `{` and `}` often occur in programming languages, parsers must allow nested `{…}` to reach the closing `}` of the inline code element. The code itself must not contain any non-matching `{` or `}`, including in strings or comments.


### Code Blocks

Code enclosed in two or more braces `{{…}}` will be evaluated as a block when rendered.

A supported language may be specified, similar to syntax highlighted verbatim blocks and extensions.

	{{js
	  [1, 2, 3, 4].reduce((acc, num) => acc + num, 0)
	}}

> 10

For example, this could be used to create something like [Jupyter Notebook](https://jupyter.org/), with an interactive in-place editor and the result of the evaluation rendered directly below.

	{{kesh
	    a: 20
	    b: 22
	    a + b
	}}

> ```
> a: 20
> b: 22
> a + b
> ```
> > 42

---

[^1]: D.D. Chamberlin, [Oral history interview with Donald D. Chamberlin](https://hdl.handle.net/11299/107215) (Charles Babbage Institute, 2001).  
[^a]: In fact, many still pronounce it "sequel".
