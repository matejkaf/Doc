---
title: Wort Häufigkeit
subtitle: Ein Programm das Wort Häufigkeiten ermittelt
tags: [assignment,4BHELS]
---


#### Beschreibung der Aufgabenstellung

Schreibe ein Programm, das Worthäufigkeiten mit Hilfe einer verketteten Liste ermittelt. 

Vorlage für einen Knoten (ergänze Konstruktor und `toString` Methode):

```java
class Word {
  String w; // Wort
  int n;    // Häufigkeit
}
```

Die Wörter werden in einem Array vorgegeben. 
Es soll ermittelt werden wie häufig jedes Wort vorkommt.

```java
String[] woerter = {
      "der",
      "die",
      "das",
      "der",
      "der",
      "die",
      "der",
      "vier"
    };
```

---

#### Übung (Worthäufigkeiten V1)

Schreibe eine Klasse `WordCounter` diese implementiert eine verkettete Liste aus `Word` Knoten. Implementiere weiters folgende Methoden:

- `public void addWord(String w, int n)`: fügt neues `Word` Objekt am Beginn an.
- `toString` Methode für den Inhalt der verketteten Liste.

---

#### Übung (Worthäufigkeiten V2)

Schreibe in der Klasse `WordCounter` eine Methode `public Word find(String str)` die nach einem bestimmten Wort sucht und falls gefunden eine Referenz darauf zurückgibt. Wird das Wort nicht gefunden so soll `null` zurückgegeben werden.

Anwendungsbeispiel der Methode `find`:

```java
WordCounter wc = new WordCounter();
//  ....
Word result;
result = wc.find("test");
if(result!=null) {
  System.out.println("test gefunden");
} else {
  System.out.println("test nicht gefunden");
}
```


---

#### Übung (Worthäufigkeiten V3)

Implementiere mit Hilfe von `find` die Methode `public void addWord(String w)`. Diese soll nach einem Wort in der verketteten Liste suchen und falls das Wort gefunden wird den dazugehörigen Zähler um eins erhöhen. Wird das Wort nicht gefunden soll ein neues `Word` Objekt (mit Zähler auf 1) hinzugefügt werden – verwende dazu die `addWord(String w, int n)` Methode.


---

#### Übung (Worthäufigkeiten V4)

Das Ziel ist nun die Liste zu sortieren (z.B. absteigend nach Häufigkeit), dies kann z.B. durch Bubble Sort geschehen. Bei Bubble Sort werden 2 benachbarte Elemente vertauscht falls diese in der falschen Reihenfolge sind. Wir implementieren in einem ersten Schritt dieses Vertauschen.

- Implementiere eine Methode `public void swap(Word p)` die die Knoten `p.next` und `p.next.next` vertauscht. Überlege die notwendigen Programmzeilen in einer Skizze.

- Das vertauschen der ersten beiden Knoten ist ein Spezialfall (edge case) da dabei die `start` Referenz beteiligt ist. Implementiere eine Methode `public void swap()` für diesen Fall.


---

#### Übung (Worthäufigkeiten V5)

Verwende die `swap` Methoden um die Worthäufigkeitsliste absteigend nach der Worthäufigkeit zu sortieren.

---
