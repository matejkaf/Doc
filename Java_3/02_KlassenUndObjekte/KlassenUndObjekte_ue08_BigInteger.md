---
title: Übung Fakultät mit BigInteger
cmds: ['md_html.bash','md_html.bash --small']
tags: [assignment,java, oop]
---

**Übung (BigInteger):**

Die Berechnung der Fakultät ($n!=1 \cdot 2 \cdot 3 \cdot\ldots\cdot n$) ergibt sehr große Zahlen, z.B. hat $70!$ nicht mehr in einem `long` Platz. Die Klasse `BigInteger` kann zum Speichern und Rechnen mit beliebig großen ganzen Zahlen verwendet werden.

Berechne $70!$ mit Hilfe von `BigInteger`.

Verwendung von `BigInteger`:
```java
BigInteger big = new BigInteger ("3"); 
BigInteger big2 = new BigInteger("7");
big = big.multiply(big2); // big = big * big2;
System.out.println("Ergebnis: " + big);
```

---

