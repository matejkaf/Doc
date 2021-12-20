---
title: Mathematische Grundlagen
subtitle: Public-key cryptography
description:
tags: [lecture, krypto ]
use_math: true
---

RSA verwendet Modulo Multiplikationen.

Im ersten Schritt werden 2 große **Primzahlen** $p$ und $q$ zufällig gewählt.  $p$  und $q$ sollten ungefähr gleich groß sein.

- $n=p*q$ ist der **Modulus** der Multiplikationen ($n$ ist keine Primzahl).

- Eine Zahl $e$, der **Exponenent**, wird gewählt. Häufig 65537, 17, 5 oder 3.

  - > $e$ is often statically set to $65537=2^{16}+1$ for encryption speed (since there are only two set bits in that number). [[*](https://crypto.stackexchange.com/a/1449)]

- Das Paar $(n,e)$ ist der **public key**.



# Private Key

Es wird das kleinste gemeinsame Vielfache $t$ von $p-1$ und $q-1$ bestimmt.

$$
t=\text{kgV}(p-1,q-1)
$$

Dieses $t$ hat für beliebiges $x$ die Eigenschaft: 
$$
x^t=1 \pmod n \quad\quad\quad \text{(Formel 1)}
$$

>  Anmerkung: Nach Euler-Fermat wäre $t=(p-1)(q-1)$ aber das kgv ist auch OK (siehe `doc/t_kgv_beweis_wolfgang.png`), wahrscheinlich um die Zahl klein zu halten.

Eine Zahl $d$ wird ermittelt, so dass gilt:
$$
e*d=1 \pmod t
$$
Bedeutet: $d$ ist das multiplikativ Inverse zu $e$ mit Modul $t$. Siehe [Erweiterter euklidischer Algorithmus](https://de.wikipedia.org/wiki/Erweiterter_euklidischer_Algorithmus).

Anders: für ein bestimmtes $k$ gilt:
$$
e*d=k*t+1 \quad\quad\quad \text{(Formel 2)}
$$



$d$ ist der **private key** (wird gemeinsam mit $p$, $q$ und $t$ geheim gehalten).



# Verschlüsselung

Die Nachricht $m$ wird als Zahl dargestellt (z.B. 128/256 bits) und mit dem public key `e` mod `n` verschlüsselt.

Ciphertext: 
$$
c=m^e\  \pmod n
$$



# Entschlüsselung

Mit private key `d` mod `n`
$$
c^d\  (\text{mod}\ n)=m
$$

---

Beweis (alles $\text{mod}\ n$):
$$
c^d={(m^e)}^d=m^{ed}
$$

Durch [Formel 2] ist 

$$
e*d=k*t+1
$$

und daher

$$
m^{ed}=m^{kt+1}=(m^t)^k*m
$$

Wegen [Formel 1] ist $m^t=1$:

$$
(m^t)^k*m=(1)^k*m=m\  (\text{mod}\ n)
$$

---

- Geheimhaltung: Ist einem Angreifer nur eine Zahl $d$, $p$, $q$ oder $t$ bekannt so wäre ein entschlüsseln möglich.
- Gängige Größen für $n$: 2048/4096 Bits (616/1233 Stellen).



# Intuitiv

Für einen etwas einfacheren Zugang – mit konkreten Zahlen – siehe [doc/Rsa.pdf](doc/Rsa.pdf). Idee vom Video: [Prime Numbers & RSA Encryption Algorithm - Computerphile](https://youtu.be/JD72Ry60eP4)






# Kryptografische Stärke

Ergibt sich aus der Tatsache, dass es sehr **leicht** ist 2 Zahlen zu **multiplizieren** $n=p*q$, es aber ungleich **schwieriger** ist aus dem $n$ die beiden **Faktoren** wieder herauszurechnen (siehe [Integer factorization](https://en.wikipedia.org/wiki/Integer_factorization)). $n$ ist ein wesentlicher Teil des public key, gelänge es einem Angreifer $p$ oder $q$ zu ermitteln wäre die Verschlüsselung gebrochen. Die Sicherheit des RSA Verfahrens ergibt sich aus der Tatsache dass diese Faktorisierung nur unter riesigem Rechenaufwand möglich ist.

Beispiel: 

- [RSA-768](https://en.wikipedia.org/wiki/RSA_numbers#RSA-768) (768 Bit Zahl mit 232 Stellen faktorisieren). 2009. CPU-Zeit: 2000 Jahre.
- [RSA-240](https://en.wikipedia.org/wiki/RSA_numbers#RSA-240) (795 Bit Zahl 240 Stellen), November 2019 [[*](https://www.heise.de/security/meldung/Forscher-vermelden-neuen-Rekord-beim-Knacken-von-RSA-4603700.html)], etwa 900 CPU-Kern-Jahre auf 2.1 GHz Xeons Gold, Diskreter Logarithmus wurde auch berechnet. Algorithmus ist 3-mal schneller als bei RSA-768 (HW Verbesserungen herausgerechnet)!

D.h. wählt man $n$ groß genug und gibt dieses öffentlich bekannt, hält $p$ und $q$ aber geheim, so ist es einem Angreifer praktisch unmöglich $p$ und $q$ herauszufinden.

Da es theoretisch mit genug Rechenpower und Zeit möglich sein könnte, dass eine Faktorisierung gelingt sind **RSA Keys** in der Praxis mit einem **Ablaufdatum** versehen (einige Jahre).



# WolframAlpha

[WolframAlpha](https://www.wolframalpha.com/)

Zufällige Primzahlen in einem Wertebereich

```mathematica
RandomPrime[{10000,20000}]
```

Erweiterter euklidischer Algorithmus:

```mathematica
ExtendedGCD[534,421]
```

Zwei zufällige Primzahlen multiplizieren:

```mathematica
p=RandomPrime[1000], q=RandomPrime[1000],n=p*q
[Out] n = 26549, p = 139, q = 191
```

Eine Zahl Faktorisieren

```mathematica
factor 26549
```



# Python

Zufallszahlen

```python
import random
r=random.randint(0,1000000)
```

Modulo Operator

```python
print(13%5)
```

Modular exponentiation

```python
print( pow(2,3,5) )  # 2^3 % 5 = 8 % 5 = 3
print( pow(2,5,13) ) # 2^5 % 13 = 32 % 13 = 6
```

Modular Inverses (Python 3.8+) [[→stackoverflow](https://stackoverflow.com/a/9758173)]


```python
# 5*d mod 72
# d=?
print(pow(5, -1, 72))
```

GCD ... greatest commond divisor (=ggT)

```python
import math
print (math.gcd(3, 6))
```

Modular Inverses mit extended GCD

```python
# Extended GCD (recursive)
def extendedGCD(num1, num2): 
  if num1 == 0 :  
    return num2, 0, 1
  output, n, m = extendedGCD(num2 % num1, num1) 
  n1 = m - ( num2//num1 ) * n    # // ... integer division
  m1 = n 
  return output,n1,m1

# an + bm = GCD(a,b), where n and m are integer coefficients.
a=72
b=5
gcd, n, m = extendedGCD(a,b)
print(f"gcd = {gcd} = {a}*{n}+{b}*{m} = {a*n+b*m}")
```

Primzahlen

```python
# sympy Library functions for prime - https://stackoverflow.com/a/42440056
import sympy
print(sympy.isprime(5)) 
print(sympy.randprime(10000, 20000))
```

Integer Faktorisierung

```python
import sympy
print(sympy.factorint(26549))
# {139: 1, 191: 1} --> dictionary factor=>multiplicity
```

Text nach ganzer Zahl

```python
plaintext = "Das ist ein Test"
plaintext_bytes = plaintext.encode('utf-8')
print(plaintext_bytes)
plaintext_number = int.from_bytes(plaintext_bytes,byteorder='little')
print(plaintext_number)
```

Zurück von ganzer Zahl nach Text:

```python
plaintext_bytes_2 = plaintext_number.to_bytes((plaintext_number.bit_length() + 7)//8, byteorder='little')
print(plaintext_bytes_2)
plaintext_2 = plaintext_bytes_2.decode('utf-8')
print(plaintext_2)
```

