Daten im http Layer verändern.

Download des avg Virus Checker wird ausgetauscht (`evil.exe`).

Raw Layer sind die im TCP Paket übertragenen Nutzdaten (http) 



<img src="fig/image-20210702130209137.png" alt="image-20210702130209137" style="zoom:50%;" />



Response zum Request finden in dem ack und seq analysiert werden. Das ack von Request ist das seq von Response.

<img src="fig/image-20210702161247859.png" alt="image-20210702161247859" style="zoom:50%;" />



HTTP status codes, Redirection, `301 Moved Permanently`

```http
HTTP/1.1 301 Moved Permanently
Location: https://www.example.org/index.asp
```

![image-20210702161953122](fig/image-20210702161953122.png)

Felder löschen damit Scapy diese automatisch neue berechnet.

![image-20210702162130270](fig/image-20210702162130270.png)

`\n\n` noch am Ende des Redirection Strings anfügen

Austausch mit einem credential harvester (LaZagne).

