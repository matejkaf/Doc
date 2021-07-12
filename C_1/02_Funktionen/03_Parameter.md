---
title: Funktionen
subtitle: Parameter
description: Einführung in Funktionen in C
tags: [lecture,c,funktionen,C_1]
---

Mit Parametern werden beim Aufruf **Werte** an Funktionen **übergeben**.

Beispiel:  `linie` mit Anzahl an Zeichen.


```c
void linie(int anzahl)
{
    int i=0;
    while(i<anzahl)
    {
        printf("-");
        i++;
    }
}
```

```c
void main()
{
    linie(7); // Aufruf der Funktion
    printf("\nHallo\n");
    linie(5); // Aufruf der Funktion

    getch();
}
```



Parameter:

- besondere lokale Variablen
- "Platzhalter" für konkreten Wert
- Wert wird bei Aufruf gesetzt (=Argument)




## Parameter

Bei jedem Aufruf der Funktion wird durch das Argument der Wert der Parameter-Variable festgelegt. Dies kann auf unterschiedliche Arten geschehen:

**Konstante**:


```c
linie(5);
```

**Variable**:

```c
int n = 4;
linie(n);
```

**Berechnung**:

```c
int x = 7;
linie(3*x-2);
```




## Mehrere Parameter

Durch Kommas getrennt.
```c
void fname(int a, int p, double wert)
{
    ...
}

void main()
{
    fname(2, 3, 3.14);
    getch();
}
```



## Lokale Variable – Level 2


Jede Funktion hat einen **eigenen Speicherbereich** für ihre lokale Variablen. Dieser Speicher wird bei **Aufruf** der Funktion neu angelegt und beim **Verlassen** der Funktion wieder freigegeben. Die Variablenwerte gehen daher beim Verlassen der Funktion verloren.



## Gleiche Namen bei lokalen Variablen

Lokale Variablen in verschiedenen Funktionen können den gleichen Namen haben, sind aber trotzdem **unterschiedliche** Speicherplätze. 

```c
void one()
{
    int n=5;
    // n - in "one"
} 
```



```c
void two()
{
    int n=7;
    // n - in "two"
} 
```

Das gleiche gilt für Parameter, diese verhalten sich wie lokale Variablen – nur erhalten Parameter durch den Aufruf bereits einen Wert zugewiesen.



## Funktionsdeklaration

Funktionen müssen im Programm vor ihrem ersten Aufruf bekannt (=deklariert) sein.



```c
void linie(int anzahl); // Deklaration

void main()
{
    linie(7); // Aufruf
    printf("\nHallo\n");
    linie(5); // Aufruf

    getch();
}

// Definition
void linie(int anzahl)
{
    int i=0;
    while(i<anzahl)
    {
        printf("-");
        i++;
    }
}
```




