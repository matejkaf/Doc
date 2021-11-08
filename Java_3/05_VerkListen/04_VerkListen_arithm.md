---
title: Stack
subtitle: Auswerten arithmetischer Ausdrücke
tags: [assignment,4BHELS]
---

[Skriptum zum Thema](https://matejkaf.github.io/Doc/Java_3/05_VerkListen/03_VerkListen_stack.html)

Die **Stack** Datenstruktur wird in Aufgaben der Informatik häufig benötigt. Zum Beispiel bei der Auswertung von **arithmetischen Ausdrücken**.

Arithmetische Ausdrücke beschreiben Berechnungen mittels der arithmetischen Operatoren (`+`,`-`,`*`,`/`, usw.) und Klammern. Beispiel: `4 * (3 - 1 )`

Du hast die Aufgabe einen einfachen "Taschenrechner" zu programmieren der es erlaubt solche Ausdrücke einzugeben und das Ergebnis berechnet.

Dazu sind einige Vorbereitungen notwendig.



---

#### Übung (Stack für char)

Schreibe eine Klasse `StackChar` mit der Zeichen auf einem Stack abgelegt und von diesem wieder entnommen werden können. Verwende eine verkettete Liste.

Die Methoden dieser Klasse benötigen nur `char` als Parameter bzw. als Rückgabewert. Die Klasse `Node` wird nur innerhalb der Klasse benötigt und brauch nicht nach außen hin sichtbar sein – ist daher `private` und weiters als sogenannte **innere Klasse** definiert. Das Prinzip Implementierungsdetails nach außen zu verbergen nennt man *information hidding* und gilt als vorteilhafter Programmierstil.

```c
public class StackChar {
  private class Node { // innere Klasse (nur in StackChar sichtbar)
    char c;
    Node next;
  }
  private Node start;

  public void push(char c) { ... }
  public char pop() { ... }	
  public boolean empty(){...}
}
```



---

#### Übung (Stack für int)

Erstelle eine Klasse `StackInt` die einen Stack für `int` Werte zur Verfügung stellt. Verwende zur Implementierung eine **ArrayList** (statt der verketteten Liste).

---

[Skriptum zum Thema](https://matejkaf.github.io/Doc/Java_3/05_VerkListen/03_VerkListen_stack.html)

#### Übung (Dijkstra Algorithmus)

Ziel: Auswerten (*evaluate*=Berechnen) von z.B.:

`( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )`

Der sogenannte **Dijkstra Algorithmus** verwendet dafür 2 Stacks.

- Einen Werte-Stack der Zahlen speichert sowie einen 
- Operator-Stack der einzelne Zeichen speichert.

Der auszuwertende Ausdruck wird von links nach rechts aus einem String gelesen und mit jedem gelesenen Buchstaben wird wie folgt unterschieden:

- Wert: auf Werte-Stack.
- Operator: auf Operator-Stack.
- Öffnende-Klammer: ignorieren.
- Schließende-Klammer: Einen Operator und zwei Werte von den Stacks holen. 
Ergebnis am Werte-Stack ablegen.

**Einschränkungen:**

- Ausdruck muss paarweise und vollständig geklammert sein. 
- Keine Punkt-vor-Strichrechnung.
- Zahlen sind nur einstellig und haben kein Vorzeichen.

Am Papier durchprobieren für:

```
(1 + (5 − 3))
```

Aufgabenstellung:

- Implementiere eine Methode `static int evaluate(String expression)` die wie beschrieben mit Hilfe von 2 Stacks einen arithmetischen Ausdruck (`expression`) berechnen kann. Das Ergebnis ist der Rückgabewert.

---

#### Übung (Erweiterte Klammerung)

Erweiterung – weniger Klammern notwendig: 

`( 1 + 2 + 3 + ( 6 * 4 * 2 ) + 2 )`

Anleitung:

- Wert: auf Werte-Stack.
- Öffnende-Klammer: auf Operator-Stack.
- Operator: auf Operator-Stack.
- Schließende-Klammer: Solange Operatoren (und zwei Werte) vom Stack nehmen, berechnen und Ergebnis am Werte-Stack ablegen bis vom Operator-Stack eine Öffnende-Klammer gelesen wird.

**Einschränkungen:** 

- Keine Operator-Reihenfolge (Punkt-vor-Strichrechnung)



---

#### Übung (Operator-Reihenfolge)

Berücksichtigen der Operator Reihenfolge. 

Wenn ein Operator gelesen wird,
prüfe ob der oberste Operator am Stack gleiche oder höhere Priorität hat.
Falls ja nimm den Operator vom Stack und berechne mit den 2 obersten Werten am Werte-Stack.
Ergebnis wieder am Stack ablegen.

Danach den gelesenen Operator auf Stack legen.

Prioritäten:

- 0 ... `(`
- 1 ... `+`, `-`
- 2 ... `*`, `/`



---

#### Übung (Zahlen)

Ergänzungen:

- Mehrstellige Zahlen mit Komma.
- Negatives Vorzeichen.



---

#### Übung (Hochzahlen und Funktionen)

Ergänzungen:

-  Berechnen von Hochzahlen mit `^`
-  Funktionen `sin` und `cos`

---
