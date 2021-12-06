---
title: ArrayList – Gutscheincodes
subtitle: Übung
tags: []
---

#### Übung (Gutscheincodes I)

Für einen Online Shop sollen Gutscheincodes verwaltet werden. Die Gutscheincodes werden an die Kunden verschickt und können beim nächsten Einkauf eingegeben werden.

Ein Gutscheincode besteht aus 15 Zeichen (zur besseren Lesbarkeit durch `-` getrennt). Als Zeichen sind die Großbuchstaben und Ziffern zulässig. Beispiel:

```
HD6FD-KDO6A-66SHG
```

Ein Gutschein hat weiters einen Betrag (z.B. 20 Euro) und ein Datum an dem die Gültigkeit endet.

Erstelle eine Klasse `Date` und eine Klasse `Coupon` . Im Konstruktor der Klasse Coupon soll der Coupon-Code zufällig erzeugt werden.



#### Übung (Gutscheincodes I)

Erstelle eine Klasse `CouponManager` zur Verwaltung aller Gutscheincodes. 

- Einfügen eines Gutscheincodes
- Entfernen aufgrund des Codes (nach dem der Kunde diesen eingelöst hat)
- Entfernen aller nach abgelaufenen Codes

