# Extras

A Bismark editor should show which extra features it supports. Either with its toolbar or in a popover.

For example:

> **[Basic Bismark](/readme.md)**  
> \+ [Inline styles](#inline-styles): Highlight, Superscript, Subscript  
> \+ [Extensions](#extensions): Image, Table, Math  
> \+ [Syntax highlighting](#syntax-highlighting): JavaScript, Python, Rebol  
> \+ [Inline code](#inline-code): JavaScript  
> \+ [Code blocks](#code-blocks): JavaScript, Python

---

<sub>Some examples are only visible with Markdown extensions.</sub>


### Inline styles

Inline [styles](/readme.md#styling) (bold, italic and monospaced) may be extended with additional styles from a predetermined set.

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


### Extensions

Bismark renderers can be extended by sub-renderers to provide additonal features.

Enclosing a section of text in double square brackets `[[ … ]]` tagged with the name of an extension, will cause it to be rendered by that extension.

Which renderers are supported depend on the environment. If a renderer is not supported, the contents should be rendered as usual. (Note how the image will fall back to a link in the example below.)

	[[spoiler
	  [[image <A happy little quokka holding a twig https://i.imgur.com/KLsmqqR.jpeg>]]
	]]

> <details>
> <summary>Spoiler</summary>
>   <img title="A happy little quokka holding a twig" src="https://i.imgur.com/KLsmqqR.jpeg"/>
> </details>

Here are some more examples…

Tables, using Markdown's syntax:

	[[table
	| Bismark    | Markdown                |
	| ---------- | ----------------------- |
	| `*bold*`   | `**bold**` / `__bold__` |
	| `_italic_` | `*italic*` / `_italic_` |
	]]

> | Bismark    | Markdown                |
> | ---------- | ----------------------- |
> | `*bold*`   | `**bold**` / `__bold__` |
> | `_italic_` | `*italic*` / `_italic_` |

Math formulas, assuming the environment supports TeX:

	[[tex \dfrac{\partial y}{\partial x} = x ]]

Markdown inside Bismark:

	Because [[md *why not!* ]]

> Because *why not!*


### Syntax highlighting

[Monospaced blocks](/readme.md#monospaced-blocks) may be syntax highlighted by specifying a supported language.

	```rebol
	print "Hello, world!"
	```

> ```rebol
> print "Hello, world!"
> ```


### Inline code

Code enclosed in curly braces `{ … }` will be evaluated inline when rendered.

	The answer is... { 2 * 3 * 7 }!

> The answer is… 42!

Only one language can be supported at a time, to be specified by the renderer.

This is not very portable, but within a certain environment, it could be very powerful.

Because `{` and `}` often occur in programming languages, parsers must allow nested `{ … }` to reach the closing `}` of the inline code element. The code itself must not contain any non-matching `{` or `}`, including in strings or comments.


### Code blocks

Code enclosed in two or more braces `{{ … }}` will be evaluated as a block when rendered.

A supported language may be specified, similar to monospaced code blocks and extensions.

	{{js
	  [1, 2, 3, 4].reduce((acc, num) => acc + num, 0)
	}}

> 10

For example, it could be used to create something like [Jupyter Notebook](https://jupyter.org/), with an interactive in-place editor and the result of the evaluation rendered directly below.

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
