---
title: Klassen und Objekte
description: Erste Einführung in Klassen und Objekte. Methoden, Konstruktor, this, this(), toString
cmds: ['md_html.bash','md_html.bash --small']
tags: [lecture,java, klasse,3BHELS]
---

> Wie wenig Lärm machen die wirklichen Wunder. *Antoine de Saint Exupéry*

**Objekt-orientierte Programmierung** (OOP): Kernkonzept in Java.

Der Basisbaustein des OOP ist die **Klasse**.

Beispiel: Klasse `Schule` mit **Instanzvariablen** `schueler`, `lehrer`, und `name`.

```java
class Schule {
    int schueler;
    int lehrer;
    String name;
}
```


Eine Klasse ist eine Beschreibung – aber noch **kein Speicher** für die Variablen.

Eine Klasse ist mit einem Bauplan für ein Haus vergleichbar. Dieser beschreibt welche Räume es gibt und wie groß diese sind.
Nach diesem Bauplan kann ein konkretes Haus gebaut werden.

In Java wird der Bauplan Klasse durch das Schlüsselwort `new` einem konkreten Speicherplatz zugewiesen und als Objekt bezeichnet. Begriffe: Die "Klasse wird instanziert" oder "ein Objekt angelegt".

```java
Schule htl=new Schule();
htl.schueler=1024;
htl.lehrer=128;
htl.name="HTL Braunau";
```

- `new` erzeugt (instanziert) Objekt
- Das Objekt ist der Speicherplatz für die Variablen.
- Referenzvariable `htl` "zeigt" auf das Objekt im Speicher
- Da die Variablen erst nach der instanzierung vorhanden sind nennt man diese auch **Instanzvariablen**.


**Anmerkungen:**

- Man kann "`Objekt"' oder "`Instanz einer Klasse"' sagen.
- Von einer Klasse können beliebig viele Objekte angelegt werden, jedes hat einen eigenen Speicherbereich.
- Der Zugriff auf ein Objekt erfolgt über die Referenzvariable. Die Referenzvariable "merkt" sich wo das Objekt liegt (ist eine Art Zeiger "light").



## Instanz und Instanzvariable

Wie von einem Bauplan mehrere Gebäude gebaut werden können kann auch eine Klasse **beliebig oft instanziert** werden.

```java
Schule htl=new Schule();
htl.schueler=1024;
htl.lehrer=128;
htl.name="HTL Braunau";

Schule gym=new Schule();
gym.schueler=700;
gym.lehrer=76;
gym.name="Gymnasium Braunau";

//...
```





## Methoden

Eine Klasse kann **Methoden** enthalten – Dies **sind Funktionen** mit Zugriff auf die Instanzvariablen.

Achtung: **Kein** `static`!


Beispiel: Methode `anzahl` die ermittelt wie viele Personen an der Schule sind. 

```java
class Schule {
    int schueler;
    int lehrer;
    String name;

    public int anzahl() {
        return schueler+lehrer;
    }
}

public class SchuleTest {
  public static void main(String[] args) {
    Schule htl=new Schule();
    htl.schueler=1024;
    htl.lehrer=128;
    htl.name="HTL Braunau";

    int anz = htl.anzahl();
    System.out.println( anz );
  }
}
```

- Aufruf der Methode erfolgt über die **Instanzvariable**
- Methoden können (wie Funktionen in C): mehrere **Parameter**, einen **Rückgabewert**, und **lokale Variablen** haben.



## Zusammenfassung

- Eine **Klasse** definiert **wie** ein **Objekt** ausschaut.
- Ein Objekt muss **instanziert** werden (`new`).
- Zu einem Objekt muss es eine **Referenzvariable** geben.
- Ein Objekt enthält die in der Klasse definierten **Instanzvariablen**.
- Für jedes Objekt können die in der Klasse definierten **Methoden** aufgerufen werden.
-  Methoden verhalten sich **wie C Funktionen**, sie haben **zusätzlich** **direkten** Zugriff auf die Instanzvariablen.






# Objekt orientiertes Programmieren

So wie wir bisher programmiert haben nennt man **Prozedurales Programmieren** dabei sind die Daten von den Funktionen die diese verwenden getrennt und müssen per Parameter oder globaler Variable zur Verfügung gestellt werden.

Die zentrale Idee des Objekt orientierten Programmierens ist **Daten** und Funktionen zu einem Gebilde zusammenzufassen.
Dahinter steckt die Idee, dass die Daten eigentlich weniger wichtig sind als das was man mit diesen Daten tun kann (also den Funktionen).

Dieser Ansatz hat sich insbesondere bei großen Programmen als sehr vorteilhaft erwiesen. Die Programme werden übersichtlicher und Programmierfehler sind weniger häufig.



# Java Konventionen

Definieren wie Java Source Code aussehen soll.


- Klassennamen Anfangsbuchstabe **groß**: `Schule`
- Methoden und Variablen **klein**: `schueler`
- Klassennamen: **Substantive**, 
- Methodennamen: **Verben**. 
- *camel-cased* Bezeichner: `maxValue`, `getNextElement`.
- Öffnende Klammer steht **nicht** auf einer eigenen Zeile ([egyptian braces](https://blog.codinghorror.com/content/images/uploads/2012/07/6a0120a85dcdae970b016768a17a2a970b-800wi.jpg)). 


```java
if(a==3) {
    //...
} else {
    //...
}
```

statt\hspace*{\fill}

```java
if(a==3) 
{
    //...
}
else
{
    //...
}
```



# Konstruktor

Ist eine besondere Methode die bei der Instanzierung eines Objekts automatisch aufgerufen wird. 
Sie hat den **gleichen Namen** wie die Klasse.



Klasse mit einer Instanzvariable und Konstruktor.

```java
class MyClass {
    int a;
    public MyClass(int value) {
        a=value;
    }
}
// ...
MyClass mc=new MyClass(42);
```

Achtung: **kein Rückgabewert** – auch nicht `void`!


## This

Problem: Gleichnamige Parameter und Instanzvariablen.

```java
class MyClass {
    int a;
    public MyClass(int a) {
        a=a; // ???
    }
}
```

Lösung: Das Schlüsselwort `this` – ist eine **Referenz** auf das eigene Objekt. 

```java
class MyClass {
    int a;
    public MyClass(int a) {
        this.a=a;
    }
}
```


## Überladen von Konstruktoren

Methoden mit dem gleichen Namen aber unterschiedlichen Parametern sind in Java möglich.
Dies wird als **Überladen** bezeichnet. 
Beim Aufruf wird aufgrund von Anzahl und Datentyp der Parameter ausgewählt. 


Beispiel:
Überladen bei Konstruktoren.

```java
public class MyClass {
    public MyClass() {...}  // Default Konstruktor  
    public MyClass(int a) {...}
    public MyClass(int a, int b) {...}
    public MyClass(int a, double x) {...}
}
```

Der Konstruktor ohne Parameter wird als **Default-Konstruktor** bezeichnet (weil dieser von Java automatisch angelegt falls kein Konstruktor definiert wurde).


## Mehrere Konstruktoren organisieren

Beispiel:
Eine Klasse `Kreis` ist zu schreiben.
Radius `r` und Fläche `a` sind die Instanzvariablen.

- Die Fläche soll bereits im Konstruktor berechnet werden.
- Implementiere zwei Konstruktoren, einer mit Radius als Parameter und einen Default-Konstruktur für den Einheitskreis ($r=1$).


```java
public class Kreis {
    double r;
    double a;
    public Kreis(double r) {
        this.r=r;
        a=r*r*Math.PI;
    }
    public Kreis() {
        r=1.0;
        a=r*r*Math.PI;
    }
}    
```

Nachteile dieser Lösung: Code wird verdoppelt.

```java
public class Kreis {
    double r;
    double a;
    public Kreis(double r) {
        this.r=r;
        a=r*r*Math.PI; // <-- einmal hier
    }
    public Kreis() {
        r=1.0;
        a=r*r*Math.PI; // <-- das gleiche nochmal
    }
}    
```

Diese Fehlerquelle sollte vermieden werden – "Don't repeat yourself"


## This()

Obiges Problem kann vermieden werden indem ein Konstruktor von einem anderne Konstruktor aufgerufen wird.
Dies geht mit dem bereits bekanntem Schlüsselwort `this` das wie ein Methodenaufruf angewendet wird:

```java
public class Kreis {
    double r;
    double a;
    public Kreis(double r) {
        this.r=r;
        a=r*r*Math.PI;
    }
    public Kreis() {
        this(1.0); // Aufruf des anderen Konstruktors
    }
}    
```

Achtung: Der `this` Aufruf darf nur in der ersten Zeile des Konstruktors stehen.






## Default Konstruktor


Gibt es keinen Konstruktor, legt Java selbst den Default Konstruktor (ohne Parameter) an.


```java
//Dodo.java

public class Dodo {

  int size;
  
}
```



```java
//Main.java
    Dodo d;
    d = new Dodo();
```
Hier legt Java selbst einen Default Konstruktor an.

Achtung: Wenn aber **ein** Konstruktor definiert wird, legt Java **keinen** Default Konstruktor an!

Ergänzt man daher in der Klasse `Dodo` einen Konstruktor mit Parameter, so wird kein Default Konstruktor mehr erzeugt und diese führt zu einer Fehlermeldung des Compilers.

```java
//Dodo.java
public class Dodo {
  int size;
  public Dodo(int size) {
    this.size=size;
  }
}
```

```java
//Main.java
    Dodo d;
    d = new Dodo();
```

Compiler-Fehlermeldung:

```
.../Main.java:5: cannot find symbol
symbol  : constructor Dodo()
```






# toString

Ist eine besondere Methode um den Inhalt eines Objekts als String darzustellen (z.B. für die Ausgabe).

Den Wert einer Variable kann man so ausgeben:

```java
int i=42;
System.out.println("htl: "+i);
```

Was passiert wenn man das gleiche mit einer Referenzvariable macht?


```java
Schule htl = new Schule();
htl.schueler = 1024;
htl.lehrer = 128;
htl.name = "HTL Braunau";
System.out.println("htl: "+htl);
```

Ergebnis: Man sieht die Speicheradresse des Objekts in Hexadezimal.

Man kann aber selbst bestimmen was in diesem Fall ausgegebn wird.
Dafür ist in der Klasse eine Methode mit dem Namen `toString` zu implementieren.

Beispiel:

```java
class Schule {
    int schueler;
    int lehrer;
    String name;
    public String toString() {
        return name + " L:" + lehrer + " S:" + schueler;
    }
}
```

```java
Schule htl = new Schule();
...
System.out.println("htl: "+htl);
```

Wird eine Referenzvariable an einer Stelle verwendet an der das Programm eigentlich einen String erwarten würde so wird **automatisch** die `toString` Methode aufgerufen und deren Rückgabewert eingesetzt.

Anmerkung: Die `toString` Methode kann natürlich wie jede andere Methode auch direkt aufgerufen werden.
