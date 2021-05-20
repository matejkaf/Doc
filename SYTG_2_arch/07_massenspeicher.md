---
title: Massenspeicher
tags: [lecture, 2AHITS_Teach]
---

Um große Mengen von Daten (Terrabytes) zu speichern.

Abwägung:

- Kosten/MB
- Geschwindigkeit
- Datenmenge
- Lagerfähigkeit



Technologie:

- Festplatte (Harddisk)
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