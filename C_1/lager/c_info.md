

```c
#include <stdio.h>
#include <conio.h>

void main()
{
  printf("Hallo Welt\n");
  getch();
}
```



# Locale

```c
#include <locale.h>

void main()
{
  setlocale(LC_ALL, "German");
  printf("ÄÖÜäöüß°\n");
}
```

# Warnungen Ausschalten

```c
#pragma warning(disable:4996)
```

