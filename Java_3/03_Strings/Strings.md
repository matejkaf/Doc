---
title: Java Strings
cmds: ['md_html.bash --small', 'md_html.bash']
---

> The secret of joy in work is contained in one word: excellence. To know how to do something well is to enjoy it. *Pearl S. Buck*


# Allgemein

Strings sind in Java **Objekte** der **Klasse** `String`. 

```java
String s = "Wann sind Ferien";
```

`s` ist Referenz auf ein String Objekt. `new` passiert automatisch durch den Compiler.

Länge eines Strings ermitteln:

```java
int laenge = s.length();
```

- Das `String` Objekt `s`  "kennt" die eigene Länge (über die Methode `length`).
- OOP: Daten und Methoden werden zusammengefasst. Nach "außen" sichtbar ist möglichst nur das Verhalten des Objekts, d.h. die Methoden. Die Daten werden nach außen verborgen (Geheimnisprinzip, *information hidding*).



# Auf einzelnes Zeichen zugreifen

```java
String s = "Wann sind Ferien";
char c;
c = s.charAt(0);         // Erstes Zeichen 'W'
c = s.charAt(5);         // 's' von "sind"
c = s.charAt(s.length()-1);     // Letztes Zeichen 'n'
```

**Übung:** Einen String zeichenweise in umgekehrter Reihenfolge ausgeben.



# Suchen

```java
String s = "Wann sind Ferien";
int  i;
i = s.indexOf('n');      // Sucht 'n': i=2
i = s.indexOf('n',4);    // Sucht 'n' ab Index 4: i=7
i = s.indexOf("sind");   // Sucht "sind": i=5
i = s.indexOf("sind",6); // Sucht "sind" ab Index 6: i=-1
i = s.lastIndexOf('e');  // Sucht das letzte Vorkommen von 'e'
```

Return von $-1$ wenn **nicht gefunden**.

**Übung:** Suche das erste und zweite vorkommen eines Hashtags in einem String.



# Teile von Strings

```java
String s = "Wann sind Ferien";
String sub;
sub = s.substring(10);   // "Ferien" - alles ab Index 10
```

**Übung:** Schreibe eine Methode `String substringFrom(String s)`, die alles nach dem ersten `'#'` als neuen String zurückgibt.

```java
sub = s.substring(5, 9); // 4 Zeichen ab 5: "sind"
// Index 9 ist nicht dabei!
```

**Übung:** Schreibe eine Methode `String substringBetween(String s)`, die alles zwischen dem ersten `'#'` und dem zweiten `'#'` als neuen String zurückgibt (Beispiel: `"abcd#dies#12345"`).



# Groß-/Kleinschreibung

```java
String s = "Wann sind Ferien";
lc = s.toLowerCase();	// alles in Kleinbuchstaben
uc = s.toUpperCase();	// alles in Großbuchstaben
```

Alle String-Methoden ergeben immer einen **neuen String**, der Ausgangs-String bleibt **unverändert**.

**Übung:** Schreibe eine Methode `String upperBetween(String s)`, die aus dem gegebenen einen neuen String erzeugt in dem alle Buchstaben zwischen dem ersten `'#'` und dem zweiten `'#'` in Großbuchstaben gewandelt wurden. Der neue String ist der Rückgabewert (Beispiel: `"abcd#dies#12345"` --> `"abcd#DIES#12345"`).




# Stringmanipulation

## Strings zusammenfügen

Mit dem **+ Operator** können 2 Strings zu einem **neuen** String zusammengefügt werden.

```java
String s = "Hallo";
String r = s + " Peter";
```


## Immutable

Java Strings sind **unveränderlich** (en. *immutable*)! 

Um einen String zu ändern muss die Referenzvariable mit dem neuen String überschrieben werden:

```java
String s="Hello ";
s = s + "World";
```

Was passiert dabei im Speicher? *Skizze*.

## Garbage Collector

Ist Bestandteil der JVM (Java Virtual Machine).  Entfernt nicht mehr benötigte Objekte aus dem Speicher. "Müllabfuhr" der JVM.

- Was steht nach folgendem Programm im String `s`?
- Wieviele String Objekte werden angelegt?
- Welche Objekte werden vom Garbage Collector entfernt.

```java
String s = "Wann sind Ferien";
s = "Es" + s.substring(4);
```



# String und Zahlen

Beachte den Unterschied zwischen Text und einer binären Zahl.

## Text

```java
String s="123";
```

- Folge von ASCII-Codes
`'1','2','3'` : `49,50,51`

- Ein-/Ausgabe, Text-Datei
- Keine Berechnungen möglich!

## Binäre Zahl

```java
int s=123;
```

- Binärzahl: $123_{10}=01111011_2$
- Zahlenwerte im Programm
- Rechnen möglich

**Binär → String**

Wandle die Zahl in der Variable `n` in einen Text:

```java
int n=123;
String s = "" + 123;
```

**String → Binär**

Wandle String in `int` Wert:

```java
String s = "123";
int i;
i = Integer.parseInt(s);
```




Zu jedem **einfachen Datentyp** gibt es eine entsprechende Klasse mit einer **parse Methode**.

- `byte` : `Byte.parseByte()`
- `short` : `Short.parseShort()`
- `int` : `Integer.parseInt()`
- `long` : `Long.parseLong()`
- `float` : `Float.parseFloat()`
- `double` : `Double.parseDouble()`

Diesen Klassen enthalten weitere brauchbare Dinge, z.B.: `Integer.MAX_VALUE`, `Integer.MIN_VALUE`, `Integer.SIZE`



**Übung:** Schreibe eine Methode `int calc(String s)` die einen String in der Form `"<zahl1>+<zahl2>"` Übergeben bekommt (z.B. `42+9`, `123+3210`). Die Methode soll die Summe der beiden im String enthaltenen Zahlen zurückgeben.

**Erweiterung:** Drei Zahlen, z.B. `123+3210+34`

**Erweiterung:** Es gehen drei als auch zwei Zahlen.

**Erweiterung:** `+`, `-`, `*`, und `/` sind (gemischt) möglich – Auswertung von links nach rechts ohne Priorisierung.

**Erweiterung:** Beliebig viele Zahlen sind möglich



# Vergleichen von Strings

`String` ist eine Klasse, Variablen mit Datentyp `String` sind **Referenzvariablen** (= Speicher-Adressen).

Verhalten wenn Referenzvariablen verglichen werden.


```java
String t1 = "Bla";
String t2 = new String(t1); // 1:1 Kopie
if (t1 == t2) {
    //...
}
```


```java
String t1 = "Bla";
String t2 = t1;
if (t1 == t2) {
    //...
}
```

Um den Inhalt zweier Zeichenketten zu vergleichen wird die Methode `equals` verwendet.

```java
String t1 = "Bla";
String t2 = "Bla";
if (text1.equals(text2)) {
    //...
}
```

- Das Objekt `t1` prüft ob es **inhaltlich gleich** zum Objekt `t2` ist.

- `equals` liefert `boolean` als Rückgabedatentyp.



---

**Übung:** Monatsnamen sind leider etwas entfremdet worden:

- `Sep#hk jshf#tember`
- `SEPTE#Hallo#MBER`
- `septemb#htl#er`
- `Au#uuggg#gust`
- `Ju#12345#ni`

Schreibe eine Methode `boolean is09(String s)` die nur dann `true` zurückgibt wenn es sich um einen September handelt. Anleitung: Verwende `indexOf` und `substring` um den Monatsname zu extrahieren, wandle diesen in Kleinbuchstaben und vergleiche mit dem String "september".

**Erweiterung:** Gib mehrere zu prüfende Strings in einem Array vor.

---



# Split

`split` trennt einen String aufgrund eines Trennzeichens. Das Ergebnis ist ein Array aus Strings.

```java
String data="25,731,94,126,33";
String[] strs = data.split(",");
for(int i=0;i<strs.length;i++) {
  System.out.println(strs[i]);
}
```

Ausgabe:

```
25
731
94
126
33
```

**Übung:** Schreibe eine Methode die Ausdrücke in der Form `"<zahl_1>+<zahl_2>+...+<zahl_n>"` berechnen kann.



# Strings sind keine Arrays
Ganz anders als in C!

**Wichtig**: Strings sind in Java **keine Arrays** sondern Objekte.


Insbesondere bedeutet das:


- Kein Zugriff über Index (z.B.:  `s[3]`) sondern über Methoden (`s.charAt(3)`).
- Abschließende `\0` braucht nicht berücksichtigt werden.
- Man braucht sich in Java keine Sorgen zu machen wie lange ein String werden kann.
- Strings sind nicht veränderbar – stattdessen wird ein neuer String angelegt.
- So etwas wie `s.charAt(3)='x'` funktioniert **nicht**.

