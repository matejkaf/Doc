---
title: User Verwaltung unter Linux
---

* TOC
{:toc}

## Neuer User


```bash
$ adduser htltest
Adding user `htltest' ...
Adding new group `htltest' (1000) ...
Adding new user `htltest' (1000) with group `htltest' ...
Creating home directory `/home/htltest' ...
Copying files from `/etc/skel' ...
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
Changing the user information for htltest
Enter the new value, or press ENTER for the default
	Full Name []: Test HTL
	Room Number []: 
	Work Phone []: 
	Home Phone []: 
	Other []: 
Is the information correct? [Y/n] Y
```



## /etc/passwd

[Format](https://www.cyberciti.biz/faq/understanding-etcpasswd-file-format/)

Kali Linux mit zusätzlichem User `myuser`:

```bash
$ cat /etc/passwd
strongswan:x:106:65534::/var/lib/strongswan:/usr/sbin/nologin
ntp:x:107:112::/nonexistent:/usr/sbin/nologin
messagebus:x:108:113::/nonexistent:/usr/sbin/nologin
redsocks:x:109:114::/var/run/redsocks:/usr/sbin/nologin
rwhod:x:110:65534::/var/spool/rwho:/usr/sbin/nologin
iodine:x:111:65534::/run/iodine:/usr/sbin/nologin
miredo:x:112:65534::/var/run/miredo:/usr/sbin/nologin
_rpc:x:113:65534::/run/rpcbind:/usr/sbin/nologin
usbmux:x:114:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin
tcpdump:x:115:120::/nonexistent:/usr/sbin/nologin
rtkit:x:116:121:RealtimeKit,,,:/proc:/usr/sbin/nologin
sshd:x:117:65534::/run/sshd:/usr/sbin/nologin
statd:x:118:65534::/var/lib/nfs:/usr/sbin/nologin
postgres:x:119:123:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash
avahi:x:120:125:Avahi mDNS daemon,,,:/run/avahi-daemon:/usr/sbin/nologin
stunnel4:x:121:126::/var/run/stunnel4:/usr/sbin/nologin
Debian-snmp:x:122:127::/var/lib/snmp:/bin/false
sslh:x:123:128::/nonexistent:/usr/sbin/nologin
nm-openvpn:x:124:129:NetworkManager OpenVPN,,,:/var/lib/openvpn/chroot:/usr/sbin/nologin
nm-openconnect:x:125:130:NetworkManager OpenConnect plugin,,,:/var/lib/NetworkManager:/usr/sbin/nologin
pulse:x:126:131:PulseAudio daemon,,,:/var/run/pulse:/usr/sbin/nologin
saned:x:127:134::/var/lib/saned:/usr/sbin/nologin
inetsim:x:128:136::/var/lib/inetsim:/usr/sbin/nologin
colord:x:129:137:colord colour management daemon,,,:/var/lib/colord:/usr/sbin/nologin
geoclue:x:130:138::/var/lib/geoclue:/usr/sbin/nologin
lightdm:x:131:139:Light Display Manager:/var/lib/lightdm:/bin/false
king-phisher:x:132:140::/var/lib/king-phisher:/usr/sbin/nologin
kali:x:1000:1000:Kali,,,:/home/kali:/usr/bin/zsh
systemd-coredump:x:999:999:systemd Core Dumper:/:/usr/sbin/nologin
redis:x:133:143::/var/lib/redis:/usr/sbin/nologin
_gvm:x:134:144::/var/lib/openvas:/usr/sbin/nologin
myuser:x:1001:1001:,,,:/home/myuser:/bin/bash
```

`user:password:user id:group id:user info:home:shell`

password=x bedeutet der Passwort hash ist in `/etc/shadow` was jetzt Standard ist.

Nur die Zeile eines Users anzeigen mit `grep`:

```bash
$ grep 'myuser' /etc/passwd 
```



## /etc/shadow

`/etc/passwd` ist für jeden user lesbar und daher die Hashwerte der Passwörter zu einfach zugänglich. Daher wird seit einiger Zeit der Hashwert in `/etc/shadow` gespeichert.

> This security feature keeps encrypted passwords safe from unauthorized users and password cracking programs.

`/etc/shadow` ist ein File mit äußerst eingeschränkten Userrechten, nur für root lesbar. Enthält zusätzliche Informationen zum Passwort.

```bash
$ cat /etc/shadow
```

```
strongswan:*:18583:0:99999:7:::
ntp:*:18583:0:99999:7:::
messagebus:*:18583:0:99999:7:::
redsocks:!:18583:0:99999:7:::
rwhod:*:18583:0:99999:7:::
iodine:*:18583:0:99999:7:::
miredo:*:18583:0:99999:7:::
_rpc:*:18583:0:99999:7:::
usbmux:*:18583:0:99999:7:::
tcpdump:*:18583:0:99999:7:::
rtkit:*:18583:0:99999:7:::
sshd:*:18583:0:99999:7:::
statd:*:18583:0:99999:7:::
postgres:*:18583:0:99999:7:::
avahi:*:18583:0:99999:7:::
stunnel4:!:18583:0:99999:7:::
Debian-snmp:!:18583:0:99999:7:::
sslh:!:18583:0:99999:7:::
nm-openvpn:*:18583:0:99999:7:::
nm-openconnect:*:18583:0:99999:7:::
pulse:*:18583:0:99999:7:::
saned:*:18583:0:99999:7:::
inetsim:*:18583:0:99999:7:::
colord:*:18583:0:99999:7:::
geoclue:*:18583:0:99999:7:::
lightdm:*:18583:0:99999:7:::
king-phisher:*:18583:0:99999:7:::
kali:$6$GHNiMeXhVU70giNl$vpm87wq/tB5X5rA8MYnsw8ssB7iyW.9gh5m/drfTmMJdvRtArB/3Xtyan1/DmOeBdpxs9cfKaDt0n15nqupvn/:18583:0:99999:7:::
systemd-coredump:!*:18583::::::
redis:*:18753:0:99999:7:::
_gvm:*:18753:0:99999:7:::
myuser:$6$YzThOJRRKMhvt5ui$w8ekzgNIXJock20ThHIuw.i1ubgA8.rZ7y9L2r38lr0MuSPF85bna/1QaVjMBprnc6r94b2BpTyAZK8BZ79eW1:18762:0:99999:7:::
 
```

nine fields separated by colons (`:`).

1. Username
2. Encrypted password
3. Date of last password change (days since 1 January 1970)
4. Minimum required days between password changes
5. Maximum allowed days between password changes
6. Number of days in advance to display password expiration message
7. Number of days after password expiration to disable the account
8. Account expiration date
9. Reserve field



Spezielle Passwort Texte: 

- `*` ... locked service account 
- `!` ... locked user account
- `!*` ... blank password 



Datumangaben – days since 1 January 1970 – berechnen des Datums mit der `-d` Option von `date`:

```bash
$ date -d "1970-01-01 18762 days"
Sat 15 May 2021 12:00:00 AM EDT
```

Alle User auflisten:

```bash
$ awk -F':' '{print $1}' /etc/shadow
```



## User wechseln

Zwischen User wechseln (innerhalb des gleichen Terminals) 
[[How to switch between users on one terminal?](https://unix.stackexchange.com/questions/3568/how-to-switch-between-users-on-one-terminal)]

```bash
$ whoami
user1
$ su -l user2
Password:
$ whoami
user2
$ exit
logout
```



## Passwort ändern

[[passwd](https://man7.org/linux/man-pages/man1/passwd.1.html)]

Ein normaler User kann sein eigenes Passwort ändern

```bash
$ passwd
```

root (superuser) darf von allen Usern die Passwörter ändern:

```bash
$ passwd myuser
```



## User löschen

[[userdel](https://man7.org/linux/man-pages/man8/userdel.8.html)]



## Gruppen

Eine neue Gruppe erzeugen

```bash
$ groupadd Group_Name
```

Alle Gruppen eines Users anzeigen:

```bash
$ groups htltest
```

Einen User einer Gruppe hinzufügen

```bash
$ usermod -aG Group_Name htltest
```



## Rechte

Normale User dürfen nicht alles:

```bash
$ ls /root
# ls: cannot open directory '/root': Permission denied
$ ls -dl /root
# drwx------ 1 root root 4096 Oct 26 08:25 /root
```

## root Rechte

Super user (root) Rechte einräumen (`sudo` darf aufgerufen werden):

```bash
# add 'htltest' to group 'sudo' (option: -aG)
$ usermod -aG sudo htltest
```



## Quellen

- [[Add and Manage User Accounts in Ubuntu 18.04 LTS](https://vitux.com/add-and-manage-user-accounts-in-ubuntu-18-04-lts/)]