---
title: Tests von Services
subtitle: Übung
tags: [assignment]
---

Wie stellt man fest ob ein bestimmter Service aktiv ist (z.B. telnet Server, ssh Server, Web Server, ...)?

Prüfen ob der Server läuft:

```bash
$ ps ax
```

`ps` zeigt die aktuell laufenden Prozesse an.

Ist Service an einen Port gebunden?:

```bash
$ netstat -tlpn
```

Tipp: Mit `grep` filtern

Hinweis: Manche Befehle müssen als **privilegierter super user** ("root") ausgeführt werden. root wird man für ein Kommando:

```sh
$ sudo netstat -tlpn
```

bzw. dauerhaft:

```sh
$ sudo -i
```

Es ist eine Konvention, dass der root user `#` als command prompt hat.



---

#### Übung (telnet und ssh Services)

Verwende `ps` und `netstat` um herauszufinden ob telnet und ssh auf Kali bzw. Metasploitable aktiv sind.



---

#### Übung (Sicherheitsrisiko)

Wie hoch ist das Sicherheitsrisiko durch einen aktiven telnet Port einzuschätzen? Wie sieht es mit ssh aus?



---

#### Übung (nmap für telnet)

Verwende das Hacking Tool `nmap` um von Kali aus zu prüfen ob telnet auf Metasploitable aktiv ist. Versuche das gleiche mit dem Windows Host System.

```sh
$ nmap -p 23 <target_ip>
```



---

#### Übung (Banner grabbing)

Beim banner grabbing nutzen Hacker die Informationen die Zielsysteme in Rückantworten auf Dienstanfragen über sich zur Verfügung stellen. Häufig erhält man Informationen über Betriebssysteme, welche Software installiert ist und in welcher Version diese vorliegt. Über diese Informationen kann dan recherchiert werden ob es Schwachstellen (vulnerabilities) und darauf aufbauende Exploits gibt.

- Welche Informationen sind im Banner bei telnet auf Metasploitable
- Prüfe welche Informationen verfügbar sind wenn telnet auf den SSH Port von Metasploitable ausgeführt wird und ob sich über diese Informationen eine Schwachstelle finden lässt

