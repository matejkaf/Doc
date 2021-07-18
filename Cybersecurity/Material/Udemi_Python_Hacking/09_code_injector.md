gzip encoding umgehen damit die website in plaintext übertragen wird.

Durch Löschen von `Accept-Encoding` im http Request

![image-20210704135507601](fig/image-20210704135507601.png)



![image-20210704140617131](fig/image-20210704140617131.png)



## Inject JS Code

![image-20210715102342223](fig/image-20210715102342223.png)



## Housekeeping



![image-20210715102459996](fig/image-20210715102459996.png)



## Issue

Nicht alle Websites laden korrekt. Grund: `Content-Length` im http Header.

Zahl mit regex extrahieren.

Regex "Groups and None-capturing Regex"

![image-20210715120155651](fig/image-20210715120155651.png)

None-capturing ist eigentlich nicht notwendig (IMHO)

Noch ein Bugfix:

![image-20210715120605355](fig/image-20210715120605355.png)



## BeEF Framework

Browser exploitation Framework. Video 88

```sh
$ apt update
$ apt install beef-xss
```

Beispiele für Kommandos:

- Create Alert Dialog
- Raw JavaScript – irgendein Skript starten
- Spyder Eye – Screenshot
- Redirect Browser



Delivering Malware:

BeEF>Social Engineering>Clippy
