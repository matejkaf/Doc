---
title: Vektorgeometrie
subtitle: Grundlagen der 2D Computergrafik
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

Vektorgeometrie (auch [Analytische Geometrie](http://de.wikipedia.org/wiki/Analytische_Geometrie)), ist das mathematische Werkzeug für Berechnungen im 2 bzw. 3-dimensionalem Raum und Grundlage der Computergrafik.

Konkret: Verschieben, vergrößern, verkleinern und drehen von grafischen Objekten.

## Punkt


Ein Punkt beschreibt eine bestimmte **Position**.

Ein Punkt hat keine Länge, Breite oder Dicke. Man muss sich einen Punkt als unendlich klein vorstellen.
Die Darstellung eines Punkts erfolgt meist durch dessen Koordinaten in einem rechtwinkeligen Koordinatensystem (kartesische Darstellung mit x/y Achsen).

Beispiel 2-dim.

$$
A = \left[ \begin{array}{c} a_x \\ a_y \end{array} \right] = \left[ \begin{array}{c} 3 \\ 2 \end{array} \right]
$$

oder 3-dimensional

$$
A = \left[ \begin{array}{c} a_x \\ a_y \\ a_z \end{array} \right] = \left[ \begin{array}{c} 3 \\ 2 \\ 1 \end{array} \right]
$$

Punkte werden oft mit Großbuchstaben bezeichnet.


## Vektor


Ein Vektor ist eine **gerichtete Größe** und wird als Pfeil mit einer gewissen Länge gezeichnet.


Ein Vektor hat keine Position, man kann diesen also irgendwo hin zeichnen, solange nur Länge und Richtung beibehalten werden.

Verschiebt man den Startpunkt eines Vektors in den Nullpunkt so beschreiben die Koordinaten des Endpunkts (der Spitze) den Vektor eindeutig.

$$
\vec{v} = \left[ \begin{array}{c} 3 \\ 2 \end{array} \right]
$$

Kleinbuchstaben mit einem Pfeil kennzeichnen Vektoren.

Vektor bzw. Punkt sind vom Informationsgehalt her gleich. In beiden Fällen sind es beispielsweise 2 Zahlen. Ob es ein Vektor (Richtung und Länge) oder ein Punkt (x und y) ist ergibt sich aus der Verwendung. Oft spricht man von einem Positionsvektor und einem Richtungsvektor wenn diese Unterscheidung wichtig ist.

Rein mathematisch wird nicht zwischen diesen beiden Anwendungen unterschieden.
Es wird nur von einem Vektor gesprochen. Dieser kann 2-, 3-, oder auch höherdimensional sein.

Beispiele:

$$
\left[ \begin{array}{c} x \\ y \end{array} \right], \quad
\left[ \begin{array}{c} x \\ y \\ z \end{array} \right], \quad
\left[ \begin{array}{c} x_1 \\ x_2 \\ \vdots \\ x_n \end{array} \right]
$$

## Skalar
**Skalar** ist die Bezeichnung einer "normalen Zahl". Beschriftung oft mit griechischem Buchstaben (z.B.: $$\lambda$$ – Lambda).


Die Multiplikation eines Skalars mit einem Vektor ist definiert als:

$$
\lambda  
\left[ \begin{array}{c} x \\ y \end{array} \right] = 
\left[ \begin{array}{c} \lambda\; x \\ \lambda\; y \end{array} \right]
$$

Spezialfälle: $$\lambda=-1$$ (Vorzeichenumkehr) und $$\lambda=1/\rho$$ (Division).

Grafische Interpretation: Verkürzen/Verlängern eines Vektors (Skalieren).



## Vektoraddition (und Subtraktion)


Vektoren werden elementweise addiert.

$$
C=A+B=
 \left[ \begin{array}{c} a_x \\ a_y \end{array} \right] +
 \left[ \begin{array}{c} b_x \\ b_y \end{array} \right] =
 \left[ \begin{array}{c} a_x+b_x \\ a_y+b_y \end{array} \right]
$$


Grafisch: Start von B wird an das Ende von A verschoben. Ende von verschobenen B ist das Ende des gesuchten Vektors C.

Durch Umstellen:

$$
B=C-A
$$

Grafische Interpretation: Endpunkt (C) minus Startpunkt (A) ergibt den Richtungsvektor der von A nach C geht.

Oder anders:

- B ist der Vektor der den Punkt A mit dem Punkt C verbindet.
- Die Länge dieses Vektors ist der Abstand von A und C.

Anwendung:

- Verschieben von Punkten (Translation) durch addieren eines Richtungsvektors.
- Bewegen eines Objekts am Bildschirm (Vektor gibt Bewegungsrichtung und Geschwindigkeit an).



---

#### Übung (Moving Points)

Animation, sich bewegende Punkte in unterschiedliche Richtungen und Geschwindigkeiten.

---




## Länge eines Vektors


Wird als die **Norm** eines Vektors bezeichnet und mit Hilfe des Pythagoras berechnet.

$$
\lVert \vec{v} \rVert = \sqrt{v^2_x + v^2_y}
$$

Einen Vektor dessen Norm 1 ist ($$\lVert \vec{v} \rVert =1$$) nennt man **Einheitsvektor**. Jeder Vektor kann auf einen Einheitsvektor normiert werden:

$$
\vec{v}_{\circ} = \frac{1}{\lVert \vec{v} \rVert} \; \vec{v}
$$


Besondere Einheitsvektoren:
$$
\vec{e}_1 = \left[ \begin{array}{c} 1 \\ 0 \end{array} \right] \quad und \quad
\vec{e}_2 = \left[ \begin{array}{c} 0 \\ 1 \end{array} \right]
$$

Ein Vektor kann dann auch so geschrieben werden (Linearkombination aus den Einheitsvektoren $$e_1$$ und $$e_2$$)

$$
\left[ \begin{array}{c} \lambda_x \\ \lambda_y \end{array} \right] =
\lambda_x e_1 + \lambda_y e_2 =
\lambda_x \left[ \begin{array}{c} 1 \\ 0 \end{array} \right] + \lambda_y \left[ \begin{array}{c} 0 \\ 1 \end{array} \right]
$$

---

#### Beispiel/Aufgabe

Zwei Punkte sind durch die Positionsvektoren $$A$$ und $$B$$ gegeben. Gesucht ist ein Punkt $$C$$ der sich auf der Geraden von $$A$$ nach $$B$$ befindet und 2 Einheiten (z.B. cm) von $$A$$ entfernt ist.

Endpunkt minus Startpunkt ergibt den Richtungsvektor $$\overrightarrow{AB}$$:

$$
\overrightarrow{AB} = B - A
$$

Diesen Vektor normieren:

$$
\overrightarrow{AB}_{\circ} = \frac{1}{\lVert \overrightarrow{AB} \rVert} \; \overrightarrow{AB}
$$
Damit ergibt sich der gesuchte Punkt durch Multiplikation des normierten Vektors mit 2:
$$
\vec{C} = 2 \cdot \overrightarrow{AB}_{\circ}
$$

---



**Geradengleichung** in Vektorform
$$
X = A + \lambda\, \vec{v}_{\circ}
$$

**Verbindungsvektor** von $$\vec{P}$$ nach $$\vec{Q}$$
$$
\vec{v}=
\vec{Q}-\vec{P}
$$

**Abstand** ist die Norm des Verbindungsvektors
$$
\lVert \overline{PQ} \rVert = {\lVert \vec{v} \rVert}
$$


Die **Parameterdarstellung** der Strecke $$\overline{PQ}$$

$$
\overline{PQ}=\vec{P}+t\cdot \vec{v} \qquad\qquad t\in [0,1]
$$




---

#### Übung (Planets)

Simuliere die Umkreisung eines Satelliten um die Erde.

Formelsammlung:
$$
F = G\; \frac{m_1 \cdot m_2}{r^2}
$$

$$
F = m \cdot a
$$

$$
\vec{a}=\cdots
$$

$$
\overrightarrow{\Delta v} = \Delta t\cdot \vec{a}
$$

$$
P_{neu}=P + \Delta t\cdot \overrightarrow{\Delta v}
$$
Erweiterung: Simuliere die Bahn eines Satelliten um 2 massereiche Körper.

Erweiterung: Simuliere die Bahn mehrerer sich gegenseitig anziehenden Planeten.

---




## Multiplikation von Vektoren


Die Multiplikation eines Vektors mit einem Vektor (das sogenannte **innere Produkt**) ist definiert:

$$
\vec{v}\cdot \vec{w} =
\left[
\begin{smallmatrix}
 a \\
 b
\end{smallmatrix} 
\right] 
\cdot
\left[ 
\begin{smallmatrix}
 c \\
 d
\end{smallmatrix} 
\right] 
= a \cdot c + b \cdot d
$$
Das Ergebnis ist ein **Skalar**.

Grafische Interpretation von $$\vec{v}\cdot \vec{w}$$: Rechtwinkelige Projektion des Vektor $$\vec{v}$$ auf $$\vec{w}$$, dann wird die Länge der Projektion mit der Länge von $$\vec{w}$$ multipliziert.

Der Winkel $$\varphi$$ zwischen den Vektoren läßt sich mit folgender Formel über das innere Produkt berechnen:


$$
{\displaystyle {\vec {v}}\cdot {\vec {w}}=|{\vec {v}}|\,|{\vec {w}}|\,\cos \sphericalangle ({\vec {v}},{\vec {w}})}
$$
daraus:


$$
{\displaystyle \varphi =\arccos {\frac {{\vec {v}}\cdot {\vec {w}}}{|{\vec {v}}||{\vec {w}}|}}}
$$



## Matrix

Eine Matrix ist eine rechteckige Anordnung von Zahlen in Zeilen und Spalten. 
Beispiele (2$\times$2, 3$\times$2, 3$\times$4 Matrix):

$$
%
\left[
\begin{matrix}
 1 & 2 \\
 3 & 4 \\
\end{matrix} 
\right] 
%
\quad
\left[
\begin{matrix}
 1 & 2 \\
 3 & 4 \\
 4 & 5 \\
\end{matrix} 
\right] 
%
\quad
\left[
\begin{matrix}
 11 & 12 & 13 & 14\\
 21 & 22 & 23 & 24 \\
 31 & 32 & 33 & 34 \\
\end{matrix} 
\right] 
%
$$
Implementierung: durch ein 2-dimensionales Array.

Ein **Vektor** ist der Spezialfall einer **Matrix** die nur aus einer Spalte besteht. Man spricht daher auch von einem **Spaltenvektor**.

Eine Matrix kann mit einem Spaltenvektor **multipliziert** werden, das Ergebnis ist ein Spaltenvektor.


Matrix mal Vektor:

$$
\left[
\begin{matrix}
 a & b \\
 c & d \\
\end{matrix} 
\right] 
%
\cdot
\left[
\begin{matrix}
 x \\
 y \\
\end{matrix} 
\right] 
= 
\left[
\begin{matrix}
 a\cdot x + b\cdot y \\
 c\cdot x + d\cdot y \\
\end{matrix} 
\right]
$$


D.h. Das innere Produkt 
$$
\left[
\begin{smallmatrix}
 a \\
 b \\
\end{smallmatrix} 
\right] 
\cdot
\left[
\begin{smallmatrix}
 x \\
 y \\
\end{smallmatrix} 
\right] 
$$


ist die erste Zeile im Ergebnis, und
$$
\left[
\begin{smallmatrix}
 c \\
 d \\
\end{smallmatrix} 
\right] 
\cdot
\left[
\begin{smallmatrix}
 x \\
 y \\
\end{smallmatrix} 
\right]
$$
die zweite Zeile.

Die Zeilen der Matrix werden sozusagen hochgeklappt.

Die Multiplikation einer Matrix mit einer Matrix ist ähnlich. Matrix A mal Matrix B ergibt eine Matrix C. Dafür stellt man sich die Matrix B als aneinandergereihte Spaltenvektoren vor.


Matrix mal Matrix:

$$
\begin{align*} 
C &=A\cdot B \\ &= 
%
\left[
\begin{matrix}
 a_{00} & a_{01} \\
 a_{10} & a_{10} \\
\end{matrix} 
\right] 
%
\cdot
\left[
\begin{matrix}
 b_{00} & b_{01} \\
 b_{10} & b_{10} \\
\end{matrix} 
\right] 
%
\\ &= 
\left[
\begin{matrix}
 a_{00} & a_{01} \\
 a_{10} & a_{10} \\
\end{matrix} 
\right] 
%
\cdot
\left[
\begin{matrix}
  \left[\begin{matrix} b_{00} \\ b_{01} \\ \end{matrix} \right] 
  & \left[\begin{matrix} b_{10} \\ b_{11} \\ \end{matrix} \right] \\
\end{matrix} 
\right] 
%
\end{align*}
$$

Die sich ergebenden Spaltenvektoren ergeben aneinandergereiht die Ergebnismatrix $$C$$. $$C$$ ist eine Matrix die so viele Zeilen hat wie $$A$$ und so viele Spalten wie $$B$$.
Allgemein: Wenn A eine $m\times n$ Matrix und B eine $n\times k$ Matrix ist, so ist C eine $m\times k$ Matrix.

---

**Übung ():**
Implementiere Matrix mal Vektor und Matrix mal Matrix für $2\times 1$ Vektoren und $2\times 2$ Matrizen.

---





## Transformationen

In diesem Kapitel soll die Frage beantwortet werden welche praktische Bedeutung Matrizen in der Computergrafik haben.

Wendet man eine Matrix $$T$$ auf einen Punkt $$P$$ an so entsteht ein neuer Punkt $$P'$$. 
Dies nennt man Transformation, die je nach Aussehen der Matrix unterschiedliche geometrische Eigenschaften hat.

Einheitsmatrix
$$
E_2 =
    \left[\begin{matrix}
        1 & 0 \\
        0 & 1 \\
    \end{matrix} \right]
$$


Spiegeln an der x-Achse und y-Achse:
$$
   	R_x =
    \left[\begin{matrix}
        1 & 0 \\
        0 & -1 \\
    \end{matrix} \right] \quad\quad
	R_y =
    \left[\begin{matrix}
        -1 & 0 \\
        0 & 1 \\
    \end{matrix} \right]
$$


Skalieren
$$
	S(s_x,s_y) =
    \left[\begin{matrix}
        s_x & 0 \\
        0 & s_y \\
    \end{matrix} \right] 
$$


Rotieren gegen den Uhrzeigersinn um Winkel $$\varphi$$
$$
	R(\varphi) =
    \left[\begin{matrix}
        \cos \varphi & -\sin \varphi \\
        \sin \varphi & \cos \varphi \\
    \end{matrix} \right] 
$$




Scherung in x und y Richtung

$$
	Sh_x(a) =
    \left[\begin{matrix}
        1 & a \\
        0 & 1 \\
    \end{matrix} \right] \quad\quad
	Sh_y(b) =
    \left[\begin{matrix}
        1 & 0 \\
        b & 1 \\
    \end{matrix} \right] 
$$




## Homogene Koordinaten




Das Verschieben von Punkten nennt man Translation.

Ein Punkt P soll in x und in y Richtung (um $$d_x$$ bzw. $$d_y$$) verschoben werden.


$$
P=\left[ \begin{array}{c} p_x \\ p_y \end{array} \right]\quad\quad
\vec{v}=\left[ \begin{array}{c} d_x \\ d_y \end{array} \right]
$$


Die Translation kann durch Vektoraddition durchgeführt werden:

$$
Q=
P+\vec{v}=
\left[ \begin{array}{c} p_x \\ p_y \end{array} \right] + 
\left[ \begin{array}{c} d_x \\ d_y \end{array} \right] =
\left[ \begin{array}{c} p_x+d_x \\ p_y+d_y \end{array} \right]
$$




**Homogene Koordinaten**
Mit einem kleinen Trick kann die Translation auch als Matrix dargestellt werden.
Dazu erweitert man den Ortsvektor um eine dritte Koordinate und setzt diese fix auf 1.

$$
{P}=\left[ \begin{array}{c} p_x \\ p_y \\ 1 \end{array} \right]
$$

$$
{Q}=
T(d_x,d_y)\cdot {P}=
\left[ \begin{array}{ccc} 
   1 & 0 & d_x \\ 
   0 & 1 & d_y \\ 
   0 & 0 & 1
\end{array} \right]
\cdot \left[ \begin{array}{c} p_x \\ p_y \\ 1 \end{array} \right]
$$



$$T$$ nennt man die Translationsmatrix.

---

**Übung (Homogenen Koordinaten):**

Programmiere alle Transformationen mit homogenen Koordinaten.

---





## Komposition

Der Vorteil alle Transformationen als Matrix darstellen zu können liegt darin, dass mehrere Transformationsmatrizen durch Multiplikation zu einer einzigen zusammengefasst werden können.
Wenn die Transformation auf mehrere Punkte gleichzeitig angewendet werden soll, ergibt dies eine wesentliche Vereinfachung.

Beispiel:
Der Punkt $$\vec{P}$$ soll um den Punkt $$\vec{Q}$$ und den Winkel $$\theta$$ rotiert werden.

Dies kann man lösen, indem der Punkt $$\vec{Q}$$ in den Nullpunkt verschoben wird – $$\vec{P}$$ wird um den gleichen Wert mitverschoben. Dann rotiert man $$\vec{P}$$ um den Nullpunkt und verschiebt wieder zurück.

Sei $$T$$ die Translationsmatrix die $$\vec{Q}$$ in den Nullpunkt verschiebt und $$T^{-1}$$ jene, die wieder zurückverschiebt.
$$R$$ ist die Rotationsmatrix.

$$
\begin{align*}
\vec{P'} &= \vec{P}-\vec{Q} = T\cdot\vec{P} & & \text{(in den Nullpunkt)} \notag \\
\vec{P''} &= R\cdot\vec{P'} & & \text{(Rotation um Nullpunkt)} \notag \\
\vec{P'''} &= T^{-1}\cdot\vec{P''} & & \text{(zurückverschieben)} \notag \\
&= T^{-1}\cdot(R\cdot\vec{P'}) \notag \\
&=T^{-1}\cdot(R\cdot(T\cdot\vec{P}))  \notag \\
&=(T^{-1}\cdot R\cdot T)\cdot\vec{P} \notag \\
&=M\cdot \vec{P} & & \text{($M=T^{-1}\cdot R\cdot T$)} \notag \\
\end{align*}
$$

Drei Operationen werden hier zu einer einzigen Matrix zusammengefasst, diese muss **nur einmal errechnet** werden.


---

#### Übung (Rotation)

Zeichne mehrere Kreuzerl die um den Schnittpunkt rotieren.

---


#### Übung (Rotation)

Verbinde 2 Punkte durch eine Linie mit Pfeilspitzen an den Enden.
Hinweis dafür muss der Neigungswinkel eines Vektors ermittelt werden.

---


## Grafik Objekte

Ein Grafikobjekt kann durch Punkte und dazwischen gezeichnete Linien dargestellt werden, dies wird als **Drahtmodell** bezeichnet.
Dieses Objekt wird in einem lokalen Koordinatensystem definiert und dann durch Transformationen an die gewünschte Stelle des Bildschirms gebracht (Weltkoordinaten).

Eine Liste von Punkten und eine Liste von Verbindungen ist zu speichern.

Werden die Spaltenvektoren der Punkte aneinandergefügt zu einer Matrix so kann die Transformation mit einer einzigen Matrix Multiplikation erledigt werden.

---

#### Übung (Grafik Objekt)

Erstelle das Drahtmodell eines Hauses in einem lokalen Koordinatensystem.
Zeichne dieses Haus an unterschiedlichen Stellen des Bildschirms mit Hilfe von unterschiedlichen Transformationen.

---




## Bildschirmkoordinaten


Transformation: *world* $\longrightarrow$ *screen coordinates*.

Im Normalfall stimmen die Koordinaten des grafischen Modells (Weltkoordinaten) nicht mit den Bildschirmkoordinaten überein.
Insbesondere liegt bei den Bildschirmkoordinaten der Nullpunkt ganz links oben und die y Koordinaten wachsen positiv nach unten (d.h. genau umgekehrt wie im kartesischen Koordinatensystem üblich).

Grenzen der Welt-Koordinaten: $$left, right, bottom, top$$

Bildschirm-Koordinaten: $$0-maxx$$, $$0-maxy$$

Durch Verhältnisrechnung ergibt sich:

$$
x_s=\frac{maxx (x_w-left)}{right-left}
$$

$$
y_s=\frac{maxy (top-y_w)}{top-bottom}
$$



Als homogene Transformation:
$$
\left[ \begin{array}{c} x_s \\ y_s \\ 1 \end{array} \right]
=
\left[ \begin{array}{ccc} 
   H & 0  & -left\cdot H \\ 
   0 & -V & top\cdot V \\ 
   0 & 0  & 1
\end{array} \right] \cdot
\left[ \begin{array}{c} x_w \\ y_w \\ 1 \end{array} \right]
$$

$$
H=\frac{maxx}{right-left} \qquad
V=\frac{maxy}{top-bottom}
$$

Wenn das Breite zu Höhe Verhältnis von Welt- und Bildschirmkoordinaten nicht übereinstimmt so kommt es bei dieser Koordinatentransformation zu einer **Verzerrung**.





## Anhang



### Neigungswinkel eines Vektors

atan2 in C ([Link](http://www.cplusplus.com/reference/cmath/atan2/)):
```c
double atan2(double y, double x);
```

Anwendung: Bewegungsrichtung eines Objekts ist durch einen Richtungsvektor gegeben. Objekt soll in diese Richtung gedreht werden.




### Drehung im 2D Raum



Herleitung der Matrix für die Drehung um den Nullpunkt. [[Quelle](http://www.chemgapedia.de/vsengine/vlu/vsc/de/ma/1/mc/ma_11/ma_11_03/ma_11_03_02.vlu/Page/vsc/de/ma/1/mc/ma_11/ma_11_03/ma_11_03_09.vscml.html)]

Gegeben ist ein Punkt $$P$$, dieser kann in kartesischen ($$x,y$$) oder polaren Koordinaten ($$r, \phi$$) dargestellt werden:
$$
\vec{P}=\left[ \begin{array}{c} x \\ y \end{array} \right] = 
\left[ \begin{array}{c} r \cdot \cos\phi \\ r \cdot \sin\phi \end{array} \right]
$$



$$r$$ ist der Abstand vom Nullpunkt.

Drehung um den Ursprung nach links (gegen Uhrzeigersinn) um den Winkel $$\theta$$ (Theta):

$$
\vec{P'}=\left[ \begin{array}{c} x' \\ y' \end{array} \right] = 
\left[ \begin{array}{c} r \cdot \cos (\phi+\theta) \\ r \cdot \sin (\phi+\theta) \end{array} \right]
$$

Darauf die Summensätze:

$$
\begin{split}
\cos (\phi+\theta) &= 
     \cos\phi \cdot \cos\theta
   - \sin\phi \cdot \sin\theta\\
\sin (\phi+\theta) &= 
     \sin\phi \cdot \cos\theta
   + \cos\phi \cdot \sin\theta
\end{split}
$$
angewendet ergibt:
$$
\begin{align*}
\vec{P'}&=\left[ \begin{array}{c} x' \\ y' \end{array} \right] = 
\left[ \begin{array}{c} r \cdot \cos (\phi+\theta) \\ r \cdot \sin (\phi+\theta) \end{array} \right]\\ &=
\left[ \begin{array}{c} 
   r \cdot \cos\phi \cdot \cos\theta
      - r \cdot \sin\phi \cdot \sin\theta \\ 
   r \cdot \cos\phi \cdot \sin\theta
      + r \cdot \sin\phi \cdot \cos\theta
\end{array} \right]
\end{align*}
$$


Mit Formel 
$$
\vec{P}=\left[ \begin{array}{c} x \\ y \end{array} \right] = 
\left[ \begin{array}{c} r \cdot \cos\phi \\ r \cdot \sin\phi \end{array} \right]
$$
bringt man das $r$ und $\phi$ weg:
$$
\left[ \begin{array}{c} x' \\ y' \end{array} \right] = 
\left[ \begin{array}{c} 
   x \cdot \cos\theta
      - y \cdot \sin\theta \\ 
   x \cdot \sin\theta
      + y \cdot \cos\theta
\end{array} \right]
$$
Mit Hilfe dieser Formel können aus den Koordinaten des Ausgangspunkts $$\vec{P}$$ und dem Drehwinkel $$\theta$$ die Koordinaten des gedrehten Punktes $$\vec{P'}$$ berechnet werden.

In Matrix/Vektor Schreibweise:

$$
\left[ \begin{array}{c} x' \\ y' \end{array} \right] = 
\left[ \begin{array}{cc} 
   \cos\theta & - \sin\theta \\ 
   \sin\theta & \cos\theta
\end{array} \right]
\left[ \begin{array}{c} x \\ y \end{array} \right]
$$


Dies nennt man die Rotationsmatrix (mit dem Winkel $$\theta$$).




### Formelsammlung



Vektor umdrehen: 
$$
-\vec{v}
$$


Inneres Produkt, Länge eines Vektors.
$$
	\left|\vec{v}\right|=\sqrt{\vec{v}\cdot\vec{v}}
$$


​	


Inneres Produkt, zwei Vektoren orthogonal zueinander:

$$
\vec{v}\cdot\vec{w}=0
$$



Inneres Produkt, Winkel zwischen zwei Vektoren:

$$
\cos\varphi=\frac{\vec{v}\cdot\vec{w}}{\left|\vec{v}\right| \left|\vec{w}\right|}
$$



Inneres Produkt, Länge der Projektion ($\vec{u}$) von $\vec{w}$ auf $\vec{v}$, wenn $\left|\vec{v}\right|=1$ (Einheitsvektor):

$$
\left|\vec{u}\right|=\vec{v}\cdot\vec{w}
$$


[Kreuzprodukt](http://de.wikipedia.org/wiki/Kreuzprodukt) (nur 3D) $\vec{v}\times\vec{w}$ ergibt einen Vektor im rechten Winkel auf die durch die beiden Vektoren aufgespannte Ebene. Der Betrag des Kreuzprodukts entspricht der Fläche des aufgespannten Parallelogramms.
$$
	\left|\vec{v}\times\vec{w}\right|=\left|\vec{v}\right|\left|\vec{w}\right|\left|\sin\varphi\right|
$$


$$\varphi$$ ist der Winkel zwischen den Vektoren.
The result of $$\vec{v}\times\vec{w}$$ points in the same direction a screw must point if twisting from $$\vec{v}$$ to $$\vec{w}$$ drives it into the wood. 

Drehung 90 Grad nach links
$$
\left[ \begin{array}{cc} 
   0 & -1 \\ 
   1 &  0
\end{array} \right]\cdot
\left[ \begin{array}{c} x \\ y \end{array} \right]
=
\left[ \begin{array}{c} -y \\ x \end{array} \right]
$$
Drehung 90 Grad nach rechts
$$
\left[ \begin{array}{cc} 
   0 & 1 \\ 
   -1 &  0
\end{array} \right]\cdot
\left[ \begin{array}{c} x \\ y \end{array} \right]
=
\left[ \begin{array}{c} y \\ -x \end{array} \right]
$$


## Quellen

Ausführliches Tutorial: [Link](http://chortle.ccsu.edu/vectorlessons/vectorIndex.html)

Ein paar Details [Link](http://www.jimbrooks.org/web/opengl/tutorials/)

