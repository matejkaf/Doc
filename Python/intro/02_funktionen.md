---
title: Funktionen
subtitle: Python Einführung
---

Funktionen in Python werden so definiert:

```python
# Defines a "repeat" function that takes 2 arguments.
def repeat(s, exclaim):
  """
  Returns the string 's' repeated 3 times.
  If exclaim is true, add exclamation marks.
  """
  result = s *3
  if exclaim:
    result = result + '!!!'
  return result

#
# MAIN
#
print(repeat('Yay', False))  ## YayYayYay
print(repeat('Woo Hoo', True))  ## Woo HooWoo HooWoo Hoo!!!
```

