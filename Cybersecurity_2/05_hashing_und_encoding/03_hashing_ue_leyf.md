---
title: Kryptographie
subtitle: Hashfunktionen Übungen (Lösungen)
tags: [lecture,2AHITS_Teach]
---



```bash
$ wget https://matejkaf.github.io/Doc/Cybersecurity/11_hashing_und_encoding/goethe.txt
# oder
$ wget -O goethe.txt https://bit.ly/3aNAKZh
#
$ openssl dgst -sha256 goethe.txt
$ openssl dgst -sha256 -binary goethe.txt
$ openssl dgst -sha256 -binary goethe.txt | xxd -p | tr -d '\n'
```



Alternative: 

[JSLinux](https://bellard.org/jslinux/)

> Hinweis zum Online Linux Terminal (aus [FAQ](https://bellard.org/jslinux/faq.html)): To copy data, just select it with the mouse and use the "Copy" contextual menu (right click). To paste data, right click on the terminal cursor to show the contextual menu and select "Paste". Alternatively, you can use the "Paste" command in the navigator global menu.
