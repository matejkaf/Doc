---
title: Erweiterter euklidischer Algorithmus
subtitle: Public-key cryptography
use_math: true
---

Der "erweiterte euklidische Algorithmus" berechnet aus 2 natürlichen Zahlen $a$ und $b$ den ggT und zwei ganze Zahlen $s$ und $t$ die die folgende Gleichung erfüllen:
$$
\operatorname{ggT}(a,b) = s \cdot a + t \cdot b
$$
Anwendung: Suchen das **multiplikativ Inverse** von $b$ modulo $a$, d.h. ein $t$ für das gilt:
$$
t\cdot b \equiv 1 \pmod a
$$

Das $t$ aus dem Algorithmus erfüllt genau diese Eigenschaft, denn dieser ermittelt das Tripel $(d=\operatorname{ggT}(a,b), s, t)$ , nun ist entweder $d=1$ und damit 
$$
\operatorname{ggT}(a,b) = 1 = s \cdot a + t \cdot b
$$
und

$$
1\equiv t\cdot b \pmod a
$$

$t$ ist also das multiplikative Inverse von $b$,

denn: $1\equiv t\cdot b \pmod a$ bedeutet es gibt ein $s$ so dass $1=(t\cdot b)-s\cdot a$, und da $s$ selbst negativ sein kann: $1=t\cdot b+s\cdot a$

Ist aber  $d=\operatorname{ggT}(a,b)\neq 1,$ so hat $b$ modulo $a$ kein Inverses.



Implementierung: Siehe [[→ wikipedia](https://de.wikipedia.org/wiki/Erweiterter_euklidischer_Algorithmus#Iterative_Variante)]
