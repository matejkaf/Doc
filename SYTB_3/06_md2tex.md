---
title: pandoc – Markdown nach LaTex und PDF konvertieren
subtitle: bash scripting
---

* TOC
{:toc}
**pandoc** ist ein CLI Tool zum konvertieren von Dokument Formaten. Unser Ziel ist hier von **Markdown** nach **PDF** konvertieren zu können und Alternativ Markdown zum Erstellen von Arbeitsberichten (statt Word) verwenden zu können.



# REPL Installation von pandoc

pandoc Install von Tarball – [Dokumentation hier](https://pandoc.org/installing.html#linux)

[Latest Release auf github](https://github.com/jgm/pandoc/releases/latest) (`https://github.com/jgm/pandoc/releases/download/2.14.2/pandoc-2.14.2-linux-amd64.tar.gz`)

```sh
wget https://github.com/jgm/pandoc/releases/download/2.14.2/pandoc-2.14.2-linux-amd64.tar.gz
TGZ=pandoc-2.14.2-linux-amd64.tar.gz
# Installieren in ein unsichtbares Verzeichnis
DEST=$HOME/$REPL_SLUG/.pandoc
mkdir $DEST
tar xvzf $TGZ --strip-components 1 -C $DEST
rm $TGZ
PATH=$DEST/bin:$PATH
pandoc --version
```

Pfad neu setzen (nur notwendig wenn REPL neu gestartet wird)

```sh
PATH=$HOME/$REPL_SLUG/.pandoc/bin:$PATH
```

Funktions-Test (`test.md` siehe Anhang):

```sh
$ pandoc test.md -o test.tex
```



# REPL Installation von LaTeX

pandoc verwendet LaTeX um PDFs zu generieren, daher muss das installiert werden. TinyTeX bietet sich dafür an, da dies mit besonders wenig Speicher auskommt (eine vollständige LaTeX Installation kann mehrere GB groß sein!).

[Dokumentation der Installation ](https://tex.stackexchange.com/questions/397174/minimal-texlive-installation)

1 – Voll portable TinyTeX Version laden die ohne root Rechte verwendet werden kann:

```sh
wget -qO- \
  "https://raw.githubusercontent.com/yihui/tinytex/main/tools/install-unx.sh" | \
  sh -s - --admin --no-path
```

Installiert ins Verzeichnis `~/.TinyTeX`. Dieses ins REPL Datenverzeichnis (`$REPL_SLUG`) bewegen (sonst wird es wieder gelöscht):

```sh
mv ~/.TinyTeX $HOME/$REPL_SLUG
```

2 - Setze Pfad Variable (alternativ zu symlinks)

```sh
$ PATH="$HOME/$REPL_SLUG/.TinyTeX/bin/x86_64-linux:$PATH"
```

3 - package tree intialisieren

```sh
$ tlmgr init-usertree
```

Wenn eine Fehlermeldung kommt wurde die REPL Größenbeschränkung durch temporäre Files überschritten. In diesem Fall das REPL neu starten.

```sh
$ tlmgr init-usertree
config.guess: cannot create a temporary directory in /tmp
/home/runner/md2latex/.TinyTeX/bin/x86_64-linux/tlmgr: could not run /home/runner/md2latex/.TinyTeX/tlpkg/installer/config.guess, cannot proceed, sorry at /home/runner/md2latex/.TinyTeX/tlpkg/TeXLive/TLUtils.pm line 316.
```

Test (`mini.tex` siehe Anhang)

```sh
$ pdflatex mini.tex
```



# pandoc nach PDF

Mit dem installierten LaTeX kann pandoc nun direkt PDF Dokumente erzeugen.

```sh
$ pandoc test.md -o test.pdf
```



# Templates

Mit einem LaTeX Template kann das Aussehen des generierten PDFs bestimmt werden. Siehe Anhang für ein Template (`latex.template`) das für den Arbeitsbericht verwendet werden kann.

```sh
$ pandoc test.md --template=pandoc_latex.template --listings -o test.pdf
```

Dies führt noch zu einer Fehlermeldung da einige notwendige LaTeX Packages noch nicht installiert sind:



# LaTeX Packages

Im Template werden LaTeX packages verwendet die in TinyTeX erst installiert werden müssen.

```
! LaTeX Error: File `scrartcl.cls' not found.
```

Installation der Packages:

```sh
$ tlmgr --usermode install koma-script
$ tlmgr --usermode install anysize
$ tlmgr --usermode install listings
$ tlmgr --usermode install caption
$ tlmgr --usermode install bookmark
```

Alles zusammen installieren:

```sh
$ tlmgr --usermode install koma-script anysize listings caption bookmark
```



# pandoc mit Template

Ein Test:

```sh
$ pandoc test.md --template=pandoc_latex.template --listings -o test.pdf
```

Fertiges Skript `md2pdf.sh`

```sh
FILE=$1
# strip of ".md" at the end and append ".pdf"
OUTFILE=${FILE%.md}.pdf
echo "building $OUTFILE"
pandoc $FILE --from=markdown --template=pandoc_latex.template --listings -o $OUTFILE
echo "$OUTFILE ready"
```

Aufruf:

```sh
$ ./md2pdf.sh arbeitsbericht_01.md
```





# Anhang

## Pfade

Nach einem Neustart müssen die Pfade für LaTeX und pandoc neu gesetzt werden:

```sh
$ PATH="$HOME/$REPL_SLUG/.TinyTeX/bin/x86_64-linux:$HOME/$REPL_SLUG/.pandoc/bin:$PATH"
```



## mini.tex

Einfaches TeX Dokument zum testen:

```latex
% This is a simple sample document.  For more complicated documents take a look in the excersice tab. Note that everything that comes after a % symbol is treated as comment and ignored when the code is compiled.

\documentclass{article}
 % \documentclass{} is the first command in any LaTeX code.  It is used to define what kind of document you are creating such as an article or a book, and begins the document preamble

\usepackage{amsmath} % \usepackage is a command that allows you to add functionality to your LaTeX code

\title{Simple Sample} % Sets article title
\author{My Name} % Sets authors name
\date{\today} % Sets date for date compiled

% The preamble ends with the command \begin{document}
\begin{document} % All begin commands must be paired with an end command somewhere
    \maketitle % creates title using infromation in preamble (title, author, date)
    
    \section{Hello World!} % creates a section
    
    \textbf{Hello World!} Today I am learning \LaTeX. %notice how the command will end at the first non-alphabet charecter such as the . after \LaTeX
     \LaTeX{} is a great program for writing math. I can write in line math such as $a^2+b^2=c^2$ %$ tells LaTexX to compile as math
     . I can also give equations their own space: 
    \begin{equation} % Creates an equation environment and is compiled as math
    \gamma^2+\theta^2=\omega^2
    \end{equation}
    If I do not leave any blank lines \LaTeX{} will continue  this text without making it into a new paragraph.  Notice how there was no indentation in the text after equation (1).  
    Also notice how even though I hit enter after that sentence and here $\downarrow$
     \LaTeX{} formats the sentence without any break.  Also   look  how      it   doesn't     matter          how    many  spaces     I put     between       my    words.
    
    For a new paragraph I can leave a blank space in my code. 

\end{document} % This is the end of the document
```



## pandoc_latex.template

Template für Arbeitsbericht.

```latex
\documentclass[12pt]{scrartcl}  

\usepackage{hyperref} % für Links
\usepackage{amsmath}  % Mathematische Formeln
\usepackage{color}

\setlength{\parindent}{0ex}
\setlength{\parskip}{0ex}

%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
% Seitenränder und Textgröße
\usepackage{anysize} % mehr Text auf eine Seite
\marginsize{2cm}{1cm}{0.5cm}{1cm}  % {left}{right}{top}{bottom}
%\addtolength{\headsep}{-15pt}
%\addtolength{\textheight}{45pt}

%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
% Kopf- und Fußzeile (KOMA Script)
\usepackage{scrlayer-scrpage} % Anpassen von Kopf-/Fußzeile
\pagestyle{scrheadings} % Vordefinierter Stil (Kopf-/Fußzeile jeweils 3-teilig)

% Kopfzeile
% title links, ..., subtitle rechts
\lohead[]{\color[gray]{0.5}$title$}
\cohead[]{\color[gray]{0.5}3AHITS}
\rohead[]{\color[gray]{0.5}$subtitle$}

% Fußzeile (Seitennummer)
\cofoot[]{\ifnum\value{page}>1 \color[gray]{0.5}\thepage\fi}

% lcr: left center right
% o: odd pages, bei einseitigen Dokumenten gibt es nur odd pages

% Beliebige Farben in der Kopfzeile
% \lohead[]{\color[rgb]{1,0,0}$title$}

%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
\usepackage{listings}
\lstset{
  frame=single, 
  tabsize=4,
  breaklines=true,
  backgroundcolor=\color[gray]{0.97},
  basicstyle=\ttfamily\footnotesize,
  keywordstyle=\color[rgb]{0,0.25,0.95},
  commentstyle=\color[gray]{0.6},
  columns=fullflexible,		% damit keine extra Leerzeichen bei copy/paste
  % not UTF8 support in listings
  literate={Ö}{{\"O}}1 {Ä}{{\"A}}1 {Ü}{{\"U}}1 {ß}{{\ss}}2 {ü}{{\"u}}1 {ä}{{\"a}}1 {ö}{{\"o}}1, 
}


%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
% Bilder
%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

% non floating images
\usepackage{float}
\floatplacement{figure}{H}

\usepackage{graphicx}
% -- We will generate all images so they have a width \maxwidth. This means
% -- that they will get their normal width if they fit onto the page, but
% -- are scaled down if they would overflow the margins.
\makeatletter
\def\ScaleWidthIfNeeded{ %
 \ifdim\Gin@nat@width>0.7\linewidth
    0.7\linewidth
  \else
    \Gin@nat@width
  \fi
}
\def\ScaleHeightIfNeeded{ %
  \ifdim\Gin@nat@height>0.7\textheight
    0.7\textheight
  \else
    \Gin@nat@width
  \fi
}
\makeatother
\setkeys{Gin}{width=\ScaleWidthIfNeeded,height=\ScaleHeightIfNeeded,keepaspectratio}%

\usepackage[labelformat=empty]{caption}

%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
% pandoc braucht \tightlist
%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

\providecommand{\tightlist}{\setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}

%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
% pandoc verwendet ein passthrough makro rund um inline code, siehe
% https://github.com/laboon/ebook/issues/139#issuecomment-408696480
%~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
\newcommand{\passthrough}[1]{#1}


%--------------------------------------------------------------------------------
% Titelzeilen am Beginn des Dokuments
% https://golatex.de//wiki/Titelseite_mit_KOMA-Script
%--------------------------------------------------------------------------------

$if(title)$
\title{$title$}
$endif$

$if(subtitle)$
\subtitle{$subtitle$}
$endif$

$if(date)$
\date{$date$}
$else$
\date{} % blank the date
$endif$

$if(author)$
\author{$author$}
$endif$

%--------------------------------------------------------------------------------
\begin{document}

$if(maketitle)$
  \maketitle
$endif$

$body$

\end{document}

```

## test.md

````markdown
---
title: Installation von Kali Linux
subtitle: Arbeitsbericht
date: 11.11.2021
author: Franz MATEJKA
maketitle: false
---

Das ist nur ein Test

```sh
$ grep Test
```

- eins
- zwei
- drei

Und bla bla

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

```java
//
// Klassen und Objekte
//

class Schule { // Name der Klasse (große Anfangsbuchstabe)
  int schueler; // Anzahl der Schüler
  int lehrer;   // Anzahl der lehrer
  String name;  // Name der Schule

  // Methoden
  public int anzahl() {
    // Eine Method kann auf die Instanzvariablen direkt zugreifen
    return schueler+lehrer;
  }

  // Konstruktor
  //   eine Methode die beim instanzieren (d.h. new Schule()) automatisch aufgrufen wird

  // wenn kein Konstruktor angegeben dann generiert Java automatische einen Schule() "Default" Konstruktor
  public Schule(int s, int l, String n) {
    System.out.println("Konstruktor");
    schueler = s;
    lehrer = l;
    name = n;
  }


}
// Klasse ist eine Beschreibung/Bauplan
// hat daher noch keinen Speicher 

class Main {
  public static void main(String[] args) {
    // Klasse (Bauplan) --> new --> Objekte (konkret im Speicher)
    Schule htl = new Schule(995, 100, "HTL Braunau");
    // new Schule() erzeugt nach dem Bauplan "Schule" ein Objekt im Speicher.
    //    Objekt = Instanz der Klasse
    //    Objekt angelegt bzw. die Klasse instanziert
    // htl ist eine sogenannte Referenzvariable 
  /*
    htl.schueler = 995;
    htl.lehrer = 100;
    htl.name = "HTL Braunau";
    */
    System.out.println("Die "+htl.name+" hat "+htl.schueler+" Schüler und "+htl.lehrer+" Lehrer.");

    // Variablen (schuler,lehrer,name) sind erst nach dem Instanzieren vorhanden, heißen daher
    // Instanzvariablen

    Schule hlw = new Schule(391,27,"Knödelakademie");
/*    hlw.schueler = 391;
    hlw.lehrer = 27;
    hlw.name = "Knödelakademie";*/
    System.out.println("Die "+hlw.name+" hat "+hlw.schueler+" Schüler und "+hlw.lehrer+" Lehrer.");


    // Aufruf von Methoden, es ist die Referenzvariable vorzusetzen
    System.out.println( htl.anzahl() );
    System.out.println( hlw.anzahl() );

  }
}
```

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
````

