---
title: TCP
subtitle: Details
---

## TCP Header

32 Bit in der Breite

```
    TCP Header Format
    0                   1                   2                   3
    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |          Source Port          |       Destination Port        |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                        Sequence Number                        |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Acknowledgment Number                      |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |  Data |           |U|A|P|R|S|F|                               |
   | Offset| Reserved  |R|C|S|S|Y|I|            Window             |
   |       |           |G|K|H|T|N|N|                               |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |           Checksum            |         Urgent Pointer        |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Options                    |    Padding    |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                             data                              |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          Note that one tick mark represents one bit position.
```

Quelle: [RFC793](https://tools.ietf.org/html/rfc793)

## Seq und Ack

TCP stellt eine gesicherte full-duplex Datenverbindung her. Dazu müssen Daten vom Empfänger bestätigt werden. Erhält der Sender keine Bestätigung (Timeout) schickt er die Daten noch einmal. Eventuell kann auch die Bestätigung verloren gehen, dann erhält der Empfänger die gleichen Daten noch einmal und muss dies verwerfen.

Um diesen Bestätigungsmechanismus (Positive Acknowledgement with Re-transmission(PAR)) umzusetzen werden die gesendeten Datenbyes durchnummeriert (=sequence number, seq). Die sequence number wird im Empfänger verwendet um die Daten wieder in die richtige Reihenfolge zu bringen und evtl. Lücken zu erkennen.

Der Empfänger schickt in der Rückantwort eine  Acknowledgment Number (ack) diese ist die sequence number des letzten empfangenen Bytes +1. 

Beispiel: Sender hat seq=1000 und schickt 100 Bytes. In der TCP Nachricht werden diese beiden Informationen übertragen (seq=1000, length=100). Kommt die Nachricht korrekt beim Empfänger an schickt dieser eine TCP Antwort mit ack=1101 zurück und bestätigt damit den Empfang der bisherigen Daten.

Dieser Mechanismus geht in beide Richtungen und beinhaltet diverse Optimierungen und Flow Control.



## Verbindungsauf- und abbau

Um seq und ack auf beiden Seiten richtig zu starten sind zum Verbindungsaufbau 3 Nachrichten notwendig ([3-way Handshake](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment)):

![Lightbox](fig/TCP-connection-1-20210502145702967.png)

Für eine gesichterte TCP Verbindung muss auf beiden Seiten der Kommunikation einiges an Speicher reserviert und organisiert werden. Es ist daher notwendig das Ende einer Verbindung anzuzeigen, damit diese Speicherbereiche wieder freigegeben werden können.

Schließen der Verbindung durch einen [4-way Handshake](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_termination):

<img src="fig/750px-TCP_CLOSE.svg.png" alt="img" style="zoom:50%;" />

Bedeutung der TCP Flags:

- ACK (1 bit): Indicates that the Acknowledgment field is significant. All packets after the initial SYN packet sent by the client should have this flag set.
- SYN (1 bit): Synchronize sequence numbers. Only the first packet sent from each end should have this flag set. Some other flags and fields change meaning based on this flag, and some are only valid when it is set, and others when it is clear.
- FIN (1 bit): Last packet from sender