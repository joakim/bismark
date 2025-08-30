# Bismark

A [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language), suitable for both shorter and longer texts.

- Simple
- Typographically sound
- [Extensible](/extras.md)

Bismark is output format agnostic, and is intended to be relatively easy to parse.

It is still in flux and is subject to change. Feedback is always welcome.

--- 

## Inline Elements

### Styling

	*bold*
	_italic_
	`verbatim`

> **bold**  
> _italic_  
> `verbatim`

There's [no underline](https://practicaltypography.com/underlining.html).

Emphasis (bold and italic) may be nested. The element's contained text cannot begin or end with whitespace.

Verbatim text may be enclosed by multiple consecutive backtick characters (``` ` ```), the opening and closing delimiters having the same length. If the outer characters of either end of the contained text is a backtick and a space, seen from the inside and out, a single space is removed from that end.

By convention, verbatim text is rendered in a monospaced font.


### Links

Links are enclosed in angle brackets (`<…>`).

	<https://example.com>
	<email@example.com>

> <https://example.com>  
> <email@example.com>  

The link's text comes before its destination.

	<Website https://example.com>
	<Email address email@example.com>

> [Website](https://example.com)  
> [Email address](mailto:email@example.com)  

The destination is always the last part of the space delimited link. Anything before the destination is the link's text.


### Checkboxes

A checkbox is either checked `[x]` or unchecked `[ ]`, followed by a space.

	Todo:
	[x] Water the dog
	[ ] Feed the plants

> Todo:
> - [x] Water the dog
> - [ ] Feed the plants

<sub>This example requires a Markdown extension to render correctly.</sub>


## Block Elements

### Headings

A heading line starts with 1–3 hash characters (`#`) and a space.

	# Heading 1
	## Heading 2
	### Heading 3

> # Heading 1
> ## Heading 2
> ### Heading 3

There are [no more levels](https://practicaltypography.com/headings.html).


### Paragraphs

Paragraphs are separated by one or more blank lines.

[Line breaks](https://practicaltypography.com/hard-line-breaks.html) within paragraphs are retained unless [escaped](#escaping). In other words, opposite of what Markdown does. It's the 21st century, editors and renderers are expected to use [line and word wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap).

Inline styles and links can span multiple lines within the same paragraph.

	The most dangerous thought you can have
	as a creative person is to *think you know
	what you're doing*.

> The most dangerous thought you can have  
> as a creative person is to **think you know  
> what you're doing**.


### Lists

Items are either ordered or unordered. Unordered items are prefixed with a bullet (`•`), an asterisk (`*`) or a hyphen (`-`), followed by a space.

Nested items are indented either with spaces (at least to the leftmost column of the outer item's text) or tabs (one for each indentation level).

	1. Ordered item
	   • Unordered bullet item
	     - Unordered dash item

> 1. Ordered item  
>    * Unordered bullet item  
>      - Unordered dash item


### Block Quotes

A block quote is prefixed with a vertical bar (`|`) or a right angle bracket (`>`), followed by a space.

	| Why are you quoting everything I say?
	
	— Anonymous

> > Why are you quoting everything I say?
>
> — Anonymous


### Verbatim Blocks

A verbatim block is opened and closed with a line starting with three backticks (` ``` `).

	```
	¯\_(ツ)_/¯
	```

> ```
> ¯\_(ツ)_/¯
> ```


### Thematic Breaks

A line consisting of at least three hyphen (`-`) or asterisk (`*`) characters, in any combination, with any whitespace characters ignored, should be rendered as a thematic break. For example as a [dinkus](https://en.wikipedia.org/wiki/Dinkus) or a horizontal line.

	- * -

> ---


## Escaping

Unintended formatting can be prevented by escaping with the backslash character (`\`).

	The asterisk (\*) and backslash (\\) are fine symbols indeed.
	\- This is not a list item.

> The asterisk (\*) and backslash (\\) are fine symbols indeed.  
> \- This is not a list item.  

By escaping a hyphen within a word, it becomes a [non-breaking hyphen](https://en.wikipedia.org/wiki/Non-breaking_hyphen).

	The next hyphen is non\-breaking.

> The next hyphen is non&#x2011;breaking.

By escaping a space, it becomes a [non-breaking space](https://en.wikipedia.org/wiki/Non-breaking_space).

	This number and its unit must never be broken up by line wrapping: 100\ km

> This number and its unit must never be broken up by line wrapping: 100&nbsp;km

By escaping a line break, it becomes a [non-breaking line break](https://daringfireball.net/projects/markdown/syntax#p) ala Markdown.

	This line has a hard line break \
	that is ignored.

> This line has a hard line break that is ignored.

Unicode characters may be added using the escape sequence `\HHHHHH` with a zero-padded 6-digit hexadecimal Unicode code point.

	Nice \01F44D

> Nice 👍

---

In memory of [Aaron Swartz](https://www.youtube.com/watch?v=gpvcc9C8SbM) ([atx](http://www.aaronsw.com/2002/atx/intro)).
