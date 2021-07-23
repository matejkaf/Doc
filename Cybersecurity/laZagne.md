---
title: LaZagne – passwort retrieval
---



[LaZagne](https://github.com/AlessandroZ/LaZagne) – passwort retrieval

From [github](https://github.com/AlessandroZ/LaZagne/issues/548)

```
Open a cmd(Run as Administrator).

C:> cd <laZagne Folder>

Install lazagne requirements:important
C:> pip install -r requirements.txt

Before compiling laZagne.py you have to run it first because will create some files:

Run laZagne.py all commands:
C:> cd Windows
C:> python laZagne.py all
```



```

==========
After finishes,to compile to .exe:

Install pyinstaller:use to compile to exe
C:> pip install pyinstaller

C:> pyinstaller

pyinstaller startete nicht direkt link kann man herausfinden mit

C:> pip uninstall pyinstaller

Vorgang kann abgebrochen werden

c:\users\test\appdata\local\packages\pythonsoftwarefoundation.python.3.9_qbz5n2kfra8p0\localcache\local-packages\python39\scripts\pyinstaller.exe

path-to-pyinstaller\pyinstaller --onefile "path-to-laZagne.py"

c:\users\test\appdata\local\packages\pythonsoftwarefoundation.python.3.9_qbz5n2kfra8p0\localcache\local-packages\python39\scripts\pyinstaller.exe --onefile laZagne.py

Look carefully to see the path where lazagne.exe will be saved.

C:> cd dist
C:> lazagne.exe all

Test your lazagne.exe.

For troubleshoot or see running in details, run as:

lazagne.exe all -vvv

Did you know that Windows user password is not kept in memory from Win 8.1?
So to grab user password you have to modify registry.
But you can grab logged user NTLM/SHA1 hashes and try to decrypt it.

Latest laZagne.py can recover latest Chrome,Firefox builds.
```

Ergebnis (22.07.2021): per `python lazagne.py` gestartet werden die gespeicherten Passwörter gefunden:

```
C:\Users\test\Downloads\LaZagne-master\Windows>python lazagne.py browsers

|====================================================================|
|                                                                    |
|                        The LaZagne Project                         |
|                                                                    |
|                          ! BANG BANG !                             |
|                                                                    |
|====================================================================|

[+] System masterkey decrypted for 0125b606-0342-4ad3-85f2-244dfd45af46
[+] System masterkey decrypted for 8864c98f-19cb-4c7a-bbbd-d90a71d83f5c

########## User: test ##########

------------------- Firefox passwords -----------------

[+] Password found !!!
URL: https://github.com
Login: matejkaf
Password: 28W...kCs

------------------- Chromium edge passwords -----------------

[+] Password found !!!
URL: https://github.com/session
Login: matejkaf
Password: 28W...kCs


[+] 2 passwords have been found.
For more information launch it again with the -v option

elapsed time = 0.7661292552947998
```

Das compilierte .exe File findet die Passwörter aber nicht!?

Der Compiler meldet auch Fehler:

```
5093 WARNING: lib not found: api-ms-win-core-profile-l1-1-0.dll dependency of C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.9_3.9.1776.0_x64__qbz5n2kfra8p0\python.exe
5109 WARNING: lib not found: api-ms-win-core-winrt-error-l1-1-0.dll dependency of C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.9_3.9.1776.0_x64__qbz5n2kfra8p0\python.exe
5124 WARNING: lib not found: api-ms-win-core-util-l1-1-0.dll dependency of C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.9_3.9.1776.0_x64__qbz5n2kfra8p0\python.exe
5140 WARNING: lib not found: api-ms-win-core-rtlsupport-l1-1-0.dll dependency of C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.9_3.9.1776.0_x64__qbz5n2kfra8p0\python.exe
...
```

Lösung: ?

```
set PATH=%PATH%;C:\Windows\System32\downlevel;
c:\users\test\appdata\local\packages\pythonsoftwarefoundation.python.3.9_qbz5n2kfra8p0\localcache\local-packages\python39\scripts\pyinstaller.exe
```

OK. Das bringt die Warnings weg aber es geht ganauso wenig (keine Passwörter gefunden)
