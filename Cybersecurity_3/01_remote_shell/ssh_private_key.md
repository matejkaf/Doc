

Quelle: [How To Configure SSH Key-Based Authentication on a Linux Server](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)

SSH Server (am Rechner mit dem man sich verbinden möchte) **authentifizieren** Clients über unterschiedliche Methoden. Die elementarste ist per **Passwort**, dies ist einfach zu verwenden aber nicht die sicherste Methode.

**Bots** greifen gerne SSH Server an und versuchen per password guessing Zugang zu erhalten (network based brute force). Passwörter sind oft nicht lang und komplex genug so dass dieser automatisierte Vorgang häufig erfolgreich ist.

**SSH keys** stellen eine sicherere Alternative dar.

Dabei wird ein kryptografisch sicheres Schlüsselpaar aus einem public- und einem private-key verwendet.

Der private key bleibt am Client (und muss sorgfältig verwahrt werden). Ein kompromitierter private key ermöglicht das einloggen in die Server mit entsprechenden public key ohne weitere Authentifizierung. Als zusätzliche Sicherheitsmaßnahme kann der private key mit einem Passwort (passphrase) verschlüsselt werden.

Der public key wird in einer speziellen Datei `~/.ssh/authorized_keys` abgelegt.



# Schritt 1 – Generiere SSH keys

Am Client. 

```sh
$ ssh-keygen
```



```
Generating public/private rsa key pair.
Enter file in which to save the key (/home/username/.ssh/id_rsa):
```

Frage wo die keys gespeichert werden sollen. Default `~/.ssh/id_rsa` und `~/.ssh/id_rsa.pub`

Außerdem kann der private key mit einem Passwort geschützt (verschlüsselt) werden.

Eventuell vorhandene Schlüssel werden überschrieben (es kommt eine Warnung in diesem Fall).



```sh
$ ssh-keygen 
Generating public/private rsa key pair.
Enter file in which to save the key (/home/kali/.ssh/id_rsa): 
Created directory '/home/kali/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/kali/.ssh/id_rsa
Your public key has been saved in /home/kali/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:udmu3A5WWZJpq7JfMPQBMJM9UyCXRs8WXfw7IwOpTaI kali@kali
The key's randomart image is:
+---[RSA 3072]----+
|      ===+o. o.  |
|      .=*+ +. .  |
|       ..oX o  . |
|       . * X    .|
|        S X .   .|
|       E X . o + |
|      . * o   o o|
|       = =       |
|      ..+o+      |
+----[SHA256]-----+
```

Folgende Dateien werden im Verzeichnis `.ssh` generiert.

```sh
$ ls .ssh -al
-rw-------  1 kali kali 2590 Jun 30 09:21 id_rsa
-rw-r--r--  1 kali kali  563 Jun 30 09:21 id_rsa.pub
```

Beachte: Restriktive Rechte!



# Testssystem

Metasploitable

Eigenen User anlegen

```sh
$ adduser alice
# pw: alice
```

Switch user

```sh
$ su alice
# oder
$ su - alice
```

Einloggen per ssh – fragt nach dem Passwort von alice:

```sh
$ ssh alice@192.168.178.76
alice@192.168.178.76's password: 
```





# Schritt 2 – public key auf Server

Mit `ssh-copy-id`

```sh
$ ssh-copy-id username@remote_host
```



```sh
$ ssh-copy-id alice@192.168.178.76
```

```
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/kali/.ssh/id_rsa.pub"
The authenticity of host '192.168.178.76 (192.168.178.76)' can't be established.
RSA key fingerprint is SHA256:BQHm5EoHX9GCiOLuVscegPXLQOsuPs+E9d/rrJB84rk.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
alice@192.168.178.76's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'alice@192.168.178.76'"
and check to make sure that only the key(s) you wanted were added.
```

Auf Metasploitable:

![image-20210630155017583](fig/image-20210630155017583.png)

`.ssh` Verzeichnis wurde erstellt.

Einloggen per ssh – kein Passwort mehr notwendig:

```sh
$ ssh alice@192.168.178.76
```



# Dateien am Server (Metasploitable)

`.ssh` Verzeichnis auf dem Server (im User Verzeichnis von alice):

```sh
alice@metasploitable:~$ ls -a
.  ..  .bash_history  .bash_logout  .bashrc  .profile  .ssh

alice@metasploitable:~$ cd .ssh

alice@metasploitable:~/.ssh$ ls
authorized_keys

alice@metasploitable:~/.ssh$ ls -al
total 12
drwx------ 2 alice alice 4096 2021-06-30 09:54 .
drwxr-xr-x 3 alice alice 4096 2021-06-30 09:54 ..
-rw------- 1 alice alice  563 2021-06-30 09:54 authorized_keys

alice@metasploitable:~/.ssh$ more authorized_keys 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDEe+5CTZqWmZq5BuY+uKiTRPvc6Dfv6eLlssrZj0BARIv6+vqY6UZBVoRMx9HkjPCahNh2YxqbsTU2JrjeI4MUtIoCARGYkJ+PDydOUlp6N6WJHtM0UUoQUmbDQqysZZONFnNnB3CrAzQFhRodpKbsxq2eEUpn8CzuwJwxJdrWhyv7P6R5M7FN80A+YBEuipy7sIC4Lsz6OM3mICl+zT0CEn1a1mjFCPY9RJ1OHhpT9cJTzQD+rNfXhMI0O9ioUsYBNY+Qr/LpdaRD8Y4jpV2rx8jvWe0SNdfYrlYWuq63iHt0S+xNwIrKgqv+xyTVNFEjyidnX+z6ejUXmlUvHGOEV4ye6iuyYVyquAGYbDxM6JWrnR1Z9KtS28/E6HfxrY1RX4onVrt89nVDGvfOwCfDkEad5omaPHeKbBbESagRdEiM+MG2wC3EMN4epCJhe628mOQayAtNlQ5udwebDOqnVIv9a+GwheWdEspiNtgFa+ZL4affgSY8Yfd5Ee9QpKU= kali@kali
```



# Dateien am Client (Kali)

```
┌──(kali㉿kali)-[~]
└─$ cd .ssh    

┌──(kali㉿kali)-[~/.ssh]
└─$ ls     
id_rsa  id_rsa.pub  known_hosts

┌──(kali㉿kali)-[~/.ssh]
└─$ more id_rsa     
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEAxHvuQk2alpmauQbmPriok0T73Og37+ni5bLK2Y9AQESL+vr6mOlG
...
Z/JcH0PUoS8IpPr8O9McDTJuo/k/Ks7EWZq7N3uzgVTBOvQY67DFhtDNFPqV6Z5FFUgtEK
o5uZ27373ntvjDJ/JVFHq2sFMWq1ayil0gmO4nqIXL4GsFB+ijK4fC9Ph1SrtaKh5AoZ4n
GBOVJb2Cjl0Z8AAAAJa2FsaUBrYWxpAQI=
-----END OPENSSH PRIVATE KEY-----

┌──(kali㉿kali)-[~/.ssh]
└─$ more id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDEe+5CTZqWmZq5BuY+uKiTRPvc6Dfv6eLlssrZj0BARIv6+vqY6UZBVoRMx9HkjPCahNh2YxqbsTU2JrjeI4MUtIoCARGYkJ+PDydOUlp6N6WJHt
M0UUoQUmbDQqysZZONFnNnB3CrAzQFhRodpKbsxq2eEUpn8CzuwJwxJdrWhyv7P6R5M7FN80A+YBEuipy7sIC4Lsz6OM3mICl+zT0CEn1a1mjFCPY9RJ1OHhpT9cJTzQD+rNfXhMI0O9ioUsYBNY+Q
r/LpdaRD8Y4jpV2rx8jvWe0SNdfYrlYWuq63iHt0S+xNwIrKgqv+xyTVNFEjyidnX+z6ejUXmlUvHGOEV4ye6iuyYVyquAGYbDxM6JWrnR1Z9KtS28/E6HfxrY1RX4onVrt89nVDGvfOwCfDkEad5o
maPHeKbBbESagRdEiM+MG2wC3EMN4epCJhe628mOQayAtNlQ5udwebDOqnVIv9a+GwheWdEspiNtgFa+ZL4affgSY8Yfd5Ee9QpKU= kali@kali

┌──(kali㉿kali)-[~/.ssh]
└─$ more known_hosts 
|1|i7QIYEIFsN0iJcoLL7FK+5xNtgc=|6ytKYjwtb3v66c9aEeSiCzb1MEQ= ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAstqnuFMBOZvO3WTEjP4TUdjgWkIVNdTq6kboEDjteOfc65TlI7sRv
QBwqAhQjeeyyIk8T55gMDkOD0akSlSXvLDcmcdYfxeIF0ZSuT+nkRhij7XSSA/Oc5QSk3sJ/SInfb78e3anbRHpmkJcVgETJ5WhKObUNf1AKZW++4Xlc63M4KI5cjvMMIPEVOyR3AKmI78Fo3HJjYu
cg87JjLeC66I7+dlEYX6zT8i1XYwa/L1vZ3qSJISGVu8kRPikMv/cNSvki4j+qDYyZ2E5497W87+Ed46/8P42LNGoOV8OcX/ro6pAcbEPUdUEfkJrqi2YXbhvwIJ0gFMb6wfe5cnQew==
```

Der Inhalt von `id_rsa.pub` wird 1:1 nach `authorized_keys` am Server übernommen. `authorized_keys` kann mehrere public-keys von mehreren Clients enthalten, werden einfach an die bestehenden eingefügt. Daher wenn das `ssh-copy-id` Tool nicht zur Verfügung steht, geht es auch so:

```sh
cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

Oder mit jedem Text-Editor.



# ssh Spielereien



## 1

Erzeugen einer Datei am Remote System mit eingegeben Inhalt.

```sh
$ cat | ssh alice@192.168.178.76 "cat > test.txt"
Das ist ein Test
mit mehreren
Zeilen
^D
```



## 2

Anzeige des Inhalts einer Remote Datei:

```sh
$ ssh alice@192.168.178.76 "cat test.txt"
```



## 3

Shell Script Remote erzeugen und Remote ausführen

```sh
# Erzeuge 5 Text Files 1.txt, ..., 5.txt
for num in $(seq -w 1 5); do
	touch "${num}.txt"
done
```

Alles in einer Zeile, remote in `do.sh` schreiben, eXecution flag setzen und Skript ausführen.

```sh
echo 'for num in $(seq -w 1 5); do\n touch "${num}.txt"\n done\n' | ssh alice@192.168.178.76 'cat >do.sh;chmod u+x do.sh;./do.sh'
```



# SSH keys Interna

Die Authentifizierung läuft über einen challenge-response Mechanismus. Im Wesentlichen sieht dieser so aus:

- Client baut eine Verbindung mit dem Server auf (private-key wird nicht bekannt gegeben!). Dabei entsteht ein 128-Bit session identifier der für die Verbindung eindeutig ist.
- Server schickt eine zufällig gewählte 256-Bit Zahl die mittels public-key verschlüsselt wurde = Challenge.
- Der Client empfängt die Challenge und entschlüsselt diese mit dem Private Key. Das Ergebnis wird gemeinsam mit dem session identifier MD5 gehasht und zum Server zurückgeschickt.
- Der Server empfängt die Response und prüft das Ergebnis. Stimmt der Hash wird die Authentifizierung akzeptiert.

Der zusätzlich gehashte session identifier schützt vor MITM. Bei einem MITM Angriff würde sich 2 unterschiedliche session IDs ergeben und die challenge geht schief.

[[1](https://crypto.stackexchange.com/a/76662)], [[2](https://docstore.mik.ua/orelly/networking_2ndEd/ssh/ch03_04.htm#ch03-83508.html)]



# Banner Grabbing mit telnet

```sh
$ telnet 192.168.178.76 22
Trying 192.168.178.76...
Connected to 192.168.178.76.
Escape character is '^]'.
SSH-2.0-OpenSSH_4.7p1 Debian-8ubuntu1
```



# Windows 10

Mit OpenSSH oder putty, siehe [[How to Generate SSH Key in Windows 10](https://phoenixnap.com/kb/generate-ssh-key-windows-10)]



