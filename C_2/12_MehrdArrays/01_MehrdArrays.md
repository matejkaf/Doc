---
type: lecture
cmds: ['md_html.bash --small','md_html.bash']
tags: [c,array]
---



# Mehrdimensionale Arrays



Vielfältige Anwendungen:

- Mathematik (Matrizenrechnung)
- Spiele (z.B. 4 gewinnt, Dame, Schach, etc.)

2-dimensionales Array:

```c
int t[2][3];	// 2 Zeilen, 3 Spalten
```

Vorstellen kann man sich ein 2-dimensionales Array wie eine Tabelle.

Zugriff:

```c
t[Zeile][Spalte]
t[0][1] // Zugriff auf Zeile 0, Spalte 1
t[0][0] // ganz links oben
t[1][2] // ganz rechts unten
```




# Übergabe an Funktionen

Nur der erste Index darf leer gelassen werden.

```c
#define ZEILEN 2
#define SPALTEN 3
void input( int tabelle[][SPALTEN] );
void main()
{
	int tabelle[ZEILEN][SPALTEN];
	input( tabelle ); 
}
void input(int tabelle[][SPALTEN]) 
{
	int z;	// Zeilen
	int s;	// Spalten
	for( z = 0; z < ZEILEN; z++ ) 
		for( s = 0; s < SPALTEN; s++ ) 
			scanf( "%d", &tabelle[z][s] );
}
```



Um die Übersicht nicht zu verlieren sollten immer die gleichen Variablennamen für Zeile und Spalte verwendet werden. Z.B.\ `z` (oder `i`) für die Zeile, `s` (oder `j`) für die Spalte.
Außerdem hilft es sehr die Anzahl der Zeilen und Spalten als globale Konstanten zu definieren

```c
#define ZEILEN 2 
// oder besser in C++
const int ZEILEN=2;
```



# Initialisierung

Initialisierung eines mehrdimensionalen Arrays – erster Index darf leer bleiben:

```c
int tabelle[][3] = {
		{ 3, 4, 5 }, 
		{ 6, 7, 8 }
    };
```

