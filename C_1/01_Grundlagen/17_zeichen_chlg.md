---
title: Zeichen
subtitle: Übungen (Challenge)
tags: [assignment,challenge,C_1]
---

**Übung (Groß-/Klein):** Man kann aufgrund des ASCII Codes eines Buchstabens herausfinden ob es sich um einen Groß- oder Kleinbuchstaben handelt. Schreibe ein Programm dass zur Eingabe eines Zeichens auffordert und dann prüft ob es sich um einen Groß- oder Kleinbuchstaben oder um ein ganz anderes Zeichen handelt. Gib für jede der 3 Möglichkeiten einen informativen Text aus.



------

**Übung (Groß-/Klein Umwandeln) :** Mit ASCII Codes kann man auch rechnen. Schreibe ein Programm das wenn ein Kleinbuchstabe eingegeben wird diesen als Großbuchstabe wieder ausgibt und umgekehrt. Sollte ein Buchstabe eingegeben werden der weder ein Klein- noch ein Großbuchstabe ist so wird dieser unverändert wieder ausgegeben.



------

**Übung (Caesar):** Die Caesar Verschlüsselung ist ein ganz einfacher Geheimcode. Julius Caesar soll diesen verwendet haben. Dabei sucht man den zu verschlüsselnden Buchstaben im Alphabet, geht um eine gewisse Anzahl an Buchstaben weiter und nimmt den Buchstaben an dieser Stelle für den verschlüsselten Text. Das macht man mit jedem Buchstaben des zu verschlüsselnden Texts. Zum entschlüsseln geht man umgekehrt vor (der Empfänger muss wissen um wie viele Buchstaben verschoben wurde).

Schreibe ein Programm das zuerst nach der Anzahl der Verschiebungen fragt und dann eine beliebige Anzahl von Buchstaben einliest und jeden sofort verschlüsselt wieder ausgibt. Die Eingabe wird durch ein `'*'` abgeschlossen.

Wenn das funktioniert schreibe auch die Entschlüsselung. Das Programm soll am Anfang fragen ob Ver- oder Entschlüsselt werden soll.

Beispiel:

```
Buchstabe: h
Verschiebungen: 5
abcdefghijklmnopqrstuvwxyz
       ^    ^
       |    |
       h -> m
```

Was wäre die verschlüsselte Form von hallo?

------