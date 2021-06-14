---
title: Linux System Kommandos
---

* TOC
{:toc}

# Shutdown/ Reboot

```bash
$ sudo shutdown -h now
$ sudo reboot
```



# Root Rechte

Mit [substitute user](https://man7.org/linux/man-pages/man1/su.1.html):

```bash
$ su -
# -, -l, --login: Provide an environment similar to what the user would expect had the user logged in directly.
```

In manchen Systemen (kali) ist kein root user vorhanden in diesem Fall kann man folgendermaßen zu root Rechten kommen.

```bash
$ sudo su -
```

oder auch sudo ohne Kommando, `-i` : login shell

```bash
$ sudo -i
```



# System Informationen

```bash
$ uname -a
Linux secOps 4.15.15-1-ARCH #1 SMP PREEMPT Sat Mar 31 23:59:25 UTC 2018 x86_64 GNU/Linux
```

```bash
$ cat /etc/*release
NAME="Arch Linux"
PRETTY_NAME="Arch Linux"
ID=arch
ID_LIKE=archlinux
ANSI_COLOR="0;36"
HOME_URL="https://www.archlinux.org/"
SUPPORT_URL="https://bbs.archlinux.org/"
BUG_REPORT_URL="https://bugs.archlinux.org/"
```

```bash
$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 7.04
Release:        7.04
Codename:       feisty
```



# Keyboard

[ArchLinux](https://wiki.archlinux.org/index.php/Linux_console/Keyboard_configuration), Kali, wahrscheinlich auch Debian

```bash
$ sudo setxkbmap -layout de
# oder
$ sudo setxkbmap -layout de -variant mac
# bis zum nächsten reboot
```

Dauerhaft konfigurieren

1. Öffnen eines Terminalfensters

2. Eingabe von `sudo nano /etc/default/keyboard`

3. Ersetzen von `XKBLAYOUT="us"` durch `XKBLAUOUT="de"`

4. Speichern mit STRG+O >> Enter

5. Nano beenden mit STRG+X

6. Neustart des Systems

