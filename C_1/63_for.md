---
title: Doc
cmds: ['md_html.bash --small']
tags: [lecture]
---




# for Schleife

Kürzere Schreibweise für `while`.

Beispiel: Ausgabe der Zahlen 1 bis 10.


```c
int i;
i = 1;
while (i<=10)
{
	printf("%d",i);
    i++;
}
```


```c
int i;
for (i=1 ; i<=10 ; i++)
{
	printf("%d",i);
}
```

Allgemeine Form:

```c
for( Initialisierung; Bedingung; Fortsetzung )
{
    // ...
}
```


Die Abarbeitungsreihenfolge ist:

1. Initialisierung
2. Bedingung prüfen
3. Schleifenkörper
4. Fortsetzung
5. weiter bei 2.


Die Schritte: Bedingung prüfen, Schleifenkörper, Fortsetzung, werden solange wiederholt wie die Bedingung zutrifft (*wahr* ist).

Jedes der 3 Elemente der `for` Schleife kann auch weggelassen werden.

`for(;i!=11;)` - entspricht `while(i!=11)`
`for(;;)` - entspricht `while(1)`


Eine leere Bedingung ist immer wahr (Endlosschleife).
