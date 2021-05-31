---
title: Files
subtitle: Python Einführung
---

# Textfile lesen

```python
f = open('path','r')
contents = f.read() # all content as one string
print(contents)
f.close()
```

Eine einzelne Zeile lesen geht mit `readline`, liefert `None` wenn das Ende der Datei erreicht ist.

```python
line = f.readline()
```

Schleife über den Inhalt einer Textdatei

```python
f = open('path','r')
for line in f:
  print(line)
f.close()
```



Lesen in eine Liste mit `readlines`

```python
f = open('path','r')
lines = f.readlines()
print(lines)
for line in lines:
  print(line)
f.close()
```



# Textfile schreiben

```python
f = open('path','w')

f.write('this is a line\n')

# oder mit print
print('text', file=f)

f.close()
```

- Mode `w` erstellt eine neue Datei oder löscht den Inhalt einer bestehenden Datei
- Mode `a` für append: Anfügen an einen bestehenden Inhalt

