---
title: Sniffen eines telnet passworts
subtitle: Cybersecurity Lab
---



## Telnet

Aufzeichnen einer telnet Verbindung. Erkenntnis: Username und Passwort wird im Klartext übertragen.



## Konfiguration

- Kali (telnet client und wireshark): 192.168.178.64
- Debian (telnetd): 192.168.178.69
- Win10 (telnet client): 192.168.178.67



## Ip Adressen ermitteln

```
# Kali
$ ifconfig

# Debian
$ ip addr show 

# Windows
> ipconfig
```



## Installationen

Kein telnet client auf **Kali** installiert

```bash
# basic telnet client using the TELNET protocol
$ sudo apt-get update
$ sudo apt-get install telnet
```

`telnet: Unable to connect to remote host: Connection refused`

telnet demon auf **Debian** installieren und starten

```
# su -
# dpkg -s telnetd # check installed
# apt-get install telnetd
Medienwechsel: ... /media/cdrom/
```


Fehlermeldung :
```
Media change: please insert the disc labeled
 'Debian GNU/Linux 7.0.0 _Wheezy_ - Official amd64 CD Binary-1 20130504-14:44'
in the drive '/media/cdrom/' and press enter.
```
fixen

https://my.velocihost.net/knowledgebase/29/Fix-the-apt-get-install-error-Media-change-please-insert-the-disc-labeled--on-your-Linux-VPS.html

```
# vi /etc/apt/sources.list
```
Zeile mit db cdrom ...` auskommentieren.

Telnet Server starten:

```
# /etc/init.d/openbsd-inetd restart
```

Nun ist telnet auf das Debian Linux System möglich.

`telnetd` ist auf Kali Linux schon installiert. Wie starten? Probiert, war aber nicht erfolgreich.



## Windows 10

Telnet muss aktiviert werden. Suchen nach "Features aktivieren" (https://www.heise.de/tipps-tricks/Windows-10-Telnet-Client-aktivieren-4569277.html). "Telnet-Client".
telnet über die Kommandozeile starten.



## Kali Linux

- In den VirtualBox Netzwerkeinstellungen – **Promiscuous Mode**=Allow VMs:

<img src="fig/image-20201230175642926.png" alt="image-20201230175642926" style="zoom:33%;" />


- Wireshark über die Kommandozeile starten `sudo wireshark`.
- Filter ip.addr == 192.168.178.69
- `telnet 192.168.178.69`
  - telnet muss auch auf Kali Linux gestartet werden. Sonst sieht man die Pakete nicht.
- Passwort wird in einzelnen Buchstaben übertragen.
- Analyze>Follow>TCP Stream

![image-20201230174535381](fig/image-20201230174535381.png)













