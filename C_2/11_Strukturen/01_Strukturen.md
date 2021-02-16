---
title: Doc
cmds: ['md_html.bash']
description: Einführung in C Strukturen
tags: [lecture, 2AHITS, c, structure ]
---

# Strukturen

Eine Struktur ist eine Zusammenfassung mehrerer Variablen.

**Beispiel:**
Menge und Einzelpreis einer gekauften Ware.

```c
struct Einkauf {
    int anzahl; // menge
    double preis; // Einzelpreis
};
```



```c
int main()
{
    Einkauf milch;

    milch.anzahl = 4;
    milch.preis = 1.19;
    
    double gesamt;
    gesamt = milch.anzahl * milch.preis;
}
```

- `struct`: Neuer **Datentyp** (noch kein Speicher!). Dies ist eine Beschreibung wie die Struktur aussieht.
- Davon werden **Variablen** angelegt (Speicher!).
- Diese Struktur-Variablen bestehen aus weiteren Variablen (**Komponenten**).


Durch das Anlegen einer Strukturvariable werden gleichzeitig alle in dieser enthaltenen (Komponenten-) Variablen angelegt.



## Speicher
**Beispiel:** Eingekauft werden 4 Packungen Milch zu je 1,19 und 3 Leberkässemmeln zu je 1,80.
```c
Einkauf milch;
Einkauf lks;

milch.anzahl = 4;
milch.preis = 1.19;

lks.anzahl = 3;
lks.preis = 1.80;
```

Wie dies im Speicher aussieht kann man sich so vorstellen:

![image-20201102100005291](fig/image-20201102100005291.png)



---

**Übung (Ein- und Ausgabe):**
Schreibe ein Programm mit dem 2 Einkäufe eingegeben werden können.
Das Programm soll beide Einkäufe ausgeben (Anzahl und Preis) sowie den Gesamtpreis ausrechnen und ausgeben.



---

**Übung (Funktion für Ausgabe):**

Schreibe eine Funktion `printEinkauf` die Preis, Anzahl und Gesamtpreis ausgibt. Es wird eine Strukturvariable übergeben.

```c
void printEinkauf(Einkauf e)
{
	// TODO   
}
```



---

**Übung (Warenbezeichnung):**
Neu: auch die Produktbezeichnung berücksichtigen (Siehe Code). Eingabe für e1,e2,e3 im Hauptprogramm. Ausgabe mittels printEinkauf.

```c
struct Einkauf 
{
  int anzahl;
  double preis;
  char bezeichnung[50]; // <-- !!! neu
};

void printEinkauf(Einkauf e)
{

}

void main()
{
  Einkauf e1;
  Einkauf e2;
  Einkauf e3;
}
```



---



## Arrays von Strukturvariablen

```c
Einkauf korb[3];
```
```c
korb[0].anzahl = 1;
korb[0].preis = 3.99;
...
korb[2].preis = 2.79;
```

![image-20201102100259266](fig/image-20201102100259266.png)



---
**Übung (Einkaufskorb):**
Schreibe ein Programm zur Verwaltung eines Einkaufkorbs. Der Korb enthält genau 7 Waren. Schreibe eine Eingabe für alle 7 Waren

Am Ende des Programms soll der gesamte Inhalte des Einkaufkorbs in übersichtlicher Weise dargestellt werden. Denke dabei an einen Kassenbon:

![image-20201102100259266](fig/kassenbon.jpg)




---

**Übung (Einkaufskorb II):**
Ergänze:

- Man soll auch weniger als 7 Stück in den Einkaufskorb legen können.

- 
Ermittle die teuerste Ware (Anzahl * Preis).
- Ergänze eine Strukturvariable (`int`) für die Warengruppe. Es gibt folgende Gruppen:
	
	- 1 – Obst
	- 2 – Getränke
	- 3 – Nahrungsmittel
	- 4 – Süßwaren
	
	Berücksichtige die Warengruppe bei der Ein- und Ausgabe. 
	
- Gib am Ende die Preis-Summe pro Warengruppe aus.

---





 
