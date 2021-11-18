---
title: command substitution
subtitle: Lösungen bash scripting
tags: [assignment,3AHITS]
---

Löse mit Hilfe von command substitution:



#### Übung (Zufälliges Wort)

```sh
echo $(( $RANDOM % 1000 + 1))
sed -n $(( $RANDOM % 1000 + 1))p wortliste1000.txt
# $(sed -n $(( $RANDOM % 1000 + 1))p wortliste1000.txt)

echo $(sed -n $(( $RANDOM % 1000 + 1))p wortliste1000.txt) $(sed -n $(( $RANDOM % 1000 + 1))p wortliste1000.txt) $(sed -n $(( $RANDOM % 1000 + 1))p wortliste1000.txt) $(sed -n $(( $RANDOM % 1000 + 1))p wortliste1000.txt) $(sed -n $(( $RANDOM % 1000 + 1))p wortliste1000.txt).
```

