---
title: Logfiles
---



[What are Linux Logs? How to View Them, Most Important Directories, and More](https://stackify.com/linux-logs/)

[Ultimate Guide to Logging – Linux Logging Basics](https://www.loggly.com/ultimate-guide/linux-logging-basics/)



Varianten:

- syslog – `/var/log` – Linux Standard
- systemd – `journald` (ersetzt oder erweitert syslog)



# /var/log

Logfiles sind im Klartext  gespeichert und werden durch den syslog daemon (`syslogd`) verwaltet.

Dateien unter `/var/log` – Beispiele:

- `syslog` (bzw. `messages`) enthält alle das Betriebssystem betreffenden Meldungen mit Ausnahme
- der Authentifizierungs-spezifischen diese befinden sich in `auth.log`
- `dmesg` Meldungen von Gerätetreibern

Follow (=live update): `tail -f /var/log/syslog`

Beispie – Inhalt von `/var/log/syslog`:

```
Dec  7 20:48:41 metasploitable dhclient: DHCPACK of 192.168.126.130 from 192.168.126.254
Dec  7 20:48:41 metasploitable dhclient: can't create /var/lib/dhcp3/dhclient.eth0.leases: Permission denied
Dec  7 20:48:41 metasploitable dhclient: bound to 192.168.126.130 -- renewal in 733 seconds.
Dec  7 20:51:10 metasploitable kernel: [47234.411206] usb 1-2.1: USB disconnect, address 4
Dec  7 20:51:10 metasploitable kernel: [47234.730730] usb 1-2.1: new full speed USB device using uhci_hcd and address 5
Dec  7 20:51:10 metasploitable kernel: [47234.844817] usb 1-2.1: configuration #1 chosen from 1 choice
Dec  7 21:00:54 metasploitable dhclient: DHCPREQUEST of <null address> on eth0 to 192.168.126.254 port 67
Dec  7 21:00:54 metasploitable dhclient: DHCPACK of 192.168.126.130 from 192.168.126.254
Dec  7 21:00:54 metasploitable dhclient: can't create /var/lib/dhcp3/dhclient.eth0.leases: Permission denied
Dec  7 21:00:54 metasploitable dhclient: bound to 192.168.126.130 -- renewal in 723 seconds.
```

Das Logfile Format ist in RFC3164 beschrieben

- `Dec  7 21:00:54` Datum (kein Jahr!) und Uhrzeit
- `metasploitable` Host Name
- `dhclient` ein "tag". Typischerweise der Prozessname. Manchmal auch mit der process id (`dhclient[1234]`)
- `:` Doppelpunkt nach dem tag.
- Alles nach dem `:` ist die Message 

Es gibt auch eine neueres Format (RFC5424)



## Rotating Logs

Damit die Logfiles nicht zu groß werden. Nach einem konfigurierbaren Intervall (täglich, wöchentlich, monatlich) wird das bisherige Logfile umbenannt (aus `auth.log` wird `auth.log.1`) und ein leeres neues Logfile erstellt. Sind ältere Logfile-Kopien vorhanden wird deren Dateiendung ebenfalls um 1 erhöht (daher *logfile rotation*). Logfile-Kopien können auch komprimiert sein, z.B. `auth.log.gz.1`. 

Beispiel:

```
$ ls -l /var/log/syslog*
-rw-r----- 1 syslog adm 14255 Aug 22 19:55 /var/log/syslog
-rw-r----- 1 syslog adm 74662 Aug 22 07:35 /var/log/syslog.1
-rw-r----- 1 syslog adm  6924 Aug 21 07:35 /var/log/syslog.2.gz
-rw-r----- 1 syslog adm  3713 Aug 20 07:35 /var/log/syslog.3.gz
-rw-r----- 1 syslog adm  7272 Aug 19 07:35 /var/log/syslog.4.gz
-rw-r----- 1 syslog adm  3815 Aug 18 07:35 /var/log/syslog.5.gz
-rw-r----- 1 syslog adm  6905 Aug 17 07:35 /var/log/syslog.6.gz
-rw-r----- 1 syslog adm  3627 Aug 16 07:35 /var/log/syslog.7.gz
```

Das Rotations Intervall, die Anzahl der zu archivierenden Generationen und anderes ist konfigurierbar in `/etc/logrotate.conf` bzw. `/etc/logrotate.d`. [[*](https://www.networkworld.com/article/3218728/how-log-rotation-works-with-logrotate.html)]



# journalctl

systemd journaling. Binärfiles in `/var/log/journal`

> Journalctl is a utility for querying and displaying logs from journald, systemd’s logging service. Since journald stores log data in a binary format instead of a plaintext format, journalctl is the standard way of reading log messages processed by journald. 

[Ultimate Guide to Logging – Using journalctl](https://www.loggly.com/ultimate-guide/using-journalctl/). Einige Beispiele aus diesem Dokument:

```sh
$ journalctl

#limit the logs shown to the current boot, use the -b switch.
$ journalctl -b

# To list the boots of the system, use the following command.
$ journalctl --list-boots

# journal messages logged within the last hour.
$ journalctl --since "1 hour ago"

# show all messages logged by the apache2 web server
$ journalctl -u apache2.service

# print log messages to the console as they are added
$ journalctl -u apache2.service -f
```

