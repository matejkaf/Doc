---
title: Doc
tags: [2AHITS]
---

# Vorlagen

## Standard

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

```c
#include <locale.h>

void main()
{
  setlocale(LC_ALL, "German");
  printf("ÄÖÜäöüß°\n");
}
```

## Warnungen Ausschalten

```c++
#pragma warning(disable:4996)
```

