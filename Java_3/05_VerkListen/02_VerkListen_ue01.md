---
title: Doc
tags: [assignment]
---

# Einfach verkettete Liste (Übungen)



**Übung (Einfach verkettete Liste I):**

- Schreibe eine Klasse `Node`. In einem Knoten wird ein Buchstabe gespeichert.

- Schreibe eine Klasse `List`.
  Diese Klasse enthält die Start Referenz auf die verkettete Liste.
  Alle Methoden die mit dieser Liste arbeiten werden in dieser Klasse implementiert

Implementiere folgende Aufgabenstellung:

- Schreibe eine Methode 
`void prepend(Node newNode)` die einen Knoten ganz vorne einfügt. 

- Schreibe eine `toString` Methode mit der die ganze Liste ausgegeben werden kann.
Die Buchstaben in den Knoten sollen einfach aneinander gereiht werden.

- 
Überlade die `prepend` Methode: `prepend(char c)`.

- Schreibe eine Methode die alle Buchstaben aus einem String (der Parameter der Methode ist) an den Anfang der verkettete Liste schreibt.
  - Jeder Knoten soll einen Buchstaben aus dem String enthalten und
  - die Reihenfolge soll gleich sein wie im String.




---



**Übung (Mock I):**
Folgender Quelltext soll einen neuen Knoten am Beginn einer verketten Liste einfügen.
Überlege anhand einer Skizze was falsch ist.
```java
node = new Node('L');
start=node;
node.next=start;
```
---



**Übung (Einfach verkettete Liste II):**
Implementiere folgende Aufgabenstellung:

- 
Schreibe eine Methode `count` mit der ermittelt werden kann wie viele Knoten sich in der Liste befinden.

- 
Ergänze eine Methode `get(int k)` die eine Referenz auf den `k`-ten Knoten zurückgibt.
Der vorderste Knoten soll die Nummer 0 haben.\\
Beispiel (`k=2`): `Node n=liste.get(2);`\\
Der Rückgabewert soll `null` sein, wenn die Stelle `k` nach dem Ende der Liste liegt.

- 
Schreibe eine Methode 
`removeFirst()`,
die den ersten Knoten aus der Liste entfernt und eine Referenz auf diesen entfernten Knoten zurückliefert.


---












**Übung (Einfügeoperationen):**

Hinweis: Bei verketteten Listen kann man sehr einfach **nach** einem bestehenden Knoten  
(Referenz `node`) einen neuen Knoten einfügen.
Beispiel: Einfügen nach Position 1.

```java
Node node = start;
newNode = new Node('L');
newNode.next = node.next;
node.next = newNode;
```

Aufgabenstellungen:

- 
Schreibe eine Methode `insert` mit deren Hilfe ein neuer Knoten an beliebiger Stelle eingefügt wird.
Übergabeparameter sind die Knotennnummer $k$ und eine Referenz auf den einzufügenden Knoten.
Der neu eingefügte Knoten nimmt die Position $k$ ein.
$k=0$ ist die Positionsnummer des vordersten Knotens (Achtung: $k=0$ ist ein Edge-Case).

- 
Die Methode 
`append(Node newNode)` soll einen Knoten ans Ende der Liste anfügen.
Beachte den Fall, dass die Liste leer ist.
Es gibt keinen Rückgabewert.



---




**Übung (Einfach verkettete Liste II):**
Implementiere folgende Aufgabenstellung:
[(a)]

- 
Methode `set(int k, char c)` die den im k-ten Knoten gespeicherten Buchstaben überschreibt.
Hinweis: Verwende die Methode `get`.

- 
Methode `set(int k, Node newNode)` die den k-ten Knoten durch einen neuen Knoten ersetzt.
Hinweis: es muss die `next` Referenz des Vorgängerknotens verändert werden.


---


**Übung (Suchen eines Werts):**
Implementiere Methoden zur Suche eines Werts (Buchstabe) in der Liste. 
Der Wert soll als Parameter übergeben werden.
Rückgabewert ist die Referenz auf den Knoten der den gesuchten Wert enthält.
Die Methode soll `null` zurückgeben wenn der Wert nicht gefunden wurde. 


- 
`findFirst` –
Es soll das erste Vorkommen des Werts gesucht werden.
- 
`findLast` –
Es soll das letzte Vorkommen des Werts gesucht werden.


---



**Übung (Mock II):**
Überlege welche Auswirkungen der folgende Quelltext auf eine verkettete Liste hat.

```java
Node m = start.next.next;
start.next = m.next;
m.next = start.next;
start = m;
```

---


**Übung (Erweiterungen):**
Implementiere weiters:
[(a)]
- 
Methode `removeLast` die den letzten Knoten aus der Liste entfernt.

- 
Schreibe eine Methode `remove(char c)` mit der ein Knoten mit einem bestimmten Wert aus der Liste gelöscht werden kann.
Die Methode soll `false` liefern falls der Wert nicht gefunden wurde, andernfalls `true`. Es soll nur das erste Vorkommen des Werts gesucht werden.

- 
Optimiere die `append` Methode so, dass diese in einem Schritt (ohne Suchen des Endes) durchgeführt werden kann.
Hinweis: Führe zusätzlich zu `start` eine Referenz `end` mit die immer auf den letzten Knoten verweist.

- 
Schreibe eine Methode die die Liste alphabetisch sortiert.


---





