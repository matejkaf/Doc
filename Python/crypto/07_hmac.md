---
title: HMAC
subtitle: hash-based message authentication code
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

[wikipedia : HMAC](https://en.wikipedia.org/wiki/HMAC)

Um Veränderungen einer Nachricht erkennen zu können ist ein Hash-Wert alleine zu wenig. Denn dieser Hash-Wert könnte vom Angreifer neu berechnet werden. Um Fälschungssicherheit zu erreichen wird der berechnetet Hash-Wert zusätzlich mit einem geheimen Schlüssel gesichert.

Dies wird allgemein als MAC (message authentication code) bezeichnet.

HMAC ist ein spezielles (häufig angewandtes) Verfahren. Für HMAC kann eine beliebige kryptografische Hashfunktion verwendet werden – z.B. HMAC-SHA256. Der Output von HMAC ist gleich lang wie das Ergebnis der Hashfunktion. Der Schlüssel kann beliebige Länge haben.

$$\text{HMAC}(K,m)$$

Auf der Empfängerseite muss der für die HMAC Berechnung verwendet Schlüssel bekannt sein. Wenn sich der gleiche HMAC Wert ergibt wurde die Nachricht nicht manipuliert.

Da einem Angreifer der Schlüssel K nicht zur Verfügung steht kann die Nachricht nicht unerkannt verfälscht werden.



