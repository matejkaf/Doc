
Wintersemester

- Stack (Queue)
- Vererbung, Klassenentwurf
- Polymorphismus, abstrakte Basisklassen und Interfaces
- Textdateien, Streams

Sommersemester

- Netzwerk-Client
- Netzwerk-Server
- Datenbanken Teil I

Jahr 4 — Erweiterungen/Ergänzungen
• Offene Themen aus Jahr 1–3 • HTML, CSS, JavaScript • GUIs • Ausnahmen • Serialisierung • Collection- Framework • Software-Engineering • Sortieren • Threads

# Wiederholung

Klasse für Komplexe Zahlen.

Beispiel Klassenkasse 

# Stack

Wiederholung verkettete Liste. Geheimnisprinzip.

Auswertung arithmetischer Ausdrücke. 

Motivation: wie merkt man sich Zwischenergebnisse für später?


```
(4-(1+(2-1))))
```

Reihenfolge der Auswertung ist wichtig.
Zahlen und Operanden müssen "für später" aufgehoben werden.

Ausdrücke können beliebig lang werden und die Operatoren der Grundrechnungsarten enthalten.
`int`: nur ganze Zahlen.

```
(2+(4+3*(7-(3*(4+(2*3))))))
```

Übungszettel 1: für alle
Übungszettel 2: speziell für die schnelleren


# Vererbung

- Vererbung von Instanzvariablen und Methoden
- Überschreiben von Methoden (super.)
- Vererbungshierarchien
- Konstruktoren (super())
- Klasse Object in Java

Wiederholungsbeispiel:
- Klasse `Rect`, davon die Klasse `Square` ableiten (nicht ganz ideal weil kein Überschreiben notwendig)
- Von der Klasse `Square` die Klasse `Cube` ableiten

Offen: Beschäftigung für schnelle
Eventuell:

- Lesen von [tutorialspoint: Java - Inheritance](https://www.tutorialspoint.com/java/java_inheritance.htm)



# Polymorphismus / Abstrakte Klassen

Shape / Circle / Square

1. Circle und Square getrennt. Flächenberechnung
2. Gemeinsame Basisklasse (Shape). "Gemeinsames herausheben".
3. Basisklasse als Referenzvariable => Polymorphie
4. Abstrakte Basisklasse
5. Beispiel mit Processing?


# Interfaces

- AddTo Beispiel
- Übung: Schulchaos (Sortieren mit Min-Sort)



# Textdateien lesen

Exposé:
- csv Datei erstellen
- Datei öffnen, 2 Zeilen einlesen
- Exceptions vorerst "ignorieren" (mit throw)
- Trennzeichen herausfinden (Kommandozeile, more und hexdump)
- String split verwenden
- Aufgabe: Klasse Schueler, Konstruktor bekommt komplette Zeile übergeben, Klasse soll Vor- / Nachname, Geburtsdatum (als 3 int Werte) und Email Adresse speichern.
- Aufgabe: Email String ermitteln `Max Mustermann <max.mustermann@sinnlos.com>, Eva Musterfrau <eva@gmy.df>`
- Gemeinsam: Methode `isBefore` für Datumsvergleich implementieren.
- Sortieren der ArrayList.
- Sortiere die Schüler nach deren Fehlstunden
- Zusatz: Bedeutung von Exceptions für bearbeiten von Fehlersituationen

Ziel: Klassenliste (4CHELS 2018/19) csv aus dem WebUntis einlesen.

Exceptions mit `throws`


Aus dem WebUntis Klassenliste der 

`Student.txt`

Inhalt in der Kommandozeile anzeigen:

```bash
$ more Student.txt
```

Was ist das Trennzeichen zwischen den Spalten?

```bash
$ hexdump -C -n400 Student.txt
```

400 Zeichen, seitlicher Text.

Das Zeichen `0x09` ist der Tabulator `\t` (Kann man über die 
[Wikipedia Tabelle](https://en.wikipedia.org/wiki/ASCII#Control_characters)
herausfinden)

`line.split("\t")` funktioniert!


# JSON


Übung WebUntis:

- Klassenliste als csv Datei einlesen und anders formatiert ausgeben.
- Nach Geburtsdatum sortieren
- Mit Fehlstunden kombinieren
- Eingelesene Klassenliste im JSON Format ausgeben

- Klassenliste im JSON Format einlesen



# Client / Server Programmierung

Einfachen Webserver mit NodeJS / express erstellen.
HTML Seite erstellen.

Einfachen Web-Cient in Java erstellen.

Idee: Datenbestand aus dem Web-Untis im Server

