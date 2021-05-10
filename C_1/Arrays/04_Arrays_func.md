---
title: Arrays
subtitle: Funktionen
tags: [lecture,arrays,1CHELS]
---


Arrays können an Funktionen übergeben werden.

**Beispiel** – Eine Funktion die ein Array aus 2 Elementen summiert und das Ergebnis ausgibt.

**Lösung:**

Deklaration der Funktion:
```c
void tuwas(int werte[]);
```

Aufruf der Funktion:
```c
int zahlen[2] = {1, 2};
tuwas(zahlen);
```

Definition der Funktion:
```c
void tuwas(int werte[])
{
	int sum = werte[0] + werte[1];
	printf("Summe = %d",sum);
}
```

Was ist im obigen Beispiel zu ändern wenn die Ausgabe der Summe **nicht** in der Funktion stattfinden soll?



**Beispiel** – Schreibe eine Funktion `print` die den Inhalt eines Arrays ausgibt.

**Lösung:**

```c
void print(int a[]);
void main()
{
	int arr[5] = {1,3,5,7,9}; // Array mit Startwerten
	print(arr);
}
void print(int a[])
{
	int i;
	for(i=0;i<5;i++)
		printf("%d, ",a[i])
}
```



## Schreiben in Arrays

Überschreibt man ein Element eines an eine Funktion übergebenen Arrays so wirkt sich die Änderung im Original Array aus.

**Beispiel** – Implementiere eine Funktion `inc`, diese soll zu allen Elementen eines Arrays den Wert 1 addieren.

**Lösung:**

```c
void inc(int b[]);
void main()
{
	int zahlen[3] = {3,5,7};
	inc(zahlen);
	printf("%d %d %d\n", zahlen[0], zahlen[1], zahlen[2]); 
	// Ausgabe: 4 6 8
}
void inc(int b[]) // b verweist auf das Array a
{
	int i;
	for(i=0;i<3;i++)
		b[i]++;
}
```



## Hast Du es verstanden?

Überlege was das folgende Programm ausgibt:
```c
void tuwas(int c[], int b);

void main()
{
	int i;
	int c[2]={7,9};
	int b=11;

	tuwas(c,b,c);

	printf("%d %d %d\n",c[0],c[1],b);
}

int tuwas(int c[], int b, int d[]);
{
	c[0]++;
	c[1]++;
	b++;
  d[0]++;
  d[1]++;
}
```





