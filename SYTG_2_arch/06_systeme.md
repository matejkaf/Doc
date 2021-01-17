---
title: Systemvergleich
description: Gegenüberstellung unterschiedlicher Systeme. Prozessoren. Zukünftige Entwicklung.
---



# Systemvergleich

<img src="fig/Weltweiter Endgeraeteabsatz.jpeg" alt="Weltweiter Endgeraeteabsatz" style="zoom:50%;" />



Computersysteme – grobe Klassifizierung

- Endgeräte
  - Desktop
  - Notebook
  - Tablets
- Server
- Handy
- IoT (RaspberryPi, Überwachungskameras, ...)
- Embedded System (Waschmaschine, Autoelektronik, Industriesysteme)



**Server** Eigenschaften (im Vergleich zu Desktop)

- Ausgelegt auf Dauerbetrieb und lange Lebensdauer. z.B. 100% Last 24/7 über 5 Jahre.
- Hoher Stromverbrauch und aufwändige Kühlung
- Hoher Preis
- Hohe Verfügbarkeit
- Andere Bauform (Rack statt Gehäuse)
- mehrere CPUs (multi-socket)
- mehr Kerne pro CPU (cores)
- Grafik rudimentär oder nicht vorhanden



# Prozessoren – Beispiele

Vergleich von CPU's für unterschiedliche Anwendungen. Stand 2020.

[List of Intel Core i7 microprocessors](https://en.wikipedia.org/wiki/List_of_Intel_Core_i7_microprocessors)

[List of Intel Xeon microprocessors](https://en.wikipedia.org/wiki/List_of_Intel_Xeon_microprocessors)

Flagschiff CPUs 01/2020:

### Desktop

[Core i7-9700KF](https://ark.intel.com/content/www/us/en/ark/compare.html?productIds=190885)

- $374,-
- 14nm
- 8 Cores
- 3,6-4,9 GHz
- 12 MB Cache
- 95W

### Laptop

[Core i7-1060G7](https://ark.intel.com/content/www/us/en/ark/compare.html?productIds=197120)

- $426,-
- 10nm
- 4 Cores
- 1,0-3,8 GHz
- 8 MB Cache
- 9W

### Server

[Intel® Xeon® Platinum 9282 Processor](https://ark.intel.com/content/www/us/en/ark/products/194146/intel-xeon-platinum-9282-processor-77m-cache-2-60-ghz.html)

- ca. $50.000,-
- 14nm
- 56 Cores
- 2,6-3,8 GHz
- 77 MB Cache
- 400W





### Speicherkonfiguration

Stark vom Anwendungsfall abhängig. Faustregeln

- Laptop/Desktop: 8/16 GB
- Server: 64/128 GB oder mehr



### Weitere CPU's

Für mobile Anwendungen (Handy / Android Systeme) – Samsung, Galaxy S10 5G, **1.9GHz octa-core Samsung Exynos 9820** processor. 8nm. Ca. 0,5 W bei Halblast.  [ARM Cortex®-A55](https://en.wikipedia.org/wiki/ARM_Cortex-A55). 6GB RAM

IoT – Raspberry Pi 4: **Broadcom BCM2711**, Quad core Cortex-A72 (ARM v8) 64-bit SoC **1.5GHz**, 28nm. <1W. RAM: 2, 4, oder 8GB

Mikrocontroller (Embedded Systeme) – [**dsPIC33CH128MP202**](https://www.microchip.com/wwwproducts/en/dsPIC33CH128MP202), 128kB Flash, 20kB RAM, Dual Core, 16 Bit, **200 MHz**, Leistungsaufnahme typischer µC: 1mW-200mW



# Trends

**Moore's Law** (Intel, 1975): Die Anzahl der Transistoren pro IC verdoppelt sich alle 2 Jahre, bzw. wächst um 40% in einem Jahr.

- 1972, Intel 8008 (200kHz): 3500 Transistoren
- 2019, Intel 56-Core Xeon Platinum 9282 (2,6GHz): 8 Mrd. Transistoren
- 47 Jahre bei 40%: Faktor 1,4^47 = 7,4 Mio.

Strukturen am IC werden immer kleiner: Aktuell beste Technologie: 5nm ([wikipedia](https://en.wikipedia.org/wiki/5_nm_process)).
Si Atomdurchmesser: ca. 0.2 nm

Aktuelle Schätzwerte für Wachstum:

- Prozessoren
  - 30% mehr Komponenten pro Jahr
  - Alle 1,5 Jahre: Verdopplung der Geschwindigkeit
  - Taktfrequenz stagniert seit >10 Jahren, stattdessen Multi-Core und Architekturverbesserungen.
  
- Speicher
  - 60% mehr Kapazität pro Jahr
- Festplatten
  - 60% mehr Kapazität pro Jahr
- Kosten
  - 25% weniger pro Jahr


