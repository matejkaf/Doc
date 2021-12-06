---
title: Logische Operatoren
tags: [lecture,C_1]
---

Logische Operatoren dienen zum Bilden umfangreicherer Bedingungen.


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

- and: `&&` **beide** Seiten wahr
- or: `||` **mindestens eine** Seite wahr

- not `!` negiert die nachfolgende Bedingung:

```
!(alter<14)

entspricht:

alter>=14
```

Beispiel

```c++
if( !( alter==14 || alter=15 ) )
```



# Beispiele

```c
a >= 10 && a <= 99
a < 10 || a > 99
( a>=10 && a<=99) || a==150
!( a<10 || a>99 )
```
