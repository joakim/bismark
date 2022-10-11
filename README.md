# Bismark

A [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language), suitable for both shorter and longer texts.

- Simple and easy to learn
- Typographically sound
- Relatively easy to parse
- Agnostic of output format and hypertext system

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

> <mark>highlighted</mark>  
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

Links are enclosed in square brackets `[]`.

	[https://example.com]
	[email@example.com]
	[id]
	[#foo]

> <https://example.com>  
> <email@example.com>  
> [id](id)  
> [#foo](#foo)

The last part of the (space-delimited) link is its destination. What comes before is the link's text.

	[A website https://example.com]
	[An email email@example.com]
	[An identifier id]
	[A tag #foo]

> [A website](https://example.com)  
> [An email](mailto:email@example.com)  
> [An identifier](id)  
> [A tag](#foo)


## Block quotation

	> Why are you quoting everything I say?
	— Anonymous

> > Why are you quoting everything I say?
>
> — Anonymous


## Monospace block

Code may be rendered as a formatted monospace block, optionally tagged with a formatter.

	```py
	print "hello world"
	```

> ```py
> print "hello world"
> ```


## Thematic break

The line must start with (at least) four dashes.

	----

> ---


## Definitions and references

Definition lines start with a `<` and have the syntax `<id>: value`. Definitions are referenced using `<id>`.

Definitions can be used for notes, abbreviations, links and snippets.

For notes, prefix the `id` with a `^`.  
For abbreviations, prefix the `id` with a `?`.

All other definitions are referenced verbatim, and may be used to construct links.

	According to [Wikipedia <wiki>/SQL], <?SQL> was originally called SEQUEL<^1>.

	<link>
	
	<^1>: In fact, many still pronounce it "sequel".
	<?SQL>: Structured Query Language
	<wiki>: http://en.wikipedia.org/wiki/
	<link>: [Example link https://www.youtube.com/watch?v=ghxpXpTuALM#t=33m24s]

> According to [Wikipedia](https://en.wikipedia.org/wiki/SQL), <abbr title="Structured Query Language">SQL</abbr> was originally called SEQUEL<sup><small>[1](#fn:1 'In fact, many still pronounce it "sequel".')</a></small></sup>.
>
> [Example link](https://www.youtube.com/watch?v=ghxpXpTuALM#t=33m24s)
>
> ---
>
> <small><sup>1</sup> In fact, many still pronounce it "sequel".</small>

Whether the definitions themselves are rendered, and how, is up to the renderer.

HTML markup is (obviously) not supported, as renderers may target other formats.


## Escaping

Unintended formatting can be prevented with the escape character `\`.

	The asterisk (\*) and backslash (\\) are fine symbols indeed.

> The asterisk (\*) and backslash (\\) are fine symbols indeed.

Or with monospace.

	The asterisk (`*`) and backslash (`\`) are fine symbols indeed.

> The asterisk (`*`) and backslash (`\`) are fine symbols indeed.
