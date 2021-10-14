---
title: Stack
subtitle: Anwendung verkettete Liste
tags: [lecture, 4BHELS]
---

Häufiger Anwendungsfall – **Zwischenspeichern** von Datenobjekten die man zu einem späteren Zeitpunkt wieder braucht:

- Ein einzelnes Datenobjekt wird gelesen
- Das Datenobjekt wird zwischengespeichert (gemeinsam mit anderen, bereits gespeicherten Datenobjekten)
- Weitere Datenobjekte werden zwischengespeichert
- Die zwischengespeicherten Objekte werden einzeln wieder entnommen. Je nach Reihenfolge spricht man von:
	
	- Last-In / First-Out  ⟶ Stack (LiFo)
	- First-In / First-Out ⟶ Queue (FiFo)
	
- Speichern und Entnehmen kann in beliebiger Reihenfolge auftreten

Die Datenstrukturen Stack und Queue können mit verketteten Listen implementiert werden. Dabei finden die Einfüge- und Entnahme-Operationen nur am Beginn oder Ende der Liste statt.

## Stack

![stack01](fig/stack01.png)




## Queue

FIFO first in, first out

![queue01](fig/queue01.png)

![queue02](fig/queue02.png)





## Stack

Stapel, LIFO (last in first out), Bsp.: Stapel Bücher

Operationen:

- `push` – oben auf legen
- `pop` – von oben entfernen

![stack01](fig/stack01.png)

Ein [Stack](http://de.wikipedia.org/wiki/Stapelspeicher) ist eine Datenstruktur in der Elemente einzeln hinzugefügt und entfernt werden können. Diese beide Operationen heißen `push` für hinzufügen und `pop` für entfernen. Das Verhalten ist dabei **wie ein Stapel**, `push` legt etwas oben auf und `pop` entfernt das oberste Element (z.B. ein Stapel von Büchern). Einen Stack nennt man daher auch einen LIFO (last in, first out) Speicher, weil jenes Element das zuletzt abgelegt wurde, zuerst wieder entnommen wird.



---

#### **Übung (Stack zeichnen):** 

Zeichne den Stack der sich ergibt durch:

```
push('H')
push('e')
push('l')
push('o')
pop()
pop()
push('W')
pop()
pop()
```

Ein Stack lässt sich sehr gut mit einer einfach verketteten Liste implementieren.
Hinzufügen und Entfernen findet am Anfang der Liste statt.

---

### Klasse für Stack

```java
public class Stack {
    public void push(char c){...}
    public char pop(){...}
    public boolean empty(){...}
}
```
Zur Verwendung dieser Klasse genügt zu wissen:

- Welche Methoden es gibt (push, pop, empty) und
- wie sich diese verhalten (Stack/LIFO).

Daher kann die Klasse die eigentliche Implementierung vor dem Anwender verbergen. D.h. um diese Klasse anwenden zu können muss man nicht wissen, dass der Stack als verkettete Liste implementiert wurde.


Dies ist ein allgemeines Prinzip des objekt-orientierten Programmierens und wird **information hidding** (Geheimnisprinzip) genannt.

Welcher Teil einer Klasse öffentlich und was verborgen ist wird ausgedrückt durch:

- `public` Öffentlich
- `private` Verborgen



### Auswerten eines arithmetischen Ausdrucks

```
3 * (2 + ( 1 + ( 7 - 4) ) * (8 - 2) )
```

Arithmetischer Ausdruck ist als String vorgegeben und soll ausgerechnet werden. Vereinfachung: Vollständig geklammert, d.h. aus `1+2+3` wird `1+(2+3)`.

**Problem:** Man muss sich Zwischenergebnisse für später merken. Das geht mit Stacks, für diese Aufgabenstellung ist der Dijkstra Algorithmus eine bekannte Lösung, dieser verwendet 2 Stacks, einen für die Operanden (Zahlen) und einen für die Operatoren.

**Dijkstra Algorithmus – Ablauf**

- Wert: auf Werte-Stack.
- Operator: auf Operator-Stack.
- `"("` ignorieren.
- `")"` Operator + 2 Werte von den Stacks 
	- Ergebnis auf Werte-Stack
	

*Zeichne Ablauf für `(3 * (2 + 1 ) )`*



### Wie wird ein gültiger Ausdruck beschrieben?

Sind folgende Ausdrücke gültig?

```
(3 * (2 + 1 )
(3 * (2 + 1) )
(3 * (2 + 1 ) + 2)
```

**Regel als Text:** Paarweise vollständig geklammert, Zahlen nur ein Buchstabe, kein Vorzeichen

Zur mathematisch exakten Formulierung der Gültigkeit eines Ausdrucks verwendet man Produktionsregeln.  Wenn sich ein Ausdruck durch wiederholte Anwendung dieser Regeln erzeugen lässt ist er gültig.

**EBNF:** (Extended Backus-Naur Form)

```
expr = "(" term op term ")"
term = digit | expr
op  = "+" | "-" | "*" | "/"
digit  = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
```

EBNF: Syntax von Programmiersprachen ([JavaBNF](https://cs.au.dk/~amoeller/RegAut/JavaBNF.html))



---









