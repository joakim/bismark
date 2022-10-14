# Extensions

Some possible extensions that are worth considering.


## Blocks

Blocks allow a different rendering of pieces of Bismark text.

	[[spoiler
	  [[image <A happy little quokka holding a twig https://i.imgur.com/KLsmqqR.jpeg>]]
	]]

> <details>
> <summary>Spoiler</summary>
>   <img title="A happy little quokka holding a twig" src="https://i.imgur.com/KLsmqqR.jpeg"/>
> </details>

Which renderers are supported depend on the environment.

If a renderer is not supported, the block's contents should be rendered as usual.

Blocks are preferable to reserving more markup symbols from a very limited set of keyboard characters.

### Table

Using Markdown's table syntax as an example.

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

### Math formula

Assuming the environment supports TeX.

	[[tex
	\dfrac{\partial y}{\partial x} = x
	]]

### Markdown inside Bismark

	Because [[md *why not!* ]]

> Because *why not!*

## Code

Code that's enclosed in curly braces `{…}` gets evaluated when the text is rendered.

	The answer is... { 2 * 3 * 7 }!

> The answer is… 42!

A language may be specified, similar to monospaced code blocks.

	{js
	  [1, 2, 3, 4].reduce((acc, n) => acc + n, 0)
	}

> 10

Of course, this isn't very portable. But within a certain environment, it could be very powerful. It could be used to create something like [Jupyter Notebook](https://jupyter.org/), with interactive manipulation and evaluation of code. Or simply have it compile in-place when the text is rendered.


## Typographic niceties

Because [typography matters](https://practicaltypography.com/).

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

	... is an ellipsis
	-- is an en-dash
	--- is an em-dash
	+- is a plus-minus

> … is an ellipsis  
> – is an en-dash  
> — is an em-dash  
> ± is a plus-minus
