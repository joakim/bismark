# Bismark

A [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language), suitable for both shorter and longer texts.

- Simple and easy to learn
- Typographically sound
- Relatively easy to parse
- Agnostic of output format and hypertext system

(Some features can not be shown with GitHub Flavored Markdown.)

## Headings

A heading line must start with 1–3 `#` characters and a space.

	# Heading 1
	## Heading 2
	### Heading 3

> # Heading 1
> ## Heading 2
> ### Heading 3

There are [no more levels](https://practicaltypography.com/headings.html).


## Paragraphs

Paragraphs are separated by one or more blank lines.

[Hard line breaks](https://practicaltypography.com/hard-line-breaks.html) within paragraphs are retained.

	Paragraph with
	a hard line break.

> Paragraph with  
> a hard line break.


## Styles

	*bold*
	_italic_
	`monospace`

> **bold**  
> _italic_  
> `monospace`

There's [no underline](https://practicaltypography.com/underlining.html).

	==highlighted==
	~~strike-through~~

> <u>highlighted</u>  
> ~~strike-through~~

Styles can span lines within the same paragraph.

	The most dangerous thought you can have
	as a creative person is to *think you know
	what you're doing*.

> The most dangerous thought you can have  
> as a creative person is to **think you know  
> what you're doing**.


## Lists

Either ordered or unordered.

Nested items must be indented at least to the start of the outer item's text.

	1. Ordered item
	   - Unordered item
	     - Nested item

> 1. Ordered item
>    - Unordered item
>      - Nested item


## Links

Links are enclosed in angle brackets `<>`. (HTML markup is not supported.)

	<https://example.com>
	<email@example.com>
	<id>

> <https://example.com>  
> <email@example.com>  
> [id](id)

The link's text comes before its destination.

	<A website https://example.com>
	<An email email@example.com>
	<An identifier id>

> [A website](https://example.com)  
> [An email](mailto:email@example.com)  
> [An identifier](id)


## Block quotation

	> Why are you quoting everything I say?
	— Anonymous

> > Why are you quoting everything I say?
>
> — Anonymous


## Monospace block

Code may be rendered as a formatted monospace block, optionally tagged with a formatter.

	```rebol
	print "Hello, world!"
	```

> ```rebol
> print "Hello, world!"
> ```


## Thematic break

The line must start with (at least) four dashes. (`---` is reserved for em-dash, `--` for en-dash.)

	----

> ---


## Definitions and references

Definition lines have the syntax `[id]: value`. Definitions are referenced using `[id]`.

Definitions can be used for notes, abbreviations, links and snippets.

For notes, prefix the `id` with a `^`.  
For abbreviations, prefix the `id` with a `?`.

All other definitions are referenced verbatim, and may be used to construct links.

	According to <Wikipedia [wikipedia]/SQL>, [?SQL] was originally called SEQUEL[^1].

	[^1]: In fact, many still pronounce it "sequel".
	[?SQL]: Structured Query Language
	[wikipedia]: http://en.wikipedia.org/wiki/

> According to [Wikipedia](https://en.wikipedia.org/wiki/SQL), <abbr title="Structured Query Language">SQL</abbr> was originally called SEQUEL[^1].
>
> ---
>
> <small><sup>1</sup> In fact, many still pronounce it "sequel".</small>

Whether the definitions themselves are rendered, and how, is up to the renderer.


## Escaping

Unintended formatting can be prevented with the escape character `\`.

	The asterisk (\*) and backslash (\\) are fine symbols indeed.

> The asterisk (\*) and backslash (\\) are fine symbols indeed.

Or with monospace.

	The asterisk (`*`) and backslash (`\`) are fine symbols indeed.

> The asterisk (`*`) and backslash (`\`) are fine symbols indeed.

[^1]: In fact, many still pronounce it "sequel".
