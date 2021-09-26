---
title: Daten aus Textdateien lesen in C/C++
---




Testdaten für ein Programm in einer Textdatei abzuspeichern erspart mühsame Tastatureingaben. In vielen Programmierwettbewerben (z.B. CCC) werden zu beabeitende Daten in Textdateien vorgegeben.



# Einzelwert
Beispiel: Lesen einer Zahl aus einer Textdatei `test.txt`:

```
123
```




```c
FILE* fp;
int x;
fp=fopen("test.txt", "r");
fscanf(fp, "%d", &x);
printf("%d\n",x);
```



In C können Textdateien mit **fopen** geöffnet und die Daten darin mit **fscanf** gelesen werden.
Beide Befehle sind Bestandteil von stdio.




# Array (in C)


Lesen von mehreren Zahlen in ein Array. Die Anzahl steht in der Datei.

Beispiel -- test.txt:

```
3
111
122
133
```

Die Zahlen können aber auch hintereinander stehen, es ändert nichts am Programm (weil `fscanf` egal ist ob die Zahlen durch Leerzeichen oder Zeilenumbrüche getrennt sind):

```
3
111 122 133
```



**Problem**: Die Länge muss zuerst aus der Datei gelesen werden ehe die Arrays angelegt werden können.


Es gibt 2 Möglichkeiten damit umzugehen:

**Möglichkeit Nr. 1**

Die Maximallänge des Arrays ist bekannt.
In diesem Fall kann das Array in dieser maximalen Länge angelegt werden.

```c
const int MAX=10000;
int a[MAX];
int N;
fscanf(fp, "%d", &N);
for (int i=0; i<N; i++)
    fscanf(fp, "%d", &a[i]);
```


**Möglichkeit Nr 2.**

Die gelesene Länge verwenden um **dynamisch** ein Array genau dieser Länge anzulegen:
```c
int N;
fscanf(fp, "%d", &N);
for (int i=0; i<N; i++)
    fscanf(fp, "%d", &a[i]);
int* a = new int[N];
for (int i=0; i<N; i++)
    fscanf(fp, "%d", &a[i]);
```







# String (in C)


Einlesen eines Strings (der keine Leerzeichen enthält).

Beispiel – `test.txt`:

```
abcd
```

Der String darf keine Leerzeichen enthalten (weil `fscanf` das als String-Ende interpretiert)!


```c
char t[64];
fscanf(fp, "%s", t);
printf("%s\n", t);
```

