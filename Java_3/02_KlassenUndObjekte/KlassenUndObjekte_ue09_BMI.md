---
title: Body Mass Index – Übung Klassen
tags: [assignment,java, oop]
use_math: true
---

#### Übung (Body Mass Index – BMI)

Der Body Mass Index wird nach folgender Formel berechnet:

$BMI [kg/m^2] = M/L^2$

wobei $M$ die Körpermasse (in Kilogramm) und $L$ die Körpergröße (in Metern) angibt.

Schreibe:

- eine Klasse `Person` mit Instanzvariablen für Name, Gewicht und Größe
- eine Methode zur Berechnung des BMI (return Wert)
- eine toString Methode nach dem Schema:
  `Mustermann 72kg 180cm -> BMI: 21.736505252988767kg/qm`
- Instanziere mehrere Objekte dieser Klasse



---

#### Übung (Erweiterungen)

Schreibe eine Methode die ausgibt ob eine Person Unter-, Normal oder Übergewichtig ist. Ein Wert von $18,5-25,0$ gilt als Normalgewicht, kleinere Werte bedeuten Untergewicht, größere Übergewicht.



---

#### Übung (Untergroß)

Manchmal bezeichnet man sich nicht als zu schwer sondern als "untergroß". Warum ist klar, wenn man größer wäre dürfte man auch mehr wiegen.

Schreibe eine Methode die die Körpergröße so korrigiert, dass der BMI von einem höheren Wert auf $25,0$ fällt.

Ist der BMI im Normbereich oder zu klein soll die Körpergröße unverändert bleiben.



---

#### Übung (Geschlecht)

Männer haben in der Regel einen etwas höheren Anteil von Muskelmasse an der Gesamtkörpermasse als Frauen. Laut Deutscher Gesellschaft für Ernährung ist das Normalgewicht bei Männern im Bereich $20-25 kg/m^2$, und bei Frauen $19-24 kg/m^2$ (.Quelle: wikipedia)

Berücksichtige dies bei der Bewertung des BMI.

Hinweis: Verwende zur Darstellung des Geschlechts eine `char` Instanzvariable mit den Werten `'m'` und `'w'`.

