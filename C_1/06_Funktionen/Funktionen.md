---
title: Funktionen
type: lecture
cmds: ['md_html.bash']
description: Einführung in Funktionen in C
tags: [ c, funktionen ]
---

# Motivation


Probleme bei längeren Programmen:


- Übersichtlichkeit geht verloren.
- Gleiche Programmteile kommen mehrfach vor.


Verbesserung durch Funktionen.



# Allgemein

Beispiel: Es soll folgendes ausgegeben werden

```
------------------------
Hallo Welt
------------------------
```

25 Bindestriche in einer Zeile. Einmal vor und einmal nach dem Text.

```c
for(int i=0; i<25; i++)
	printf("-");
printf("\n");
printf("Hallo Welt\n");
for(int i=0; i<25; i++)
	printf("-");
printf("\n");
```

Hier kommen einige Programmzeilen – mit der gleichen Aufgabe – doppelt vor.


Wiederholungen von gleichartigem Quelltext sollten beim Programmieren unbedingt vermieden werden (Prinzip: **Don't repeat yourself**)




## Funktionen


Eine Funktion macht einen **Teil eines Programms** unter einem **Namen** aufrufbar.


Beispiel: Funktion mit Namen `linie`:

```c
void linie()
{
	for(int i=0; i<25; i++)
		printf("-");
	printf("\n");
}

void main()
{
    linie();
    printf("Hallo Welt\n");
    linie();
    getch();
}
```


Vorteile:

- Bessere Übersicht
- Bessere Lesbarkeit (wenn Funktionsnamen sinnvoll)
- Mehrfach verwendbar
- Änderungen einfacher (z.B. andere Linienlänge)

`i` ist eine lokale Variable von `func`.


Für jede Funktion: Eigener Speicherbereich für Variablen (=Lokal)

- Aufruf der Funktion $\rightarrow$ anlegen
- Verlassen der Funktion $\rightarrow$ freigeben



# Funktionen mit Parameter


Mit Parametern werden beim Aufruf **Werte** an Funktionen **übergeben**.

Beispiel:  `linie` mit Anzahl an Zeichen.


```c
void linie(int anzahl)
{
    int i=0;
    while(i<anzahl)
    {
        printf("-");
        i++;
    }
}
```



```c
void main()
{
    linie(7); // Aufruf der Funktion
    printf("\nHallo\n");
    linie(5); // Aufruf der Funktion

    getch();
}
```



Parameter:

- besondere lokale Variablen
- Wert wird bei Aufruf gesetzt
- "Platzhalter" für konkreten Wert (=Argument)




## Parameter

Bei jedem Aufruf der Funktion wird ein konkreter Wert (=Argument) als Wert der Parameter-Variable festgelegt. Dies kann auf unterschiedliche Arten geschehen:

**Konstante**:


```c
linie(5);

```

**Variable**:

```c
int n = 4;
linie(n);
```

**Berechnung**:

```c
int x = 7;
linie(3*x-2);
```




## Mehrere Parameter

Durch Kommas getrennt.
```c
void fname(int a, int p, double wert)
{
    ...
}

void main()
{
    fname(2, 3, 3.14);
    getch();
}
```



# Lokale Variable – Level 2


Jede Funktion hat einen **eigenen Speicherbereich** für ihre lokale Variablen. Dieser Speicher wird bei **Aufruf** der Funktion neu angelegt und beim **Verlassen** der Funktion wieder freigegeben. Die Variablenwerte gehen daher beim Verlassen der Funktion verloren.



## Gleiche Namen bei lokalen Variablen

Lokale Variablen in verschiedenen Funktionen können den gleichen Namen haben, sind aber trotzdem **unterschiedliche** Speicherplätze. 

```c
void one()
{
    int n=5;
    // n - in "one"
} 
```



```c
void two()
{
    int n=7;
    // n - in "two"
} 
```


Das gleiche gilt für Parameter, diese verhalten sich wie lokale Variablen – nur erhalten Parameter durch den Aufruf bereits einen Wert zugewiesen.















# Funktionen mit Rückgabewert







## Rückgabewert
Um einen Wert zurück ans aufrufende Programm zu geben.{

**Beispiel:**
Berechnung Rechteckumfang. 



```c
int umfang(int a, int b)
{
    int u;
    
    u = 2*(a + b);
    (*@\lstcoo{l-ra}@*)return u(*@\lstcoo{l-re}@*);
}
```



```c
void main()
{
    int umf;
    umf = (*@\lstcoo{l-ua}@*)umfang(10,20)(*@\lstcoo{l-ue}@*);
    printf("Umfang=%d",umf);
}
```


[
	overlay,
   lstrect/.style={draw,red,thick,rounded corners=1.5pt},
   lstcmntarr/.style={->,red,thick},
]

\newcommand{\drect}[2]{\path[lstrect] ($(#1)+(-1pt,-5pt)$) rectangle ($(#2)+(1pt,7pt)$);}

\only<3>{\path[lstcmntarr] ($(l-re)+(-0.5,-0.2)$) edge [out=-110, in=90] ($(l-ue)+(-1,0.3)$);}
\only<3>{\drect{l-ua}{l-ue}}
\only<2->{\drect{l-ra}{l-re}}







- Bei `return` wird die Funktion sofort verlassen.
- Der Wert nach `return` wird zurückgegeben (an die Stelle des Funktionsaufrufs). 


Ablauf von `umf = umfang(10, 20);`


- 
Aufruf der Funktion `umfang()`.
-
Die Parameter erhalten die Werte $a=10$ und $b=20$. 
-
Berechnen von $u = 2*(a + b)$, Ergebnis: $u=60$. 
-
Mit `return u` wird der Wert von `u`  (nämlich 60) zurückgegeben.
-
An der Stelle des Aufrufs wird mit dem zurückgegebenen Wert (60) weitergearbeitet.





## Weitere Beispiele

```c
// (1)
int u1;
u1 = umfang(10, 20);

// (2)
int summe;
summe = umfang(10, 20) + umfang(8, 7);

// (3)
int u2;
int x=3;
int y=9;
u2 = umfang(x, y);

// (4)
printf("%d\n", umfang(11, 22) );
```









## Hinweise


Der Aufruf einer Funktion mit Rückgabewert steht stellvertretend für eine Variable des gleichen Typs.
Man denkt sich den **Funktionsaufruf** durch den zurückgegebenen Wert **ersetzt**.



`return` kann an beliebiger Stelle und mehrfach in der Funktion vorkommen.



Auch eine `void` Funktion kann mit return verlassen werden.

















# Globale Variable







## Globale Variablen
{Variablen können außerhalb einer Funktion – am Beginn der Datei --- definiert werden, diese sind dann **globale Variablen**.}
{Außerhalb von Funktionen definiert.}
Alle Funktionen teilen sich diese Variablen.

**Beispiel:**


```c
int g_wert = 2;

void mul(int x);
void sum(int x);

void main()
{
    sum(4);
    mul(2);
    printf("%d\n", g_wert);
}
```



```c
void sum(int x)
{
    g_wert = g_wert + x;
}

void mul(int x)
{
    g_wert = g_wert * x;
}
```





`g_wert` ist eine **globale Variable**.



## Empfehlungen


Empfehlung 1:
Sparsam verwenden, es geht schnell der Überblick verloren.



Empfehlung 2:
Jede globale Variable mit \verb+g_+ beginnen{ (zur Unterscheidung mit lokalen Variablen)}.










