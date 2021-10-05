---
title: Virtuelle Maschinen installieren
subtitle: ITS Übung
tags: [assignment,3AHITS]
---

[Cheatsheet häufig benötigter Linux Befehle](../../Linux/cheatsheet)



#### Übung (Kali)

Installiere Kali Linux im VmWare Player. [Anleitung](../lib/install_vmware_kali)



---

#### Übung (Metasploitable)

Installiere Metasploitable im VmWare Player.



---

#### Übung (Netzwerk NAT/Bridged)

Stelle beide VMs auf **Bridged Mode**  

- Kali: warte ca. 10 Sekunden bis sich das Netzwerk neu konfiguriert hat.

- Metasploitable: Interface deaktivieren und wieder aktivieren (Recherche!)

Aufgaben:

- Prüfen in beiden VMs welche IP Adresse (`ifconfig eth0`) und Default Gateway (`route -n`) dieser erhalten haben.
- Führe von Kali aus einen Ping auf Metasploitable aus.
- Umgekehrter Ping (Metasploitable auf Kali).
- Führe vom Host System einen Ping auf beide VMs aus.
- Führe von Kali aus einen Ping auf das Hostsystem aus
- Führe vom Kali VM einen Ping auf ein anderes Kali System auf einem anderen Rechner aus.

Stelle nun beide VMs zurück auf **NAT** und wiederhole obige Versuche, protokolliere das Ergebnis.



---

#### Übung (Dateitransfer per Webserver)

In dieser Übung soll der Dateitransfer zwischen Kali Linux und Metasploitable getestet werden.

Transferiere zuerst eine Datei von Metasploitable zu Kali Linux indem du den **Webserver** von Metasploitable verwendest.

Transferiere dann eine Datei in die umgekehrte Richtung.

---

**Hinweise zum Dateitransfer**

Wie stellt man fest ob ein bestimmter Service aktiv ist (z.B. telnet Server, ssh Server, Web Server, ...)?

Prüfen ob der Server läuft (`ps` zeigt die aktuell laufenden Prozesse an):

```bash
$ ps ax
```

Ist der Service an einen Port gebunden?:

```bash
$ netstat -tlpn
```

Tipp: Mit `grep` filtern, z.B. den gesuchten Port oder den Namen des Service.

Hinweis: Manche Befehle müssen als **privilegierter super user** ("root") ausgeführt werden. root wird man für ein Kommando mit `sudo`:

```sh
$ sudo netstat -tlpn
```

bzw. dauerhaft:

```sh
$ sudo -i
```

Hinweis: Es ist eine Konvention, dass der root user `#` als command prompt hat.

---

