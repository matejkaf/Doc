---
title: Doc
tags: [c,strings,assignment]
---

# Hangman

Wir wollen Schritt für Schritt das Spiel "Hangman" programmieren.


```
=== Hangman ===
p_o__a__ie_e_
Noch 2 Versuche
Buchstabe: 
===============
```


**Übung (Hangman – Start):**

Ein zu erratendes Wort wird eingegeben. 
Danach kann man durch Drücken von Tasten Buchstaben raten. 
Buchstaben die im Wort vorkommen werden dabei aufgedeckt.

Schrittweise Anleitung:

- Im String `text` wird das zu ratende Wort vorgegeben (`char text[30]="geheim"`).
- Nun brauchen wir einen zweiten String für die Ausgabe der bereits erratenen Buchstaben
(`char rate[30]`).
Da noch kein Buchstabe erraten wurde schreiben wir `'_'` in den String und zwar genau so viele wie der zu ratende Text lang ist.
- Ergänze um eine Tastaturabfrage für einen Buchstaben (`taste=getch()`).
Teste ob dieser Buchstabe in `text` vorkommt, falls ja muss der entsprechende Buchstabe in `rate` aufgedeckt werden.
Beispiel:
```c
taste: 'a'
text:  "Braunau"
rate:  "__a__a_"
```

Wiederhole dies in einer Schleife.

---

**Übung (Hangman – Wort erraten):**
Nun muss erkannt werden ob das Wort fertig erraten wurde.
Das Wort ist erraten wenn im String `rate` keine `'_'` Zeichen mehr sind. 

Tip: Schreibe dazu eine Funktion die zählt wie oft ein Zeichen vorkommt und baue diese ins Programm ein.

---

**Übung (Hangman – Verdeckte Eingabe)**

Schreibe eine Funktion mit der das zu ratende Wort (verdeckt wie bei einem Passwort) eingegeben werden kann. Ergebnis im String `text`.

---

**Übung (Hangman – Anzahl von Versuchen):**

Nach 10 erfolglosen Versuchen ist das Spiel verloren, verwende die Variable `int versuche=10`. 
Zeige die Anzahl der noch verfügbaren Versuche an.

Tip: Zähle wie oft der eingegeben Buchstabe gefunden wurde. Bei 0 war der Versuch erfolglos.

---

**Übung (Hangman – Erweiterungen):**

Mögliche Erweiterungen:

- Es soll nicht zwischen Groß- und Kleinschreibung unterschieden werden.
Tip: Wandle alle eingegebenen Zeichen in Großbuchstaben.
ASCII-Code: `'A'=65`, `'Z'=90`, `'a'=97`, `'z'=122`. 
- Wird ein, bereits einmal geratener aber nicht im zu ratenden Text enthaltener, Buchstabe gedrückt, so soll von den verbleibenden Versuchen nichts abgezogen werden.
Tipp: Bereits gedrückte Tasten in einem Array speichern – der Index ins Array ist der ASCII Code des Zeichens. 

- Stelle (schrittweise) einen Galgen dar.
Vorlage:
```
     _________
     |/      |
     |      (_)
     |      \|/
     |       |
     |      / \
     |
 ____|____
```

---




