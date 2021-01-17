---
title: Doc
type: assignment
cmds: ['md_html.bash --small']
---

# if Anweisungen (Übungen)

**Übung (Verketten)**

Einteilung Körpergrößen in 4 Stufen:

- XS unter 80
- S ab 80
- M ab 100
- L ab 150

Schreibe ein Programm das nach Eingabe der Körpergrößen die entsprechende Stufe (XS, S, M oder L) ausgibt. Verwende eine verkettete if Anweisung – keine Vergleichsoperatoren und keine Verschachtelung.

---

**Übung (Notenermittlung):**
Noten werden häufig über erreichte Prozent ermittelt. Ein Schüler kann zwischen 0 und 100% erreichen. Unter 50% ist die Note negativ. Darüber werden die Noten 1–4 in Schritten von 12,5% vergeben. Z.B. Ab 50% und unter 62,5% ist die Note ein genügend.

Schreibe ein Programm das die Eingabe der Prozent als Kommazahl ermöglicht. Gib danach aus ob die Note **negativ oder positiv** ist. Ist die Noten positiv so gibt zusätzlich die erzielte **Note** aus.

Löse mit Hilfe **verketteter if-Anweisungen** (keine logischen Operatoren verwenden).

**Anleitung**: Prüfe zuerst ob die Note negativ ($<50$) ist. Wenn ja: `negativ` ausgeben und fertig. Wenn nein: positiv ausgeben und weiters überprüfen ob die Note genügend ($<62.5$) ist. Wenn ja:  `genügend` ausgeben und fertig. Wenn nein: Überprüfen ob die Note befriedigend ($<75.0$) ist. Und so weiter. Achtung: Die Reihenfolge der Überprüfungen ist wichtig – Überlege warum.



---

**Übung (Alter):**
Das Allgemeine Bürgerliche Gesetzbuch (ABGB) unterscheidet vier Altersstufen:

- bis 6 Jahre ist man **Kind**,
- ab 7 bis 14 Jahren **unmündige/r Minderjährige/r**,
- ab 15 bis 17 Jahren **mündige/r Minderjährige/r** (d.h. man ist strafbar) und
- mit dem 18. Geburtstag wird man **Volljährig/er** und damit voll handlungsfähig.

Aufgaben:

- Schreibe ein Programm, das nach einer erfolgten Eingabe des Geburtsjahres das Alter ausgibt (das in diesem Jahr erreicht wird) und außerdem die Altersstufe ermittelt. 
- **Erweiterung:** zusätzlich kann das Geschlecht eingegeben werden (1 für weiblich und 2 für männlich).
Die Ausgabe soll dann geschlechtsspezifisch erfolgen: 
`mündige Minderjährige` bzw.\ `mündiger Minderjähriger`.



---

