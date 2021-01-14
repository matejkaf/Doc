

[pandoc.org](http://pandoc.org/)

[pandoc markdown](http://pandoc.org/MANUAL.html#pandocs-markdown)

[daring fireball](https://daringfireball.net/projects/markdown/syntax)

Nach HTML

    pandoc JavaScript.md -f markdown -t html --self-contained --highlight-style tango -s --toc -c style.css -o JavaScript.html

Nach LaTeX

    pandoc JavaScript.md -f markdown -t latex --listings -o JavaScript.tex

# Eigenes LaTeX Template

    pandoc ... --template=../../../lib/pandoc_latex.template ...

Liegt im `lib` Verzeichnis.

`pandoc_latex.template`:
```latex
$if(graphics)$
% \usepackage{graphicx}
% -- We will generate all images so they have a width \maxwidth. This means
% -- that they will get their normal width if they fit onto the page, but
% -- are scaled down if they would overflow the margins.
\makeatletter
\def\maxwidth{\ifdim\Gin@nat@width>\linewidth\linewidth
\else\Gin@nat@width\fi}
\makeatother
\let\Oldincludegraphics\includegraphics
\renewcommand{\includegraphics}[1]{\Oldincludegraphics[width=\maxwidth]{#1}}
$endif$

$body$
```

# Inline Images

Für LaTeX werden Images als `figure` Umgebung engefügt (=floating) dies geht mit multicols nicht (keine float in multicols erlaubt).
Abhilfe einfügen als Inline Images, backslash gefolgt von einem Leerzeichen

```markdown
![](screenshot1.png)
\ 
```
# Symbole

- Checkmark: ✔
- Logik: ∧∨⊕¬→

# Filter: pandoc-latex-environment

    pandoc JavaScript.md -f markdown -t latex --filter pandoc-latex-environment --listings -o JavaScript.tex

[>Git<](https://github.com/chdemko/pandoc-latex-environment)

In the metadata block, specific set of classes can be defined to surround HTML div tag by a LaTeX environment.

```
---                           
latex-environment:
  test: [class1, class2]
---

<div class="class2 class1">content</div>
```
will be rendered in LaTeX format as

```tex
\begin{test}

content

\end{test}
```

Installation:
```
sudo pip install pandoc-latex-environment
```

Installieren von pip (Python Tool,  bei macOS nicht standardmäßig dabei):
[softwaretester.info](http://softwaretester.info/install-and-upgrade-pip-on-mac-os-x/)

```
# install command line tools
$ xcode-select --install

# if pip not installed
$ sudo easy_install pip

# show current pip version
$ pip --version

# upgrade pip
$ sudo pip install --upgrade pip
```

# NodeJS Filter

[Tutorial](http://pandoc.org/scripting.html)
[npm - pandoc-filter](https://www.npmjs.com/package/pandoc-filter)


## Installation

Globale Installation von npm Modulen scheitert an Rechte-Problemen.

Lösung:
- für npm: [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) (Option 2!)
- dann für node:  [stackoverflow: NPM global install “cannot find module”](http://stackoverflow.com/a/14515868)
- `.bash_profile` verwenden. Statt `.profile`

```bash
export PS1="$ "
export PATH=~/.npm-global/bin:$PATH
export NODE_PATH=~/.npm-global/lib/node_modules
```

```bash
npm install -g pandoc-filter
```


```javascript
#!/usr/bin/env node

// Pandoc filter to convert all text to uppercase

var pandoc = require('pandoc-filter');
var Str = pandoc.Str;

function action(type,value,format,meta) {
	if (type === 'Str') return Str(value.toUpperCase());
}

pandoc.stdio(action);
```

```bash
pandoc -f SOURCEFORMAT -t TARGETFORMAT --filter ./behead2.hs
```



# YAML Frontmatter

```
---
title: Titel des Dokuments
description: Um was es in diesem Dokument geht. Abstract.
tags: [ csharp, python, dotnet, c, java, array ]
---
```



In Python – [python-frontmatter](https://github.com/eyeseast/python-frontmatter)

```
​```bash
sudo python3 -m pip install python-frontmatter
​```
```

