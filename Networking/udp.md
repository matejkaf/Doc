---
title: UDP
---

User Datagram Protocol

## UDP Header

32 Bit in der Breite

```

                  0      7 8     15 16    23 24    31
                 +--------+--------+--------+--------+
                 |     Source      |   Destination   |
                 |      Port       |      Port       |
                 +--------+--------+--------+--------+
                 |                 |                 |
                 |     Length      |    Checksum     |
                 +--------+--------+--------+--------+
                 |
                 |          data octets ...
                 +---------------- ...

                      User Datagram Header Format
```

Quelle: [RFC768](https://tools.ietf.org/html/rfc768)

