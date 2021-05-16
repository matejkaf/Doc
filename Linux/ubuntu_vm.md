---
title: Ubuntu
---



# VM Ware

Fusion 11.5



# Ubuntu

Ubuntu 18.04.3 LTS

`ubuntu-18.04.3-desktop-amd64.iso`


VM Ware install:

Easy Install HTL
user: htl
pass: lth

Fehler: Could not open /dev/vmmon: Broken pipe.
Restart bringt nix
Lösung: in System Preferences > Security&Privacy > General (dort gibt es einen Button für VmWare Fusion)

Tastatur ist Englisch
> Settings > Region & Language > Input Sources > German (Austria, Macintosh)
Am Bildschirm rechts oben kann man dann umschalten.


# Maria DB

[How to Install MariaDB on Ubuntu 18.04](https://linuxize.com/post/how-to-install-mariadb-on-ubuntu-18-04/)

```bash
# Update packages index
$ sudo apt update

$ sudo apt install mariadb-server

# Test
$ sudo systemctl status mariadb
$ mysql --version
```

```bash
$ sudo mysql_secure_installation
```

root password: `toor`
Remote login erlaubt lassen.


# Allgemeiner root login

Auch danach geht der root login nur mit sudo.

Lösung [Access denied for user 'root'@'localhost' (using password: YES) after new installation on Ubuntu](https://stackoverflow.com/questions/28068155/access-denied-for-user-rootlocalhost-using-password-yes-after-new-instal)

```bash
$ sudo mysql -u root
```

```sql
GRANT ALL PRIVILEGES on *.* to 'root'@'localhost' IDENTIFIED BY 'toor';
FLUSH PRIVILEGES;
```

```bash
$ sudo service mysql restart
```

# mysql CLI

```bash
$  mysql -u root -p
password: toor
```

# Java

## JDK

[How To Install Oracle JAVA JDK8 On Ubuntu 16.04 | 17.10 | 18.04 Desktops](https://websiteforstudents.com/how-to-install-oracle-java-jdk8-on-ubuntu-16-04-17-10-18-04-desktops/)

```bash
$ sudo add-apt-repository ppa:webupd8team/java
$ sudo apt update
$ sudo apt install oracle-java8-installer
# wird nicht mehr unterstützt
# https://askubuntu.com/questions/1136104/get-error-when-install-oracle-jdk-8-on-ubuntu-18-04
```

Stattdessen **openJDK**
```bash
sudo apt install openjdk-8-jdk openjdk-8-jre
```

## Netbeans

[Netbeans 8.2 install(https://www.tecmint.com/install-netbeans-ide-in-ubuntu-debian-linux-mint/)

```
$ wget -c http://download.netbeans.org/netbeans/8.2/final/bundles/netbeans-8.2-linux.sh
$ chmod +x netbeans-8.2-linux.sh 
$ ./netbeans-8.2-linux.sh
```

Pfad zum openJDK?

```bash
$ readlink -f $(which java) 
/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
```

Im Setup Dialog für JDK Path `/usr/lib/jvm/java-8-openjdk-amd64/`

# git

```bash
$ sudo apt install git
```

# Visual Studio Code

Über Ubuntu Software.



# .Net Core SDK

[](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/intro) in Ubuntu öffnen

```bash
$ wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
$ sudo dpkg -i packages-microsoft-prod.deb

sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install dotnet-sdk-3.0

```

# Zeitzone

```bash
# https://linuxize.com/post/how-to-set-or-change-timezone-on-ubuntu-18-04/
$ sudo timedatectl set-timezone Europe/Vienna
```

# File sharing

Folgende Befehle sind zusätzlich zu den VMWare Tools noch notwendig:

```bash
sudo mkdir /mnt/hgfs
sudo /usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs -o subtype=vmhgfs-fuse,allow_other
```