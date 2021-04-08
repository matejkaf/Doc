---
title: Mathematische Grundlagen
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

* TOC
{:toc}

# Algebraische Strukturen

- Gruppe (eine zweistellige Verknüpfung)
- Ring (zwei zweistellige Verknüpfungen)
- Körper (*Field*)

## Gruppe

[wikipedia](https://de.wikipedia.org/wiki/Gruppe_(Mathematik))

Eine der bekanntesten Gruppen bildet die Menge der ganzen Zahlen $$\{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$$, die üblicherweise mit $$/Z$$ bezeichnet wird, zusammen mit der Addition.

Die Menge der ganzen Zahlen zusammen mit der Addition erfüllt einige grundlegende Eigenschaften:

* Für zwei ganze Zahlen $$a$$ und $$b$$ ist die Summe $$a + b$$ wieder eine ganze Zahl. Würde man hingegen zwei ganze Zahlen miteinander dividieren, so wäre das Ergebnis zumeist eine rationale Zahl und keine ganze Zahl mehr. Da dies bei der Addition nicht passieren kann, sagt man, dass die ganzen Zahlen unter der Addition abgeschlossen sind.
* Für alle ganzen Zahlen $$a$$, $$b$$ und $$c$$ gilt das Assoziativgesetz
$$(a + b) + c = a + (b + c)$$.
In Worten ausgedrückt heißt dies, dass es egal ist, ob man zuerst $$a$$ und $$b$$ oder $$b$$ und $$c$$ addiert, das Ergebnis ist das gleiche. Diese Eigenschaft wird Assoziativität genannt.
* Für jede ganze Zahl $$a$$ gilt
$$0 + a = a + 0 = a$$.
Die Addition mit Null verändert also die Ausgangszahl nicht. Daher nennt man Null das neutrale Element der Addition.
* Für jede ganze Zahl $$a$$ existiert eine ganze Zahl $$b$$, so dass $$a + b = b + a = 0$$ gilt. Das heißt, zu jeder ganzen Zahl $$a$$ existiert eine ganze Zahl $$b$$, so dass ihre Summe null ergibt. Die Zahl $$b$$ heißt in diesem Fall das inverse Element von $$a$$ und wird mit $$-a$$ notiert.

Diese vier Eigenschaften der Menge der ganzen Zahlen zusammen mit ihrer Addition werden in der Definition der Gruppe auf andere Mengen mit einer passenden Operation verallgemeinert.



Eine Gruppe $$(G,*)$$ heißt ''**abelsch**'' oder ''**kommutativ**'', wenn zusätzlich das folgende Axiom erfüllt ist:

* Kommutativgesetz: Für alle Gruppenelemente $$a$$ und $$b$$ gilt $$a*b = b*a$$.



Eine ''**Halbgruppe**'' $$\boldsymbol S = (S,*)$$ besteht aus einer Menge $$S$$ und einer inneren zweistelligen Verknüpfung

$$* \colon\, S\times S \to S,\, (a,b) \mapsto a*b,$$

die assoziativ ist, d.&nbsp;h. für alle $$a,b,c \in S$$ gilt

$$a*(b*c) = (a*b)*c$$.

Eine Halbgruppe unterscheidet sich daher von einer Gruppe insofern, als die zweistellige Verknüpfung hier nicht invertierbar sein muss und nicht zwingend ein neutrales Element existiert.


## Ring

[Ring (Algebra)](https://de.wikipedia.org/wiki/Ring_(Algebra))

Ein ''Ring'' $$(R, +, \,\cdot\,)$$ ist eine Menge $$R$$ mit zwei zweistelligen Operationen $$+$$ und $$\cdot$$, für die die folgenden Beziehungen, genannt ''Ringaxiome'', gelten:
* $$(R, +)$$ ist eine abelsche Gruppe unter der ''Addition'' $$+$$, deren ''neutrales'' Element als ''Nullelement'' des Rings $$R$$ mit $$0$$ bezeichnet wird, 
:und
* $$(R, \,\cdot\,)$$ ist eine Halbgruppe unter der ''Multiplikation'' $$\cdot$$ . In der gängigen Schreibung bindet $$\cdot$$ stärker als $$+$$, und wird sehr häufig sogar weggelassen.
* Ferner gelten die Distributivgesetze
*  $$a \cdot (b + c) = (a \cdot b) + (a \cdot c) = a b + a c$$ &nbsp; &nbsp; &nbsp; (''linke Distributivität'')
* $$(a + b) \cdot c = (a \cdot c) + (b \cdot c) = a c + b c$$ &nbsp; &nbsp; &nbsp; (''rechte Distributivität'')
* für alle $$a, b, c \in R$$ .

Ein Ring heißt ''kommutativ'', falls er bezüglich der Multiplikation [[Kommutativgesetz|kommutativ]] ist, ansonsten spricht man von einem nicht-kommutativen Ring.


## Körper (Field)

[Körper_(Algebra)](https://de.wikipedia.org/wiki/Körper_(Algebra))

Ein Körper ist ein kommutativer Ring mit Eins, bei dem $$(R\setminus\left\{0\right\},\cdot)$$ eine Gruppe ist, also zu jedem von Null verschiedenen Element ein multiplikatives Inverses existiert.

Ein Körper ist eine Menge $$K$$, versehen mit zwei inneren zweistelligen Verknüpfungen „$$+$$“ und „$$\cdot$$“ (die ''Addition'' und ''Multiplikation'' genannt werden), für die folgende Bedingungen erfüllt sind:

- $$\left(K,+\right)$$ ist eine abelsche Gruppe (neutrales Element 0).
- $$\bigl(K\setminus\{0\},\cdot\bigr)$$ ist eine abelsche Gruppe (neutrales Element 1).
- Distributivgesetze:
- $$a\cdot\left(b+c\right) = a\cdot b+a\cdot c\,$$ für alle $$a, b, c \in K$$.
- $$\left(a+b\right)\cdot c = a\cdot c+b\cdot c\,$$ für alle $$a, b, c \in K$$.

Einzelaufzählung der benötigten Axiome
Ein Körper muss also folgende Einzelaxiome erfüllen:

-  Additive Eigenschaften:
	- $$a+(b+c) = (a+b)+c$$ für alle $$a, b, c \in K$$ (Assoziativgesetz)
	- $$a+b = b+a$$ für alle $$a, b \in K$$ (Kommutativgesetz)
	- Es gibt ein Element $$0\in K$$, sodass $$0+a=a$$ für alle $$a\in K$$ (neutrales Element).
	- Zu jedem $$a\in K$$ existiert ein additives Inverses Element $$-a$$ mit $$(-a)+a=0$$.
- Multiplikative Eigenschaften:
	- $$a\cdot(b\cdot c) = (a\cdot b)\cdot c$$ für alle $$a, b, c \in K$$ (Assoziativgesetz)
  - $$a\cdot b = b\cdot a$$ für alle $$a, b \in K$$ (Kommutativgesetz)
	- Es gibt ein Element $$1\in K\setminus\{0\}$$, sodass $$1\cdot a=a$$ für alle $$a\in K$$ (neutrales Element).
	- Zu jedem $$a\in K\setminus\{0\}$$ existiert ein multiplikatives Inverse $$a^{-1}$$ mit $$a^{-1}\cdot a=1$$.
- Zusammenspiel von additiver und multiplikativer Struktur:
	- $$a\cdot (b+c) = a\cdot b+a\cdot c$$ für alle $$a, b, c \in K$$ (Links-Distributivgesetz)
	- $$(b+c) \cdot a = b\cdot a + c \cdot a$$ für alle $$a, b, c \in K$$ (Rechts-Distributivgesetz)





# Modulare Arithmetik mit  Primzahlen.

Betrachten Zahlenbereich $$1, \ldots, p-1$$, wobei $$p$$ eine **Primzahl** ist.

Multiplikation von a mit b modulo p:

$$(a*b)=c\ (\text{mod}\ p)\quad$$

Diese mathematische Schreibweise entspricht: `c=(a*b)%p`

Beispiel: $$(3*4)=5\ (\text{mod}\ 7)$$

Eine Potenz $$a^n\ (\text{mod}\ p)$$ wird mit Hilfe dieser Multiplikation definiert.

Besondere Eigenschaft dieser Potenz: Nimmt man eine beliebige Zahl $$g$$ aus dem Zahlenbereich und berechnet $$g^1, g^2, g^3, \ldots$$ (immer $$(\text{mod}\ p)$$), so ergibt dies irgendwann 1 und die Zahlenfolge **wiederholt** sich. 

Es gibt darüberhinaus **besondere Zahlen** – sogenannte **Generatoren** – die auf diese Weise **alle Zahlen** im Wertebereich erzeugen.

Anders gesagt nimmt man einen solchen Generator g so ergibt sich die Sequenz $$g^1, g^2, \ldots, g^{p-1}=1$$ in der **alle** $p-1$ Zahlen des Zahlenbereichs vorkommen.

Beispiel: $p=7, g=3$ – Ausprobieren!

<iframe height="400px" width="100%" src="https://replit.com/@franzmatejka/ModulareArithmetik?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

