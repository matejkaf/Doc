---
title: Mathematische Grundlagen
use_math: true
---

* TOC
{:toc}

# Algebraische Strukturen

- Gruppe (eine zweistellige Verknüpfung)
- Ring (zwei zweistellige Verknüpfungen)
- Körper (*Field*)

## Gruppe

[wikipedia](https://de.wikipedia.org/wiki/Gruppe_(Mathematik))

Eine der bekanntesten Gruppen bildet die Menge der ganzen Zahlen $\{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$, die üblicherweise mit $\mathbb{Z}$ bezeichnet wird, zusammen mit der Addition.

Die Menge der ganzen Zahlen zusammen mit der Addition erfüllt einige grundlegende Eigenschaften:

* Für zwei ganze Zahlen $a$ und $b$ ist die Summe $a + b$ wieder eine ganze Zahl. Würde man hingegen zwei ganze Zahlen miteinander dividieren, so wäre das Ergebnis zumeist eine rationale Zahl und keine ganze Zahl mehr. Da dies bei der Addition nicht passieren kann, sagt man, dass die ganzen Zahlen unter der Addition abgeschlossen sind.
* Für alle ganzen Zahlen $a$, $b$ und $c$ gilt das Assoziativgesetz
$(a + b) + c = a + (b + c)$.
In Worten ausgedrückt heißt dies, dass es egal ist, ob man zuerst $a$ und $b$ oder $b$ und $c$ addiert, das Ergebnis ist das gleiche. Diese Eigenschaft wird Assoziativität genannt.
* Für jede ganze Zahl $a$ gilt
$0 + a = a + 0 = a$.
Die Addition mit Null verändert also die Ausgangszahl nicht. Daher nennt man Null das neutrale Element der Addition.
* Für jede ganze Zahl $a$ existiert eine ganze Zahl $b$, so dass $a + b = b + a = 0$ gilt. Das heißt, zu jeder ganzen Zahl $a$ existiert eine ganze Zahl $b$, so dass ihre Summe null ergibt. Die Zahl $b$ heißt in diesem Fall das inverse Element von $a$ und wird mit $-a$ notiert.

Diese vier Eigenschaften der Menge der ganzen Zahlen zusammen mit ihrer Addition werden in der Definition der Gruppe auf andere Mengen mit einer passenden Operation verallgemeinert.



Eine Gruppe $(G,*)$ heißt ''**abelsch**'' oder ''**kommutativ**'', wenn zusätzlich das folgende Axiom erfüllt ist:

* Kommutativgesetz: Für alle Gruppenelemente $a$ und $b$ gilt $a*b = b*a$.



Eine ''**Halbgruppe**'' $\boldsymbol S = (S,*)$ besteht aus einer Menge $S$ und einer inneren zweistelligen Verknüpfung

$* \colon\, S\times S \to S,\, (a,b) \mapsto a*b,$$

die assoziativ ist, d.h. für alle $a,b,c \in S$ gilt

$a*(b*c) = (a*b)*c$$

Eine Halbgruppe unterscheidet sich daher von einer Gruppe insofern, als die zweistellige Verknüpfung hier nicht invertierbar sein muss und nicht zwingend ein neutrales Element existiert.


## Ring

[Ring (Algebra)](https://de.wikipedia.org/wiki/Ring_(Algebra))

Ein ''Ring'' $(R, +, \,\cdot\,)$ ist eine Menge $R$ mit zwei zweistelligen Operationen $+$ und $\cdot$, für die die folgenden Beziehungen, genannt ''Ringaxiome'', gelten:
* $(R, +)$ ist eine abelsche Gruppe unter der ''Addition'' $+$, deren ''neutrales'' Element als ''Nullelement'' des Rings $R$ mit $0$ bezeichnet wird, und
* $(R, \,\cdot\,)$ ist eine Halbgruppe unter der ''Multiplikation'' ($\cdot$) . In der gängigen Schreibung bindet $\cdot$ stärker als $+$, und wird sehr häufig sogar weggelassen.
* Ferner gelten die Distributivgesetze
	*  $a \cdot (b + c) = (a \cdot b) + (a \cdot c) = a b + a c$ &nbsp; &nbsp; &nbsp; (''linke Distributivität'')
	* $(a + b) \cdot c = (a \cdot c) + (b \cdot c) = a c + b c$ &nbsp; &nbsp; &nbsp; (''rechte Distributivität'')
	* für alle $a, b, c \in R$ .

Ein Ring heißt ''kommutativ'', falls er bezüglich der Multiplikation kommutativ ist, ansonsten spricht man von einem nicht-kommutativen Ring.


## Körper (Field)

[Körper_(Algebra)](https://de.wikipedia.org/wiki/Körper_(Algebra))

Ein Körper ist ein kommutativer Ring mit Eins, bei dem $(R\setminus\left\{0\right\},\cdot)$ eine Gruppe ist, also zu jedem von Null verschiedenen Element ein multiplikatives Inverses existiert.

Ein Körper ist eine Menge $K$, versehen mit zwei inneren zweistelligen Verknüpfungen „$+$“ und „$\cdot$“ (die ''Addition'' und ''Multiplikation'' genannt werden), für die folgende Bedingungen erfüllt sind:

- $\left(K,+\right)$ ist eine abelsche Gruppe (neutrales Element 0).
- $\bigl(K\setminus\{0\},\cdot\bigr)$ ist eine abelsche Gruppe (neutrales Element 1).
- Distributivgesetze:
	- $a\cdot\left(b+c\right) = a\cdot b+a\cdot c\,$ für alle $a, b, c \in K$.
	- $\left(a+b\right)\cdot c = a\cdot c+b\cdot c\,$ für alle $a, b, c \in K$.

Ein Körper muss also folgende Einzelaxiome erfüllen:

-  Additive Eigenschaften:
	- $a+(b+c) = (a+b)+c$ für alle $a, b, c \in K$ (Assoziativgesetz)
	- $a+b = b+a$ für alle $a, b \in K$ (Kommutativgesetz)
	- Es gibt ein Element $0\in K$, sodass $0+a=a$ für alle $a\in K$ (neutrales Element).
	- Zu jedem $a\in K$ existiert ein additives Inverses Element $-a$ mit $(-a)+a=0$.
- Multiplikative Eigenschaften:
	- $a\cdot(b\cdot c) = (a\cdot b)\cdot c$ für alle $a, b, c \in K$ (Assoziativgesetz)
  - $a\cdot b = b\cdot a$ für alle $a, b \in K$ (Kommutativgesetz)
	- Es gibt ein Element $1\in K\setminus\{0\}$, sodass $1\cdot a=a$ für alle $a\in K$ (neutrales Element).
	- Zu jedem $a\in K\setminus\{0\}$ existiert ein multiplikatives Inverse $a^{-1}$ mit $a^{-1}\cdot a=1$.
- Zusammenspiel von additiver und multiplikativer Struktur:
	- $a\cdot (b+c) = a\cdot b+a\cdot c$ für alle $a, b, c \in K$ (Links-Distributivgesetz)
	- $(b+c) \cdot a = b\cdot a + c \cdot a$ für alle $a, b, c \in K$ (Rechts-Distributivgesetz)



# Modulare Arithmetik

## Grundlagen

Wir rechnen mit natürlichen Zahlen und begrenzen den Wertebereich, z.B. auf den Bereich $0,\ldots,11$. Wir stellen uns die Zahlen in einem Kreis angeordent vor, so dass auf 11 wieder die 0 folgt, wie bei einer Uhr.

Wir können in diesem Wertebereich **addieren** und **multiplizieren**.

Beispiele:
$$
9+5=14 \rightarrow (14-12)=2
$$
oder
$$
9+11=20 \rightarrow (20-12)=8
$$
Multiplikation
$$
7 \cdot 5=35 \rightarrow (35-2\cdot 12)=11
$$
oder
$$
4 \cdot 9=36 \rightarrow (36-3\cdot 12)=0
$$
Allgemein wird das Ergbnis immer Modulo 12 gerechnet, d.h. der Rest der Division durch 12 verwendet. 12 wird als **Modulus** bezeichnet. Es gibt dafür eine eigene Schreibweise:
$$
9+5=2 \pmod {12}
$$


$$
4 \cdot 9=0 \pmod {12}
$$
**Subtraktion** ist möglich, aber anders als gewohnt. **Division** geht im allgemeinen nicht, außer der Modulus ist eine Primzahl, dann kann der erweiterte euklidische Algorithmus angewendet werden.

**Potenzieren** ist möglich, da dies nur eine andere Schreibweise der Multiplikation ist:
$$
3^4=3\cdot 3\cdot 3\cdot 3
$$
daher ist
$$
3^4 = 9 \pmod {12}
$$
Weil
$$
3^4=81 \rightarrow (81-6*12)=9
$$
Man kommt aber auch auf das gleiche Ergebnis wenn man $3\cdot 3\cdot 3\cdot 3$ in einzelnen Schritten ausführt und nach jedem Schritt Modulo gerechnet wird:

$$
3\cdot 3 = 9 \pmod {12}
$$

$$
9\cdot 3 = 3 \pmod {12}
$$

und final

$$
3\cdot 3 = 9 \pmod {12}
$$



**Übungsaufgaben:**

- $9+13=? \pmod {17}$$
- $11\cdot 5=? \pmod {13}$$
- $9^3=? \pmod {12}$$
- $11^3=? \pmod {17}$$



## Modulare Arithmetik mit Primzahlen

Es ergeben sich interessante Eigenschaften wenn man als Modulus eine Primzahl wählt.

Betrachten Zahlenbereich $1, \ldots, p-1$, wobei $p$ eine **Primzahl** ist.

Multiplikation von $a$ mit $b$ modulo $p$:

$$
(a*b)=c \pmod p
$$

Diese mathematische Schreibweise entspricht: `c=(a*b)%p`

Beispiel: 

$$
(3*4)=5 \pmod 7
$$

Eine Potenz $a^n\pmod p$ wird mit Hilfe dieser Multiplikation definiert.

Es gilt der kleine Satz von Fermat:
$$
a^{p-1}=1 \pmod {p}
$$


Besondere Eigenschaft dieser Potenz: Nimmt man eine beliebige Zahl $g$ aus dem Zahlenbereich und berechnet $g^1, g^2, g^3, \ldots$ (immer $\pmod p$), so ergibt dies irgendwann $1$ und die Zahlenfolge **wiederholt** sich.

Es gibt darüberhinaus **besondere Zahlen** – sogenannte **Generatoren** – die auf diese Weise **alle Zahlen** im Wertebereich erzeugen.

Anders gesagt nimmt man einen solchen Generator $g$ so ergibt sich die Sequenz $g^1, g^2, \ldots, g^{p-1}=1$ in der **alle** $p-1$ Zahlen des Zahlenbereichs vorkommen.

Beispiel: $p=7, g=3$ – Ausprobieren!

<iframe height="400px" width="100%" src="https://replit.com/@franzmatejka/ModulareArithmetik?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Generatoren sind eine Grundlage des Diffie-Hellman Key-Exchange Verfahrens.

Aufgabe: Finde einen Generator für $p=17$.



## Modulare $p\cdot q$ Arithmetik

Nimmt man das Produkt zweier Primzahlen als Modulus, d.h $\pmod {p\cdot q}$$

So gilt nach dem Satz von Euler-Fermat:
$$
a^{(p-1) (q-1)} = 1 \pmod {p\cdot q}
$$
Diese Formal ist für den RSA Verschlüsselungs Algorithmus von Bedeutung.



Aufgabe: Überprüfe diese Aussage für $p=5$ und $q=17$.



# Restklassen

[](https://www.mathe-online.at/lernpfade/Lernpfad884/?kapitel=2)

Sei $p$ eine natürliche Zahl. Man kann beim Addieren und Multiplizieren von ganzen Zahlen jede auftretende Zahl durch den Rest, der sich bei Division durch $p$ ergibt, ersetzen.

Ist etwa $p = 3$, so wird nicht mehr zwischen 2 und 5 unterschieden! Das kann auch in der folgenden Form ausgedrückt werden:

$(a\cdot b)=c \pmod p$$

gesprochen: ''5 ist gleich 2 modulo 3''. 

Man nennt Zahlen die den gleichen Rest erzeugen auch zueinander konkruent.

Mathematisch: Seien $a$, $b$ ganze Zahlen und $p$ eine natürliche Zahl. Die Zahlen a und b heißen kongruent modulo $p$, wenn $a-b$ durch $p$ teilbar ist. Mathematisch schreibt man

$a \equiv b \mod p$$

Unter diesem Gesichtspunkt gibt es nur drei verschiedene Zahlen, nämlich 0, 1 und 2, (denn bereits 3 wird mit 0 identifiziert, 4 mit 1 usw). Diese drei Objekte heißen [Restklassen](https://de.wikipedia.org/wiki/Restklasse) modulo 3. 

| x    | x mod 3 |
| ---- | ------- |
| 0    | 0       |
| 1    | 1       |
| 2    | 2       |
| 3    | 0       |
| 4    | 1       |
| 5    | 2       |
| 6    | 0       |
| 7    | 1       |
| ...  | ...     |



Tatsächlich steht 0 nicht nur für die Zahl 0, sondern für alle ganzzahligen Vielfachen von 3 (1 steht für alle ganzen Zahlen, die bei Division durch 3 den Rest 1 ergeben, und 2 steht für alle ganzen Zahlen, die bei Division durch 3 den Rest 2 ergeben). Daher heißen sie ''Klassen''. 

Die Menge der Restklassen modulo 3 hat also 3 Elemente und wird als $\mathbb{Z}_3$ bezeichnet.

Genau dasselbe kann mit jeder natürlichen Zahl $p$ gemacht werden, was zur Menge $\mathbb{Z}_p$ der Restklassen modulo $p$ führt.

Beispiel: Die Restklasse von 0 modulo 2 ist die Menge der geraden Zahlen. Die Restklasse von 1 modulo 2 ist die Menge der ungeraden Zahlen.

Falls $p$ eine Primzahl ist, kann innerhalb dieser Menge sogar dividiert werden. (Sie hat dann die Struktur eines Körpers).



# RSA

[austromath.at](http://www.austromath.at/medienvielfalt/materialien/krypto/lernpfad/index.htm)

[RSA, DHM und ihre Grundlagen](https://www.mathe-online.at/lernpfade/Lernpfad884/?kapitel=1) – Nummer im Link ändern (1–5)



# Satz von Euler

[[Quelle](http://www.austromath.at/medienvielfalt/materialien/krypto/lernpfad/index.htm)]

Der Satz von Euler verallgemeinert den kleinen Fermatschen Satz und wird deshalb auch Satz von Euler-Fermat genannt. Zur Erinnerung - der **kleine Fermat** besagt (wenn $p$ einer Primzahl und $a$ eine ganze Zahl):

$$
a^{p-1}=1 \pmod p
$$

**Satz von Euler**: Sind $a$ und $n$ zwei natürliche teilerfremde Zahlen, dann gilt:

$$
a^{\varphi (n)} = 1 \pmod n
$$

$\varphi (n)$ ist die Anzahl der zu $n$ teilerfremden natürlichen Zahlen (die Anzahl aller Zahlen $\le  n$, deren größter gemeinsamer Teiler mit $n$ gleich 1 ist).

- Beispiele:

  - $\varphi (12)=4$, teilerfremde Zahlen sind ${1, 5, 7, 11}$$
  
  - $\varphi (13)=12$, alle Zahlen von 1 bis 12 sind teilerfremd, da 13 eine Primzahl ist (kleiner Fermat)
  - $\varphi (14)=6$, teilerfremde Zahlen sind ${1, 3, 5, 9, 11, 13}$$
  
- Zu einer Primzahl $p$ sind alle Zahlen von $1, \ldots, p - 1$ teilerfremd - daraus folgt: $\varphi (p)= p - 1$.

- Für prime Moduln $p$ geht der Satz von Euler daher in den kleinen Satz von Fermat über.


Für das Produkt zweier Primzahlen $p$ und $q$ gilt weiters:

$$
\varphi(p \cdot q) = (p - 1)  (q - 1)
$$

und somit in Satz von Euler eingesetzt  ($a$ teilerfremd zu $p$ und  $q$):

$$
a^{\varphi(p) \cdot \varphi(q)}  = 1 \pmod {p\cdot q}
$$

Da $\varphi (p)= p - 1$ ergibt sich weiters

$$
a^{(p-1) (q-1)} = 1 \pmod {p\cdot q}
$$

**Beispiel**:

Was ist die letzte Dezimalstelle von 7333 ?

Die Frage kann umgedeutet werden zu: 7333 mod 10 = x (gefragt ist der Rest bei Division durch 10).

Wir wissen: φ(10) = 4 und damit 74 mod 10 = 1 und zerlegen daher 333 geschickt:

333 = 4 * 83 + 1

7333 = 7(4.83+1)

((74)83 . 7) mod 10 = (183 . 7) mod 10 = 7



Die Antwort - die letzte Stelle lautet 7.
