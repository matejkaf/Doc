---
title: Bitmanipulation
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>


## Zahlendarstellung



### Bit

Die kleinste Informationseinheit mit der ein Computer arbeitet nennt man ein 
Bit (=binary digit): Wert 0 oder 1 (Strom da oder nicht da).

Mit einem Bit lassen sich die Zahlen 0 und 1 darstellen. Kommt ein zweites Bit dazu so sind die Kombinationen 00, 01, 10 und 11 möglich, d.h. es sind 4 Zahlen darstellbar. 
Bei 3 Bits sind es 8 Möglichkeiten. 

Mit jedem weiteren Bit verdoppelt sich die Anzahl der darstellbaren Zahlen. 
Allgemein ergeben $$n$$ Bits $$2^n$$ (2 hoch n) darstellbare Zahlen.

| Bit-Anzahl | Möglichkeiten  |
| ---------- | ---- |
| 1          | $$2^1=2$$ |
| 2          | $$2^2=4$$ |
| 3 | $$2^3=8$$ |
| 4 | $$2^4=16$$ |
| 5 | $$2^5=32$$ |
| 6 | $$2^6=64$$ |
| 7 | $$2^7=128$$ |
| 8 | $$2^8=256$$ |



### Byte

8 Bits werden zu einem Byte zusammengefasst. Mit einem Byte können $$2^8={256}$$ Zahlen dargestellt werden. Da auch die 0 enthalten ist, ergibt sich ein Wertebereich von $$0\ldots 255$$.
Um größere Zahlen darzustellen werden häufig 2, 4 oder 8 Byte zusammengefasst.

*Bit-Anzahl* & *Wertebereich* & *Wertebereich*\\

8 & 0\ldots $$2^{8}$$ & 0\ldots $255$\\
16 & 0\ldots $$2^{16}$$ & 0\ldots $65\,535$\\
32 & 0\ldots $$2^{32}$$ & 0\ldots 4\,294\,967\,296\\
64 & 0\ldots $$2^{64}$$ & 0\ldots 18\,446\,744\,073\,709\,551\,616\\

Größenordnungsvergleich (Flächen)

*Wert* & *Vergleich*

 $$2^{8}$$  m$$^2$$ & Vier Klassenzimmer\\
 $$2^{16}$$ m$$^2$$ & 9 Fußballfelder\\
 $$2^{32}$$ m$$^2$$ & Etwa ein Drittel der Fläche Oberösterreichs\\
 $$2^{64}$$ m$$^2$$ & Ca. das 3-fache der Sonnenoberfläche\\


## Größenangaben



- 1 kB (Kilo-Byte) = $2^{10}$ Bytes, 1024 Bytes. (ca. 10 Zeilen Text)
- 1 MB (Mega-Byte) = $2^{20}$ Bytes, 1024 kB. (MP3 Datei ca. 5-10~MB)
- 1 GB (Giga-Byte) = $2^{30}$ Bytes, 1024 MB. (aktueller Hauptspeicher, ca. 4~GB)
- 1 TB (Tera-Byte) = $2^{40}$ Bytes, 1024 GB. (Aktuelle Festplatte, 1-2~TB)

- 1 PB (Peta-Byte) = $2^{50}$ Bytes, 1024 TB. (50~PB: die Summe aller geschriebenen Texte, in allen Sprachen, seit Beginn der Geschichtsschreibung)

- 1 EB (Exa-Byte) = $2^{60}$ Bytes, 1024 PB. (5~EB: Alle Wörter die je von Menschen gesprochen wurden)

- 1 ZB (Zetta-Byte) = $2^{70}$ Bytes, 1024 EB. (2,7~ZB: Gesamtanzahl der weltweit gespeicherten Daten in 2012)

- 1 YB (Yotta-Byte) = $2^{80}$ Bytes, 1024 ZB.







## Binärzahlen

Wie werden Zahlen im Computer mit 0en und 1en gespeichert?
Wir rechnen normalerweise im Dezimalzahlen. 
Jede Stelle kann 10 verschiedenen Zustände annehmen, die Zahlenbasis ist 10.

Beispiel:
327 = $$3\cdot 10^{2} + 2\cdot 10^{1} + 7\cdot 10^{0}$$

$$10^{0}$$, $$10^{1}$$, $$10^{2} \ldots$$, Stellenwertigkeit

Grund für Dezimalsystem: 10 Finger. Computer kennen nur 0 und 1 – zwei Zustände daher Zahlenbasis 2 (Binär bzw. Dual).

Beispiel: 1 Byte Zahl
$$10110101_{2} = 1\cdot 2^7+0\cdot 2^6+1\cdot 2^5+1\cdot 2^4+0\cdot 2^3+1\cdot 2^2+0\cdot 2^1+1\cdot 2^0$ = 181_{10}$$

Kleinste Zahl: $$00000000_{2}=0_{10}$$
Größte Zahl: $11111111_{2}$ = $255_{10}$ = $2^{8}-1$


Schreibe die Zahlen 0–15 im Binärsystem.





## Umwandeln von Dezimal nach Binär

"Koch-Rezept": (Algorithmus)

- Wiederholt durch Zahlenbasis dividieren (Ganzzahlig mit Rest) bis Ergebnis 0.
- Rest in umgekehrter Reihenfolge anschreiben.


Beispiel, Dezimal nach Binär:

$$
\begin{aligned}\underset{Rest:}{}\underset{1}{181:2}&=\underset{0}{90:2}=\underset{1}{45:2}=\underset{0}{22:2}=\underset{1}{11:2}=\underset{1}{5:2}=\underset{0}{2:2}=\underset{1}{1:2}=0 \\
\Rightarrow 181_{10}&=10110101_2\end{aligned}
$$

Wandle die folgenden Dezimalzahlen nach Binär:


- $195_{10}$
- $89_{10}$
- $127_{10}$
- $128_{10}$
- $235_{10}$
- $255_{10}$


$195_{10}$ = $11000011_{2}$, 
$89_{10}$ = $01011001_{2}$, 
$127_{10}$ = $01111111_{2}$, 
$128_{10}$ = $10000000_{2}$, 
$235_{10}$ = $11101011_{2}$, 
$255_{10}$ = $11111111_{2}$.




## Hexadezimalsystem

Das Hexadezimalsystem ist praktisch bei der Darstellung von Speicherinhalten im Computer. Die Zahlenbasis ist 16, daher werden 16 Ziffern benötigt. 0 bis 9 ist wie im Dezimalsystem, darüber werden die Buchstaben A bis F verwendet.

{

*Wert* & *Hexadezimale Ziffer*\\

0 & 0\\
\ldots & \ldots\\
9 & 9\\
10 & A\\
11 & B\\
12 & C\\
13 & D\\
14 & E\\
15 & F\\

\\[1em]

Beispiel, Hexadezimal $\rightarrow$ Dezimal:

\mbox{8E5}_{16} = 8\cdot 16^2 + 14\cdot 16^1 + 5\cdot 16^0 = 2277_{10}




Beispiel, Dezimal $\rightarrow$ Hexadezimal:


\underset{5}{2277:16}&=\underset{14 (E)}{142:16}=\underset{8}{8:16}=0 \hspace{13em} \\
&\Rightarrow 2277_{10}=\mbox{8E5}_{16}




Zwischen dem Hex- und dem Binärsystem gibt es einen einfachen Zusammenhang, da eine Gruppe von 4 Bits immer einer einzigen Hex-Ziffer (und umgekehrt) entspricht.

Hex $\rightarrow$ Bin:\\
Hex Zahl nach Binär wandeln und Ergebnisse hintereinander anschreiben.


\mbox{8E5}_{16}=
\underset{1000}{8} \;\; \underset{1110}{\mbox{E}} \;\; \underset{1110}{\mbox{5}} =
1000\,1110\,1110_2


Bin$\rightarrow$ Hex:\\
Von rechts beginnend 4 Bit Gruppen zusammenfassen. Dezimalen Wert dieser 4 Bits errechnen (0--15), entsprechende Hex Ziffer (0--9, A--F) anschreiben.

Beispiel:


1011\,0101_2 =
\underset{11_{10}=B_{16}}{1011} \;\; \underset{5_{10}=5_{16}}{0101} =
\mbox{B5}_{16}



Die Umwandlung kann mit Hilfe einer Tabelle vereinfacht werden:

{

*Bin* & *Hex* & *Bin* & *Hex*\\

0000 & 0 & 1000 & 8\\
0001 & 1 & 1001 & 9\\
0010 & 2 & 1010 & A\\
0011 & 3 & 1011 & B\\
0100 & 4 & 1100 & C\\
0101 & 5 & 1101 & D\\
0110 & 6 & 1110 & E\\
0111 & 7 & 1111 & F\\

\\[1em]


Bedeutung hat das Hexadezimalsystem für die platzsparende Darstellung von Speicherinhalten.



## Negative Zahlen

(Nicht Prüfungsstoff)

Höchstwertiges Bit ist das Vorzeichenbit.
Bei einem Byte hat dieses Bit den Stellenwert $-2^7=-128$.
Alle anderen Bits haben positives Vorzeichen.


Beispiel:
$10110101_{2} = -2^7+2^5+2^4+2^2+2^0 = -128+32+16+4+1 = -75_{10}$

Beachte: In der Dualzahl wird keine Information gespeichert ob ein Vorzeichen vorhanden ist. 

Wertebereiche:\\
1 Byte vorzeichenbehaftet: $-128, \ldots,0, \ldots,+127$\\
2 Byte vorzeichenbehaftet: $-32768, \ldots,0, \ldots,+32767$\\
4 Byte vorzeichenbehaftet: $-2^{31}, \ldots,0, \ldots,+2^{31}-1$

Positiver Bereich ist kleiner weil die Null dazuzählt.



Überlege wie negative Zahlen von Dezimal nach Binär gewandelt werden können.

\pause

\pause%
Der Wert des höchstwertigsten Bits wird negativ genommen. Z.B.\ bei einer 8 Bit Zahl ist dies $-127$. 
Wenn die negative Zahl $x$ dargestellt werden soll so sucht man ein $y$ so dass $-127+y=x$ (Dieses $y$ muss eine positive Zahl sein).
Das gefundene $y$ wandelt man nach Binär und an das Ergebnis hängt man noch ein gesetztes höchstwertiges Bit (Vorzeichenbit) an.





## Rechnen mit Dualzahlen

(Nicht Prüfungsstoff)

Die Grundrechnungsarten ähnlich wie mit Dezimalzahlen.

**Addieren:**\\
Zahlen übereinanderschreiben. An der rechten Seite beginnen. Wird 1 und 1 zusammengezählt so ist das Ergebnis 0 (nicht 2!) und man nimmt einen Übertrag von 1 mit. Wird 1 und 1 zusammengezählt und der Übertrag ist auch 1 so ist das Ergebnis 1 und der Übertrag auch 1.

Beispiel:

```
  1 0 1 1 0 1 0 1
+ 0 0 1 1 1 1 1 0
Ü   1 1 1 1      
-----------------
  1 1 1 1 0 1 1 1
```

Achtung auf Überschreiten der Wertebereiche:

```
    1 0 1 1 0 1 0 1
+   1 0 1 1 1 1 1 0
Ü 1   1 1 1 1      
-------------------
    1 1 1 1 0 1 1 1
```


Das Ergebnis kann in einem Byte nicht mehr dargestellt werden. C erkennt diesen Fehler nicht, der Übertrag wird verworfen!

**Subtraktion:** 2te Zahl in negative Zahl wandeln und dann addieren.

Beispiel:
120-2

2 in negative Zahl wandeln: $-2=-128+x \Rightarrow x=+126$

$126_{10}=01111110_2$ daher $-2=11111110_2$

$120_{10}=01111000_2$

```
    0 1 1 1 1 0 0 0
+   1 1 1 1 1 1 1 0
Ü 1 1 1 1 1       
-------------------
    0 1 1 1 0 1 1 0
```



Das hier ein Übertrag entsteht ist bei vorzeichenbehafteten Zahlen normal.

**Multiplikation** und **Division** sind ähnlich aber mühsam auf Papier durchzuführen.




# Datentypen


Alle C Datentypen in der Übersicht.


## Ganzzahlig -- mit Vorzeichen


```
*Typ* & printf & *Wertebereich* & *Beschreibung*\\
\hline
\mbox{`char`} & \mbox{`\%hhd`} & $-128\,\ldots+127$ & 1 Byte.\\

\mbox{`char`} & \mbox{`\%c`} & Zeichen & 
1 Byte, Beispiel: \mbox{`char c='a';`}\\

\mbox{`short`} & \mbox{`\%hd`} & $-32768\,\ldots\,+32767$ & 2 Byte \\

\mbox{`long`} & \mbox{`\%ld`} & {$-2^{31}$\,\ldots\,$2^{31}-1$} & 4 Byte\\

\mbox{`int`} & \mbox{`\%d`} & Wie \mbox{`long`} & 4 Byte. Manchmal 2 Byte. \\

\mbox{`long long`} & \mbox{`\%lld`} & {$-2^{63}$\,\ldots\,$2^{63}-1$} & 8 Byte\\
```




## Ganzzahlig -- ohne Vorzeichen


```
*Typ* & printf & *Wertebereich* & *Beschreibung*\\
\hline
\mbox{`unsigned char`} & \mbox{`\%hhu`} & {0\,\ldots\,255}&1 Byte\\

\mbox{`unsigned short`} & \mbox{`\%hu`} & 0\,\ldots\,65535 &2 Byte \\

\mbox{`unsigned long`} & \mbox{`\%lu`} & {0\,\ldots\,$2^{32}-1$} & 4 Byte\\

\mbox{`unsigned int`} & \mbox{`\%u`} & Wie \mbox{`long`} &  4 Byte. Manchmal 2 Byte.\\

\mbox{`unsigned long long`} & \mbox{`\%llu`} & {0\,\ldots\,$2^{64}-1$} & 8 Byte\\
```


*Empfehlung:* 
`unsigned` nur verwenden wenn man keine negativen Zahlen aber einen erweiterten Wertebereich benötigt.


## Kommazahlen

Auch: Gleitkomma, Fließkomma



*Typ* & printf & *Wertebereich* & *Beschreibung*\\
\hline
\mbox{`float`} & \mbox{`\%f`} & 
{${-3,4\cdot}{10^{38}}$\,\ldots\,${3,4\cdot}{10^{38}}$} & 4 Byte. Einfache Genauigkeit. 7--8 Stellen. \\

\mbox{`double`} & \mbox{`\%lf`} & 
{${-1,7\cdot}{10^{308}}$\,\ldots\,${1,7\cdot}{10^{308}}$} & 8 Byte. Doppelte Genauigkeit. 15--16 Stellen.\\




## Wahrheitswerte



*Typ* & printf & *Wertebereich* & *Beschreibung*\\
\hline
\mbox{`bool`} & - & \mbox{`true`} / \mbox{`false`} & 1 Byte\\





## Übungsbeispiele






# Bitmanipulation


Zum Setzen, Löschen, Prüfen einzelner Bits in Variablen.


## Allgemeines

Wichtige **Datentypen** für Bitoperationen:

{

*Datentyp*                & *Bytes* & *Bits* & printf (*Dez*) & printf (*Hex*)\\

`unsigned char`  & 1     &  8   & \verb+%hhu+ & \verb+%hhX+ \\
`unsigned short` & 2     & 16   & \verb+%hu+ & \verb+%hX+ \\
`unsigned long`  & 4     & 32   & \verb+%lu+ & \verb+%lX+ \\


**Hexadezimale Konstanten:**

Durch voranschreiben von `0x`

```c
unsigned char var1 = 0xAB;	// 1 Byte = 8 Bit
unsigned short var2 = 0x12AB;	// 2 Byte = 16 Bit
unsigned long var4 = 0x1234ABCD;	// 4 Byte = 32 Bit
```

Bits werden von rechts bei 0 beginnend nummeriert.

Ganz Rechts: Niederwertigstes Bit, LSB (Least Significant Bit)\\
Ganz Links: Höchstwertigstes Bit, MSB (Most Significant Bit)


## Bit-Operatoren


### NICHT

Invertiert jedes Bit.

```c
unsigned char x = 145;
unsigned char y = 216;
unsigned char z;

z = ~x;      x... 10010001 
             z... 01101110

z = ~y;      y... 11011000 
             z... 00100111
```


### UND

Verknüpft zwei Werte, Bit für Bit.
Ein Bit im Ergebnis ist nur dann gesetzt wenn das entsprechende Bit in beiden Werten gesetzt ist.

```c
unsigned char x = 145;
unsigned char y = 216;
unsigned char z;

z=x&y;       x... 10010001 
             y... 11011000 
             ------------- 
             z... 10010000...144
```

Anwendungen von UND:

- Herausfinden ob ein einzelnes Bit gesetzt ist
- "Ausmaskieren" von einer Gruppe von Bits
- Gezieltes Löschen von Bits



### ODER

Verknüpft zwei Werte, Bit für Bit.
Ein Bit im Ergebnis ist gesetzt wenn das entsprechendes Bit in zumindest einem der beiden Werte gesetzt ist.

```c
unsigned char x = 145;
unsigned char y = 216;
unsigned char z;

z=x|y;       x... 10010001 
             y... 11011000 
             ------------- 
             z... 11011001 ... 217
```

Anwendungen von ODER:

- Gezieltes Setzen von Bits



### Exklusives ODER

Verknüpft zwei Werte, Bit für Bit.
Ein Bit im Ergebnis ist gesetzt wenn das entsprechendes Bit in genau einem der beiden Werte gesetzt ist.

```
unsigned char x = 145;
unsigned char y = 216;
unsigned char z;

z=x^y;       x... 10010001 
             y... 11011000 
             ------------- 
             z... 01001001 ... 73
```

Anwendungen von XOR:

- Feststellen welche Bits sich geändert haben
- Selektives invertieren von Bits




### Wahrheitstabelle

Die möglichen Ergebnisse für Negation, UND, ODER sowie Exklusives ODER können in einer **Wahrheitstabelle** dargestellt werden:


```
\verb+a+ & \verb+b+ & \verb+~a+ & \verb+a&b+ & \verb+a|b+ & \verb+a^b+\\
\hline
0 & 0 & 1 & 0    & 0   & 0\\

0 & 1 & 1 & 0    & 1   & 1\\

1 & 0 & 0 & 0    & 1   & 1\\

1 & 1 & 0 & 1    & 1   & 0\\
```




### Schiebe Links 

Schiebt die Bits in einem Wert um eine gewisse Anzahl Stellen nach links (in Richtung MSB). 
Von Rechts wird 0 nachgeschoben.

```c
unsigned char y = 216;
unsigned char z;

z=y<<1;      y... 11011000 
             z... 10110000

z=y<<2;      y... 11011000 
             z... 01100000
```

Die Anzahl der Verschiebungen kann auch eine Variable sein.

Anwendungen von Schiebe Links:

- Aufbereiten eines Vergleich-Werts für UND, ODER bzw.\ Exklusives ODER




### Schiebe Rechts

Schiebt die Bits in einem Wert um eine gewisse Anzahl Stellen nach rechts (in Richtung LSB). 
Von Links wird 0 nachgeschoben.

```c
unsigned char y = 216;
unsigned char z;

z=y>>1;      y... 11011000 
             z... 01101100

z=y>>2;      y... 11011000 
             z... 00110110
```

Die Anzahl der Verschiebungen kann auch eine Variable sein.

Anwendungen von Schiebe Rechts:

- Eine Bitgruppe "`ganz"' nach rechts schieben um deren Wert auszugeben




### Vorzeichen
Vorsicht bei Schiebeoperationen mit vorzeichenbehafteten Typen (ohne `unsigned`), das Vorzeichenbit wird nicht mit verschoben!




## Häufige Anwendungsfälle

```c
// Set a bit (where n is the bit number, and 0 is the least significant bit):
 unsigned char a |= (1 << n);

// Clear a bit:
 unsigned char b &= ~(1 << n);

// Toggle a bit:
 unsigned char c ^= (1 << n);

// Test a bit:
 unsigned char e = d & (1 << n); //d has the byte value.
```




## Weiterführend


- Wikipedia Artikel \href{http://en.wikipedia.org/wiki/Bit_manipulation}{Bit manipulation}
- \href{http://bits.stephan-brumme.com/}{the bit twiddler}
- \href{http://aggregate.org/MAGIC/}{The Aggregate Magic Algorithms}
- \href{http://graphics.stanford.edu/~seander/bithacks.html}{Bit Twiddling Hacks}
- \href{http://www.inwap.com/pdp10/hbaker/hakmem/hakmem.html}{HAKMEM}



