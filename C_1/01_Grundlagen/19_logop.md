---
title: Logische Operatoren
tags: [lecture,C_1]
---

Es gibt 3 logische Operatoren:


	&& Und
	|| Oder
	! Nicht (Negation)



Anwendung:

```c
	if ( alter>14 && alter<18 )
```

```c
	if ( alter<14 || alter>18 )
```

- `&&` **beide** Seiten wahr
- `||` **mindestens eine** Seite wahr



## Negation

Mit vorgesetztem `!`

wahr ⟶ falsch bzw. falsch ⟶ wahr

Beispiel:
`!(alter<14)` entspricht `alter>=14`

# Beispiele

```c
a >= 10 && a <= 99
a < 10 || a > 99
( a>=10 && a<=99) || a==150
!( a<10 || a>99 )
```
