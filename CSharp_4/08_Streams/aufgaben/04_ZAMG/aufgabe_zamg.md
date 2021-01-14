# ZAMG Wetterdaten sammeln (Optionales Projekt)

Optionale Zusatzaufgabe. Wird bei der Notenfindung berücksichtigt. Lösung der Aufgabe für ein "sehr gut" in FSST notwendig.



**Hintergrund:**

Über den Link [ZAMG](https://www.zamg.ac.at/cms/de/wetter/wetterwerte-analysen/oberoesterreich) können die Wetterdaten von Wetterstaionen in Oberösterreich eingesehen werden.



**Aufgabe:** 

Schreibe ein C# Konsolenprogramm, dass für Braunau/Ranshofen (oder einer Wetterstation in deiner Nähe) die Werte für Temperatur, Windspitzengeschwindigkeit und Niederschlagsmenge aus dem HTML Code ermittelt. Ebenso soll Datum und Uhrzeit der Daten ermittelt werden.

Die Daten sind in einer Textdatei abzuspeichern – zusätzlich zu denen die sich bereits in der Textdatei befinden. Durch wiederholtes starten des Programms im Laufe eines Tages bzw. über mehrere Tage ergibt sich ein wachsender Datenbestand aus Messwerten und Zeitstempeln in dieser Textdatei.

Sind zum aktuellen Tag mehr als 3 Meßwerte vorhanden so soll der Tagesdurchschnitt errechnet und ausgegeben werden.

Sind Daten für die letzten 3 Tage vorhanden so soll ein 3-Tagesdurchschnitt ermittelt werden.

Das Programm soll beim Starten ausgeben für wie viele Tage Daten vorhanden sind.



**Hinweis:**

Verwende [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime?view=netframework-4.8#properties).



**Abzugeben:** 

1.  Sourcecode (das .cs File)

2.  Screenshot der Ausgabe (nur das Ausgabefenster)

