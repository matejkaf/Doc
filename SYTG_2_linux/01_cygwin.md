---
title: Cygwin installieren
cmds: ['md_html.bash']
description:
tags: [lecture, cygwin ]
---



# Cygwin

[Install and maintain Cygwin - How to Use Cygwin on Windows](https://cygwin.readthedocs.io/en/latest/install/)





# Installieren

Cygwin (https://www.cygwin.com/) 

Installieren 

- Download 
- Verschieben in ein eigenes Dir (dieses enthält später auch nachgeladene packages) , 
  - nicht auf P: speichern, sonst keine mirrors in der Anzeige
- Das `setup.exe` braucht man auch später noch für das nachinstallieren von packages 
- Kommandozeile: `Setup-x86_64.exe --no-admin`
- [Ftp://mirror.easyname.at/](ftp://mirror.easyname.at/) 
- Zuerst keine Packages aussuchen 
- Shortcut auf Desktop 

 

Packages installieren 

- Kommandozeile: Setup-x86_64.exe --no-admin 

- View: Full 

- nano 
- gcc-g++ 
- python3 



# Installieren in der Kommandozeile

https://superuser.com/questions/214831/how-to-update-cygwin-from-cygwins-command-line 

`setup.exe --no-admin --packages <package name>`

Oder nur `–P <package-name>`, Quiet Mode: `-q`

```
setup-x86_64.exe --no-admin -q -P gcc-g++
```

Mehrere Packages:

```
setup-x86_64.exe --no-admin -q -P wget -P gcc-g++ -P make
```



# Packages

[Cygwin Packages](https://cygwin.com/packages/)

- nano
- gcc-g++
- python3
- python3-pip ???



# Uninstall

https://cygwin.com/faq/faq.html#faq.setup.uninstall-all 

 

# API Server mit cygwin und python 

- Pip installieren 

- python3 –version, 
- Pip-36 (z.B.) 

- https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask 

- python3 -m pip install flask 

 

# Ausprobieren

- Maria_DB auf cygwin 

 

# Expose

- Nano installieren 
- Einfaches Textfile erstellen 

- touch, nano, cat 

- Gcc installieren 

- C Programm mit nano erstellen, compilieren und starten 

 

 