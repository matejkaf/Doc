---
title: Problem des Josephus
subtitle: Übung
tags: [assignment,C_2]
---

#### Übung (Problem des Josephus)

Das Problem des [Flavius Josephus](http://de.wikipedia.org/wiki/Josephus-Problem) dieser versteckt sich 67 n. Chr. beim Kampf um die galiläische Stadt Jotapata mit 40 weiteren Männern in einer Höhle vor den Römern. Als das Versteck verraten wurde, sicherten die Römer Josephus freies Geleit zu, wenn er das Versteck verlässt. Seinen Gefolgsleuten passte das nicht sie wollten lieber sterben, als den Römern in die Hände zu fallen. Daraufhin machte Josephus den Vorschlag eines kollektiven Suizids, in dem sich alle im Kreis aufstellen und jeder 3. durch seinen rechten Nachbarn getötet werden sollte.

**Aufgabe:** Josephus und ein Komplize wollen überleben, ermittle an welcher Stelle die beiden sich anfangs aufstellen müssen damit sie als Letzte übrigbleiben?

Programmiere für eine beliebige Anzahl von Personen.


**Beispiel** für 8 Personen:

```
1 2 3 4 5 6 7 8
1 2 x 4 5 6 7 8
1 2   4 5 x 7 8
x 2   4 5   7 8
  2   4 x   7 8
  x   4     7 8
      4     7 x
```
Die Überlebenspositionen sind 4 und 7.



**Lösungsmöglichkeit 1 – mittels dynamisch allokierten Arrays:** Dieses enthält Anfangs: `[1 2 3 4 5 6 7 8]` im ersten Schritt wird ein neues um eins kürzeres Array allokiert und alles bis auf die "entfernte" Person umkopiert. Es ergibt sich dann: `[1 2 4 5 6 7 8]`. Wiederhole so lange bis das Array nur mehr 2 Element hat.

**Lösungsmöglichkeit 2 – mittels einer zu einem Ring verlinkten Liste:**

```c
struct Person
{
	int nr; // Personennummer
	Person* pNext;
};
```