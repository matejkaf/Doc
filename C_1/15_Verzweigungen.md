---
title: Doc
cmds: ['md_html.bash']
tags: [lecture,1AHITS]
---

# if Anweisung

Mit der `if` Anweisung wird ein Programmteil nur dann ausgeführt wenn eine **Bedingung** **wahr** ist.

```c
if (Bedingung)
{
	// Anweisungen
}
```

Die Bedingung wird gebildet mit **Vergleichsoperatoren**.
Beispiel:

```c
int alter;
scanf("%d",&alter);
if (alter > 17)	
{
	printf("Erwachsener\n");
}
```

Die Bedingung kann


wahr (true) sein:
```c
alter = 18;
if (alter > 17)	
{
	// wird ausgeführt
}
```


falsch (false) sein:
```c
alter = 17;
if (alter > 17)	
{
	// wird übersprungen
}
// hier geht es weiter
```


Vergleichsoperatoren:

	== Gleich
	!= Ungleich
	> Größer als
	>= Größer als oder Gleich
	< Kleiner als
	<= Kleiner als oder Gleich


Beachte (häufiger Fehler – Vorsicht!):
```c
if (alter == 18) // richtig
```

**nicht**:
```c
if (alter = 18) // Fehler !!!
```

Für den Compiler ist das eine Zuweisung – `alter` erhält den Wert 18 zugewiesen. 


## else Anweisung

Die Anweisungen bei `else` werden ausgeführt, wenn die Bedingung bei `if` falsch ist.
Beispiel:
```c
int alter;
scanf("%d",&alter);
if (alter >= 18)
{
	printf("Erwachsener\n");
}
else
{
	printf("Kind\n");
}
```
Achtung: Bei `else` steht keine Bedingung.
