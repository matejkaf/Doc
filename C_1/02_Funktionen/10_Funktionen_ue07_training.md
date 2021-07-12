---
title: Funktionen
subtitle: Trainingsaufgaben III
description: challenge
tags: [assignment,c,funktionen,challenge,C_1]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

#### Übung (Zweier-Logarithmus)

Schreibe eine Funktion `log()` die einen `int`-Wert übergeben bekommt und die ermittelt wie oft 2 mit 2 multipliziert werden muss damit das Endergebnis größer oder gleich dem Übergabewert wird.  Rückgabewert ist die Anzahl der zu multiplizierenden Zweier.

Beispiele: `log(17) = 5`, `log(16) = 4`



---

#### Übung (Quadratzahl)

Jede Quadratzahl $$n^2$$ ist immer eine Summe von ungeraden Zahlen.

 Beispiel: $$1+3+5+7=16=4^2$$. Das bedeutet 16 ist eine Quadratzahl weil die Summer der ersten 4 ungeraden Zahlen genau 16 ergibt. Die Anzahl der zu summierenden ungeraden Zahlen ist die Basis fürs quadrieren.

Wenn man wissen will ob 100 eine Quadratzahl ist und welche Zahl zum Quadrat 100 ergibt so summiert man alle ungeraden Zahlen bis die Summe genau 100 ergibt. Also 

$$1+3+5+7+9+11+13+15+17+19$$

Da genau 10 ungerade Zahlen addierten werden mussten weiß man nun dass $$10^2=100$$ ist.

Ist die gegebene Zahl keine Quadratzahl, z.B. $$95$$ dann geht sich die Summe nicht genau aus

$$1+3+5+7+9+11+13+15+17=81$$

und

$$1+3+5+7+9+11+13+15+17+19=100$$

In diesem Fall kann man aufhören da $$100>95$$ ist, und man weiß, dass 95 keine Quadratzahl ist.

Schreibe eine Funktion die von einer als Parameter übergebenen `int` Zahl prüft, ob es sich um eine Quadratzahl handelt. Die Funktion soll die Quadratbasis zurückgeben (d.h. die Anzahl der Additionen) oder $$0$$ falls es sich um keine Quadratzahl handelt.

Hinweis: Summiere in einer Schleife in aufsteigender Reihenfolge die ungeraden Zahlen. Ergibt diese Summe **genau** die zu prüfende Zahl, handelt es sich um eine Quadratzahl. Wenn die Summe jedoch größer als die Zahl wird (ohne genau gleich dieser Zahl zu werden) so ist diese Zahl keine Quadratzahl. 



---

#### Übung (Quersumme)

Bei der Quersumme handelt es sich um die Summe der einzelnen Ziffern einer mehrstelligen Zahl. Beispiel: Die Quersumme von 251 ist 8, da `2 + 5 + 1 = 8`.

Hinweis: Die Einerstelle einer Zahl `z` erhält man durch `z%10` (Rest der der Division durch 10). Weiters wird durch `z/10` die Einerstelle entfernt und alle anderen Stellen rücken um eins nach rechts (z.B. wird aus der Zehnerstelle die Einerstelle).



---

#### Übung (Primzahlen)

Eine Primzahl ist eine ganze positive Zahl größer 0 die nur durch 1 oder sich selbst ohne Rest geteilt werden kann. Ein gegebene Zahl kann auf Prim-Eigenschaft getestet werden indem geprüft wird ob es irgendeine Zahl zwischen 1 und der Zahl selbst gibt die die Zahl teilt.  Gibt es keine Teiler-Zahl so handelt es sich um eine Primzahl. Gibt es allerdings auch nur eine solche Teiler-Zahl so ist die Ausgangszahl keine Primzahl. 

Beispiel: Um festzustellen, dass 7 eine Primzahl ist probiert man alle Zahlen von 2 bis 6 durch ob eine dieser Zahlen ein Teiler von 7 ist. Da kein Teiler gefunden werden kann ist 7 eine Primzahl. Wird die Zahl 9 auf Prim-Eigenschaft getestet so werden die Zahlen 2 bis 8 geprüft, allerdings stellt man bei 3 schon fest dass dies ein Teiler von 9 ist und kann aufhören (9 ist daher keine Primzahl).

Hinweis: Eine Zahl `a` ist dann durch eine Zahl `b` teilbar wenn der Rest der Division 0 ergibt d.h. `a%b==0`

Aufgabenstellungen:

- Schreibe eine Funktion die von einer übergebenen `int` Zahl prüft ob diese eine Primzahl ist. Rückgabe ist `int`, 1 ... Primzahl, 0 ... keine Primzahl. 719, 2383, 9059, 9973 sind Beispiele für Primzahlen.
- Schreibe eine Funktion die eine Obergrenze als Parameter übergeben bekommt.
  Die Funktion soll alle Primzahlen von 2 bis zur Obergrenze (inklusive) zählen und die Anzahl als return Wert zurückgeben. Hinweis: Die Anzahl der Primzahlen bis 10000 ist 1229.