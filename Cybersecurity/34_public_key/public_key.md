# Public-key cryptography

symmetrische chiffre = Sender und Empfänger haben den gleichen Schlüssel. Dass dieser doppelt vorhanden ist und ausgetauscht werden muss stellen zwei Risikofaktoren dar.

**Public-key cryptography** ist eine innovative Idee aus den 1970er Jahren, RSA Verfahren (Rivest-Shamir-Adleman).
Dabei gibt es 2 Schlüssel:

- einen geheimen **private key** der nicht weitergegeben wird und
- einen öffentlichen **public key** der ohne Einschränkung verbreitet werden kann.


Anwendung:

- *symmetric key* transport (*key exchange*)
- *digital signature*
- *encryption* (selten da sehr rechenaufwändig)




# Encryption

Ablauf: Alice will an Bob eine verschlüsselte Nachricht schicken.

- Bob berechnet aus großen Primzahlen 2 Schlüssel (**public key** und **private key**). Der public key wird öffentlich zugänglich gemacht der private key geheim gehalten.
- Alice nimmt Bobs public key, **verschlüsselt** die Nachricht damit und schickt sie an Bob.
- Bob verwendet seinen private key um die Nachricht zu **entschlüsseln**.
- **Eve** die die Nachricht abhört kann die Nachricht ohne den private key nicht entschlüsseln. Eve hat Zugang zum public key, aber mit diesem kann nicht entschlüsselt werden.



![](img/public.jpg)



Für Kommunikation in **umgekehrter Richtung** (Bob an Alice) muss Alice ein public/private Schlüsselpaar erzeugen.

Der Rechenauwand ist extrem da die Schlüssel sind sehr groß sind (4096 Bits). Daher wird in der Praxis Alice einen **shared secret key** generieren und schickt diesen mit dem public key verschlüsselt an Bob.  Bob und Alice verwenden eine stream- oder block-cipher für die weitere Kommunikation.



# Material

- Video?

