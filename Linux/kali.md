---
title: Kali Linux
---

* TOC
{:toc}

# Editoren

- vi
- nano
- leafpad (GUI)

# Programme

- nautilus: File Manager?


# VS Code installieren

[Visual Studio Code on Linux](https://code.visualstudio.com/docs/setup/linux#_debian-and-ubuntu-based-distributions)

```bash
# The repository and key can also be installed manually with the following script:
$ curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
$ sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
$ sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'

# package update - wie weiter beschrieben - funktioniert nicht!
```

Laut folgender Beschreibung gehts:
[VS Code in Kali Linux 2018.4](https://medium.com/@calypsobronte/vs-code-in-kali-linux-2018-4-9e96e92d13ca)

```bash
$ apt update
$ apt install code
```

code starten liefert nun eine Fehlermeldung weil man versucht das als root zu tun

Normalen User anlegen:

```bash
$ adduser myuser
# password: mypassword
# allow sudo
$ usermod -aG sudo myuser
# logout/login
```

Mit dem nicht root User kann vscode verwendet werden

```bash
$ code <file or directory to open>
```

# .NET core installieren




# Kommandos

Eigentlich allgemein UNIX/Linux

[Kali Linux commands](https://techsomebite.wordpress.com/2015/10/21/kali-linux-commands/)


# Email versenden

[How To Install and Configure Postfix as a Send-Only SMTP Server on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-postfix-as-a-send-only-smtp-server-on-ubuntu-14-04)

```bash
# Postfix Konfigurator startet in Kali Linux nicht automatisch
# Manuel starten
sudo apt install -y postfix
```

Funktioniert, landet aber im SPAM Ordner



# root

[](https://securityboulevard.com/2020/02/setting-up-the-root-account-on-kali-2020/)

Starting with **Kali 2020.1**, there is no longer a superuser account and the **default** user is now a standard, non-privileged user. In **Kali** Linux **2020.1**, both the **default** username and **password** are “**kali**”

```bash
# So wird man root user unter KALI Linux
$ sudo su -
```

