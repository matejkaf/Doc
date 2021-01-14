---
title: while Schleifen
type: lecture
cmds: ['md_html.bash --small']
---



```c
while (Bedingung)
{
	// Anweisungen
}
```

Wie `if` Bedingung – Anweisungen werden jedoch immer wieder ausgeführt **solange** (*while*) die Bedingung wahr ist.


Beispiel: Ausgabe der Zahlen 1 bis 3.

```c
int i;
i=1;
while (i<=3)
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

