Learn Python and Ethical Hacking From Scratch  (Udemi-Kurs, Zaid Sabih)

Das Tool `terminator` stellt ein vertikal und horizontal splitbares Terminal zur Verfügung (mit rechter Maustaste).

```bash
$ apt install terminator
```

[Liste von Linux Kommandos](https://www.mediacollege.com/linux/command/linux-command.html)

 [explainshell.com](https://explainshell.com/explain?cmd=ls+-al) – analysiert Kommandozeilen (z.B. die Bedeutung der Optionen)

Kali Linux – Leafpad

```python
#!/usr/bin/env python3
print("Hello World")
```



## pycharm

Python IDE

- Download
- Ordner nach `/opt` verschieben
- `pycharm..../bin/pycharm.sh` aus dem Terminal starten



## VSCode

[](https://code.visualstudio.com/docs/setup/linux)



# Section 2: Writing a MAC Address Changer - Python Basics

Ändern der MAC Adresse:

```bash
# disable interface
$ ifconfig eth0 down
# change mac address
$ ifconfig eth0 hw ether 11:22:33:44:55:66
# enable interface
$ ifconfig eth0 up
```



```bash
import subprocess
subprocess.run("ifconfig eth0",shell=True)
# Ausgabe auf stdout
```

Anmerkung: Ohne `shell=True` wird keine Kommandozeile geparst:

```bash
subprocess.run(["ifconfig","eth0"])
```

Und somit:

```python
import subprocess
subprocess.run("ifconfig eth0 down",shell=True)
subprocess.run("ifconfig eth0 hw ether 00:22:33:44:55:66",shell=True)
subprocess.run("ifconfig eth0 up",shell=True)
```



## Mit Variablen

```python
import subprocess

interface = "eth0"
new_mac = "00:22:33:44:55:66"

print("[+] changing MAC address for " + interface + " to " + new_mac )

# und gleich mit sring interpolation
print(f"[+] changing MAC address for {interface} to {new_mac}" )

subprocess.run(f"ifconfig {interface} down",shell=True)
subprocess.run(f"ifconfig {interface} hw ether {new_mac}",shell=True)
subprocess.run(f"ifconfig {interface} up",shell=True)
```

Das Programm muss mit `sudo` gestartet werden. Das erste Byte der MAC Adresse muss gerade sein (sonst ist es eine Multicast-Adresse).



## Benutzereingabe

Im Video wird `input` verwendet um `interface` und `new_mac` einzugeben.



## Hijacking

Schwachstelle in diesem Programm: user can **hijack** the programm.

Wenn die Daten die der User eingibt nicht geprüft werden, dann könnte dieser Linux Commands eingeben. 

```python
interface = input("interface > ")
new_mac = input("MAC > ")
```

Eingabe:

```
interface > eth0;ls;
```

Also eine Art "injection" Attack

Der Benutzer mach Dinge die ihm nicht erlaubt sind! Hacking!

Stopfen der Sicherheitslücke indem eine andere Variante von `subprocess.run` verwendet wird, ohne `shell=True`. 

z.B.:

```python
subprocess.run(["ifconfig", interface, "hw", "ether", new_mac])
```

Trennung überall wo ein Leerzeichen war. Dies wird als ein Kommando interpretiert. Command injection wird dadurch viel schwieriger weil nicht mehr mit `;` ein neues Kommando begonnen werden kann.



## Argumente

Erweiterung: Keine Eingabe sondern Argumente über die Kommandozeile.

```python
import optparse

parser = optparse.OptionParser()
# naming convention = everything starting with a capital letter ist a class


```

> *Deprecated since version 3.2:* The [`optparse`](https://docs.python.org/3/library/optparse.html#module-optparse) module is deprecated and will not be developed further; development will continue with the [`argparse`](https://docs.python.org/3/library/argparse.html#module-argparse) module.



![image-20210616173331347](fig/image-20210616173331347.png)



![image-20210616173418600](fig/image-20210616173418600.png)



## Funktionen

![image-20210616173651817](fig/image-20210616173651817.png)



![image-20210616174307451](fig/image-20210616174307451.png)



Return Werte:

![image-20210616174517429](fig/image-20210616174517429.png)



## Decision Making in Python

![image-20210616174734246](fig/image-20210616174734246.png)



![image-20210616175211488](fig/image-20210616175211488.png)



# Section 3: MAC Changer - Algorithm Design

Stdout eines mit `subprocess.run` gestarteten Programms – siehe [*](https://docs.python.org/3/library/subprocess.html#subprocess.CompletedProcess). 

```python
import subprocess
run_ret = subprocess.run("ls -l", shell=True, capture_output=True)
print(run_ret.stdout)
```

```
b'total 4\n-rw-r--r-- 1 runner runner 107 Jun 17 12:13 main.py\n'
```



`capture_output=True` muss angegeben werden damit `.stdout` einen Wert enthält

Mit `encoding` bzw. `subprocess.check_output`:

```python
import subprocess
run_ret = subprocess.run("ls -l", shell=True, capture_output=True, encoding="utf8")
print(run_ret.stdout)

result = subprocess.check_output(["ls","-l"],encoding="utf8")
print(result)
```

```
total 4
-rw-r--r-- 1 runner runner 200 Jun 17 12:23 main.py

total 4
-rw-r--r-- 1 runner runner 200 Jun 17 12:23 main.py
```

## Regex

Regular expression

[pythex](https://pythex.org/)

Suchen nach Mustern in großen Mengen Text

![image-20210617144339927](fig/image-20210617144339927.png)



## Cleanup

Ermitteln der MAC Adresse in einer Funktion

![image-20210617152727617](fig/image-20210617152727617.png)



## Validation

![image-20210617152931241](fig/image-20210617152931241.png)



## Python3

`subprocess.check_output` liefert einen Bytestring. Lösung im Video:

```
str(ifconfig_result)
```



# Section 4: Programming a Network Scanner

Für information gathering

Info: es gibt ein nmap Modul für Python

