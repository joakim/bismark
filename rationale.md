# Rationale (early draft)

Return to the essence of Markdown (ATX) and try again.

1. Essentials + Extras (Simplicity + Extensibility)  
  Markdown reduced to its bare essentials. Then add generic syntax for extensions. All syntax should be as simple as possible, the syntax for extensions as flexible as possible.

2. Strike a balance between [WYSIWYM](https://en.wikipedia.org/wiki/WYSIWYM) and [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)  
  Styling and other elements should ideally be rendered _as you type_, all the while displaying the markup characters. This gives an immediate visual feedback while allowing for continuous editing. Opened inline styles must automatically terminate at the end of the containing element. Linebreaks should remain as linebreaks, unless escaped.

4. Easy to parse  
  Required by #2. A good quality in of itself.

5. Principle of uniformity  
   > if a chunk of text has a certain meaning, it will continue to have the same meaning when put into a container block (such as a list item or blockquote).

6. There should be one – and preferably only one – obvious way to do it  

7. [Typography matters](https://practicaltypography.com/)  
  Typographic best practices should be baked into the language.

8. Output agnostic  
  Don't assume plain-text email written by programmers as input and HTML as output. Don't even assume it's for the web, that's just limiting its utility.

9. Parsing should be guided by decisions made in [Djot](https://github.com/jgm/djot)  
   I trust that the decisions made by John MacFarlane are sound, so they should be used as inspiration whenever they apply to Bismark's syntax and rationale. Although I wasn't aware of Djot when designing Bismark, they are in many ways related.
