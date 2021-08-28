---
title: Vorlagen
tags: []
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

Für Visual Studio Konsolen Projekt unter Windows

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



## Wartezeit

Linux (bzw. Replit)

```c++
#include<unistd.h>

int main() 
{
	usleep(3 * 1000000000); //sleeps for 3 seconds  
}
```

