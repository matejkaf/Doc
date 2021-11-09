---
title: Stack
subtitle: Anwendung verkettete Liste
tags: [lecture, 4BHELS]
---

* TOC
{:toc}

Häufiger Anwendungsfall – **Zwischenspeichern** von einzelnen Datenobjekten die man zu einem späteren Zeitpunkt wieder braucht:

- Ein einzelnes Datenobjekt wird gelesen
- Das Datenobjekt wird zwischengespeichert (gemeinsam mit anderen, bereits gespeicherten Datenobjekten)
- Weitere Datenobjekte werden zwischengespeichert
- Die zwischengespeicherten Objekte werden einzeln wieder entnommen. Je nach Reihenfolge spricht man von:
	
	- Last-In / First-Out  ⟶ **Stack** (LiFo)
	  ![stack01](fig/stack01.png)
	- First-In / First-Out ⟶ **Queue** (FiFo)
	  ![queue01](fig/queue01.png)
	  ![queue02](fig/queue02.png)
	
- Speichern und Entnehmen kann in beliebiger Reihenfolge auftreten

Die Datenstrukturen **Stack** und **Queue** können mit **verketteten Listen** implementiert werden. Dabei finden die Einfüge- und Entnahme-Operationen nur am Beginn oder Ende der Liste statt.



# Stack

Stapel, LIFO (last in first out), Bsp.: Stapel Bücher

<img src="fig/image-20211108113736094.png" alt="image-20211108113736094" style="zoom:50%;" />

Operationen:

- `push` – oben auf legen
- `pop` – von oben entfernen

![stack01](fig/stack01.png)

Ein [Stack](http://de.wikipedia.org/wiki/Stapelspeicher) ist eine Datenstruktur in der Elemente einzeln hinzugefügt und entfernt werden können. Diese beide Operationen heißen `push` für hinzufügen und `pop` für entfernen. Das Verhalten ist dabei **wie ein Stapel**, `push` legt etwas oben auf und `pop` entfernt das oberste Element (z.B. ein Stapel von Büchern). Einen Stack nennt man daher auch einen LIFO (last in, first out) Speicher, weil jenes Element das zuletzt abgelegt wurde, zuerst wieder entnommen wird.



---

#### Übung (Stack zeichnen) 

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

Ein Stack lässt sich sehr gut mit einer einfach verketteten Liste implementieren. Hinzufügen und Entfernen findet am Anfang der Liste statt.

---

## Klasse für Stack

```java
public class Stack {
    public void push(char c){...}
    public char pop(){...}
    public boolean empty(){...}
}
```


## Geheimnisprinzip

Zur Verwendung dieser Klasse genügt zu wissen:

- Welche Methoden es gibt (`push`, `pop`, `empty`) und
- wie sich diese verhalten (Stack/LIFO).

Daher kann die Klasse die eigentliche Implementierung vor dem Anwender verbergen. D.h. um diese Klasse anwenden zu können muss man nicht wissen, dass der Stack als verkettete Liste implementiert wurde.


Dies ist ein allgemeines Prinzip des objekt-orientierten Programmierens und wird **information hidding** (Geheimnisprinzip) genannt.

Welcher Teil einer Klasse öffentlich und was verborgen ist wird ausgedrückt durch die Schlüsselwörter:

- `public` – Öffentlich
- `private` – Verborgen



## Arithmetischer Ausdruck

Arithmetischer Ausdruck ist als String vorgegeben und soll ausgerechnet werden. 

```
(4-(1+(2-1))))
```

Probleme:

- Klammern für die Reihenfolge berücksichtigen,
- Zahlen, Zwischenergebnisse und Operanden müssen “für später” aufgehoben werden (solange bis das Ergebnis der folgenden Klammer bekannt ist).

Ausdrücke können beliebig lang werden und die Operatoren der 4 Grundrechnungsarten enthalten.

Beispiele:

```
3 * (2 + ( 1 + ( 7 - 4) ) * (8 - 2) )
```

```
(2+(4+3*(7-(3*(4+(2*3))))))
```

Für diese Aufgabenstellung ist der **Dijkstra Algorithmus** eine bekannte Lösung, dieser verwendet **2 Stacks**, einen für die Operanden (Zahlen) und einen für die noch offenen Rechenoperationen.



### Dijkstra Algorithmus

Vereinfachung: Ausdruck ist vollständig paarweise geklammert, d.h. aus `1+2+3` wird `1+(2+3)`.

Nimm ein Zeichen aus dem String und unterscheide:

- Wert: auf Werte-Stack.
- Operator: auf Operator-Stack.
- `"("` ignorieren.
- `")"` Operator + 2 Werte von den Stacks 
	- Ergebnis auf Werte-Stack
	

*Zeichne Ablauf für `(3 * (2 + 1 ) )`*



### Wie wird ein gültiger Ausdruck beschrieben?

Sind folgende Ausdrücke gültig? Wie kann das überpfüft werden?

```
(3 * (2 + 1 )
(3 * (2 + 1) )
(3 * (2 + 1 ) + 2)
```

**Regel als Text:** Paarweise vollständig geklammert, Zahlen nur ein Buchstabe, kein Vorzeichen

Compiler haben solche Regeln in einer formaleren Art und Weise eingebaut. Zur mathematisch exakten Formulierung der Gültigkeit eines Ausdrucks verwendet man **Produktionsregeln**.  Nur wenn sich ein Ausdruck durch wiederholte Anwendung dieser Regeln erzeugen lässt ist er gültig.

**EBNF:** (Extended Backus-Naur Form)

```
expr = "(" term op term ")"
term = digit | expr
op  = "+" | "-" | "*" | "/"
digit  = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
```

EBNF: Syntax von Programmiersprachen ([JavaBNF](https://cs.au.dk/~amoeller/RegAut/JavaBNF.html))









