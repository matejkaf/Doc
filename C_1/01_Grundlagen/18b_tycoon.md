---
title: Der Würstl Tycoon
subtitle: Ein Spiel
tags: [assignment,C_1,1CHELS]
---

#### Übung (Würstl Tycoon)
Stell dir vor, du hast soeben ein **Würstelstandl** gepachtet. Die Aufgabe ist ein Spiel zu programmieren, das den Geschäftsablauf Tag für Tag simuliert (=nachspielt). Das folgende Programm berechnet eine zufälligen Nachfrage nach Würstel pro Tag und gibt diese am Bildschirm aus.

Aufgabe: Kopiere den Code in ein eigenes Programm und probiere es aus.

```c
int nachfrage = 0;
int nachfrageMax = 50;  // maximal = größtmöglich
char taste='j';

srand(time(NULL));

while(taste == 'j') 
{
  printf("### Würstel - Tycoon ###\n");

  nachfrage = rand() % (nachfrageMax+1); // 0..nachfrageMax
  printf("Nachfrage = %d\n", nachfrage);

  printf("Nochmals? (j/n)\n");
  scanf("%c%*c", &taste);
}
```


---

#### Übung (Einnahmen und Ausgaben)
Ergänze das Programm um die folgenden Variablen:

```c
double vpreis = 2.0;	// Verkaufspreis für 1 Würstel
double epreis = 0.9;  // Einkaufspreis für 1 Würstel
double einnahmen;
double ausgaben;
```
Berechne die Einnahmen und die Ausgaben im Programm, weise die Ergebnisse den Variablen zu und gib die Werte aus.

Berücksichtige, dass du immer auf die maximale Nachfrage vorbereitet sein musst (d.h. es werden immer `nachfrageMax` Würstel eingekauft es werden aber kaum alle verkauft werden können).

---

#### Übung (Konto)
Du beginnst mit einem Startkapital von EUR 200.

```c
double konto = 200;      // Startkapital
```
Berechne den neuen Kontostand nach jedem Tag (=ein Schleifendurchlauf) indem du zum Kapital die Einnahmen hinzuzählst und die Ausgaben abziehst. Gib den neuen Kontostand aus.

---

#### Übung (Wirbelsturm)

Du befindest dich in einem wunderschönen Land, in dem du obendrein keine Steuern zahlen musst.  Allerdings wird deine Würstelbude immer wieder von Wirbelstürmen heimgesucht. Ein **Wirbelsturm** kommt im Schnitt alle 3 Wochen. Ergebnis: Keine Nachfrage und 50 Euro Reparaturkosten, das Programm meldet: `Oje, ein Wirbelsturm`

Hinweis: Im **Schnitt alle 3 Wochen** bedeutet einmal in 21 Tagen. Dies soll zufällig passieren, d.h. an jedem Tag besteht eine Chance von 1:21, dass das Ereignis eintritt. Im Programm erstellt man dafür für jeden Tag eine neue Zufallszahl im Bereich 0–20 (21 Zahlen). Da jede Zahl gleich wahrscheinlich ist und jedes Mal eine andere Zufallszahl erstellt wird, kann im Programm immer auf einen fixen Wert (z.B. 0) abgefragt werden. Stimmen zufällige Zahl und fixer Wert überein so ist das Ereignis für diesen Tag eingetreten.


```c
printf(" ***********************************\n");
printf(" * TORNDADO :-(                    *\n");
printf(" ***********************************\n");
printf(" *     ###**++--____+#             *\n");
printf(" *      ##**++--____+#             *\n");
printf(" *       ##**++--__+#              *\n");
printf(" *           ##**+-_+#        |>   *\n");
printf(" *             #*+-_+#    ____|__  *\n");
printf(" *               #*++#   /_______\\ *\n");
printf(" *              #*+#     |[_____]| *\n");
printf(" *              ##       |       | *\n");
printf(" ***********************************\n");
printf(" * Keine Nachfrage                 *\n");
printf(" * Reparaturkosten: EUR 50,-       *\n");
printf(" ***********************************\n\n");
```

---

#### Übung (Bauoption – Vordach)

Diese Erweiterung steht ab 400 Euro oder mehr am Konto zur Verfügung. Das Vordach kostet einmalig 150 Euro. Die Kunden sind gegen Sonne und Regen geschützt, das eröht die Nachfrage um 50%. Ein Vordach kann nur einmal gebaut werden und wirkt sich ab dem folgenden Tag aus. 

**Beachte:** Die höhere Nachfrage kann dazu führen, dass mehr als 50 (`nachfrageMax`) Würstel eingekauft werden müssen. Ist ein Vordach schon gekauft dann soll diese nicht mehr als Bauoption angezeigt werden.

Speichere die Information ob ein Vordach gekauft wurde in einer Variable.

```c
int vordach = 0; // auf 1 wenn gekauft
```

---

#### Übung (Bauoption – Werbeplakat)

Ab 500 Euro am Konto kann ein Werbeplakat gebucht werden. Ein Plakat kostet einmalig EUR 100 und EUR 10 Miete für jeden Tag. Es erhöht die Nachfrage um 50%. Es kann mehrere Plakate geben, pro Tag kann aber nur ein weiteres Plakat gekauft werden.

```c
int plakate = 0; // Anzahl der gemieteten Werbeplakate
```

---

#### Übung (Los Metallichaos)

Leider gibt es eine Jugendbande (es sind die Los Metallichaos – in deinem Land gibt es keine HTL). Die **Los Metallichaos** schlagen im Schnitt alle 4 Wochen zu. Ergebnis: 50% deines Kontos werden geraubt, das Programm meldet:
`Uups, die Los Metallichaos waren da`

---

#### Übung (Bauoption – Miniküche)

Ab 800 Euro am Konto ist es möglich auf eine Miniküche aufzurüsten. EUR 250 Einmalzahlung, Betriebskosten EUR 20 laufend pro Tag. Du verkaufst dann Grillwürstel mit Pommes und Salat. Verkaufspreis: EUR 5, Einkaufspreis: EUR 2.  Eine Miniküche kann nur einmal gekauft werden und wirkt sich ab dem folgenden Tag aus.

```c
int kueche = 0; // auf 1 wenn gekauft
```


---

#### Übung (Übersicht am Ende)

Am Ende, bevor das Programm endgültig aussteigt, zeigt es noch eine Übersicht. Zum Beispiel:

```
Kontostand:     720 Euro
Wirbelstürme:   3  Reparatur: 150 Euro
Überfälle:      2  Geraubt:   320 Euro
Vordächer:      1  Kosten:    150 Euro
Plakate:        2  Kosten:    200 Euro und 20 Euro laufend
Miniküchen:     0  Kosten:      0 Euro und  0 Euro laufend
```

Achte auf eine "schöne" Formatierung der Ausgabe.


---

#### Übung (Weitere Ausbaustufen)

Ideen für Erweiterungsmöglichkeiten:

- Die Frage `Nochmals (j/n)` wird folgendermaßen modifiziert: `printf("\nNochmals ? j/n/c");`. Tippt der Benutzer `c`, dann wird das Würstelstandl die nächsten 5 Tage nicht von dir sondern vom **Computer** betrieben. 
- Die **Los Muchachos** spielen einen Hit nach dem anderen und füllen dir die Kassa.
- Eine **Wirtschaftskrise** legt für einige Tage die Nachfrage lahm, es gibt keine Kredite und daher musst du bei negativem Konto-Stand ohne alle Zubauten und wieder von vorne anfangen.
- Du kannst einen **Security** Dienst anheuern der die Los Metallichaos abschreckt.
Leider ist dieser aber nicht immer erfolgreich.
- Bei einem Kontostand von mehr als EUR 1.000,– könnte die **Mafia** auf dich aufmerksam werden. Das Gute daran: Sie halten dir die Los Metallichaos vom Leib. Der Preis: Die Schutzgelder sind höher als der Schaden durch die Los Metallichaos. Gut du kannst natürlich die Polizei einschalten (das kostet auf deiner Insel natürlich Geld), aber vielleicht ist die korrupt? 
- Es gibt auch den **Fussball-Verein** El Equipo Divino, der einen Sponsor sucht (da spielen übrigens einige der Los Metallichaos mit). 
- Und so weiter und so fort.

---
