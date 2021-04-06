---
title: Verkettete Listen
tags: [lecture]
---

>  Was eine guten Meister macht: Wissen, Können und Wollen. (Deutsches Sprichwort)


## Datenstrukturen
Datenstrukturen speichern **zusammengehörige Datenobjekte**.

Z.B. alle Schüler einer Klasse, alle Lieferungen an einen bestimmten Kunden.

**Operationen** die eine Datenstruktur (meist) unterstützt :

- Einfügen
- Entnehmen / Löschen
- Iteration
- Suchen
- Anzahl

**Arrays** und **Listen** sind Datenstrukturen. Eine Datenstruktur beschreibt die Art der Datenspeicherung (z.B.: Anordnung im Speicher).



## Listen vs. Arrays

**Arrays**


- Fixe Größe
- Kein Hinzufügen / Löschen
- Einfach und schnell

**Listen**


- Flexible Größe
- Einfaches Hinzufügen / Löschen
- Ein wenig aufwendiger 

Listen sind **flexibler** als Arrays und spielen in der Informatik schon sehr lange eine wichtige Rolle. 


In der **Programmiersprache LISP** (List Processor) sind Listen sogar das zentrale Element. LISP wurde 1956 von John~McCarty entwickelt und ist bis heute in Verwendung.




## Verkettete Liste

Eine verkettete Liste ist eine Menge von aneinandergereihten Elementen (=**Knoten**). 

Bei einer verketteten Liste wird bei jedem Knoten ein Verweis auf den folgenden Knoten mit abgespeichert. 

Bei Listen sind die Knoten daher beliebig im Speicher verteilt und müssen nicht wie bei Arrays hintereinander abgespeichert sein.

Eine Liste besteht aus einzelnen **Knoten** (engl.\ node).
Ein Knoten enthält die zu speichernden Daten und den Verweis auf den **nächsten** Knoten.



**Beispiel:**

![image-20210118141910929](fig/image-20210118141910929.png)

Jeder Knoten enthält hier einen Buchstaben und einen Verweis auf den folgenden Knoten. Die Knoten können daher im Speicher durcheinander sein.


### Implementierung

Klasse `Node` für einen Knoten der einen Buchstaben speichert.

```java
public class Node {
    char data;
    Node next;
}
```

### Anfang und Ende
Eine Liste hat einen Anfang und ein Ende.

- Anfang: Spezielle `start` Referenz.
- Ende: `next` verweist auf `null`

Eine Liste kann auch leer sein.




### Listenoperationen

#### Eine Klasse List

Alle Daten und Methoden die für eine verkettete Liste notwendig sind werden in einer eigenen Klasse List zusammengefasst.


#### Einfügen am Anfang

Es soll ein neuer Knoten angelegt und dieser am Anfang der Liste eingefügt werden.

*Skizze + Quelltext.*


#### Liste abarbeiten

Alle Knoten sollen "`besucht"' werden. Zum Beispiel um alle Daten in den Knoten auszugeben.


- `Node n = start` – Erster Knoten
- solange weitergehen (`n = n.next`) 
	
	- ... bis Ende der Liste erreicht.
	



---

**Übung (Ausgabe):** Schreibe ein Programm, das die Ausgabe aller `data` Variablen in der verketteten Liste ermöglicht.

```java
Node n=start;
while (n!=null) {
    System.out.println(n.data);
    n = n.next;
}
```

---



#### Erstes Element entnehmen

Der erste Knoten soll aus der Liste entnommen werden. Spezialfall berücksichtigen: Liste ist leer.








