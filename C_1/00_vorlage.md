---
title: Vorlagen
tags: [2AHITS]
---

# Vorlagen

## Standard

Für Visual Studio Konsolen Projekt

```c++
#include <stdio.h>
#include <conio.h>

void main()
{
  printf("Hello World\n");
  getch();
}
```

## Zufallszahlen

```c++
#include <stdlib.h>
#include <time.h>

void main()
{
  srand(time(NULL));

  int z = rand()%6 + 1; // 1,...,6
}
```

## Locale (Umlaute)

Für Visual Studio Konsolen Projekt

```c
#include <locale.h>

void main()
{
  setlocale(LC_ALL, "German");
  printf("ÄÖÜäöüß°\n");
}
```

## Warnungen Ausschalten

In Visual Studio

```c++
#pragma warning(disable:4996)
```

