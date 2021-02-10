---
title: Call-by-Reference Übungen
cmds: ['md_html.bash --small']
tags: [assignment,c,pointer]
---



# call-by-reference

Normalerweise werden Parameter per Kopie an Funktionen übergeben. Eine Änderung des lokalen Parameters in der Funktion hat keine Auswirkung auf die beim Funktionsaufruf übergebene Variable.

Übergibt man jedoch einen Zeiger an die Funktion ist es möglich die Variable aus der Funktion heraus zu ändern. Dieses Verhalten nennt man *call-by-reference*.

Um einen Zeiger auf eine Variable zu erhalten stellt man ein `"&"` davor. Dies ist der **Adressoperator**, weil dieser die Adresse einer Variable ermittelt.


Beispiel:

```c
void foo(int* p, int n)
{
	*p = *p + n;
}

void main()
{
	int x = 42;
	foo(&x, 3); // &x = Zeiger auf x
	printf("%d", x);
}
```





---

**Übung (swap):**

Schreibe eine Funktion `swap()` die den Inhalt zweier `char` Variablen vertauscht. Verwende dafür Zeiger als Funktions-Parameter. 

Anwendung der Funktion:


```c
char a='o';
char b='p';
swap(&a,&b);
```



---

**Übung (mul):**

Schreibe eine Funktion die von einer Zahl das doppelte, vierfache und achtfache ermittelt und per Zeiger in Variablen schreibt.

In dieser Funktion dürfen **keine lokalen Variablen** angelegt werden.
```c
mul(42,&dopp,&vierf,&achtf);
```


---

**Übung (Eingabe):**
Schreibe eine Funktion die Benutzerführung, Eingabe (Für `double` Werte) und Überprüfung auf korrekten Wertebereich erledigt. Wenn der eingegebene Wert sich innerhalb des Wertebereichs befindet so gibt die Funktion 1 andernfalls 0 zurück.


Beispiel für die Anwendung dieser Funktion:
```c
int ok = 0;
double temp;
while(ok==0)
{
	ok = input(
			"Bitte Temperatur eingeben",
			&temp,
			35.5,    // untere Grenze
			44.5     // obere Grenze
			);
	if(ok==0)
		printf("Falscher Wertebereich");
}
printf("Korrekte Eingabe: %lf\n", temp);
```



---

**Übung (Sortieren):**
Schreibe eine Funktion die die Werte von 3 Variablen in eine sortierte Reihenfolge bringen kann.


```c
int a[]={42,21,37};
sort3(&a[0], &a[1], &a[2]);
```



---

**Übung (Kleinerer):**
Schreibe eine Funktion die zwei `int` Werte als Zeiger übergeben bekommt und einen Zeiger auf den kleineren der beiden Werte zurückgibt.

---



