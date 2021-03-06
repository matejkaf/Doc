---
title: Doc
tags: [assignment, c, funktionen ]
---

# Nim-Spiel

Das **Nim-Spiel** ist ein Spiel für zwei Personen. 

- Gegeben ist ein Haufen von 13 gleichartigen Gegenständen (z.B. Streichhölzer). 
- Abwechselnd nimmt eine Personen 1, 2 oder 3 Streichhölzer. 
- Derjenige, der den Haufen leer räumt, hat gewonnen. Ein Streichholz muss mindestens genommen werden.

Statt der Streichhölzer kann man auch Münzen, Spielkarten, Bierdeckel oder andere gleichartige Gegenstände verwenden.
([Wikipedia](http://de.wikipedia.org/wiki/Nim-Spiel))



---

**Übung (Nim Spiel):**

Schreibe eine Funktion `spiele` (ohne Parameter, mit `int` als Rückgabewert). Implementiere in dieser Funktion den Ablauf des Nim Spiels.  Es sind abwechselnd der Spieler 1 und der Spieler 2 am Zug. Der Rückgabewert der Funktion ist die Nummer des Spielers der gewonnen hat (1 oder 2). Verwende den Rückgabewert um im Hauptprogramm den Sieger auszugeben.

Beachte:

- Mindestens ein Streichholz muss genommen werden.
- Es ist nicht möglich mehr als drei Streichhölzer zu nehmen.
- Es können nicht mehr Streichhölzer genommen werden als noch vorhanden sind.
- Es soll erkannt werden wer der beiden Spieler gewonnen hat (Keine Ausgabe, nur Rückgabewert).
- Jedes Streichholz soll durch ein `'|'` Zeichen dargestellt werden.
- Programmiere sinnvolle Texte als Benutzerhinweise für den Spielablauf.



Beispiel für Spielablauf:


```
=== Willkommen zum Nim Spiel ===

||||||||||||| (13)
Spieler 1: 2
||||||||||| (11)
Spieler 2: _
```



---

**Übung (Nim Spiel – Parameter):**

Gestalte das Spiel durch Funktionsparameter variabler:

```c
int spiele(int start, int max);
```

Parameter:

- `start`: Anzahl der Streichhölzer am Anfang.
- `max`: Anzahl der Streichhölzer die maximal genommen werden dürfen.



---

**Übung (Nim Spiel – Menü):**
Programmiere ein Menü zur Bedienung des Spiels:

```
*======================================
* Nim-Spiel
*   a .. Anzahl der Streichhölzer (13)
*   m .. Maximale Entnahme (3)
*   s .. Spielen
*   e .. Programm beenden
*======================================
Deine Wahl: _
```

Nach Abarbeiten eines Menüpunkts soll das Menü wieder angezeigt werden. Anfangs ist die Anzahl der Streichhölzer 13 und es dürfen max. 3 auf einmal genommen werden. Beide Werte können vom Anwender aber geändert werden.

Nimm folgendes Haupt-Programm als Startpunkt:

```c
char taste;
int nimstart=13;
int nimmax=3;
	
do {
	// ...
} while(taste!='e');
```


**Tipps zur Implementierung**

Halte den Programmtext in `main()` so kurz und übersichtlich wie möglich.  

Implementiere die folgenden Funktionen:

```c
char menue(int start, int max);
int inputStart();
int inputMax();
```

- Die Funktion `menue()` gibt den Menütext aus und wartet auf die Benutzerauswahl. 
Die gedrückte Taste wird von der Funktion als Rückgabewert zurückgeliefert.
-  Je nach gedrückter Taste werden nun die anderen Funktionen aufgerufen. 
Verwende zur Abfrage des Tastencodes eine `switch` Anweisung.
-  Die Funktion `inputStart()` dient zur Eingabe der Anzahl von Streichhölzern mit denen gestartet werden soll. 
Der Rückgabewert ist der vom Anwender eingegebene neue Startwert.
-  Die Funktion `inputMax()` dient zur Eingabe der maximalen Entnahmeanzahl von Streichhölzern in einem Zug. Der Rückgabewert ist die vom Anwender eingegebene neue maximale Entnahmezahl.



---

**Übung (Computergegner):**
Ein Spieler soll vom Computer übernommen werden, mache über das Menü einstellbar welcher. 

Implementiere verschiedene, einstellbare Schwierigkeitsstufen.

- [Stufe 1]  Der Computerzug wird zufällig gewählt (muss aber gültig sein).
- [Stufe 2]  Der Computer prüft ob er in diesem Zug gewinnen kann, ansonsten wird zufällig gezogen.
- [Stufe 3]  Der Computer prüft zusätzlich ob er im nächsten Zug gewinnen kann. Im nächsten Zug kann man garantiert genau dann gewinnen wenn nach dem aktuellen Zug (`nimmax+1​`) Hölzer übrigbleiben. 
- [Stufe 4] Es gibt eine optimale Spielstrategie wenn der Spieler seinen Zug so ausführt, dass genau ein Vielfaches von (`nimmax+1`) übrigbleibt. Für den anderen Spieler entsteht dann beim letzten Zug ein Haufen mit genau (`nimmax+1`) Hölzern und dieser kann daher seine Niederlage nicht mehr verhindern.

Hinweise für das Programm:

```c
int inputGegner();
int inputSchwierigkeit();
int gegner=0; // 0-kein Computergegner
int schwierigkeit=1;
```



---

**Übung (Variante):**
Eine Variante des Spiels ist, dass derjenige der das letzte Streichholz nimmt verliert (nennt man auch Misère – französisch --- auf deutsch etwa ein "Bettler-Spiel"). Zwischen der Original und der Misère-Variante soll über das Menü gewählt werden können.

Es soll auch bei der Misère-Variante möglich sein gegen den Computer zu spielen.

Hinweise für das Programm:

```c
int inputMisere();
int misere=0; // 1 um Misere einzuschalten
```

---


