---
title: Schleifen
subtitle: Python Einführung
---



# while

```python
i=0
while i<10:
  print("Hallo Welt")
  i+=1
```



# for

```python
for i in range(10):
  print(i)
# 0,..,9
```



Varianten für `range`:

```python
range(5, 10)
# 5 6 7 8 9
# 10 ist nicht dabei!
range(3, 9, 2)
# 3 5 7
```



---

#### Übung (Nächste Primzahl)

Erstelle eine Funktion `nextPrim` die eine Zahl übergeben bekommt und die die erste Primzahl zurückgibt die größer ist als diese Zahl.

---



