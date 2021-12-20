---
title: Grundlagen UNIX shell
subtitle: Übungen
tags: [assignment]
---

#### Übung (date)

Verwende Optionen von `date` damit die Ausgabe des Datums und der Uhrzeit in der Form `30.10.20 09:15` erfolgt.

---

#### Übung (date epoch)

Finde per Recherche heraus was die folgende Zeitdarstellung bedeutet:

```sh
$ gdate +%s
1639927239
```

---

#### Übung (head)

Verwende Pipes und `head` um nur die ersten 12 Zeilen der Augabe von `ls -l /etc` auszugeben. 

Hinweis: `head` kann auch von stdin lesen.


---

#### Übung (date input format)

Mit der Option `-f -` liest `data` ein Datum von stdin und stellt dieses formatiert dar.

```sh
$ echo "yesterday" | date +"%d %m %Y" -f -
```

Erstelle eine Datei `datestring.txt` die den Text `yesterday` enthält und schreibe ein shell Kommando das das entsprechende Datum ausgibt.

Ermittle folgende Daten, [siehe hier](https://www.gnu.org/software/coreutils/manual/html_node/Date-input-formats.html):

- Heute in 5 Wochen
- Heute vor 5 Wochen
- 90 Tage seit 15.10.2021 (Bedeutung: wenn genesen 90 Tage lang kein PCR Test)
- Letzter Freitag vor einem Jahr
- Kommender Freitag in 6 Monaten
- 1639927239 Sekunden seit 01.01.1970

---