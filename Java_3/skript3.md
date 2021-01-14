# Anfang

Motivation warum Java
Einstieg in Netbeans

# Schnelle Schritte zu Java

Auch Möglich: Array Beispiel (Methode generiert den Array Inhalt)



# Klasse und Objekt



## Klasse Schule

- print Methode, add Methode, zuerst statisch und dann als Instanz-Methode
- An- und Abmelden von Schülern (Schülerzahl +1/-1)
- Ummelden eines Schülers (hak zu htl, übergabe einer Referenz)



## Klasse Rechteck

- Eine Klasse Rechteck mit a und b
- Ausgabe von a und b
- Referenzvariable = Adresse
- Ausgabe mit toString Methode
- Methode resize (kleinere Seite verdopeln oder die kleinere von der größeren abziehen)
- Methode inflate (Prozentuelle Vergrößerung)
- Methode area()
- Methode int `tile(Rechteck r)`, wie oft passt die Fläche eines kleinen in das große Rechteck



## Wiederholungsbeispiel

Klasse `Schueler` mit Name und Note.

Eine `print` Methode mit Parameter. Ausgabe von Name und Note mehrfach untereinander.
Erklärung von Parameter und lokaler Variable.

Konstruktor, Default und mit Parameter.
`this.` und `this()`

Überladen von Konstruktoren


## Übungszettel Bankkonto und Komplexe Zahl

## Übungszettel Uhr

`toString` erklären. Lösung für das erzeugen einer führenden Null, so dass aus `3:7` --> `03:07` wird.



## Übungzettel Datum

Beschäftigung für die Schnellen.



# Strings

Allgemeine Einleitung. String ist ein Referenzvariable. String Methoden. String Manipulation.

Bsp. wenn String eine Instanzvariable ist. Wie sieht das dann im Speicher aus.

Klasse mit String und int. getStr Methode mit Parameter für die Anzahl der Leerzeichen dazwischen.



## String vs. int

Eingabe einer Zahl um damit zu rechnen.
`Scanner`

Ganze Zahl verdoppeln. `Integer.parseInt()`

Berechnung der Kreisfläche. `Double.parseDouble()` und `Math.PI`

int nach String. toString Methode zu leerem String hinzufügen.


Typwandlungen zwischen einfachen Datentypen. Type Cast.

Übung für type-cast: 42 int Zufallszahlen zwischen 7 und 11 (inkl.) erzeugen `Math.random()`

Erweiterung: Erstellen einer Klasse `MyRandom`

```java
MyRandom mr = new MyRandom(7,11);
for(int i=0; i<42; i++) {
    System.out.println(mr.nextInt());
}
```



# Arrays


## Wiederholung

Array aus int. Ist Referenzvariable.

Aufgabe: Array füllen mit 42,43,45,48,52,57,...
Alternativ: In einer Methode, 42,43,45,48,52,...

Array aus String. Array ist eine "Multiplikation" einzelner Variablen.

Aufgaben: 

- Die Summe der String Längen ermitteln
- Alle Strings mit Beistrichen getrennt zusammenfügen (so wie `Arrays.toString`)

Neues Projekt. Eingabe der Monatsnummer, Ausgabe der Monatsbezeichnung, ohne if Bedingungen, Methode dafür implementieren.


## Arrays aus Objekten

Ganz einfaches Beispiel.

```java
class Rect {
    double a;
    double b;
    // mit Konstruktor
}
```

Array aus 2 Rechtecken anlegen.

`double` Array mit a, b ist vorgegeben

```java
double arr[]={2,4,1,5,6,7}; // a,b, a,b ...
```

Methode für Flächenberechnung implementieren.
Finde das Rechteck mit der größten Fläche. 


## ArrayList

- Dynamisches Array
- Ist Anfangs leer
- Nur Methoden für Zugriff keine `[]`
- Nur Objekte

Beispiel: ArrayList aus Strings.
- Unterschiedliche Methoden.
- toString bei ArrayList.

Aufgabe 1:
Methode die ermittelt wie viel Wörter es gibt die ein 'o' enthalten. Erweiterung: Groß-/Kleinschreibung egal.

Aufgabe 2: Ein int Array anlegen.
Was bei einfachen Datentypen? -> Wrapper Klassen.

Integer statt int, Referenzvariable auf Objekt anstatt Variable mit Wert. autoboxing, autounboxing




Vorbereitung für Aufgabe Wörter zählen:
ArrayList aus Objekten der Klasse `Wort`

```java
class Wort {
    String s;
    int n;
}
```

Aufgabe:
- einige Objekte einfügen. 
- Nach einem eingegebenen Text suchen.

Aufgabe 4: Wörter zählen (Übungszettel)

Aufgabe 5: Walters Liste (Übungszettel)

Aufgabe 6: Freundes-Liste

- Schüler mit Anzahl der Freunde. Ausgabe jener Personen die am meisten Freunde haben. Das kann mehrere Schüler betreffen.
- Erfassen der Freunde mit Name in einer Sub ArrayList (aus Strings).

Die Anzahl ist nun nicht mehr eine Variable. --> Getter Methode
- Eigene Java-Klasse: Schulklasse mit Liste von Schülern die Freunde haben.
   - Schüler/Freund hinzufügen
   - Schüler/Freund entfernen
   - Finden der Schüler mit den meisten Freunden
   - Letzte Funktion mit ArrayList als Rückgabewert implementieren.


**Andere Ideen für Listen:**

- Offene NOST Prüfungen
- Kartenspiel


## ArrayList selber implementieren

Siehe Übungszettel.

Dynamisches Array aus `Person` Objekten.

```java
class Person {
    int age;
    String name;
}

class List {
    Person[] persons;
    int used;
}
```

Aufgaben:

- Am Ende Anfügen, ohne Größen Prüfung
- Alles mit toString ausgeben
- Länge prüfen und erweitern wenn voll (evtl. als eigene Methode)
- Am Anfang löschen
- Beliebig löschen
- Am Anfang einfügen
- Beliebig einfügen

Anhand der Klasse `List` das **Geheimnisprinzip** erklären. Zugriff nur über Methoden, ansonsten kann es zu einem inkonsistenten Zustand kommen.


# Verkettete Liste

Nachteil des dynamischen Arrays:
Einfügen und Löschen wenn große Datenmengen, es wird viel umkopiert.

## Einfach verkettete Liste

Liste mit `int` Variablen.

- Einfügen am Anfang
- `count()`
- toString implementieren
- Löschen am Anfang (mit edge case)
- Einfügen am Ende
- Löschen des letzten Knotens (mit edge case)
- Löschen des Knotens mit einem bestimmten Wert (mit edge case)

Erweiterungsaufgaben für Schnelle:

- Zwei hintereinanderliegende Knoten vertauschen
- Bubble sort implementieren
- Ersten und letzten Knoten vertauschen.


## Doppelt verkettete Liste

Motivation:

- `start` ist ungünstig weil außerhalb eines Knotens. Dadurch entstehen edge cases, wenn `start` geändert wird.
- Lösung: Dummy Knoten am Anfang
- In allen Knoten hat `next` eine gültige Adresse als Wert, nur im letzten Knoten ist dieser `NULL`
- Lösung: Referenz auf sich selber
- Bewegung ist nur in eine Richtung möglich.
- Lösung: `prev` Referenz auf den Vorgänger.


# Anwendung der verketteten Liste

3CHELS 2017/2018: Nicht gemacht

Auswertung arithmetischer Ausdrücke.

```
(4-(1+(2-1))))
```

Reihenfolge der Auswertung ist wichtig.
Zahlen und Operanden müssen "für später" aufgehoben werden.

Ausdrücke können beliebig lang werden und die Operatoren der Grundrechnungsarten enthalten.
`int`: nur ganze Zahlen.

```
(2+(4+3*(7-(3*(4+(2*3))))))
```



