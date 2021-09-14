Markdown nach PDF mit pandoc (mittel LaTeX)

```sh
\#pandoc 05_Anfang_ue02.md --pdf-engine=xelatex --listings -o 05_Anfang_ue02.pdf

pandoc 05_Anfang_ue02.md --template=pandoc_latex.template --pdf-engine=xelatex --listings -o 05_Anfang_ue02.pdf
# --listings für listings package
```

Template File ist wie ein .tex include Files in das Variablen eingebunden werdne können.

YAML frontmatter aus dem Markdown File im Template verwende:

```latex
$if(title)$
\title{$title$}
$endif$

$if(subtitle)$
\subtitle{$subtitle$}
$endif$
```

Markdown:

```markdown
---
title: Programmieren Anfang
subtitle: Übungen
tags: [assignment,C_1]
---

```



# Offene Probleme

In Typora skalierte Bilder werden nicht angezeigt.



```md
<img src="fig/image-20210910165854169.png" alt="image-20210910165854169" style="zoom:33%;" />
```



[raw_html Extension](https://pandoc.org/MANUAL.html#raw-html)

[raw_attribute extension](https://pandoc.org/MANUAL.html#extension-raw_attribute)

Tests waren nicht erfolgreich!

