---
title: Technische Details – Linux
subtitle: Passwörter
tags: [lecture]
---

2 Files:

- `/etc/passwd` und
- `/etc/shadow`

```sh
# ls -l /etc/passwd /etc/shadow
-rw-r--r-- 1 root root   3042 Feb 23 05:38 /etc/passwd
-rw-r----- 1 root shadow 1577 Feb 23 05:38 /etc/shadow
```

Beachte die eingeschränkten Rechte

Zeile in passwd:

```
kali:x:1000:1000:Kali,,,:/home/kali:/usr/bin/zsh
```

`:x:` bedeutet, dass der Passwort-Hash in der `shadow` Datei ist:

```
kali:$y$j9T$h.cekCfg097LWvTwVtk8T0$fcGogK/pi581lOUbxBwtEzH7l/zKL0atAeu9DV.BW86:18681:0:99999:7:::
```

- `$y$`: yescrypt
- `j9T`: Parameter für yescrypt
- `h.cekCfg097LWvTwVtk8T0`: Salt
- `pi581lOUbxBwtEzH7l/zKL0atAeu9DV.BW86`: PW Hash

yescrypt existiert erst seit 2015 [[*](https://www.password-hashing.net/submissions/specs/yescrypt-v2.pdf)]



Beispiel (SHA-512) – bis vor kurzem in Kali Linux verwendet (passwd mittels unshadow):

```
matejka:$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.:1000:1000:Franz MATEJKA,,,:/home/matejka:/bin/bash
```

- `$6$`: Verwendeter Hash Algorithmus (`$6$`=crypt mit SHA-512)
- `Y.6vLGlD1cGsutIg`: Salt, Radix-64
- `Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.`: Passwort-Hash, Radix-64

Radix-64 ≠ Base64

*Default 5000 rounds*

