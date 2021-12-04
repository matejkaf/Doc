---
title: Linux Permissions
subtitle: Cybersecurity 3 (Übungen)
tags: [assignment,3AHITS]
---



#### Übung (Arbeitsblatt)

Arbeite dich durch folgende Dokument und mache alle Übungen: [PDF](http://csis.pace.edu/adelgado/rha-030/workbooks/rha030-workbook04-student-6.1-2.pdf)

---

#### Übung (Flags)

Experimentiere:

- Was passiert mit Flags, Owner und Group wenn eine Datei eines anderen Users kopiert wird?
- Was passiert wenn man versucht eine Datei zu ändern auf die man keine Schreibberechtigung hat. Kann man die Datei löschen?

---

#### Übung (Sicherer Ordner)

Lege einen Ordner an der maximale Sicherheit vor Zugriff von Außen bietet. Auch dann  wenn jemand die Namen eines Files oder eines Sub-Directories kennt. Teste die Sicherheit.

---

#### Übung (Getrennte Projektordner)

Lege einen Ordner `projects` mit Unterordner `math` und `sew` an. 

Die User `alice` und `bob` sollen auf den Ordner `math` zugreifen können. Die User `carol` und `dan` auf den Ordner `sew`. 

Im Ordner `math` soll es einen Unterordner public geben in dem `carol` und `dan` Daten mit `alice` und `bob` austauschen können. Nur der Inhalt des Ordners `math` soll für `carol` und `dan` verfügbar sein alles andere im Ordner `math` jedoch nicht.

Teste!

---

#### Übung (Webserver Directory Permissions)

Experimente unter Kali Linux mit dem `/var/www` (Apache Web-Server) Verzeichniss.

Entferne die other/read permission

- Kann das Directory durch den User Kali jetzt noch angezeigt werden?
- ist `cd /var/www` noch möglich? Warum?
- Kann von `/var/www/` aus in `html` gewechselt werden?

`r` flag für User `kali` ist nicht gesetzt daher kann der Inhalt des Directories nicht angezeigt werden:

```sh
# user: kali
$ cd /var
$ ls www
ls: cannot open directory 'www': Permission denied
```

Aber, da das `x` Flag gesetzt ist, kann das Directory durch den User `kali` betreten werden, d.h. das Working Directory kann `www` sein:

In weitere Unterverzeichnis kann weiter gewechselt werden:

Setze nun das other/r Flag wieder und entferne das other/x Flag. Was sind die Auswirkungen? Experimentiere.

---

#### Übung (Webserver Directory Permissions II)

Erstelle unter Kali Linux in `/var/www` ein Verzeichnis `data` und sorge dafür, dass dieses Verzeichnis nur User der Gruppe `www-data` verwenden können. Ein Lesezugriff auf den Directoryinhalt aller anderen User soll möglich sein jedoch kein Lesen der Dateiinhalte. User der Gruppe `www-data` können Datei-Inhalte anderer User ansehen aber nicht verändern.

- Erweiterung: User der Gruppe `www-data` sollen die Dateien anderer User der gleichen Gruppe im Directory `data` nicht löschen bzw. umbenennen können.
- Erweiterung: Alle Dateien/Verzeichnisse die im Ordner `data` erzeugt werden sollen automatisch der Gruppe `www-data` zugeordnet werden.

---