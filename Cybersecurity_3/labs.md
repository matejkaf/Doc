

2h alle 2 Wochen (wie SYTG im II. Jahr)

D.h. 15-17 Termine pro Gruppe



---

- Eigene Malware schreiben, BAT Datei mit Schleife auf Windows, sehr einfach, siehe "Amberg Video 174 Eine eigene Malware schreiben"
- Malware `.exe` unter Windows als Bild tarnen. Durch Tausch des Icons wie ein Bild aussehen lassen. `Ulaub.jpg.exe`. [[Beschreibung](https://www.makeuseof.com/tag/customize-icon-windows/)] – allerdings nur für shortcut. Mittels eigenem Tool: [[How to Modify the Icon of an EXE File](https://www.howtogeek.com/75983/stupid-geek-tricks-how-to-modify-the-icon-of-an-.exe-file/)]. Eventuell auch versteckte Dateien. Verwenden von Auto-Start. Registry?
- Rücksetzen des Passworts auf Debian Linux (Boot Menü Editor Hack)
- Banner Grabbing mit telnet und netcat
- KALI Linux und **Wireshark**: einen **Ping** auf einen anderen Rechner aufzeichnen
  - Bridged Mode
- KALI Linux und Wireshark: Aufzeichnen einer HTTP Verbindung
- Mittracen einer telnet Verbindung. Passwort wird im Klartext übertragen
- OpenVAS (siehe Videos Eric Amberg)
- Python: Passwort Cracker, von einer Person ist bekannt, dass sie einen Frauennamen sowie das Geburtsjahr als Passwort verwendet.
- **Excel Makrovirus** erstellen: Siehe "Amberg Video 177 Einen Makro-Virus mit Empire erstellen"
- **Trojaner** erstellen, putty.exe als Carrier Application, msfvenom erzeugt Wrapper, Opfer Windows 7, "Amberg Video 179. Einen Trojaner selbst erstellen".
- **AV Evasion**, Ziel: Fully UnDetectable (FUD) Malware, Amberg Video 185 – Encoder – bringt nicht viel. Amberg Video 186 Hyperion – Erfolg auch nicht besser. Veil erzielt eine etwas bessere (lower) detection rate. Shelter ist ein weiteres Tool mit ähnlich geringer detection rate. Es zeigt sich, dass AV Evasion relativ einfach ist wenn ca. 50% der gängigen AV ausgetrickst werden sollen, FUD ist eine komplett andere Geschichte und sehr schwer und großer Aufwand.
- Daten verstecken, "Amberg Video 194. NTFS Alternate Data Streams (ADS)"
- Statische Malware Analyse, sysinternals strings, evtl. auch mit regular expressions, "Amberg Video 200. Strings - Zeichenketten in Programmen finden"
- **`host` Datei** von Windows manipulieren, Siehe Amberg Video 212 ab 9:00–11:00, für lokale Namensauflösung, höhere Priorität als DNS Server, `C:\Windows\System32\drivers\etc\host`, Editieren: notepad als Admin öffnen, z.B. zusätzliche Zeile am Ende `192.168.178.50 www.attacker.com`
- 

