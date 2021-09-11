---
title: LaTeX aus Markdown Quellen
---

[LaTeX pakage markdown](https://mirror.kumi.systems/ctan/macros/generic/markdown/markdown.html)

```latex
\usepackage{markdown}

\def\markdownOptionHeaderAttributes{true}

%\def\markdownRendererHeadingFour{}
```

In TeXShop

- Preferences... >> Engine >> pdfTeX >> Latex: `--shell-escape` als Option ergänzen

Keine Leerzeichen im Dateinamen verwenden!

```latex
\markdownInput{q0002.md}
```

Versuche haben ergeben, dass mehrzeilige code fences nicht ordentlich funktionieren. Keine Lösung gefunden. Daher eher unbrauchbar!

