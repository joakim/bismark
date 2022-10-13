# Extensions

Some possible extensions that are worth considering.


## Typographic niceties

    ... is an ellipsis
    -- is an en-dash
    --- is an em-dash
    +- is a plus-minus

> … is an ellipsis  
> – is an en-dash  
> — is an em-dash  
> ± is a plus-minus

    ^2^ marks superscript text
    ~2~ marks subscript text
    ++foo++ marks inserted text

> <sup>2</sup> marks superscript text  
> <sub>2</sub> marks subscript text  
> <ins>foo</ins> marks inserted text


## Formatters

Formatters allow alternative rendering of spans or blocks of Bismark text.

    [[spoiler
    There _is_ no cake.
    ]]

> <details>
> <summary>Spoiler</summary>
> There <em>is</em> no cake.
> </details>

Formatters are preferable to adding more markup symbols from a very limited set of keyboard characters.

Which formatters are supported depend entirely on the environment.

### Image

    [[image <A happy little quokka holding a twig https://i.imgur.com/KLsmqqR.jpeg>]]

> ![A happy little quokka holding a twig](https://i.imgur.com/KLsmqqR.jpeg)

### Table

    [[table
    | Syntax      | Description |
    | ----------- | ----------- |
    | Header      | Title       |
    | Paragraph   | Text        |
    ]]

> | Syntax      | Description |
> | ----------- | ----------- |
> | Header      | Title       |
> | Paragraph   | Text        |

### Definiton list

    [[def
    First Term
    : This is the definition of the first term.
    
    Second Term
    : This is one definition of the second term.
    : This is another definition of the second term.
    ]]]

> <dl>
> <dt>First Term</dt>
> <dd>This is the definition of the first term.</dd>
> <dt>Second Term</dt>
> <dd>This is one definition of the second term.</dd>
> <dd>This is another definition of the second term.</dd>
> </dl>

### Math formula

Assuming the environment supports LaTeX.

    [[latex
    \dfrac{\partial y}{\partial x} = x
    ]]


## Code

Code can be enclosed in curly braces `{…}` to be run within the text.

    The answer is... { 2 * 3 * 7 }.

> The answer is… 42.

A language could be specified, similar to monospace blocks.

    {js
      [1, 2, 3, 4].reduce((acc, n) => acc + n, 0)
    }

> > 10

Of course, this isn't very portable. But within a specific environment, it could be very powerful. It could be used somewhat similar to [Jupyter Notebook](https://jupyter.org/), with interactive manipulation of code. Or simply compiled in-place when the text is rendered.


## Comments

Square brackets that start with `--` may be rendered as comments, either to be hidden from rendered output or to be styled as in-text comments. Either inline or as blocks.

    [-- For future reference... ]
    
    [--
        This is a block comment.
    --]

>  

Some uses cases are todos, corrections, placeholders, temporarily hiding sections of text…

It's also a quick way to (temporarily) disable the referencing of a definition.

    This needs no explanation.[--^1]

> This needs no explanation.
