---
title: Email versenden
subtitle: Python
---



Server Test:

```sh
$ ping smtp.gmail.com
$ telnet smtp.gmail.com 587
```

Programm (direkt über SSL – anders als im Video):

```python
#!/usr/bin/env python
import subprocess
import smtplib

def send_mail(email, password, message):
    server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
    server.ehlo()
    server.login(email,password)
    server.sendmail(email,email, message)
    server.quit()

gmail_name = "matejkaf@gmail.com"
gmail_password = "***********"

send_mail(gmail_name, gmail_password, "this is just a test")

```





<img src="fig/image-20210718114318362.png" alt="image-20210718114318362" style="zoom:50%;" />



<img src="fig/image-20210718114749577.png" alt="image-20210718114749577" style="zoom:50%;" />



Komplett formatierte Email:

```
From: you@gmail.com
To: me@gmail.com, bill@gmail.com
Subject: OMG Super Important Message

Hey, what's up?

- You
```

mit string formatting in python:

```python
sent_from = 'you@gmail.com'
to = ['me@gmail.com', 'bill@gmail.com']
subject = 'OMG Super Important Message'
body = 'Hey, what's up?\n\n- You'

email_text = """\
From: %s
To: %s
Subject: %s

%s
""" % (sent_from, ", ".join(to), subject, body)
```

