---
title: Logfiles und SSH
subtitle: Cybersecurity Übung
tags: [3AHITS]
---

Linux Systeme führen in Logfiles detailiert Buch über Systemereignisse – unter anderem auch fehlgeschlagene Login Versuche. Damit kann man *password guessing* Angriffe gut erkennen.

Die Logfiles sind Textfiles und befinden sich im Verzeichnis `/var/log` . Z.B.

- `syslog` für globale Meldungen und
- `auth.log` für alles was Login/Authentifizierung betrifft

Weiters gibt es Logfiles für installierte Services, z.B. Apache Web Server, etc.

---

#### Übung (syslog)

Betrachte den Inhalt der Datei `syslog`. Eine Zeile darin sieht beispielsweise so aus:

```
Dec  7 21:00:54 metasploitable dhclient: bound to 192.168.126.130 -- renewal in 723 seconds.
```

Das Logfile Format ist in RFC3164 beschrieben:

- `Dec  7 21:00:54` Datum (kein Jahr!) und Uhrzeit
- `metasploitable` Host Name
- `dhclient` ein "tag". Typischerweise der Prozessname. Manchmal auch mit der process id (`dhclient[1234]`)
- `:` Doppelpunkt nach dem "tag".
- Alles nach dem `:` ist die Message 

Betrachte die letzten 10 Meldungen in `syslog` – welche Informationen kannst du daraus ableiten? Vergleiche mit Logeinträgen auf anderen Rechnern – finden sich Übereinstimmungen? Vergleiche Metasploitable und Kali.

---

#### Übung (auth.log)

Das Tool `tail` ist besonders bei Logfiles praktisch weil häufig nur die letzten Meldungen interessant sind. Mit `tail -f` (f ... follow) ist bei Logfile eine praktische Option, die letzten Zeilen werden angezeigt und das Logfile bleibt geöffnet – neu hinzukommende Logeinträge werden sofort angezeigt (Beenden mit ^C).

- Metasploitable: Verwende `tail` mit der `-f` Option für `auth.log`.
- Kali: Verbinde per ssh auf Metsploitable – verwende falsche Passwörter

Welche Auswirkungen hat die Übertragung eines falschen Passworts für den Inhalt von `auth.log`?

---

#### Übung (auth.log)

- Verwende `grep` um in `auth.log` nur die fehlgeschlagenen Logins anzuzeigen.

- Die Anzahl an fehlgeschlagenen Logins ist ein Indikator für einen *online password guessing* Angriff. Ermittle diese Anzahl.

---

