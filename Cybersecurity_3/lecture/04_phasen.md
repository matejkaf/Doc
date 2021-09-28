---
title: Phasen eines Hacking Angriffs
subtitle: Cyber-Killchain
tags: [lecture,3AHITS]
---

APT (**Advanced Persistent Threat**). Zielgerichteter Angriff auf ein Ziel (Firma, Behörde, ...). Kann Monate bzw. Jahre andauern.

Vorgehen der Angreifer kann in **Phasen** gegliedert werden. Ein **IT-Sicherheitskonzep** sollte Maßnahmen gegen Aktionen in jeder Phase enthalten.



# Variante 1 (nach Eric Amberg)

- **Reconaissance** – (Footprinting, Information gathering, Informationsbeschaffung)

  - passive discovery (Webauftritt, Veröffentlichungen, ...)
  - active discovery (z.B. Telefonanruf, falscher Handwerker, soziale Netzwerke)
  - wichtigste und am längsten dauernde Phase

- **Scanning** – Schwachstellen finden

  - Port scanning – welche Dienste laufen, welche Version wird verwendet
  - Enumeration (Usernamen, Netzwerkresourcen, Services, ...)
  - Vulnerability Scanning – z.B. Prüfen ob gefundene Services Schwachstellen aufweisen

- **Gaining access**

  - Exploitation – Schwachstelle nutzen
  - Default Passwörter, Weak configuration, Code execution vulnerability, Trojaner, ...

- **Post exploitation**

  - Maintaining access (sich festsetzen)
  - Backdoors installieren
  - Weitere Systeme anvisieren
  - Privilege escalation (erhöhte Benutzerrechte erlangen)

- **Clearing Tracks** (Spuren verwischen)

  - Rootkits (versteckt installierte Software)
  - Log Files löschen/manipulieren
  
  

![IMG_8DF01DADCDAB-1](fig/IMG_8DF01DADCDAB-1.jpeg)



# Variante 2 (iX Zeitschrift)

![Die Cyber-Killchain](fig/Die Cyber-Killchain.jpeg)

