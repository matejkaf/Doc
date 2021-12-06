---
title: Verschachteln von if Anweisungen
tags: [lecture,C_1]
---

#### Übung (Small/Medium/Large)

Eine Kleidungsgröße wird durch XS, S, M und L angegeben, es gibt 4 Stufen abhängig von der Körpergröße:

- **XS** unter 80cm
- **S** ab 80cm
- **M** ab 100cm
- **L** ab 150cm

Schreibe ein Programm das nach Eingabe der Körpergröße entsprechend XS, S, M oder L ausgibt.

---

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





