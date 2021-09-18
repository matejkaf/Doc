---
Title: Datentyp bool
use_math: true
---

`bool` ist ein besonderer Datentyp.


Es können Variablen definiert werden:
```c
bool a;
bool b;
```


Eine **Variable** vom Typ `bool` kann nur 2 Werte annehmen `true` oder `false`.

```c
a = true;
b = false;
```

Bool Variablen speichern daher **Wahrheitswerte** (ja/nein, wahr/falsch).\\
Anwendung: Überall dort wo der Programmierer zum Ausdruck bringen will, dass

- etwas zutrifft oder nicht zutrifft (Bsp. Zahl ist gerade)
- etwas da ist oder nicht (Bsp. Datei existiert)
- ...

Wenn im Programm ein Vergleich ausgewertet wird, so ist das Ergebnis `true` oder `false` (und daher vom Datentyp `bool`)


```c
int x=3;
if (x==3)  // wird zu true ausgewertet
{
	printf("Zahl ist drei");
}
```


`bool` Variablen können auch verwendet werden um das Ergebnis eines Vergleichs zu speichern.
```c
int x=3;
bool istDrei;
istDrei = (x==3);
```

Das Ergebnis von Bedingungen (`if`, `while`, `for`) sind vom Datentyp `bool`, d.h. `true` bzw. `false`.
Daher können `bool` Variablen anstelle von Bedingungen ohne einen weiteren Vergleich verwendet werden.


```c
if (istDrei)
{
	printf("Zahl drei");
}
```

Beachte: Für die Bedingung ist kein weiterer Vergleich `isDrei==true` notwendig!

Innerhalb einer Schleife kann über eine bool Variable gesteuert werden wie lange diese ausgeführt wird.
```c
bool run=true;
while (run)
{
	...
	if (...Abbruchbedingung...)
	{
		run=false;
	}
}
```





## Rückgabewert von Funktionen

Eine der Hauptanwendungsfälle für den `bool` Datentyp ist als Rückgabewert einer Funktion.

Beispiel: eine Funktion die prüft ob eine Zahl gerade ist (d.h. durch 2 ohne Rest teilbar).

```c
bool istGerade(int n)
{
  if (n%2==0)
    return true;
  else
    return false;
}
```

Der Aufruf dieser Funktion könnte so aussehen:
```c
int z = 4;
if (istGerade(z))
	printf("Gerade Zahl!");
```


Das `if` erwartet sich in der Klammer einen Wert von `true` oder `false`.
Da der Rückgabewert bereits einen dieser Werte hat, ist kein weiterer Vergleich notwendig.
`istGerade(z)==true` ist daher nicht notwendig (aber möglich).


Wird der Name der Funktion geeignet gewählt entstehen sehr **gut lesbare** Programme.



## Übungsaufgaben



#### Übung (Kopf oder Zahl)

Wirft man eine Münze so fällt diese zufällig auf Kopf oder Zahl.
Schreibe eine Funktion `kopf` die einen Münzwurf simuliert.
Ein Rückgabewert von `true` bedeutet Kopf, `false` bedeutet Zahl.

Simuliere 15 Münzwürfe und gib Anzahl von Kopf- bzw. Zahl-Würfen aus.

---



#### Übung (Binomialverteilung)

Führe das 15-Wurf Experiment von vorherigen Beispiel 10000-mal aus.
Ermittle wie oft als Ergebnis 0 mal Kopf vorkommt, dann wie oft 1-mal, 2-mal, 3-mal, ... , 15-mal Kopf vorkommt.
Es ergeben sich 16 Zahlen, stelle diese 16 Zahlen in einem Balkendiagramm dar (Excel).

---



#### Übung (Primzahl)

Schreibe eine Funktion mit dem Namen `isPrim` die ermittelt ob eine als Parameter übergebene ganze Zahl eine Primzahl ist.
Eine Primzahl ist eine natürliche Zahl, die größer als 1 und ausschließlich durch sich selbst und durch 1 teilbar ist.
Der Rückgabewert der Funktion soll `true` sein wenn es sich um eine Primzahl handelt und `false` andernfalls.

Ermittle mit Hilfe dieser Funktion die Anzahl der Primzahlen im Bereich 1...1000

---





#### Übung (Monte Carlo Methode)

Mit Hilfe von Zufallszahlen kann die Zahl $\pi$ bestimmt werden.
Man nimmt ein Quadrat der Kantenlänge 2. In dieses Quadrat zeichnet man einen Kreis mit Radius 1.
Dann setzt man zufällig Punkte im Quadrat.
Für jeden Punkt ermittelt man ob sich der Punkt im Inneren des Kreises befindet.
Man ermittelt darauf welcher Anteil aller Punkte im Inneren des Kreises war.
Nun nimmt man den gleichen Anteil von der Fläche des Quadrats und erhält die Fläche des Kreises.

Schreibe eine Programm das $\pi$ auf diese Weise ermittelt.
Wie viele zufällig Punkte müssen gewählt werden um ca. eine Genauigkeit von 3 Kommastellen zu erreichen?


Hinweise:
- Lege den Mittelpunkt des Koordinatensystems in den Mittelpunkt von Quadrat und Kreis.
- Bilde 2 zufällige `double` Variablen ($x$ und $y$) im Bereich $-1,\ldots,+1$$

```c
double x = 2.0*rand()/MAX_RAND - 1;
```

Prüfe (mit Hilfe des Pythagoras) ob sich der Punkt #$(x,y)$# im Kreis befindet.
Schreibe dafür eine Funktion mit `bool` als Rückgabewert.

---

