---
title: Übungen
subtitle: Schleifen Challenges
tags: [assignment,challenge]
---

#### Übung (Exponentielles Wachstum)

Ein exponentielles Wachstum liegt dann vor wenn sich eine Größe innerhalb eines festen Zeitraums (z.B. 1 Tag) um einen konstanten Multiplikations-Faktor (z.B. 2) erhöht.

Beispiel:

```
Startwert: 10
Faktor: 2
0. → 10
1. → 20
2. → 40
3. → 80
4. → 160
5. → 320
...
```

Die Verbreitung von Infektionskrankheiten wie COVID-19 ist z.B. exponentiell.

Wir nehmen folgenden Ausschnitt aus den österreichischen Morgenmeldungen (Anzahl der positvien Tests)

```
2021-11-02T08:00:00+01:00;10;Österreich;838564
2021-11-03T08:00:00+01:00;10;Österreich;846297
...
2021-11-16T08:00:00+01:00;10;Österreich;982111
2021-11-17T08:00:00+01:00;10;Österreich;994995

```

Vom 3.–16.11. gilt in Österreich ein "Lockdown light", ein Zweiter „harter Lockdown“ ist von 17. November bis 6. Dezember 2020. Am 16.11. sind 135.814 Personen an COVID-19 erkrankt, nehmen wir an jene die am 02.11. neu erkrankten werden am 17.11 wieder gesund dies sind 7.733 Personen. Am 17.11. kommen 12.884 neu Positive hinzu das ergibt ein Wachstum an 12.884-7.733=5151 Personen. 

Die Wachstumsrate ist daher zu diesem Zeitpunkt (135814+5151)/135814=1,0379268706

d.h. ungefähr **3,8% pro Tag**, das erscheint nicht viel zu sein – oder? Warum also am 17.11. ein harter Lockdown?

Finde durch ein Programm heraus wie lange (in Tagen) es nach dem 17.11. gedauert hätte bis 1 Mio. Menschen gleichzeitig infiziert wären? D.h. wie oft muss man 135814 mit 1,0379268706 multiplizieren bis sich eine Zahl größer als 1000000 ergibt?

---


#### Übung (Rauf- und runter)

Schreibe ein Programm, welches von 1 bis 10 hochzählt und danach wieder zu 1 herunterzählt. Das Programm darf aber nur **eine einzige** Schleife enthalten.

---


#### Übung (Fibonacci)

Schreibe ein Programm das die sogenannten Fibonacci-Zahlen bis zu einer einzugebenden Höchstgrenze am Bildschirm ausgibt. Eine Fibonacci-Zahl wird als Summe der beiden vorhergehenden Fibonacci-Zahlen gebildet. Die erste und die zweite Fibonacci-Zahl sind gleich eins. Zahlenfolge: `1 1 2 3 5 8 13 21 ...`

---


#### Übung (Bits)

Schreibe ein Programm das die Eingabe einer ganzen Zahl erfordert. Halbiere diese Zahl so lange bis 0 herauskommt. Zähle mit wie oft das halbieren erforderlich war und gib diese Anzahl aus.

Hinweis: Dies ermittelt die Anzahl der Bits die zur Darstellung einer Zahl notwendig wären.

Teste:

- 7 → 3 Bits,
- 8 → 4 Bits,
- 255 → 8 Bits,
- 256 → 9 Bits.

---

#### Übung (Ziffernsumme)

Schreibe ein Programm, das von einer eingegeben `int` Zahl die Ziffernsumme ermittelt. Für 4711 ist diese zum Beispiel 13.

---

#### Übung (Raute)
Stelle eine Raute (nennt man auch Rhombus) dar. Die Breite der Raute wird eingegeben, damit es sich auf ein einzelnes Sternchen an der Spitze ausgeht, muss die Breite eine ungerade Zahl sein, prüfe das bei der Eingabe.

```
Breite: 7
    *
   ***
  *****
 *******
  *****
   ***
    *
```


Erweiterung: es soll nur der Umriss der Raute ausgegeben werden:

```
Breite: 7
    *
   * *
  *   *
 *     *
  *   *
   * *
    *
```

---


#### Übung (Geburtstagsparty)

Familie Müller ist zu einer Geburtstagsfeier eingeladen. Leider können sich die Familienmitglieder (Anton, Berta, Claus und Doris) nicht einigen, wer hingeht und wer nicht. In einer gemeinsamen Diskussion kann man sich jedoch auf die folgenden Grundsätze verständigen:

- Mindestens ein Familienmitglied geht zu der Feier.
- Anton geht auf keinen Fall zusammen mit Doris.
- Wenn Berta geht, dann geht Claus mit.
- Wenn Anton und Claus gehen, dann bleibt Berta zu Hause.
- Wenn Anton zu Hause bleibt, dann geht entweder(!) Doris oder Claus.


Hilf Familie Müller, indem Du ein Programm erstellst, das alle Gruppierungen ermittelt, in denen Familie Müller zur Feier gehen könnte. Wie viele Möglichkeiten gibt es insgesamt?

Tipp: 

- Definiere Variablen `anton`, `berta`, `claus` und `doris`.
- Diese Variablen haben den Wert 0 wenn die Person nicht mitgeht bzw. 1 wenn sie mitgeht.
- Erstelle alle möglichen Kombinationen dieser Variablenwerte und prüfe jede darauf ob **alle** obigen Grundsätze erfüllt sind.

---


#### Übung (Radioaktiver Zerfall)

Die Halbwertszeit eines radioaktiven Stoffes ist die Zeitspanne die vergehen muss bis nur mehr die Hälfte der ursprünglichen Masse "`strahlt"'. Ermittle wie lange es dauert bis die Strahlung auf unter 1% des Ursprungwerts abgefallen ist. Nimm als Beispiel die folgenden Halbwertszeiten:
Plutonium 24110 Jahre / Caesium 30 Jahre / Radon 3,8 Tage (Quelle: [wikipedia: Halbwertszeit](http://de.wikipedia.org/wiki/Halbwertszeit)).

---

#### Übung (Millionär)
Schreibe ein Programm, welches errechnet, nach wie vielen Jahren man Millionär geworden
ist, wenn man einen beliebigen Betrag zu einem bestimmten Zinssatz verzinst. Programmiere dazu eine Schleife, die beendet wird, wenn die Bedingung (Millionär) erfüllt wird.

Beispiel: Ermittle wie lange es dauert bis du Millionär geworden bist wenn du EUR 100.000,-- mit 5\% auf ein Konto legst. Wie lange dauert es bei 10%?

---

#### Übung (Zinstabelle)

Es werden 1000 Euro auf ein Konto gelegt das mit 5% pro Jahr verzinst wird. Die Wertentwicklung soll für 10 Jahre, mit Hilfe einer Schleife, dargestellt werden. Ausgabe:

```
0 1000.0
1 1050.0
2 1102.5
...
```

Hinweis: Es ist nicht notwendig für jedes Jahr die Zinsenszinsformel anzuwenden, es genügt das Kapital immer wieder um den angegebenen Zinsbetrag zu erhöhen.

Erweiterungen:

- Gib zusätzlich für jedes Jahr die Wertsteigerung aus. Achte auf gut lesbare Formatierung.
```
0 1000.0
1 1050.0 (  50.0)
2 1102.5 (  52.5)
...
```
- Die Werte für Anfangskapital, Jahre und Zinssatz sollen eingegeben werden können. 
Ergänze eine Option (mit einem Menü) die ermittelt wie viele Jahre das Kapital angelegt werden muss um ein gewünschtes Ergebnis zu erzielen.

---



#### Übung (Dual)

Schreibe ein Programm, welches einen 1-Byte-Wert (0..255) in eine `int`-Variable von der Tastatur einliest und als Dualzahl in Textform ausgibt. Überlege wie Du die Werte der einzelnen Bits ermitteln kannst!
Beispiel: Eingabe: 150 → Ausgabe 10010110

---

#### Übung (Primzahl)

Schreibe ein Programm, dass eine positive, ganze Zahl einliest und ermittelt ob diese eine Primzahl ist. Eine Primzahl ist eine Zahl die durch genau 2 Zahlen teilbar ist: durch 1 und sich selbst.
Ermittle weiters die Anzahl der Primzahlen zwischen 2 und 10000.

---

#### Übung (Primfaktoren)
Schreibe ein Programm, dass eine positive, ganze Zahl einliest und diese in ihre Primfaktoren zerlegt.

---

#### Übung (Primitive pythagoreische Tripel)

Ein Pythagoreisches Tripel ([wikipedia: Pythagoreisches Tripel](https://de.wikipedia.org/wiki/Pythagoreisches_Tripel)) sind natürliche Zahlen a, b und c die die Formel des Pythagoras erfüllen:
a²+b²=c²

Primitive Tripel haben keinen gemeinsamen Teiler:

- (3,4,5)
- (5,12,13)
- (8,15,17)

Nicht primitive Tripel: 

- (15,20,25) – durch 5 teilbar
- (15,36,39) - durch 3 teilbar

Schreibe ein Programm das durch Durchprobieren aller Möglichkeiten alle Pythagoreische Tripel mit c<300 ausgibt.

- Vermeide doppelte Ausgaben, Bsp. (5,4,3) entspricht (3,4,5)
- Beschränke die Ausgabe auf Primitive Tripel

---
