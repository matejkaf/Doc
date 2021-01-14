---
title: Schleifen
type: lecture
cmds: ['md_html.bash --small']
---





# Übungsblatt




# do Schleife

Läuft einmal durch, erst dann wird Bedingung geprüft.
```c
int i;
i=1;
do 
{
    printf("%d",i);
    i++;
} while (i<=10);
```




# for Schleife

Kürzere Schreibweise.

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



# Übungsblatt



# Übungsblatt Schleifen Drill



# break


Mit der `break` Anweisung kann eine Schleife sofort verlassen werden.

Beispiel – Einlesen von maximal 20 Zahlen mit Abbruch wenn die Zahl $-1$:
```c
for (int i=0 ; i<20 ; i++)
{
	scanf("%d", &x);
    if (x==(-1))
        break;
}
```

Beispiel – Ausgabe der Zahlen 1 bis 10:
```c
int i = 1;
while(1)
{
	printf("%d",i);
	if(i==10)
		break;
	i++;
}
```



# Übungsblatt Zahlenratespiel




# Verschachtelung


Bedingte Anweisungen (z.B.\ `if/else`) und Schleifen (z.B.\ `while`, `for`) können beliebig ineinander verschachtelt werden.


**Beispiel:** – Was ist die Ausgabe dieses Programms?
```c
for( i=0 ; i<2 ; i++)
{
    for( j=0 ; j<3 ; j++)
    {
        printf("%d - %d\n", i, j );
    }
}
printf("%d - %d\n", i, j );
```

Achtung:
- Unterschiedliche Laufvariablen verwenden (`i` und `j`). 
- Sauber Formatieren (Einrücken!).

Ändere das Programm auf `while` Schleifen.



# Übungsblatt – Verschachtelte Schleifen



# Übungsblatt Schleifen Drill 2



# Übungsblatt Schleifen Trainingsaufgaben



# Übungsblatt Tannenbaum



