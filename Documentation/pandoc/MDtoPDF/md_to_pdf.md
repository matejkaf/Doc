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



# Math



[](https://haixing-hu.github.io/programming/2013/09/20/how-to-use-mathjax-in-jekyll-generated-github-pages/)

[](https://stackoverflow.com/questions/26275645/how-to-support-latex-in-github-pages)



# Bilder

Man kann Bilder mit normaler Markdown-Syntax einfügen und dann die Größe über die DPI steuern (in macOS Preview > Tools > Resize)

Mit Name wird als figure Umgebung gesetzt (Zentriert mit Caption)

```markdown
![bla](fig/image-20210910165854169.png)
```

Ohne 

```markdown
![](fig/image-20210910165854169.png)
```

Linksbündig (vermutlich ohne figure Umgebung)



Skalierung von Bildern in Pandoc:

```markdown
![bla](fig/image-20210910165854169.png){ width="250" }
```

Geht so leider nicht in Jekyll/github pages. Jekyll brauch einen zusätzlichen Doppelpunkt (attribute list für HTML)

```markdown
![bla](fig/image-20210910165854169.png){: width="250" }
```



# Offene Probleme

In Typora skalierte Bilder werden nicht angezeigt.

```md
<img src="fig/image-20210910165854169.png" alt="image-20210910165854169" style="zoom:33%;" />
```



[raw_html Extension](https://pandoc.org/MANUAL.html#raw-html)

[raw_attribute extension](https://pandoc.org/MANUAL.html#extension-raw_attribute)

Tests waren allerdings nicht erfolgreich!



# Shellscript

Siehe ~/Documents/Htl/lib/bin

```sh
#!/bin/bash

#
# md2pdf - convert Markdown to PDF
# usage: md2pdf.sh file.md
# writes file.pdf in working directory
#
FILE=$1
TEMPLATE=~/Documents/Htl/lib/pandoc_latex2.template
OUTFILE=${FILE%.md}.pdf # strip of ".md" at the end and append ".pdf"
pandoc $FILE --from=markdown --template=$TEMPLATE --pdf-engine=xelatex --listings -o $OUTFILE
echo $OUTFILE ready
```

