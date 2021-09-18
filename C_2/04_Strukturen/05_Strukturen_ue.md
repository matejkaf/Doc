---
title: Strukturen
subtitle: Übungen – Body Mass Index
tags: [C_2, assignment, c, structure ]
use_math: true
---

#### Übung (Body Mass Index – BMI)

Der Body Mass Index wird nach folgender Formel berechnet:

$BMI=M/L^2$$

wobei $M$ die Körpermasse (in Kilogramm) und $L$ die Körpergröße (in Metern) angibt.

Schreibe:

- eine Struktur `Person` mit Variablen für Name, Gewicht und Größe,
- Funktionen zur 
  - Eingabe,
  - Ausgabe und
  - Berechnung des BMI.

---

#### Übung (Erweiterungen)
Schreibe eine Funktion die ausgibt ob eine Person Unter-, Normal oder Übergewichtig ist. Ein Wert von $18.5-25.0$ gilt als Normalgewicht, kleinere Werte bedeuten Untergewicht, größere Übergewicht.

---

#### Übung (Geschlecht)

Männer haben in der Regel einen etwas höheren Anteil von Muskelmasse an der Gesamtkörpermasse als Frauen. Laut Deutscher Gesellschaft für Ernährung ist das Normalgewicht bei Männern im Bereich $20-25 kg/m^2$, und bei Frauen $19-24 kg/m^2$ (Quelle: wikipedia)

Berücksichtige dies bei der Bewertung des BMI.

---

#### Übung (Mehrere Personen)

Erweitere das Programm (mit Hilfe eines Arrays) so dass zuerst bis zu 10 Personen (oder auch weniger) eingegeben werden können. Danach sollen alle Personenname mit dem Hinweis Unter-, Normal oder Übergewichtig wieder ausgeben werden. Zusätzlich soll ausgeben werden wie viel die Person zu bzw. abnehmen müsste um in den Normalbereich zu kommen.
