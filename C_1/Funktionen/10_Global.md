---
title: Funktionen
subtitle: Globale Variable
tags: [lecture, c, funktionen ]
---



Variablen können außerhalb einer Funktion – am Beginn der Datei – definiert werden, diese sind dann **globale Variablen**. Alle Funktionen teilen sich diese Variablen.

**Beispiel:**


```c
int g_wert = 2;

void mul(int x);
void sum(int x);

void main()
{
    sum(4);
    mul(2);
    printf("%d\n", g_wert);
}
```

```c
void sum(int x)
{
    g_wert = g_wert + x;
}

void mul(int x)
{
    g_wert = g_wert * x;
}
```

`g_wert` ist eine **globale Variable**.

### Empfehlungen

Empfehlung 1: Sparsam verwenden, es geht schnell der Überblick verloren.

Empfehlung 2: Jede globale Variable mit `g_` beginnen (zur Unterscheidung mit lokalen Variablen).










