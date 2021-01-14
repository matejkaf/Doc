---
title: ARP Cache Poisoning
cmds: ['md_html.bash']
---





# Wiederholung ARP

Jeder Host eines Ethenet Subnets hat eine konfigurierte IP Adresse (4 Byte) und eine fix programmierte MAC Adresse (6 Byte). Damit eine Nachricht zum Ziel findet ist die MAC Adresse notwendig. Es ist aber nur die IP Adresse bekannt.

Das ARP – **Address Resolution Protocol** – ermittelt die MAC Adresse aufgrund der IP Adresse.

- ARP Request (broadcast) von 192.168.1.5 an alle ("wer von euch hat die IP Adresse 192.168.1.7")
- ARP Reply (unicast) Angesprochener Host ("ich und ich habe MAC Adresse A1:A1:A1:A1:A1:A1"). Alle gelernten MAC Adressen werden im ARP cache gespeichert.
- Um das zu Beschleunigen: neues Gerät im Netzwerk kann ein gratuitous (de: grundlos) ARP Reply als broadcast schicken. Damit lernen alle Hosts die das empfangen die MAC und IP Adresse dieses Geräts.



![image-20200730101758302](fig/arp01.png)

![image-20200730101821876](fig/arp02.png)



# ARP Cache Poisoning

Ein Angreifer schickt einen gefälschten (**spoofed**) gratuitous ARP Reply um sich in die Kommunikation zwischen einem Host und dem Default Gateway hineinzuschwindeln (MITM = man in the middle attack). Damit kann der Angreifer den gesamten Datentransfer mithören (passiver Angriff) und auch manipulieren (aktiver Angriff).

Beispiel PC-A schickt ARP Request an das Default Gateway (R1)

![image-20200730102034207](fig/arp_poisoning01.png)

R1 lernt die MAC Adresse von PC-A und schickt einen ARP Reply an PC-A zurück, dieser lernt dadurch die MAC Adresse von R1.

![image-20200730102147000](fig/arp_poisoning02.png)

Ein Angreifer schickt nun **2 spoofed gratuitous ARP Replies** mit gefälschten IP Adressen (von PC-A und R1) aber der eigenen MAC Adresse. Das überschreibt die ARP cache Einträge in PC-A und R1.

![image-20200730102253555](fig/arp_poisoning03.png)

Will nun PC-A über R1 kommunizieren so geht die Kommunikation an den Computer des Angreifers. Dasselbe passiert mit der Kommunikation von R1 zu PC-A. Der Angreifer kann daher alle Daten lesen und unter Umständen auch manipulieren. Man nennt diese einen **man in the middle attack**.

Verteidigung: In der Netwerkinfrastruktur (Switch) werden verdächtige ARP requests gemeldet bzw. geblockt.

 
