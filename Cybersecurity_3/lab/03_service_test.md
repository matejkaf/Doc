---
title: Tests von Services
subtitle: Cybersecurity Übung
tags: [assignment,3AHITS]
---



---

#### Übung (telnet und ssh Services)

Verwende `ps` und `netstat` um herauszufinden ob **telnet** und **ssh** auf Kali bzw. Metasploitable aktiv sind.



---

#### Übung (nmap für telnet)

Aus Hacker Sicht ist es natürlich interessanter von einem Remote System aus zu prüfen welcher Services aktiv sind. Dies geht mit Tools die allgemein als Port Scanner bekannt sind, z.B. `nmap`.

Verwende das Hacking Tool `nmap` um von Kali aus zu prüfen ob **telnet** (Port 23) auf Metasploitable aktiv ist. Versuche das gleiche mit **ssh**.

```sh
$ nmap -p 23 <target_ip>
```



---

#### Übung (Banner grabbing)

Beim **banner grabbing** nutzen Hacker die Informationen die Zielsysteme in Rückantworten auf Dienstanfragen über sich zur Verfügung stellen. Häufig erhält man Informationen über Betriebssysteme, welche Software installiert ist und in welcher Version diese vorliegt. Über diese Informationen kann dann recherchiert werden ob es Schwachstellen (vulnerabilities) und darauf aufbauende Exploits gibt – z.B. CVE Datenbanken (Common Vulnerabilities and Exposures).

- Normales telnet auf das Metasploitable System: welche Informationen sind im Banner? Was läßt sich alles ableiten/recherchieren.
- Verbinde dich mit telnet auf den Webserver des Metasploitable Systems und finde durch einen GET Request den Typ und die Version des Servers heraus.
- Prüfe welche Informationen verfügbar sind wenn telnet auf den SSH Port von Metasploitable ausgeführt wird und ob sich über diese Informationen eine Schwachstelle finden lässt.

---

