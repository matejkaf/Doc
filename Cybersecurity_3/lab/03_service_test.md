---
title: Tests von Services
subtitle: Cybersecurity Übung
tags: [assignment,3AHITS]
---



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

---

