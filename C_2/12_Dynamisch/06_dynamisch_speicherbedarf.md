---
title: Dynamische Speicherverwaltung
subtitle: Übung Speicherbedarf von Strukturen
tags: [assignment]
---

#### Hintergrundwissen

Der `sizeof` Operator ermittelt die (Byte) Größen von Variablen, Datentypen und Strukturen.

```c++
struct Complex {
  double re;
  double im;
};

int main() {
  int x=7;
  // sizeof --> unsigned long (%lu)
  printf("%lu\n",sizeof(int)); // 4
  printf("%lu\n",sizeof(x)); // 4

  Complex c;
  printf("%lu\n",sizeof(Complex)); // 16
  printf("%lu\n",sizeof(c)); // 16

  Complex* p1 = new Complex;
  int* p2=&x;
  printf("%lu\n",sizeof(p1)); // 8
  printf("%lu\n",sizeof(p2)); // 8
  // Zeiger brauchen immer 8 Byte (64 Bit) ganz egal was das Ziel ist
}
```

---

#### Übung (Speicherbedarf von Strukturen)

Schätze zuerst den Speicherbedarf der Strukturen. Verwende anschließend ein Programm mit  `sizeof()` um die Größe der Strukturen zu ermitteln. Welche Schlussfolgerungen ziehst Du aus dem Ergebnis? Mache ein paar Experimente um deine Hypothese zu überprüfen.



```c++
struct Test1 {
  char a;
  char b;
};
```

```c++
struct Test2 {
  int a;
  int b;
};
```

```c
struct Test3 {
  int a;
  char b;
  char c;
};
```

```c
struct Test4 {
  char b;
  int a;
  char c;
};
```

```c
struct Test5 {
  char b;
  char c;
  char d;
  int a;
};
```

