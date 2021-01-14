---
title: Kryptographie Stream Cipher (Übungen)
description: Übungen zu Stream Cipher
type: assignment
cmds: ['md_html.bash','md_html.bash --small']
tags: [ krypto ]
---

---

**Übung 1 (Stream Cipher)** 

Verwende die Klasse `Random` um einen Stream-Cipher für Texte zu implementieren. Im Konstruktor von `Random` kann ein `Int32` als seed übergeben werden, das ist der key. Um aus dem Passwort einen `Int32` zu erzeugen verwende das shifted sum Verfahren ([siehe hier](https://javadevnotes.com/java-string-hashcode)) mit Faktor 31.

- Implementiere die Ver- und Entschlüsselung.
- Der verschlüsselte Text soll Base64 kodiert sein.

**Anleitung**: Um einen Text per Stream Cipher zu verschlüsseln ist der Text binär zu betrachten (als `byte` Array). Dann ist aus dem seed ein gleich langer `keystrem` (ebenfalls ein `byte` Array) zu erzeugen und mit dem Klartext Array mittels XOR zu verknüpfen.



---

**Übung 2  (Kommandozeilen Steuerung)**

Das Programm soll über Kommandozeilenparameter gesteuert werden (auch das Passwort wird über die Kommandozeile übergeben ;-) Der zu verschlüsselne Text soll aus einer Textdatei geladen und das verschlüsselte Ergebnis soll im Base64 Format ebenfalls in eine Datei geschrieben werden. Die Dateipfade werden über die Kommandozeile vorgegeben.



---

**Übung 3  (Brute Force Attack)**

Organisiere einen, nach obigem Algorithmus, verschlüsselten Text eines Mitschülers. Bedingung ist, dass der zugehörige Klartext irgendwo `"5ahels"` enthalten muss und das (unbekannte) Passwort genau 4 Zeichen lang ist. Weiters darf das Passwort nur aus den Kleinbuchstaben des lateinischen Alphabets bestehen.

Implementiere einen (brute force) Angriff auf den Stream Cipher als Erweiterung des vorhergehenden Programms. Dies soll sich auch über die Kommandozeile starten lassen.

---



