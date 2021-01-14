

---
title: Das ist der Titel
description: Eine Beschreibung um was es geht
tags: [ csharp, python, dotnet, c, java, array ]
---

Eine Liste in YAML muss mit eckigen Klammern definiert werden

# Überschrift

Und los gehts 



# Unterstützen von includes



Marked.app extension:

<<[Code title](folder/filename)

[](https://github.com/jgm/pandoc/issues/553#issuecomment-21068189)

`filename.md`{.include}

~~~ {.include}
filename.md
~~~



## Python

```python
#!/usr/bin/env python

import re
import sys                                                                                                     
include = re.compile("`([^`]+)`\{.include}")
for line in sys.stdin:
    if include.search(line):
        input_file = include.search(line).groups()[0]
        file_contents = open(input_file, "rb").read()
        line = include.sub(line, file_contents)
    sys.stdout.write(line)
```

## Test

---

`include.md`{.include}

---

<Ende des Dokuments>