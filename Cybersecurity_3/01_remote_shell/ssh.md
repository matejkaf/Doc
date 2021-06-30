[[wikipedia:SSH](https://en.wikipedia.org/wiki/Secure_Shell_Protocol)]

Kryptografisches Netzwerkprotokoll für remote shell Zugriff, Ersatz für Telnet.

- Passwörter werden nicht im Klartext gesendet
- Verschlüsselter Datenverkehr (Vertraulichkeit)
- Manipulationsschutz (Integrität)
- Umfangreiche Authentifizierungsmechanismen

TCP Port 22 (Telnet 23)

SSH Server: Lauft als Dienst auf dem System auf dem man sich Remote einloggen will.

SSH Client:

- Linux Shell: `ssh user@host`
- Windows:
  -  `putty.exe`
  - Ab Windows 10 Version 1709 (Oktober 2017) integriert, siehe [[ct : SSH unter Windows 10 nutzen](https://www.heise.de/tipps-tricks/SSH-unter-Windows-10-nutzen-4224757.html)], über die Powershell aufrufbar.

