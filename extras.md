# Extras

A Bismark editor should show which extra features it supports. Either with its toolbar or in a popover.

For example:

> **[Basic Bismark](/readme.md)**  
> \+ [Styling](#styling): Highlight, Superscript, Subscript  
> \+ [Extensions](#extensions): Image, Table, Math  
> \+ [Code](#code): JavaScript, Python


## Documentation

<sub>Some examples are only visible with Markdown extensions.</sub>


### Styling

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

Enclosing a section of text in double square brackets `[[…]]` tagged with the name of an extension, will cause it to be rendered by that extension.

Which renderers are supported depend on the environment. If a renderer is not supported, the contents should be rendered as usual. (Note how the image will fall back to a link in the first example.)

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


### Code

Code enclosed in curly braces `{…}` will get evaluated when rendered.

	The answer is... { 2 * 3 * 7 }!

> The answer is… 42!

A language may be specified, similar to monospaced code blocks.

	{js
	  [1, 2, 3, 4].reduce((acc, num) => acc + num, 0)
	}

> 10

Of course, this isn't very portable. But within a certain environment, it could be very powerful.

For example, it could be used to create something like [Jupyter Notebook](https://jupyter.org/), with interactive manipulation and evaluation of code. Perhaps with double curly braces `{{…}}`, producing both an in-place editor of the code (or a monospaced block) _and_ the evaluated result below.

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
