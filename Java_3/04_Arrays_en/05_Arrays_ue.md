---
title: ArrayList
subtitle: Übungen – Schulweg Statistik
tags: [assignment]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

#### **Übung (Schulweg Statistik):**

Du möchtest wissen wie lange du durchschnittlich für den Schulweg brauchst (in Minuten, Datentyp `double`) und wie stark diese Dauer variiert. Schreibe dazu ein Programm das die Eingabe beliebig vieler `double` Werte ermöglicht. Speichere alle Werte in einer ArrayList. Ende wenn 0 eingegeben wird. 

Berechne anschließend den Mittelwert $$\displaystyle{\bar {x}}$$ (auch Erwartungswert genannt) 

$$
{\displaystyle{\bar {x}}={\frac {1}{n}}\left(\sum _{i=1}^{n}{x_{i}}\right)={\frac {x_{1}+x_{2}+\cdots +x_{n}}{n}}}
$$


und die Standardabweichung $$s$$ – das ist das statistische Maß für die Abweichung vom Mittelwert.

$$
{s^{2}={\frac {1}{n}}\sum _{i=1}^{n}{\left(x_{i}-{\overline {x}}\right)^{2}}={\frac {1}{n}}\left(\left(x_{1}-{\overline {x}}\right)^{2}+\left(x_{2}-{\overline {x}}\right)^{2}+\dotsb +\left(x_{n}-{\overline {x}}\right)^{2}\right)}
$$

Schreibe Methoden zur Berechnung beider Werte. 




---

#### **Übung (Schulweg Statistik II):**

Erweitere die vorhergehende Übung auf mehrere Schüler. Erstelle dazu eine Klasse `Schueler` die 

- den **Schülername** und 
- eine **ArrayList für die Schulweg-Dauer** enthält.

Lege einige Objekte dieser Klasse mit Testdaten an (direkt im Code ohne Eingabe) und speichere diese in einer weiteren ArrayList.

Suche den Schüler mit dem längsten Schulweg (größter Mittelwert) und den Schüler mit dem konstantesten Schulweg (geringste Standardabweichung).


