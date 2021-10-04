# Anonym im Internet

- Proxy

  - Anonymität sicherstellen
  - Client vor Angriffen abschirmen
  - Vor Malware schützen (Scanner im Proxy)
  - Logging (Protokollieren der Kommunikation, z.B. für Firmen, jedoch dann nicht anonym)

- Proxy-Client ⟷ Proxy-Server ⟷ Web-Server

- Proxy - wie man-in-the-middle

- NT: Proxy sieht die ganze Kommunikation, daher End-zu-End Verschlüsselung wichtig.

- Freien Proxy nutzen

  - [](http://www.proxy-listen.de)
  - Header Informationen werden von Web-Proxies durchgereicht (Experiment, 28.12.2020)

- Proxy-Chaining

  - Mehrere Proxy hintereinander
  - fest konfiguriert (Firmen, nicht anonym)
  - HTTP Tunnel (vom Client initiiert)
  - erhöhte anonymität, unter gewissen Umständen
    - Level 1 Proxies
    - Kein Logging in den Proxies
    - Proxies wissen voneinander nicht
    - Proxies in unterschiedliche Ländern
    - End-zu-End Verschlüsselung

- foxyproxy

  - Verwaltungstool
  - Browser Plugin
  - Umschalten zwischen Proxies
  - Patterns: Gewisse Websiten – bestimmte Proxies

- VPN

  - Problem Proxy: Netzwerk auf dem Weg zum Proxy angreifbar (Provider)
  - VPN Tunnel zum Proxy
  - Provider können nicht mitlesen, sehen nur einen (verschlüsselten) VPN Tunnel
  - ![image-20201228165126934](fig/image-20201228165126934.png)
  - Zusätzlicher [DNS Leak](https://en.wikipedia.org/wiki/DNS_leak) Schutz: Anonymizer. DNS Anfragen sollten auch durch den VPN Tunnel gehen, das ist nicht immer automatisch sichergestellt.

- IPsec

  - Netzwerk-Schicht
  - Komplex Konfigurierbar

- OpenVPN

  - auf TLS
  - TCP/UDP
  - Benutzerfreundlich

- SSH

  - kann auch als Tunnelprotokoll eingesetzt werden

- VPN Anbieter

  - Kostenlos: langsam
    - Keine Garantie der Vertrauenswürdigkeit bzw. Protokollierung
  - Kostenpflichtig (5-15 pro Monat)
  - Meist ein VPN Client zu installieren

- VPN Kaskadierung

  - Mögliche Verschleierung:
    ![image-20201228172151101](fig/image-20201228172151101.png)
  - VPNs in Ländern die wenig Informationen ausliefern.
  - SOCK = Proxy Protocol
  - vicSOCK, Victim SOCK, SOCK Proxy, per Malware installiert, kann man mieten
  - ![image-20201228172523163](fig/image-20201228172523163.png)
  - Zielsystem sieht nur die Anfrage einer vertrauenswürdigen (deutschen) IP Adresse (viele Server sperren ganze geogr. Regionen bzw. IP Adressen)

  

  

- Surface Web / Deep Web / Darknet

  - Tor, the onion router, peer-to-peer network, jeder Knoten verschlüsselt gesendete bzw. weitergeleitete Daten, jede Kommunikation läuft über 3 zufällige Knoten (Tor circuit) verschlüsselt (übereinander=Zwiebel), alle 10 Minuten wird gewechselt, 

- Tor Browser

  - [](https://thehiddenwiki.org/), ..., uncensored hidden wiki
  - .onion Adressen

- Tails: Anonymizer Linux Distro, Life System (z.b. vom USB Stick)

  - Jede Kommunikation über Tor
  - Läuft nur im RAM
  - von Edward Snowden verwendet

