---
title: Doc
tags: [assignment,challenge]
---

# Challenges – 𝜋 Funktionen

**Übung (Berechne 𝜋 nach Leibnitz):**

Die Zahl 𝜋 kann mit einer vom Mathematiker Gottfried Wilhelm Leibniz herausgefundenen Formel berechnet werden: 

Schreibe eine Funktion `double mypi(int n)`, die 𝜋 mit n Gliedern nach dieser Formel berechnet. Finde heraus wie groß n sein muss damit 𝜋 auf 3 Kommastellen genau ist.

---

**Übung (Berechne 𝜋 nach Wallis):**

Nach dem Mathematiker John Wallis gibt es noch eine andere Formel für 𝜋.
Schreibe eine Funktion `double mypiWallis(int n)`, die $\pi$ mit $n$ Gliedern nach dieser Formel berechnet. Finde heraus wie groß n sein muss damit 𝜋 auf 3 Kommastellen genau ist.


---


**Übung (𝜋 Berechnen mit Monte-Carlo-Methode):**

Die Kreiszahl 𝜋 (3,14159265...) kann man mittels Zufallszahlen ermittelt werden. Dies nennt man eine Monte-Carlo-Methode.

Implementiere eine Funktion die 𝜋 mit Hilfe der Monte-Carlo-Methode berechnet.

Anleitung:

- Stell dir einen einen Kreis mit r=1 im Ursprung vor
- Dieser Kreis befindet sich in einem 2×2 großen Quadrat
- Wähle einen zufällige Punkte im Quadrat
- Zähle alle Punkte die im Kreis zu liegen kommen (mittels Pythagoras)
- Wenn man nun das Quadrat mit der Fläche 2 mit dem Anteil der Punkte im Kreis multipliziert ergibt sich 𝜋 näherungsweise

---

