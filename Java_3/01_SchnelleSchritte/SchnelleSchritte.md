---
title: Schnelle Schritte zu Java
description: Schneller Umstieg von C nach Java.
tags: [lecture,java]
---

>  C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off. [Bjarne Stroustrup – Erfinder von C++]

> Java is C++ without the guns, knives, and clubs. [James Gosling – Erfinder von Java]

# Entwicklungsumgebung

Notwendige Programme (zum Installieren am eigenen Rechner)

- zuerst das Java Development Kit **JDK** ([download](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html))  installieren (z.B. *Windows x64 Installer*), und dann
- **Eclipse** ([download](https://www.eclipse.org/downloads/)) installieren. Siehe auch [Anleitung](https://www.eclipse.org/downloads/packages/installer). Oder alternativ (das geht auch ohne Admin Rechte) nur das package (eigener Download - zip File, am O: Laufwerk verfügbar) entpacken (z.B. auf den Desktop)

Zur Not gehts auch online – "online java compiler" googeln

- z.B.: [tutorialspoint: online java compiler](https://www.tutorialspoint.com/compile_java_online.php)



# Grundlagen

Java ist im Prinzip **wie C** und daher schnell erlernbar.


## Hello World

```java
public class HelloWorld {
  public static void main(String[] args) {
    // print out a text
    System.out.println("Hello World!");
  }
}
```

Eclipse:  `syso` tippen, dann `Strg+space`



## Datentypen

- Wahrheitswerte: `boolean` (`true`, `false`)
- Ganzzahlig (mit Vorzeichen): `byte`, `short`, `int`, `long` – 1, 2, 4, 8 Bytes.
- Gleitkommazahlen: `float`, `double` – 4, 8 Bytes.
- Zeichen: `char` – 2 Byte (Unicode).




# Vergleich C / Java

Vergleich der Lösungen in C und Java.

Aufgabenstellung: Ermittle in einer Funktion den Index des größten Werts in einem Array.

**C:**


```c
#include <stdio.h>
#include <conio.h>

int findMax(int arr[]);

void main() 
{
    int arr[] = {4,7,3,6,8,2};
    int pos = findMax(arr);
    printf("Maximum %d auf Index %d\n", arr[pos], pos );
}

int findMax(int arr[]) 
{
    int maxPos = 0;
    for (int i = 0; i < 6; i++) 
    {
        if (arr[i]>arr[maxPos]) 
        {
            maxPos=i;
        }
    }
    return maxPos;
}
```



**Java:**


```java
public class Main {

    public static void main(String[] args) {
        int[] arr = {4,7,3,6,8,2};
        int pos = findMax(arr);
        System.out.println("Maximum "+arr[pos]+" auf index "+pos);
    }
    
    public static int findMax(int[] arr) {
        int maxPos = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i]>arr[maxPos]) {
                maxPos=i;
            }
        }
        return maxPos;
    }

}
```



# Zeichenketten (Strings)

Java verfügt über einen **eigenen Datentypen** `String` für Zeichenketten. 

Beispiel:

```java
String text;
text = "Hello World 2!";
System.out.println(text);
```

Mit `+` werden 2 Strings zu einem neuen zusammengefügt.

```java
String text1 = "Hello ";
String text2 = "World 3!";
String text3 = text1 + text2;
// setzt text3 auf "Hello World 3!"
```

Zahl+String: Zahl wird automatisch in einen String gewandelt.

```java
int wert = 123;
System.out.println("Die Zahl ist " + wert);
```

Mit Hilfe des + Operators und `println` lassen sich Ausgaben wie in C mit `printf` machen.

# Kontrollstrukturen

wie in C:

- `if`/`else`
- `while`
- `for`
- `switch`



Ebenfalls gibt es

-  `break` (Schleife verlassen) und 
-  `continue` (Schleife wiederholen).



# Methoden

Funktionen heißen in Java **Methoden**. 

- Werden in Klassen definiert.
- Keine Deklaration notwendig.

Beispiel: Methode `isPrim()` die bestimmt ob eine Zahl eine Primzahl ist.

```java
public class Main {
    public static void main(String[] args) {
        int n = 12;
        if( isPrim(n) )
            System.out.println(n + " ist Primzahl");
        else
            System.out.println(n + " ist keine Primzahl");
    }
    public static boolean isPrim(int zahl) {
    	// --> true/false (Primzahl/Keine Primzahl)
    }
}
```



# public / static

Neue Schlüsselwörter in Java.

Ein `public` Element ist für alle Anwender sichtbar.
Das Gegenteil ist `private`, diese Elemente sind nur innerhalb der gleichen Klasse sichtbar.

Mit `static` gekennzeichnete Elemente sind sofort nach dem Programmstart verfügbar – wie in C.
Ohne `static` ist noch ein weiterer Schritt notwendig – siehe Kapitel Klassen und Objekte.

```java
public class Main {
  // Klassenvariable (sichtbar in der ganzen Klasse "Main")
  public static int a = 3; 

  public static void main(String[] args) {
    int b = 42; // lokale Variable in Methode main
    foo();
    a = 33;
  } // Ende von main()

  // Klassenmethode
  public static void foo() {
    int c = 21;  // lokale Variable in Methode foo
    a = 22;
  } // Ende von foo()
} // Ende der Klasse Main
```

Kurz gefasst: Wenn zu Elementen (Methoden, Variable) in der ersten Ebene der Klasse `Main` das Schlüsselwort `static` hinzugefügt wird, so ergibt sich das bisher von C gewohnte Verhalten.




# Arrays

Um ein Array neu anzulegen wird das Schlüsselwort `new` verwendet.

```java
int[] a; // Referenzvariable (=Zeiger)
a = new int[10]; // Speicher allokieren

for(int i=0;i<a.length;i++) {
   a[i] = (int)(Math.random()*11)-5;
}
```

- Mit `int[] a` wird eine Variable für das Array angelegt.
- Um das Array zu erzeugen schreibt man: `new a[10]`.
- Dies reserviert Speicher (=Allokation) für das Array und liefert eine Referenz auf diesen Speicher (wie ein Zeiger).
- Diese Referenz (die Speicheradresse) wird in der Variable `a` gespeichert.
- Das ist also wie ein Zeiger in C.

Weiters interessant: `length` liefert die Anzahl der Elemente im Array. Das Array weiß daher selbst wie groß es ist, das ist einw wesentliche Programmier-Erleichterung

`Math.random()` liefert eine zufällige `double` Zahl größer gleich 0 und kleiner 1.



# Benutzereingaben

Generell sind Benutzereingaben beim Programmieren in Java weniger wichtig.
Zum Programmtest gibt man einfach feste Werte vor.

Beispiel:
```java
// fixe Vorgabe im Programm statt Eingabe
a = foo(42);
System.out.println(a);
a = foo(-11);
System.out.println(a);
// usw.
```

# Scanner

Wo doch nötig können Eingaben mit der Klasse `Scanner` realisiert werden:

```java
Scanner in = new Scanner(System.in);

// Text Eingabe
String str = in.nextLine();
System.out.println(str);

// Ganze Zahl
int nr = Integer.parseInt(in.nextLine());
System.out.println(nr);

// Kommazahl
Double val = Double.parseDouble(in.nextLine());
System.out.println(val);
```

Achtung: nur **einmal** im Programm `new Scanner` verwenden!

