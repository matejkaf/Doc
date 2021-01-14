# Stack

Ein Stack ist in der Informatik eine sogenannte **Datenstruktur**, also ein Objekt das andere Objekte auf eine bestimmte Art und Weise speichert bzw. organisiert.

Ein Stack speichert Daten in einer bestimmten Reihenfolge. 
Datenobjekte können einzeln zu einem Stack hinzugefügt und einzeln aus diesem entnommen werden.
Die Schnittstelle eines Stacks besteht aus 2 Operationen

- push, und
- pop

Mit `push` wird ein neues Objekt **auf dem Stack abgelegt**. Mit `pop` wird das jüngste vorhandene Objekt **vom Stack genommen**.

Einen Stack kann man sich daher am besten als einen Stapel vorstellen, oben wird jeweils ein Objekt abgelegt (`push`) oder weggenommen (`pop`).

# Klasse für Stack

Stack für `int` Werte:

```java
class IntStack {
    private IntNode start;
    public void push(int value) {...}
    public int pop() {...}
}
```

Ein Stack kann mit Hilfe einer einfach verketteten Liste implementiert werden. 

- Bei `push` eines neuen `int` Werts wird dieser Wert in einem neuen Knoten gespeichert und der Knoten vorne in die Liste eingeügt.
- Bei `pop` wird der vorderste Knoten aus der Liste entfernt und der in diesem Knoten enthaltene `int` Wert wird als Ergebnis geliefert.


Die Klasse für einen Knoten der verketteten Liste:
```java
class IntNode {
    int value;
    IntNode next;
}
```

<div class='uebung' caption='Stack für int'>
Implementiere und teste die Klasse `IntStack`.
</div>


# Anwendung für Stack

Auswertung (=Berechnen) arithmetischer Ausdrücke.

```
(4-(1+(2-1)))
```

Reihenfolge der Auswertung ist wichtig.
Zahlen und Operanden müssen "für später" aufgehoben werden (solange bis das Ergebnis der folgenden Klammer bekannt ist).

Ausdrücke können beliebig lang werden und die Operatoren der 4 Grundrechnungsarten enthalten.

```
(2+(4+3*(7-(3*(4+(2*3))))))
```

Diese Aufgabe kann mit **2 Stacks** gelöst werden. Ein Stack speichert die Zahlen und Zwischenergebnisse (Operanden-Stack), der zweite Stack speichert die noch offenen Rechenoperationen (Operatoren-Stack).
Dies ist der sogenannte **Dijkstra Algorithmus**.

Aufgaben siehe Übungszettel.