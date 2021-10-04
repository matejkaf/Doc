---
title: Phasen eines Hacking Angriffs
subtitle: Cyber-Killchain
tags: [lecture,3AHITS]
---

APT (**Advanced Persistent Threat**). Zielgerichteter Angriff auf ein Ziel (Firma, Behörde, ...). Kann Monate bzw. Jahre andauern.

Vorgehen der Angreifer kann in **Phasen** gegliedert werden. Ein **IT-Sicherheitskonzep** sollte Maßnahmen gegen Aktionen in jeder Phase enthalten.



# Variante 1 (nach Eric Amberg)

- **(1) Reconaissance** – (Footprinting, Information gathering, Informationsbeschaffung)

  - passive discovery (Webauftritt, Veröffentlichungen, ...)
  - active discovery (z.B. Telefonanruf, falscher Handwerker, soziale Netzwerke)
  - wichtigste und am längsten dauernde Phase

- **(2) Scanning** – Schwachstellen finden

  - Port scanning – welche (Server) Dienste laufen, welche Version wird verwendet
  - Enumeration (Usernamen, Netzwerkresourcen, Services, ...)
  - Vulnerability Scanning – z.B. Prüfen ob gefundene Services Schwachstellen aufweisen

- **(3) Gaining access** – Aktives Eindringen

  - Ziel: shell am Zielsystem
  - Zwei Ansätze:

    - Ohne user interaction: Nur IP Adresse bekannt.
      - Exploitation – Schwachstelle nutzen
        - Default Passwörter
        - Weak configuration
        - Code execution vulnerability (buffer overlow)
    - User Interaktion notwendig
      - social engineering
      -  Trojaner

- **(4) Maintaining access**  – sich im System festsetzen – auch: **Post exploitation** Phase

  - Backdoors installieren
  - Weitere Systeme anvisieren
  - Privilege escalation (erhöhte Benutzerrechte erlangen)
  - Keylogger installieren

- **(5) Clearing Tracks** (Spuren verwischen)

  - Rootkits (versteckt installierte Software)
  - Log Files löschen/manipulieren
  
  

![IMG_8DF01DADCDAB-1](fig/IMG_8DF01DADCDAB-1.jpeg)



# Variante 2 (iX Zeitschrift)

![Die Cyber-Killchain](fig/Die Cyber-Killchain.jpeg)

# Variane 3 (metasploit)

![image-20210928182411376](fig/image-20210928182411376.png)

[Quelle](https://docs.rapid7.com/metasploit/)

