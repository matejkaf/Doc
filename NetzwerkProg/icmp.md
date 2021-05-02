---
title: ICMP
subtitle: 
---

* TOC
{:toc}
[RFC 792 - Internet Control Message Protocol](https://tools.ietf.org/html/rfc792)

Netzwerk-Fehler die IP Pakete betreffen werden mit Hilfe von ICMP Nachrichten gemeldet. ICMP macht IP nicht zuverlässig gibt allerdings Feedback um Netzwerk Probleme erkennen zu können. Aus Sicherheitsgründen ist ICMP manchmal in Netzwerken nicht zulässig.

ICMP Nachrichten werden als IP Pakete gesendet (Protocol: ICMP = 1). 



## ICMP Typen

### Destination Unreachable (Type=3)

```
    0                   1                   2                   3
    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |     Type      |     Code      |          Checksum             |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                             unused                            |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |      Internet Header + 64 bits of Original Data Datagram      |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

```
Internet Header + 64 bits of Data Datagram:
      The internet header plus the first 64 bits of the original
      datagram's data.  This data is used by the host to match the
      message to the appropriate process.  If a higher level protocol
      uses port numbers, they are assumed to be in the first 64 data
      bits of the original datagram's data.
```

```
Code
      0 = net unreachable;
      1 = host unreachable;
      2 = protocol unreachable;
      3 = port unreachable;
      4 = fragmentation needed and DF set;
      5 = source route failed.
```



### Time Exceeded (Type=11)

```
Code
      0 = time to live exceeded in transit;
      1 = fragment reassembly time exceeded.
      
Description
      If the gateway processing a datagram finds the time to live field
      is zero it must discard the datagram.  The gateway may also notify
      the source host via the time exceeded message.

      If a host reassembling a fragmented datagram cannot complete the
      reassembly due to missing fragments within its time limit it
      discards the datagram, and it may send a time exceeded message.

      Code 0 may be received from a gateway.  Code 1 may be received
      from a host.
```

### Echo or Echo Reply (Type=8 – echo message; Type=0 – echo reply)

Wird für Ping verwendet.

```
Description
      The data received in the echo message must be returned in the echo
      reply message.
```

## Zusammenfassung

Es gibt noch weitere ICMP Nachrichten. Übersicht:

```
Summary of Message Types
    0  Echo Reply
    3  Destination Unreachable
    4  Source Quench
    5  Redirect
    8  Echo
   11  Time Exceeded
   12  Parameter Problem
   13  Timestamp
   14  Timestamp Reply
   15  Information Request
   16  Information Reply
```