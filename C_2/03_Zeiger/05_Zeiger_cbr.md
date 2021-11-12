---
title: Zeiger - call by reference
tags: [lecture,c,pointer,C_2]
---

# Der Adressoperator (`&`)

Ein Zeiger wird definiert mittels:

```c++
int* p; // Zeiger auf int
```

Ein Zeiger ist ein Variable die eine Speicher-Adresse enthält. Durch dereferenzieren `*p` kann auf den Inhalt dieser Speicher-Adresse zugegriffen werden. Da es sich um einen `int` Zeiger handelt wird in diesem Fall ein `int` Wert adressiert.

In einem laufenden Programm ist jeder Variable eine Speicheradresse zugewiesen, diese kann mit dem `&` Operator ermittelt werden.

Beispiel:

```c++
int a=42;
int* p;
p = &a; // p zeigt auf a
printf("%d", *p);
```

Der Datentyp des Zeigers muss dem des Ziel entsprechen.

```c++
char b = 'f';
char* p;
p = &b;
```


# Anwendung für call-by-reference

Bei Aufruf einer Funktion mit "normalen" Parametern (die keine Arrays sind) werden diese **call-by-value**, d.h. als Kopie übergeben.

```C
void f(double a)
{
    a=2.1;
}

void main()
{
    double a=3.4;
    f(a);
}
```

**ToDo:** was passiert hier mit `a`? Skizze.

Änderung auf Zeiger und call-by-reference:

```C
void f(double* a)
{
    *a=2.1;
}

void main()
{
    double a=3.4;
    f(&a);
}
```

**ToDo:** Skizze für diesen Ablauf.
