---
title: Doc
tags: [assignment,challenge]
---

# Challenges – Arrays – Münzen werfen


#### Übung (Münzwürfe – Bernoulli Experiment)

Wenn Du eine Münze wirfst so erhältst Du "Kopf" oder "Zahl", mit jeweils gleicher Wahrscheinlichkeit. Stell Dir vor Du wirfst die Münze 20 Mal und zählst wie oft "Kopf" auftritt, dies wird zwischen 0 und 20 sein (21 Möglichkeiten).

Beispiel:

- Kopf: 8 Mal
- Zahl: 12 Mal

In der Mathematik nennt man das ein Bernoulli-Experiment (nach dem Mathematiker Jakob I. Bernoulli).

Wiederhole den Versuch (20 Münzwürfe und die Köpfe zählen) 1000 Mal. Zähle am Ende jedes Versuchs mit wie oft sich eine gewisse Kopfanzahl ergeben hat. Als Ergebnis bekommst du 21 Zahlen:

```
 0 × Kopf: 0
 1 × Kopf: 1
 2 × Kopf: 4
 ...
19 × Kopf: 3
20 × Kopf: 1
```

Schreibe dazu ein Programm:

- Gib die sich ergebenden 21 Zahlen aus.
- Gib das Ergebnis als horizontale Balken aus – verwende für je 10 Vorkommen ein Sternchen (`'*'`).

Diese Art der Darstellung wird Histogramm genannt. Als Ergebnis erhält man die sogenannte Binomialverteilung (auch Gaußsche Glockenkurve).

- Verbessere die Ausgabe: suche den größten Wert (max), dieser soll als eine Folge von 25 Sternchen (`'*'`) dargestellt werden. Passe die Länge der anderen Balken proportional an.
- Nun nimm statt der Münze einen Würfel und zähle wie oft eine Augenzahl zwischen 1 und 4 vorkommt.
Die Wahrscheinlichkeit dafür ist: p=4/6=2/3$.
Beobachte die Änderungen und probiere andere Augenzahlen.
- Mache die Anzahl der Versuche veränderbar (z.B.: Variable `versuche=2000`).
- Verwende als Wahrscheinlichkeit den Wert 1/versuche. Beispielsweise wenn `versuche=2000` so ergibt von 2000 Würfen nur einer das gewünschte Ergebnis.

Als Ergebnis erhältst Du die Poisson-Verteilung ("Verteilung der seltenen Ereignisse").

---


