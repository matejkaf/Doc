---
title: Zeiger und Arrays
tags: [lecture,c,pointer,array,C_2]
---

Zeiger sind eine Alternative zum Index-Zugriff. C kennt intern eigentlich gar keinen Index sondern wandelt dies in Zugriffe über Zeiger um.

Setzen der Zeiger:

```c++
const int len=5;
int a[len];
int* p = a; // Zeiger auf erstes Element
int* q = &a[len-1]; // Zeiger auf letztes Element
```

Mit Zeigern kann + und - gerechnet werden:

```c++
p++;
p--;
p = p + 2;
p += 2;
q = q - 3;
q -= 3;
```

Dabei gilt die Zeiger-Arithmetik, die Änderung des Zeiger-Werts ist vom Datentyp des Zeigers abhängig.
Beispiel Zeiger auf `int` (`int* p`) – mit `p++` wird der Wert von p um die Anzahl von Bytes erhöht die ein `int` im Speicher an Platz benötigt (dies sind in der Regel 4 Byte). Dies ist praktisch wenn Zeiger zum Zugriff auf Arrays verwendet werden, mit `p++` bzw. `p--` bewegt man den Zeiger immer um eine ganze Indexposition.


Anmerkung:  die Anzahl der Bytes die ein Datentyp an Speicher belegt wird durch `sizeof` ermittelt. Beispiel: `sizeof(int)` ist häufig 4 Bytes.

Bei einer allgemeinen Addition, z.B. `p+4`: wird 4 mal die Datentyp-Größe von `p` addiert. Ist `p` ein `int` Zeiger so wird durch `p+4` tatsächlich zum Wert von `p` 16 Bytes addiert.

Dieses Verhalten ermöglicht eine 1:1 Zuordnung zwischen Index- und Zeiger-Zugriff auf ein Array.

```c++
int arr[5];
int i=2;

arr[i] = 42; // entspricht
*(arr+i) = 42;
```

Der Zusammenhang geht auch in umgekehrter Richtung. D.h. ein Zeiger kann wie ein Array verwendet werden.

```c++
int arr[5];
int* p=arr;

p[0] = 42; // == arr[0] = 42
p[1] = 53; // == arr[0] = 53
p[2] = 64; // == arr[0] = 64
```

Diese "Umwandlung" nimmt der C Compiler immer selbst vor. Für ein compiliertes C Programm gibt es Arrays nicht mehr, sondern nur noch Zeiger auf dafür reservierte Speicherbereiche.

Um ein Programm statt mit Index mit Zeigerzugriffe zu schreiben würde es genügen Ausdrücke in der Form `arr[i]` durch `*(arr+i)` zu ersetzen, aber man kann mit Zeiger auch wesentlich eleganter arbeiten.

Beispiel: Alle Array-Elemente auf 0 setzen.

```c++
const int len=5;
int arr[len];
int* p = arr;
for(int i=0; i<len; i++) {
    *p = 0;
    p++;
}
```



# Sentry (Wächter)

Bei dieser Art der Implementierung ist noch störend, dass 2 Variablen inkrementiert werden müssen, `i` und `p`:

```c++
int a[] = {1,2,3,4,5};
int *p=a;
int i=0;
while(i<5)
{
    printf("%d, ",*p);
    p++;
    i++;
}
```

Wir wollen, dass nur eine Variable inkrementiert werden muss.

Idee: Nehmen einen zweiten Zeiger und setzen diesen ans Ende (=Sentry).

Hinweis: Zeiger können mit Vergleichsoperatoren verglichen werden. Bsp. `p<q`

Lösung:

```c++
int a[] = {1,2,3,4,5};
int *p=a;
int q=a+5; // zeigt aufs "Ende" des Arrays
while(p<q)
{
    printf("%d, ",*p);
    p++;
}
```



