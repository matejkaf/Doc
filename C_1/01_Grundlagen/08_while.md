---
title: while Schleifen
tags: [lecture,C_1,1CHELS,1AHITS]
---


```c
while (Bedingung)
{
	// Anweisungen
}
```

Wie `if` Bedingung – Anweisungen werden jedoch immer wieder ausgeführt **solange** (*while*) die Bedingung wahr ist.


Beispiel: Ausgabe der Zahlen 1 bis 42.

```c
int i;
i=1;
while (i<=42)
{
	printf("%d ",i);
	i=i+1;
}
```

Kurzform für eins dazu- oder wegzählen:

```c
i++; // wie i=i+1
i--; // wie i=i-1;
```

