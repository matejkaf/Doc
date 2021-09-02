---
title: Tests von Services
subtitle: Lösung
tags: [solution]
---



#### Lösung (Banner grabbing)

Metasploitable, Port 22/TCP (ssh):

```sh
$ telnet 192.168.178.76 22
Trying 192.168.178.76...
Connected to 192.168.178.76.
Escape character is '^]'.
SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1
^C
```

Ein weiterer Verbindungsaufbau ist über telnet natürlich nicht möglich, aber der Text `SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1` ist für die weitere Recherche nach einer Schwachstelle extrem hilfreich. Google search `openssh 4.7p1 exploit`, z.B. sieht [*](https://github.com/granolocks/gabekoss.com/blob/master/drafts/openssh_version-4-7-2-2013103001.md) vielversprechend aus.

Metasploitable, Port 23/TCP (telnet):

```sh
$ telnet 192.168.126.4
```

```sh
Trying 192.168.126.4...
Connected to 192.168.126.4.
Escape character is '^]'.
                _                  _       _ _        _     _      ____  
 _ __ ___   ___| |_ __ _ ___ _ __ | | ___ (_) |_ __ _| |__ | | ___|___ \ 
| '_ ` _ \ / _ \ __/ _` / __| '_ \| |/ _ \| | __/ _` | '_ \| |/ _ \ __) |
| | | | | |  __/ || (_| \__ \ |_) | | (_) | | || (_| | |_) | |  __// __/ 
|_| |_| |_|\___|\__\__,_|___/ .__/|_|\___/|_|\__\__,_|_.__/|_|\___|_____|
                            |_|                                          


Warning: Never expose this VM to an untrusted network!

Contact: msfdev[at]metasploit.com

Login with msfadmin/msfadmin to get started


metasploitable login: msfadmin
Password: 
Last login: Tue Aug 31 15:44:02 EDT 2021 on tty1
Linux metasploitable 2.6.24-16-server #1 SMP Thu Apr 10 13:58:00 UTC 2008 i686

The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

To access official Ubuntu documentation, please visit:
http://help.ubuntu.com/
No mail.
```



