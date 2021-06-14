---
title: Strings
subtitle: Übungen
tags: [c,strings,assignment]
---

#### Übung (searchlast) {#searchlast}

Schreibe eine Funktion die ein Zeichen in einem String sucht. Rückgabewert ist der Index des Zeichens bzw. `-1` wenn des Zeichen nicht gefunden wurde. Kommt das Zeichen mehrfach vor soll die Position des letzten Zeichens genommen werden.

---

#### Übung (strrevcpy)

Kopiert alle Zeichen eines Strings in umgekehrter Reihenfolge in einen zweiten String.

---

#### Übung (String umdrehen)

Schreibe eine Funktion `void reverseStr(char s[])` die einen übergebenen String umdreht.

Beispiel: `Hallo --> ollaH`

Hinweis: Es ist nur ein Parameter erlaubt und es darf kein lokales Array als Zwischenspeicher angelegt werden.

---

#### Übung (strtrimright)

Entfernt alle Leerzeichen am Ende eines Strings. Hinweis: `'\0'` muss nach vor verschoben werden.

---

#### Übung (strtrimleft)

Entfernt alle Leerzeichen am Anfang eines Strings.

---

#### Übung (strdel)

Entfernt ein Zeichen an einer bestimmten Position aus einem String.

---

#### Übung (strremchr)

Alle Vorkommen eines bestimmten Zeichens aus dem String löschen.

---

#### Übung (count distinct)

Schreibe eine Funktion die die Anzahl unterschiedlicher Buchstaben in einem String ermittelt.

---

#### Übung (most distinct char)

Ermittle den am häufigst vorkommenden Buchstaben. Kommen dabei mehrere gleich häufig vor soll der vorderste Buchstabe gewählt werden.

---

#### Übung (Leerzeichen reduzieren)

Schreibe eine Funktion `strtrred` das alle mehrfach hintereinander vorkommenden Leerzeichen aus einem String entfernt.\
Beispiel: 
`"  Das  Ist Ein    Test   "` – `" Das Ist Ein Test "`

Implementiere 2 Lösungen

- Die Funktion hat 2 Parameter: (1) der gegebene Text und (2) ein String für das Ergebnis.
- Die Funktion soll nur den gegebenen Text als Parameter haben. 
In der Funktion soll kein weiterer String angelegt werden, sondern es wird direkt der übergebene String verändert.

---

#### Übung (Suche erstes Zeichen aus mehreren)

Schreibe eine Funktion `strcspn` (get span until character in string) mit 2 Strings `s1` und `s2` als Parameter.
Die Funktion sucht in s1 das erste Vorkommen von irgendeinem der Zeichen in `s2`.
Der Return Wert ist die Anzahl der Zeichen vor der Fundstelle.
Die Suche inkludiert die terminierende Null – wenn kein Zeichen aus `s2` in `s1` vorkommt entspricht der Rückgabewert der Länge von `s1`.

Beispiel:

```
strcspn("Hallo Welt", "cde");
--> 7 (das 'e' von Welt)
```


---

#### Übung (Caesar)

Die Caesar Methode ist eine einfache Verschlüsselung. Dabei wird jeder Buchstabe eines Texts um eine gewisse Anzahl von Stellen im Alphabet verschoben. Sender und Empfänger der Nachricht müssen die Anzahl der Verschiebungen wissen (26 Möglichkeiten). Beispiel: Verschiebung=5, `"d"` $\longrightarrow$ `"i"`, `"w"` $\longrightarrow$ `"b"`. Verwende nur Kleinbuchstaben (auch keine Leerzeichen).

Programmiere Funktionen für die Ver- und Entschlüsselung.

---

#### Übung (Vergleichen)

Schreibe eine Funktion `int compare(char s1[], char s2[])` zum Vergleichen zweier Strings.
Rückgabewert: 1 – die Strings sind identisch, 0 – andernfalls.

Achtung die Strings können unterschiedlich lang sein.

---

#### Übung (Suchen)

Implementiere eine Funktion `int find(char s1[], char s2[])` die einen String `s2` in `s1` sucht (z.B.: suchen eines Worts in einem Satz). 

Rückgabewert `-1` wenn nicht gefunden, ansonsten der Index des ersten übereinstimmenden Zeichens in `s1`.

---

#### Übung (Zeichen Statistik)

Schreibe ein Programm, das die Anzahl der Selbstlaute eines Textes ermittelt und in folgender Form am Bildschirm ausgibt:

```
     Anz.    	 %
----------------
A:      5  18.52 #########
E:      9  33.33 ################
I:      8  29.63 ##############
O:      2   7.41 ###
U:      3  11.11 #####
----------------
Ges.:  27
```

Der zu untersuchende Text wird als String im Programm vorgegeben.  Groß- und Kleinschreibung wird nicht unterschieden.

Die Ausgabe des Balkens soll mit Hilfe einer Funktion realisiert werden. Die Balkenlänge soll für 100% 50 Zeichen entsprechen.

---

#### Übung (Weitere Stringfunktionen)

Weitere Übungsmöglichkeiten für String-Funktionen. Keinen String als Zwischenspeicher anlegen. Falls eine Veränderung gefragt ist, soll diese im übergebenen String stattfinden und nicht in einen weiteren String kopiert werden!


- `strcvoc` – Anzahl der Selbstlaute in einem Text zählen.
- `strrcpy` – wie `strcpy`, allerdings wird in umgekehrter Reihenfolge kopiert.
- `strrcat` – wie `strcat`, allerdings wird der zweite String in umgekehrter Reihenfolge an den ersten String angefügt.
- `strrchr` – das letzte Vorkommen eines Zeichens suchen.
- `strrotateleft` – Um eine Stelle nach links rotieren
- `strnrotateleft` – wie vorher, zusätzlich Anzahl der Rotierungen
- `strrotateright` – Um eine Stelle nach rechts rotieren
- `strnrotateright` – wie vorher, zusätzlich Anzahl der Rotierungen
- `strtrimright` – Leerzeichen am Ende löschen
- `strtrimleft` – Leerzeichen am Anfang löschen
- `toupper` – Alles in Großbuchstaben
- `tolower` – Alles in Kleinbuchstaben

---

#### Übung (Weitere Stringfunktionen II)

Noch mehr Übungsmöglichkeiten für String-Funktionen. Keinen String als Zwischenspeicher anlegen.
Falls eine Veränderung gefragt ist soll diese im übergebenen String stattfinden und nicht in einen weiteren String kopiert werden!

- `strinsert` – Ein Zeichen an einer bestimmten Position einfügen, Zeichen dahinter rutschen nach rechts.
- `strdel` – Zeichen an einer bestimmten Position löschen, Zeichen dahinter rücken auf.
- `strremchr` – Alle Vorkommen eines bestimmten Zeichens aus dem String löschen.
- `strcntucase` – Zählen wie viele Großbuchstaben in einem Text vorkommen.
- `strdouble` – Einen String verdoppeln, `"Hallo"` $\longrightarrow$ `"HalloHallo"`.
- `strcdouble` – Einen String zeichenweise verdoppeln, `"Hallo"` $\longrightarrow$ `"HHaalllloo"`.
- `strmirror` – Einen String spiegeln, `"Hallo"` $\longrightarrow$ `"HalloollaH"`.
- `strmix` – mischt 2 alphabetisch sortierte Strings zu einem Dritten, der ebenfalls sortiert sein soll.

---

#### Übung (Weitere Stringfunktionen III)

Für Unermüdliche:

- `ispalindrom` – prüft ob ein Wort ein [Palindrom](http://de.wikipedia.org/wiki/Palindrom) ist (Leerzeichen und Groß-/Kleinschreibung sollen ignoriert werden). Beispiele: Otto, Rentner, Lagerregal, Reittier, Rotor.
- `strRightAlign` – Text innerhalb einer gegebenen Feldbreite rechtsbündig machen.
- `strCenterAlign` – Text innerhalb einer gegebenen Feldbreite zentrieren.





