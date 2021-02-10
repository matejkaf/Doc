---
title: Doc
cmds: ['md_html.bash','md_html.bash --small']
tags: [assignment, c, funktionen, parameter ]
---



# Funktionen mit Parameter (Übungen)



**Übung (Produkt zweier Zahlen):**
Schreibe eine Funktion die als Parameter zwei Kommazahlen (`a` und `b`) übergeben bekommt.
Beide Parameter sollen miteinander multipliziert und das Ergebnis auf 2 Kommastellen genau ausgegeben werden.



---

**Übung (Prozentrechnen):**
Schreibe eine Funktion zum Prozentrechnen. Als Parameter werden eine Kommazahl und ein ganzzahliger Prozentwert übergeben. Die Funktion soll den Prozentwert berechnen und die folgende Ausgabe erzeugen:

```
20% von 120.0 sind 24.0
```



---

**Übung (Summe ungerader Zahlen):**
Implementiere eine Funktion `usumme` die die Summe einer gewissen Anzahl von ungeraden Zahlen bestimmt und ausgibt. Wie viele Zahlen addiert werden sollen, bestimmt ein `int` Parameter `anzahl`.

Bsp.: Der Aufruf von `usumme(4)` ergibt $16$ weil: `1+3+5+7=16​`



---

**Übung (Rechteck mit Breite):**
Es soll ein Rechteck beliebiger Breite gezeichnet werden.

```
+----------+
|##########|
|##########|
|##########|
|##########|
+----------+
```

Dafür müssen die Funktionen "wissen" wie viele Zeichen auszugeben sind. Dazu erhalten die Funktionen einen `int` Parameter `breite`.

```c
void auszen(int breite);
void innen(int breite);
```

Aufruf Beispiel:
```c
auszen(6)
```

ergibt die Ausgabe

```
+----+
```

Implementiere die Funktionen `auszen` und `innen` mit Parameter. Verwende eine Schleife in der ein einzelner Buchstabe (`'-'` bzw. `'#'`) ausgegeben wird.

Gib mit diesen Funktionen Rechtecke unterschiedlicher Breite und Höhe aus.



---

**Übung (Variables Rechteck):**
Erweitere das Programm aus voriger Übung so, dass Breite und Höhe durch eine Eingabe bestimmt werden.



---

**Übung (Rechteck mit variablem Zeichen):**
Erweitere das Programm aus voriger Übung. Das Zeichen mit dem das Rechteck gefüllt ist soll eingegeben werden können. Hinweis: Das Zeichen muss als weiterer Parameter mit Datentyp `char` an die Funktion `innen` übergeben werden.

```c
void innen(int breite, char zeichen);
```



---

**Übung (Rechteck in Funktion):**
Erweitere das Programm aus voriger Übung. Implementiere eine Funktion `rechteck` die ein Rechteck zeichnet. Verwende dazu die bereits bestehenden Funktionen `innen` und `auszen` indem diese aus der Funktion `rechteck` heraus aufgerufen werden.

```c
void rechteck(int breite, int hoehe, char zeichen)
{
	// ...
}
```
Rufe die Funktion `rechteck` mehrfach mit unterschiedlichen Argumenten vom Hauptprogramm aus auf.



---
