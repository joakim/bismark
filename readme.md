# Bismark

A [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language), suitable for both shorter and longer texts.

- Simple
- [Extensible](extras.md)
- Typographically sound

Bismark is output format agnostic, and should be relatively easy to parse.

Note that it's still in flux and is subject to change. The issue queue is open for feedback.


## Documentation

<sub>Some examples are only visible with Markdown extensions.</sub>


### Headings

A heading line must start with 1–3 `#` characters and a space.

	# Heading 1
	## Heading 2
	### Heading 3

> # Heading 1
> ## Heading 2
> ### Heading 3

There are [no more levels](https://practicaltypography.com/headings.html).


### Paragraphs

Paragraphs are separated by one or more blank lines.

[Hard line breaks](https://practicaltypography.com/hard-line-breaks.html) within paragraphs are retained.

	Paragraph with
	a hard line break.

> Paragraph with  
> a hard line break.


### Styling

	*bold*
	_italic_
	`monospaced`

> **bold**  
> _italic_  
> `monospaced`

There's [no underline](https://practicaltypography.com/underlining.html).

Styles can span lines within the same paragraph.

	The most dangerous thought you can have
	as a creative person is to *think you know
	what you're doing*.

> The most dangerous thought you can have  
> as a creative person is to **think you know  
> what you're doing**.


### Lists

Either ordered or unordered.

Nested items must be indented, either with spaces (at least to the start of the outer item's text) or with tabs (one for each indentation).

	1. Ordered item
		- Unordered item
			- Nested item

> 1. Ordered item
>    - Unordered item
>      - Nested item


### Links

Links are enclosed in angle brackets `<…>`.

	<https://example.com>
	<email@example.com>

> <https://example.com>  
> <email@example.com>  

The link's text comes before its destination.

	<Website https://example.com>
	<Email address email@example.com>

> [Website](https://example.com)  
> [Email address](mailto:email@example.com)  

The destination is always the last part of the whitespace delimited link. The rest is the text.


### Block Quotes

	> Why are you quoting everything I say?
	— Anonymous

> > Why are you quoting everything I say?
>
> — Anonymous


### Monospaced Blocks

	```
	¯\_(ツ)_/¯
	```

> ```
> ¯\_(ツ)_/¯
> ```

The text may be syntax highlighted by specifying a language.

	```rebol
	print "Hello, world!"
	```

> ```rebol
> print "Hello, world!"
> ```


### Definitions and References

Definitions have the syntax `[id]: value` and are referenced using `[id]`.

Definitions can be used for notes, abbreviations and snippets.

For notes, prefix the `id` with a `^`.  
For abbreviations, prefix the `id` with a `?`.  
All other definitions are snippets, and may be used to construct links.

	According to <Wikipedia [wikipedia]/SQL>, [?SQL] was originally called SEQUEL.[^1]

	[^1]: In fact, many still pronounce it "sequel".
	[?SQL]: Structured Query Language
	[wikipedia]: http://en.wikipedia.org/wiki/

> According to [Wikipedia](https://en.wikipedia.org/wiki/SQL), <abbr title="Structured Query Language">SQL</abbr> was originally called SEQUEL.[^1]

Whether the definitions themselves are rendered, and how, is up to the renderer.

`id`s are case insensitive and can contain whitespace, but not `[` or `]`.


### Comments

Comments are enclosed in square brackets that start with a `-`.

	[- A comment for future reference -]

	[-
	This is a _block_ comment.
	-]

Uses cases include:

- Notes to self
- Placeholders
- Corrections
- Exclusion from output

Whether comments are rendered, and how, is up to the renderer.


### Thematic Break

The line must consist of (at least) four dashes. `---` is reserved for em-dash, `--` for en-dash.

	----

> ---

Block quotes may contain thematic breaks.


### Beautification

Because [typography matters](https://practicaltypography.com/).

	... is an ellipsis
	-- is an en-dash
	--- is an em-dash
	+- is a plus-minus

> … is an ellipsis  
> – is an en-dash  
> — is an em-dash  
> ± is a plus-minus

“Smart quotes” may be provided as an option by the renderer.


### Escaping

Unintended formatting can be prevented with the escape character `\`.

	The asterisk \* and backslash \\ are fine symbols indeed.

> The asterisk \* and backslash \\ are fine symbols indeed.

Or by monospacing.

	The asterisk `*` and backslash `\` are fine symbols indeed.

> The asterisk `*` and backslash `\` are fine symbols indeed.

Even line breaks can be escaped.

	This line has a hard line break \
	that is not rendered.

> This line has a hard line break that is not rendered.

---

In memory of [Aaron Swartz](https://www.youtube.com/watch?v=gpvcc9C8SbM) ([atx](http://www.aaronsw.com/2002/atx/intro)).



[^1]: In fact, many still pronounce it "sequel".
