---
title: telnet daemon Installation auf Debian
---

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





