# Interfaces

<div class="definition">
Sind "kleine" abstrakte Klassen.
D.h. enthalten abstrakte Methoden ohne Implementierung.
</div>

Eine Klasse kann **beliebig viele** Interfaces implementieren (aber nur von **einer** Klasse erben).


# Beispiel

Es gibt eine Klasse für normale Zahlen und eine Klasse für komplexe Zahlen:

```java
class Zahl {
    double z;
    public Zahl(double z) {
        this.z = z;
    }
}

class Complex {
    double re;
    double im;
    public Complex(double re, double im) {
        this.re = re;
        this.im = im;
    }
}
```

Für Objekte beider Klassen soll es möglich sein eine **reelle Zahl zu addieren**.
Dies kann durch ein Interface ausgedrückt werden das beide Klassen implementieren.

```java
interface AddTo {
    void add(double n);
}
```

```java
class Zahl implements AddTo {
    // ...
    @Override
    public void add(double n) {
        z = z + n;
    }
}

class Complex implements AddTo {
    // ...
    @Override
    public void add(double n) {
        re = re+n;
    }
}
```

Das Interface kann als Datentyp für Referenzvariablen verwendet werden.
Methodenaufrufe verhalten sich polymorph.

```java
AddTo[] adders = {
    new Zahl(3.14), new Complex(4.1,5.3), new Zahl(2.14)
};

double d=1.23;
for (int i = 0; i < adders.length; i++) {
    adders[i].add(d);            
}

System.out.println(Arrays.toString(adders));
```


# Aufgabe

Nach dem Ball ist in der Schule ist das Chaos ausgebrochen, keiner kennt sich mehr aus. 
Jemand hat die Schülerliste durcheinandergebracht und die Katalognummern sind verloren gegangen.

Gegeben ist die unsortierte Namensliste.

```java
String[] names = {"Gianni", "Karlik", "Pavla", "Micki", "Ephrem", "Lucy", 
            "Noby", "Viola", "Rustie", "Melvin", "Karisa", "Fremont", "Nicolas", 
            "Terrel", "Tybalt", "Marv", "Izak", "Austen", "Miguela" };            
```

Die Aufgabenstellung ist diese zu sortieren und danach die Katalognummern zuzuweisen.

**Schritt 1:** Sortieren durch Minimum Sort.

Minimum-Sort sucht für jede Position im Array das noch verbleibende kleinste Element und setzt dies an die aktuelle Stelle. Es wird am ersten Index begonnen und aufsteigend wiederholt bis zum vorletzten Index.

Beispiel für `int` Werte

```java
int[] a={4, 15, 8, 19, 14, 3, 17};
// Sortieren durch Min-Sort
for (int i = 0; i < a.length-1; i++) {
    // Suche das kleinste Element in  j=i bis ende
    // Vertausche das i-te mit dem kleinsten Element
}
```

<div class="uebung" caption="Sortieren">
Implementiere das Min-Sort Verfahren zur Übung einmal für ein Array aus `int` Werten.
</div>

**Schritt 2: Klasse für Schüler** 

Definiere eine Klasse für einen Schüler.

```java
class Schueler  {
    String name;
    int knr;
    public Schueler(String name) {
        this.name = name;
    }    
}
```


<div class="uebung" caption="Schueler Array">
Erstelle mit den Namen aus dem unsortierten Array `names` ein Array aus `Schueler` Objekten.
Die Katalognummern werden erst später gesetzt.

```java
Schueler[] schueler = new Schueler[names.length];
// 2do: konkrete Objekte anlegen
```
</div>

**Schritt 3: Sortieren des Schueler Arrays**

<div class="uebung" caption="Schüler sortieren">
Schreibe eine minSort Variante für das Array aus Schueler.

- Hinweis: Mit `s1.compareTo(s2) < 0` wird geprüft ob der String `s1` alphabetisch vor `s2` kommt (d.h. "kleiner" ist).
</div>

**Schritt 4: isSmaller**

Der Sortieralgorithmus kann ganz einfach so geändert werden, dass beliebige Objekte (und nicht nur Schueler) sortiert werden können.

<div class="uebung" caption="isSmaller">
Implementiere in der Klasse Schueler eine Methode `public boolean isSmaller(Schueler p)` für den Vergleich 2er Objekte und verwende diese in der Methode minSort.
</div>

<div class="uebung" caption="Interface">
Implementiere nun ein Interface für die Methode isSmaller.

```java
interface Sortable {
    public boolean isSmaller(Sortable p);
}
```

Für die Klasse Schueler:

```java
class Schueler implements Sortable {
    ...
    @override
    public boolean isSmaller(Sortable o) {
        Schueler s = (Schueler)o; // type cast
        ...
    }
}
```

und dann noch 

```java
public static void minSort(Schueler[] a) { ... }
```

ändern auf

```java
public static void minSort(Sortable[] a) { ... }
```

Die minSort Methode kann nun für jedes Objekt das das Interface Sortable implementiert aufgerufen werden.
</div>






**Schritt 5: Sortieren**

<div class="uebung" caption="Katalognummern">
Bringe das Array `schueler` in die richtige Reihenfolge und weise danach die Katalognummern zu.
</div>

Aus dem unsortierten Array:

[Gianni (0), Karlik (0), Pavla (0), Micki (0), Ephrem (0), Lucy (0), Noby (0), Viola (0), Rustie (0), Melvin (0), Karisa (0), Fremont (0), Nicolas (0), Terrel (0), Tybalt (0), Marv (0), Izak (0), Austen (0), Miguela (0)]


wird ein sortiertes Array mit zugewiesenen Katalognummern:

[Austen (1), Ephrem (2), Fremont (3), Gianni (4), Izak (5), Karisa (6), Karlik (7), Lucy (8), Marv (9), Melvin (10), Micki (11), Miguela (12), Nicolas (13), Noby (14), Pavla (15), Rustie (16), Terrel (17), Tybalt (18), Viola (19)]
</div>

**Schritt 5: The chaos continues**

Weiters gibt es Testergebnisse im wilden durcheinander.

```java
int[] knr = {4,15,8,19,14,3,17,18,5,1,13,11,9,16,6,10,12,7,2};
int[] points = {17,24,23,18,11,14,12,11,19,19,24,17,12,19,14,19,20,21,21};
```

Bedeutet: Die Katalognummer 4 hat 17 Punkte, die Katalognummer 15 hat 24 Punkte usw..

<div class="uebung" caption="Array Ergebnisse">
Erstelle ein Array `ergebnisse` aus Objekten der Klasse `Testergebnis`

```java
class Testergebnis {
    int knr;
    int punkte;    
}
```
</div>

<div class="uebung" caption="Sortieren der Ergebnisse">
Sortiere das Array `ergebnisse` aufsteigend nach Katalognummern, indem du das Interface `Sortable` für die Klasse `Testergbnis` implementierst, dann kann die Methode `minSort` ohne Änderung verwendet werden.

aus dem unsortierten Array

[4 : 17P, 15 : 24P, 8 : 23P, 19 : 18P, 14 : 11P, 3 : 14P, 17 : 12P, 18 : 11P, 5 : 19P, 1 : 19P, 13 : 24P, 11 : 17P, 9 : 12P, 16 : 19P, 6 : 14P, 10 : 19P, 12 : 20P, 7 : 21P, 2 : 21P]

wird ein sortiertes

[1 : 19P, 2 : 21P, 3 : 14P, 4 : 17P, 5 : 19P, 6 : 14P, 7 : 21P, 8 : 23P, 9 : 12P, 10 : 19P, 11 : 17P, 12 : 20P, 13 : 24P, 14 : 11P, 15 : 24P, 16 : 19P, 17 : 12P, 18 : 11P, 19 : 18P]
</div>

<div class="uebung" caption="Ausgabe">
Gib nun Schüler und Testergebnisse so nebeneinander aus, dass die Ergebnisse konkreten Schülern zugeordnet werden können:

```
============================================================
  Austen (1)  -->  1 : 19P
  Ephrem (2)  -->  2 : 21P
 Fremont (3)  -->  3 : 14P
  Gianni (4)  -->  4 : 17P
    Izak (5)  -->  5 : 19P
  Karisa (6)  -->  6 : 14P
  Karlik (7)  -->  7 : 21P
    Lucy (8)  -->  8 : 23P
    Marv (9)  -->  9 : 12P
 Melvin (10)  -->  10 : 19P
  Micki (11)  -->  11 : 17P
Miguela (12)  -->  12 : 20P
Nicolas (13)  -->  13 : 24P
   Noby (14)  -->  14 : 11P
  Pavla (15)  -->  15 : 24P
 Rustie (16)  -->  16 : 19P
 Terrel (17)  -->  17 : 12P
 Tybalt (18)  -->  18 : 11P
  Viola (19)  -->  19 : 18P
============================================================
```
</div>
