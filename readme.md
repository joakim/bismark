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

<details>

Emphasis (bold and italic) may be nested. The element's contained text cannot begin or end with whitespace.

Verbatim text may be enclosed by multiple consecutive backtick characters (``` ` ```), the opening and closing delimiters having the same length. If the outer characters of either end of the contained text is a backtick and a space, seen from the inside and out, a single space is removed from that end.

By convention, verbatim text is rendered in a monospaced font.

</details>


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

<details>

The destination is always the last part of the space delimited link. Anything before the destination is the link's text.

</details>


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

Paragraphs are separated by one or more blank lines, line breaks within paragraphs are retained.

	To see a world in a grain of sand 
	And a heaven in a wild flower 
	Hold infinity in the palm of your hand 
	And eternity in an hour

> To see a world in a grain of sand  
> And a heaven in a wild flower  
> Hold infinity in the palm of your hand  
> And eternity in an hour

<details>

[Line breaks](https://practicaltypography.com/hard-line-breaks.html) within paragraphs are retained unless [escaped](#escaping). In other words, the opposite of what Markdown does. It's the 21st century, editors and renderers can be expected to use [line and word wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap).

Inline styles and links can span multiple lines within a paragraph.

Leading and trailing whitespace may be ignored by renderers.

</details>


### Lists

A list consists of either ordered or unordered list items. Lists may be nested.

	1. First ordered item
    2. Second ordered item
	   • Unordered bullet item
	     - Unordered item
	       taking up two lines

> 1. First ordered item
> 2. Second ordered item
>    * Unordered bullet item
>      - Unordered item\
>        taking up two lines

<details>

Ordered list items are numbered, followed by either a dot (`.`) or a closing parenthesis (`)`), followed by a space. Only the first list item's number should be used as the starting number of the list, if supported by the renderer. The numbers of any subsequent list items should be ignored.

Unordered list items are prefixed with either a bullet (`•`), an asterisk (`*`) or a hyphen (`-`), followed by a space.

Nested list items are indented either with spaces (at least to the leftmost column of the outer item's text) or tabs (one for each indentation level).

List items may contain line breaks. New lines are not required to be indented to the depth of the list item's text, but they can for readability.

If a list item contains paragraphs, they must all start at the depth of the list item's text. Any line breaks within paragraphs may start at a lower depth.

Changing the character used to mark a list's items will end the list and begin a new one.

</details>


### Block Quotes

A block quote is prefixed with a vertical bar (`|`) followed by a space.

	| Why are you quoting everything I say?
	
	— Anonymous

> > Why are you quoting everything I say?
>
> — Anonymous

<details>

A block quote spanning multiple lines must use the prefix on all lines.
 
</details>


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
