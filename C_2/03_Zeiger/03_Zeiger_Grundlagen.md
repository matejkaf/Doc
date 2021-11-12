---
title: Zeiger - allgemeine Grundlagen
tags: [lecture,c,pointer,intro,C_2]
---

Zeiger (auf englisch *pointer*) sind ein **weiterführendes Sprachkonzept** von C mit vielfältigen Anwendungsmöglichkeiten. Zeiger sind **Variablen** die **Adressen** speichern. Zeiger werden definiert indem man an den Datentypen einen Stern anhängt.

```c++
int* p;
````

Die Zeile `int* p;` liest man von rechts nach links: 

- "Die Variable `p` ist ein Zeiger auf einen `int` Wert" – dies bedeutet, dass `p` eine Adresse speichert und an dieser Adresse befindet sich ein `int` Wert.

Um  Adressen zu ermitteln dient der `&` Operator. Setzt man `&` vor eine Variable wird deren Adresse ermittelt. `&a` ergibt die Adresse von a.

Beispiel:

```c++
int a;
int* p;
p = &a;
```

`p` enthält nun die Speicheradresse an der sich die Variable `a` befindet. Man sagt `p` zeigt auf `a`. Da `p` eine Variable ist kann diese Zuordnung (d.h. auf was `p` zeigt) jederzeit geändert werden.

Der Datentyp des Zeigers muss dem des Ziel entsprechen.

```c++
char b = 'f';
char* p;
p = &b;
```

Mit einem weiteren Sprachkonstrukt (`*p`) kann nun **indirekt** auf die Speicheradresse (die in der Zeigervariablen `p` gespeichert ist) zugegriffen werden. Der Zeiger wirkt praktisch wie eine Umleitung. Dieser Vorgang wird auch als **dereferenzieren** eines Zeigers bezeichnet

Beispiel:

```C
int var1=21;
int var2=32;
int temp;
int* p;
p = &var1;
temp = *p;
p = &var2;
*p = temp;
```

Achtung Unterschied:

- `p = ...` bestimmt wo der Zeiger hinzeigt.
- hingegen schreibt `*p = ...` ans Ziel des Zeigers.

Auch der `*` hat im Zusammenhang mit Zeigern 2 Bedeutungen:

- **Beim Datentypen**. Z.B. `int* p`, sagt `*` aus dass p ein Zeiger auf int ist.
- **Vor dem Zeiger**. Z.B. `*p`, bedeutet der `*`, dass auf das Ziel des Zeigers zugegriffen werden soll.

