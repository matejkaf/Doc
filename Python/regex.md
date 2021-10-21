---
title: Regular Expressions
subtitle: Python
---

## 

[docs.python Referenz](https://docs.python.org/3/library/re.html)

[docs.python HOWTO](https://docs.python.org/3/howto/regex.html#regex-howto)

[regex101](https://regex101.com)

[pythex](https://pythex.org)



`re.search`

```python
html_header = " bla bla   Content-Length: 1234  bla bla  "
content_length_search = re.search(r"Content-Length:\s\d*",html_header)
if content_length_search:
  content_length = content_length_search.group(0)
  print(content_length)
```

Output

```
Content-Length: 1234
```

Mit Gruppen

```python
html_header = " bla bla   Content-Length: 1234  bla bla  "
content_length_search = re.search(r"Content-Length:\s(\d*)",html_header)
if content_length_search:
  content_length = content_length_search.group(1)
  print(content_length)
```

`group(0)` ist immer der gesamte match.

Ersetzen mit `re.sub`:

```python
result = re.sub(pattern, repl, string);

result = re.sub(r'\s+', ' ',   input)           # Eliminate duplicate whitespaces
```



Beispiel – Datum extrahieren:

```python
import re
import datetime

tests = [
  '5AHELS KSN Gruppe B (Di, 13.10.2020)',
  '5AHELS KSN Gruppe B (22.11.2020)',
  '5AHELS KSN Gruppe B (22.11.2020) Test',
  '5AHELS DIC Gruppe A (Mi, 07.10.2020, 13:00-14:40)',
  '5AHELS DIC Gruppe A',
  '5AHELS DIC Gruppe A (Nix) Bla',
]


def getDate(str):
  date_pattern = re.compile(r'.*\(.*(\d\d\.\d\d\.\d\d\d\d).*\)')
  match = date_pattern.search(str)
  if match:
    return getDateEu(match.group(1))
  else:
    return None

for str in tests:
  print(getDate(str))

```



# Beispiele

Alle Image Links in Markdown finden (z.B. alle Vorkommen in einem File):

```python
re.compile(r"!\[.*?\]\((.*?)\)").findall(markdown_content)
```

