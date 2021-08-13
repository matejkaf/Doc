---
title: Massenspeicher
subtitle: HDD, SSD, Magnetbänder, Optische Laufwerke
tags: [lecture, 2AHITS_Teach]
---

Um große Mengen von Daten (Terrabytes) zu speichern.

Abwägung:

- Kosten/MB
- Geschwindigkeit
- Datenmenge
- Lebensdauer / Lagerfähigkeit



Technologie:

- HDD (Harddisk, Festplatte)
- Flash
  - SSD (Solid State Disk)
  - Speicherkarten (Kameras), USB-Stick
- Magnet-Bänder (Backup)
- Optische Medien (CD, DVD, Blue-Ray)



Anschlussarten:

- Intern (SATA, SAS, M.2)
- Extern (USB)



# Festplatte (HDD)

Sich drehende feste Scheiben, sind magnetisch beschichtet. Ein Schreib-Lesekopf greift die Daten ab. Sind  in einem Gehäuse fest verbaut (HDD – Hard Disk Drive). 

[wikipedia de](https://de.wikipedia.org/wiki/Festplattenlaufwerk)

![img](fig/1024px-Seagate_ST33232A_hard_disk_inner_view.jpg)



Vorteile:

- Große Datenmengen (**16 TB**) auf kompaktem Raum
- Kostengünstig pro MB

Nachteile:

- Mechanik – bewegte Teile
  - Laut
  - Empfindlich bei Erschütterung (Laptops!)
  - Abnutzung
    - Kaputte Sektoren
    - Headcrash
    - begrenzte Lebensdauer
- Vergleichsweise (zu SSD) langsam

Technische Daten:

- **Formfaktor** (ca. ⌀ der Scheiben): 2,5" (für Laptop) vs. 3,5"

- Drehzahl 5400 oder 7200 min⁻¹ (auch 15000 im Serverbereich) – bestimmt die **Datenrate**
  - Beispiel: Western Digital WD6003FZBX 7200 min⁻¹: 201 MB/s [[Quelle](https://de.wikipedia.org/wiki/Festplattenlaufwerk#Geschwindigkeit)]
- **Latenz**: 5-15ms mittlere Zugriffszeit (Positionierung des Schreib-Lesekopfs + Warten auf die Daten), 

Daten werden in Tracks und darin in Sektoren (meist 512 Bytes) gespeichert.

- [How a Hard Disk Drive Works](https://youtu.be/NtPc0jI21i0)

- [Take a look inside a hard drive while it's running](https://youtu.be/p-JJp-oLx58)



# SSD

[wikipedia](https://en.wikipedia.org/wiki/Solid-state_drive)

Solid State Disk, verwenden Halbleiter Technologie (meist NAND-Flash), enthält keine bewegten Teile.

Im Vergleich zu HDD: schneller (ca. 10x Datendurchsatz), kürzere Zugriffszeit (x100), kleinere Bauform, geringerer Stromverbrauch, unempfindlich gegen Erschütterung, geräuschlos.

- Datenrate – [[geizhals](https://geizhals.at/western-digital-wd-black-sn750-nvme-ssd-250gb-wds250g3x0c-00sjg0-wdbrpg2500anc-wrsn-a1969729.html?hloc=at)] Western Digital NVMe SSD 250GB, M.2 (WDS250G3X0C) **Lesen: 3100MB/s, Schreiben: 1600MB/s**
- Latenz: <0,1 ms
- Aktuell max: ca. **2 TB**



Nachteile:

- teuer – pro Megabyte
- begrenzt Lagerfähig, Datenverlust nach ca. einem Jahr
- Flash wird in Blöcken gelöscht und wiederbeschrieben. Dies nutzt die Blöcke ab. 10.000-100.000 sind aktuelle Herstellerangaben. Untersuchungen legen nahe, dass SSD Festplatten trotzdem 10 Jahre Einsatz aushalten.

[wikipedia : Gegenüberstellung HDD vs. SSD](https://en.wikipedia.org/wiki/Solid-state_drive#Hard_disk_drives)



# RAID

**Redundant Array of Independent Disks**

Fehlertoleranz / *fault tolerance*: Kein Datenverlust wenn eine Festplatte kaputt geht – durch mehrere, zusammengeschaltete Festplatten.

Standard Level (der RAID Level sagt nichts über die Anzahl der Festplatten aus):

- RAID 0: Kein Ausfallschutz nur mehr Speicher und Performance

  <img src="fig/390px-RAID_0.svg.png" alt="img" style="zoom:33%;" />

- RAID 1: mindestens 2 Platten (meist genau 2), Daten werden gespiegelt, höhere Read-Performance, gleiche Write Performance, alle bis auf eine Platte dürfen ausfallen

  <img src="fig/390px-RAID_1.svg.png" alt="img" style="zoom:33%;" />
  
- RAID 2, 3 und 4 selten bis gar nicht verwendet

- RAID 5: höhere Read-Performance, gleiche Write Performance. Bessere Speichernutzung als RAID 1. Daten werden auf mehrere Platten verteilt. Daten auf einer Platte können von zusätzlichen Daten (parity) die auf die anderen Platten verteilt sind wiederhergestellt werden. Mindestens 3 Festplatten. Parity benötigt ein Platte, d.h. bei 5 Platten wird ein fünftel für Parity verwendet. Eine Festplatte darf ausfallen.

  <img src="fig/800px-RAID_5.svg.png" alt="img" style="zoom:33%;" />

- RAID 6: Wie RAID 5 nur wird doppelt so viel parity gespeichert. Mindestens 4 Festplatten, 2 dürfen ausfallen. Parity benötigt zwei Platten, d.h. bei 5 Platten werden zwei fünftel für Parity verwendet. 

  <img src="fig/1024px-RAID_6.svg.png" alt="img" style="zoom:33%;" />

Hybrid: 

- RAID 10 (auch RAID 1+0) ist RAID 0 kombiniert mit RAID 1. Read and write performance ist erhöht, jedoch steht nur der halbe Platz zur Verfügung (wie bei RAID 1). Mindestens 4 Platten. Gut für Anwendungen die hohe in-/out Datenraten erfordern bei gleichzeitiger Ausfallsicherheit (z.B. Datenbanken)

  <img src="fig/768px-RAID_10_01.svg.png" alt="img" style="zoom:33%;" />

[Seagate RAID Capacity Calculator](https://www.seagate.com/gb/en/internal-hard-drives/raid-calculator/)

[wikipedia RAID](https://en.wikipedia.org/wiki/RAID)

[YouTube: What is RAID 0, 1, 5, & 10?](https://youtu.be/U-OCdTeZLac)



# Bänder (Tape)

Für den professionellen Bereich.

Prinzip: Magnetband, zu einer Rolle augewickeltes Kunststoffband magnetisch beschichtet.

Anwendung

- Datensicherung (Backup and Restore)
  - Desaster Recovery
  - Schutz gegen Ransomware Angriff (WORM Medien!)

- Archivierung
  - gesetzliche Vorschriften
  - revisionssichere Archivierung (WORM)

Vorteile:

- Kompakteste Form der Datenspeicherung
- Lagerfähigkeit (Jahrzehnte)

Nachteile:

- Zugriffszeit (Spulvorgang)
- Empfindlich gegen Magnetfelder



## LTO – Linear Tape Open

Standard (HP, IBM, Quantum): [wikipedia – LTO Linear Tape-Open](https://en.wikipedia.org/wiki/Linear_Tape-Open)

Austauschbare Medien, "cartridge": Einloch-Kasette, die zweite Wickelrolle ist im Gerät.

![img](fig/1024px-LTO2-cart-purple.jpg)

![img](fig/LTO2-cart-wo-top-shell.jpg)

Für Backups

- Aktuell LTO 8, **12 TB** pro cartridge (unkomprimiert), ca. €90,- (2021)
- Kompression 2,5:1 (advertised, 12TB=30TB komprimiert)
- Verschlüsselung möglich
- 15-30 Jahre lagerfähig, 200-300 mal beschreibbar.
- Typische Zugriffszeit 50 Sekunden (variiert)
- Spezielle WORM (write once read many) cartridges verfügbar
- Es gibt Laufwerke die die Bänder automatisch wechseln (backup rotation)



# Optische Laufwerke

Eher bedeutungslos geworden. Aktuell Blue-Ray (BD) max. 100GB Kapazität. Hätte den Vorteil der Immunität gegen Magnetfelder.