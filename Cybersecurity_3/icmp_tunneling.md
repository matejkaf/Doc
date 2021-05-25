---
title: ICMP Tunneling
subtitle: Covert Channel
---

Um Daten an Überwachungssystemen (Firewall, IDS, IPS, [SIEM](https://en.wikipedia.org/wiki/Security_information_and_event_management)) vorbeizuschwindeln gibt es mehrere Ansätze:

![image-20210525094602873](fig/image-20210525094602873.png)





"Amberg Video 193. ICMP-Tunneling"

![image-20210525094646399](fig/image-20210525094646399.png)



Unter Windows werden einfach Buchstaben verschickt.

![image-20210525094655571](fig/image-20210525094655571.png)



Demo:

- icmptunnel über github und compilieren
- Auf Kali icmptunnel als Server starten
  - Erstellt ein eigenes Netzwerkdevice
- Debian: `client.sh` editieren
-  Beispiel: Tunneln eines http Traffics über einen ICMP Tunnel



