---
title: if Anweisung
type: lecture
cmds: ['md_html.bash']
---



# Verketten

Aufgabenstellung:

Der Wert einer Variable `x` soll

- geviertelt werden falls diese größer als 30 ist.
- halbiert werden falls diese größer als 10 ist.
- andere Zahlen bleiben unverändert (Text ausgeben)

Teste $x=36$, $x=48$ 

Falsche Lösung:
```c
int x;
scanf("%d",&x);
if(x>30)
{
	x=x/4;
}
if(x>10)
{
	x=x/2;
}
printf("%d\n",x);
```

Korrekte Lösung:
```c
int x;
scanf("%d",&x);
if(x>30)
{
	x=x/4;
} 
else if(x>10)
{
	x=x/2;
} 
else
{
	printf("Zahl nicht geändert");
}
printf("%d\n",x);
```



**Übung (Verketten)**

Einteilung Körpergrößen in 4 Stufen:

- XS unter 80
- S ab 80
- M ab 100
- L ab 150

Schreibe ein Programm das nach Eingabe der Körpergrößen die entsprechende Stufe (Xs, S, M oder L) ausgibt. Verwende eine verkettete if Anweisung – keine Vergleichsoperatoren und keine Verschachtelung.


