---
title: Verschachteln von if Anweisungen
tags: [lecture,C_1]
---



Aufgabe: Eingabe der Körpergrößen und Einteilung in 4 Stufen:

- XS unter 80cm
- S ab 80cm
- M ab 100cm
- L ab 150cm

Lösungsmöglichkeit: `if` Anweisungen innerhalb von anderen `if` oder `else` Anweisungen:

```c
// Körpergrößen
int h;
scanf("%d",&h);
if(h<100)
{
	if(h>80)
	{
	    printf("S");
	}
	else
	{
	    printf("XS");
	}
}
else
{
	if(h<150)
	{
		printf("M");
	}
	else
	{
		printf("L")
	}
}
```





