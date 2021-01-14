# SYTG 2. JG

-   1h ganze Klasse
    -   Hardware Architekur
    -   Software Architektur
-   1h geteilt (14 tägig geblockt)
    -   Linux Grundlagen



# Plan

- Überblick
  - Allgemeines (Desktop, Embedded, Firmware, Betriebssystem)
  - Grundlegende Systemarchitektur
    - Von Neumann
  - CPU mit Speicher
    - Bus, Adressraum, Speicheradressen, Adressleitungen, Datenleitungen. 16/32/64-bit Adressbus
    - CPU interner Aufbau, Register, ALU, IR, PC
    - Maschinencode
    - Multicore, Multiprozessor-Systeme
  - Memory – Überblick SRAM, SDRAM, ROM, Flash, Cache
    - Cache Hierarchie
  - I/O – Überblick
    - Festplatte, SSD
    - DMA, Interrupts
- Beispiele

  -   Konkrete aktuelle Prozessoren
- Details
  -   CPU
      - Instruction Set, RISC, CISC
      - Moderne Prozessorarchitekturen, Pipelining, Superskalar, ...
  -   SDRAM Details (DDR Familie)
  -   I/O
      -   Modulare Bussysteme (PCIe)
      -   USB
  -   Massenspeicher
      -   Flash Details, SSD
      -   Mechanische Festplatten




# Offen

-   USV
-   RAID
-   BIOS/UEFI
-   Virtualisierung
-   Memory Management



# Material / Sammlung

- [Computer Architecture by Princeton University](https://www.coursera.org/learn/comparch/home/welcome), scheint sich um CPU interne Themen zu handeln
- Allgemein [Neso Academy Videos](https://www.youtube.com/channel/UCQYMhOMi_Cdj1CEAU-fv80A)
    - Video: [Computer System Architecture](https://youtu.be/So9SR3qpWsM), Single/Multi-Processor Systems, Cluster
- Size of **memory page** is architecture and operating system dependant. On an x86 and x86_64 hardware, memory page is equal to **4KB**. On an Intel Itanium (IA64) memory page size is **16KB**. ([Quelle](https://wiki.openvz.org/Memory_page))
- "Computer architecture is a specification describing how hardware and software technologies interact to create a computer platform or system"
- Video: [Lecture 4: Assembly Language & Computer Architecture](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-172-performance-engineering-of-software-systems-fall-2018/lecture-videos/lecture-4-assembly-language-computer-architecture/)
- Video: [Fetch Decode Execute Cycle in more detail](https://www.youtube.com/watch?v=jFDMZpkUWCw)
- fetch-decode-execute pipeline
- Internas für Programmierer
    -   Speichermanagement mit MMU, Speicherschutz (memory protection), Virtueller Speicher, physical address, virtual address, [Virtual address space](https://en.wikipedia.org/wiki/Virtual_address_space)
    -   Programm-Model mit Stack (code segment etc.), das gehört eher in den Betriebssysteme Teil, https://en.wikipedia.org/wiki/Code_segment
- 