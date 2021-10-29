---
title: LaTeX
subtitle: bash scripting
tags: [lecture,3AHITS]
---

* TOC
{:toc}

# LaTeX

LaTeX [[ˈlaːtɛç](https://de.wikipedia.org/wiki/Liste_der_IPA-Zeichen)] ist ein System zum erstellen von PDF Dokumenten. Im Gegensatz zu Word ist es nicht WYSIWYG sondern der Autor schreibt eine Textdatei mit Inhalt und Formatierungsbefehlen.

Das sieht z.B. so aus:

```latex
Da ist ein Absatz

\section{Überschrift} % creates a section

Ich beginne heute damit \textbf{LaTeX} zu lernen.
```

LaTeX (bzw. TeX auf das LaTeX aufbaut) ist ein Programm das aus dem `.tex` File ein **PDF** Dokument erzeugt. Die Stärken von LaTeX liegen im sehr **schönen Layout**, der guten Unterstützung von **Formeln** und der Unterstützung für **große Dokumente** (Diplomarbeiten). 

Da .tex Files reinen Text enthalten können diese auch sehr einfach automatisiert erstellt werden und sind daher eine einfache Möglichkeit PDF Dokumente zu generieren.



# Overleaf

[Overleaf](https://www.overleaf.com) ist ein Online LaTeX Editor.

- Erstelle einen Account
- Erstelle ein neues "Example Project", ändere Name und Titel in der Überschrift.

- Erstelle ein neues "Blank Project" und experimentiere:

```latex
% This is a comment
\documentclass{article}

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



# Dokumenten–Einstellungen

Verwende

```latex
\documentclass[12pt]{scrartcl}
```

Umstellen auf Deutsch (z.B. für `\today`)

```latex
\usepackage[german]{babel}
```

Inhaltsverzeichnis einfügen:

```latex
\tableofcontents
```

Absatzeinrückung und Absatzabstände

```latex
\setlength{\parindent}{0ex}
\setlength{\parskip}{1em}
```

Seitenränder

```latex
\usepackage{anysize}
\marginsize{2.5cm}{1.5cm}{1cm}{1cm}  % {left}{right}{top}{bottom}
```

Kopf- und Fußzeilen

```latex
\usepackage{scrlayer-scrpage} % Anpassen von Kopf-/Fußzeile
\pagestyle{scrheadings} % Vordefinierter Stil (Kopf-/Fußzeile jeweils 3-teilig)
\lohead[]{\color[gray]{0.5}Links}
\cohead[]{\color[gray]{0.5}Mitte}
\rohead[]{\color[gray]{0.5}Rechts}
\cofoot[]{\ifnum\value{page}>1 \color[gray]{0.5}\thepage\fi}

% lcr: left center right
% o: odd pages, bei einseitigen Dokumenten gibt es nur odd pages

% Beliebige Farben
% \lohead[]{\color[rgb]{0.9,0.1,0}$title$}
```



[Learn LaTeX in 30 minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)

# Listings

Im Vorspan

```latex
\usepackage{color}

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
}
```

Im Text als Block

```latex
\begin[language=Java]{lstlisting}
// Das ist ein Kommentar
if(x==3) {
	System.out.println("Hello World");
}
\end{lstlisting}
```

Und Inline

```latex
Code \lstinline{int x=42;} im Text.
```



# Bilder

```latex
\usepackage{graphicx}
```



```latex
\subsection{How to include Figures}

First you have to upload the image file from your computer using the upload link in the file-tree menu. Then use the includegraphics command to include it in your document. Use the figure environment and the caption command to add a number and a caption to your figure. See the code for Figure \ref{fig:frog} in this section for an example.

Note that your figure will automatically be placed in the most appropriate place for it, given the surrounding text and taking into account other figures or tables that may be close by. You can find out more about adding images to your documents in this help article on \href{https://www.overleaf.com/learn/how-to/Including_images_on_Overleaf}{including images on Overleaf}.

\begin{figure}
\centering
\includegraphics[width=0.3\textwidth]{frog.jpg}
\caption{\label{fig:frog}This frog was uploaded via the file-tree menu.}
\end{figure}
```

