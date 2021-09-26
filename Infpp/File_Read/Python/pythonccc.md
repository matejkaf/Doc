---
title: Daten aus Textdateien lesen in Python
---

Dieses Dokument beschreibt wie ein Level des CCC mit Hilfe von Python gelöst werden kann.

# Hyperloop

Das hier betrachtete Beispiel "Hyperloop" stammt aus dem CCC 2017 – siehe [2017_level1.pdf](./2017_level1.pdf) für die Level Beschreibung.

Das Input File [`2017_level1-eg.txt`](./2017_level1-eg.txt) sieht folgenermaßen aus:

```
5
Prague 0 286100
Brno 152440 194430
Vienna 126350 78010
Bratislava 183680 71710
Budapest 318860 0
Bratislava Brno

```

Auszug aus der Level Beschreibung erklärt wie diese Daten zu verstehen sind:

```
Coordinates are given as integers.

Input
A text file consisting of the following lines:

Single line: <NumberOfLocations>
NumberOfLocations lines: <LocationName> <LocationX> <LocationY> 
Single line: <HyperloopLocationName> <HyperloopLocationName>

Output
Single line: <TravelTime>
```

# Einlesen der Daten

Zuerst müssen die Input Daten aus der Datei gelesen werden. Folgendes Programm liest die erste Zeile aus der Datei und gibt diese am Bildschirm aus:

```python
inputPath = "2017_level1-1.txt"
inputFile = open(inputPath,"r") 
line = inputFile.readline()
print(line)
inputFile.close()
```

Alle Zeilen lesen und ausgeben:

```python
inputPath = "2017_level1-1.txt"
inputFile = open(inputPath,"r") 
for line in inputFile:
    print(line)
inputFile.close()
```

Damit sind die ersten Experiment beendet und man kann daran gehen die Daten so einzulesen, dass sie später im Programm verwendet werden können. Lesen des ersten Werts `NumberOfLocations` im Input File:

```python
inputPath = "2017_level1-1.txt"
inputFile = open(inputPath,"r") 
NumberOfLocations = int(inputFile.readline())
print(f'NumberOfLocations: {NumberOfLocations}')
```

- Die Funktion `int()` wandelt den gelesenen String in eine Zahl. Diese Zahl ist die Anzahl der Hyperloop Locations. In der Input Datei kommt nachfolgend je eine Zeile pro Location mit deren Namen und den x und z Koordinaten.
- Das `print(f'')` verwendet String interpolation (`f` vor dem String), dabei kann in `{}` jeder Python Ausdruck mit Text gemischt werden – sehr praktisch.

Alle Location Zeilen lesen:
```python
for i in range(NumberOfLocations):
    line=inputFile.readline()
    print(line)
```

Jede Zeile, z.B. `Dornbirn 937604 5255988` ist ein String mit den 3 Daten die durch ein Leerzeichen voneinander getrennt sind. Mit `split()` wird daraus ein Array aus 3 Strings.

```python
for i in range(NumberOfLocations):
    line=inputFile.readline()
    splitted = line.split() # -> Array
    print(splitted)
```

Ausgabe:

```
...
['Dornbirn', '937604', '5255988']
...
```

Umkopieren in konkrete Variablen mit passendem Datentyp:

```python
for i in range(NumberOfLocations):
    line=inputFile.readline()
    splitted = line.split()
    LocationName=splitted[0] # bleibt String
    LocationX=int(splitted[1])
    LocationY=int(splitted[2])
    print(f'LocationName: {LocationName}, LocationX: {LocationX}, LocationY: {LocationY}')
```

Ausgabe:
```
LocationName: Dornbirn, LocationX: 937604, LocationY: 5255988
```

Da die 3 Daten zusammengehören ist ein Dictionary eine passende Wahl:

```python
for i in range(NumberOfLocations):
    line=inputFile.readline()
    splitted = line.split()
    location = {'LocationName':splitted[0],'LocationX':int(splitted[1]),'LocationY':int(splitted[2])}
    print(f"name:{location['LocationName']} X:{location['LocationX']} Y:{location['LocationY']}")
```

Speichern der Daten aller Zeilen in einem Array:

```python
locations = []
for i in range(NumberOfLocations):
    line=inputFile.readline()
    splitted = line.split()
    location = {
        'LocationName':splitted[0],
        'LocationX':int(splitted[1]),
        'LocationY':int(splitted[2])
        }
locations.append(location)
print(locations)
```

Lesen der Letzten Zeile aus den Input Daten – enthält Namen der Stationen. Einlesen als Array von Strings

```python
HyperloopLocationNames = inputFile.readline().split()
print(HyperloopLocationNames)
```

Zum Test geben wir alle Daten am Ende nochmals aus:

```python
print(f'NumberOfLocations={NumberOfLocations}')
for location in locations:
    print(f"name:{location['LocationName']:25} X:{location['LocationX']:7} Y:{location['LocationY']:7}")
print(f'HyperloopLocationNames: {HyperloopLocationNames}')
```

Die Zahlen hinter dem Doppelpunkt (in `print`) sind Feldbreiten zur formatierung der Ausgabe.

# Komplettes Skript für Hyperloop Daten lesen

```python
inputFile = open(inputPath,"r") 
NumberOfLocations = int(inputFile.readline())
locations = []
for i in range(NumberOfLocations):
    line=inputFile.readline()
    splitted = line.split()
    location = {'LocationName':splitted[0],'LocationX':int(splitted[1]),'LocationY':int(splitted[2])}
    locations.append(location)
HyperloopLocationNames = inputFile.readline().split()

# Ausgabe aller eingelesenen Daten
print(f'NumberOfLocations={NumberOfLocations}')
for location in locations:
    print(f"name:{location['LocationName']:25} X:{location['LocationX']:7} Y:{location['LocationY']:7}")
print(f'HyperloopLocationNames: {HyperloopLocationNames}')
```

# Lösung der Level Aufgabe

Es ist die Reisedauer zwischen den Stationen zu ermitteln die in der letzten Zeile des Input Files gelesen wurden – stehen im Array `HyperloopLocationNames`. Dazu ist die Distanz zwischen den Stationen zu ermitteln, was deren x und y Koordinaten erfordert und den Pythagoras.

Zuerst sind die x und y Koordinaten einer Station zu ermitteln wenn man deren Namen kennt. Wir werden das vielleicht in späteren Levels öfters brauchen daher entwickeln wir für diesen Zweck eine Funktion:

```python
def getLocation(locations, name):
    for location in locations:
        if name==location['LocationName']:
            return location
    return Null

print(getLocation(locations, HyperloopLocationNames[0]))
print(getLocation(locations, HyperloopLocationNames[1]))
```

Die Distanz zwischen 2 Locations auszurechnen wird ebenfalls Aufgabe einer Funktion:

```python
import math 
def distance(loc1, loc2):
    dx = loc1['LocationX']-loc2['LocationX']
    dy = loc1['LocationY']-loc2['LocationY']
    return math.sqrt(dx**2 + dy**2)

dst = distance(getLocation(locations, HyperloopLocationNames[0]),getLocation(locations, HyperloopLocationNames[1]))
print(dst)
```

Daraus ist es dann leicht die eigentliche Reisedauer zu berechnen, diese auf Null Kommastellen zu runden (`round()` Funktion) und nach Integer zu wandeln.

Die Ausgabe der letzten `print()` Funktion ist die Lösung des Levels.

```python
print( dst / 250.0 + 200 )
print( int(round(dst / 250.0 + 200, 0 )) )
```

# Komplettes Python Script

```python
import math 

inputPath = "2017_level1-eg.txt"

#
# Einlesen aller Daten
inputFile = open(inputPath,"r") 
NumberOfLocations = int(inputFile.readline())
locations = []
for i in range(NumberOfLocations):
    line=inputFile.readline()
    splitted = line.split()
    location = {'LocationName':splitted[0],'LocationX':int(splitted[1]),'LocationY':int(splitted[2])}
    locations.append(location)
HyperloopLocationNames = inputFile.readline().split()

#
# Ausgabe aller eingelesenen Daten
print(f'NumberOfLocations={NumberOfLocations}')
for location in locations:
    print(f"name:{location['LocationName']:25} X:{location['LocationX']:7} Y:{location['LocationY']:7}")
print(f'HyperloopLocationNames: {HyperloopLocationNames}')

#
# Hilfsfunktionen
def getLocation(locations, name):
    for location in locations:
        if name==location['LocationName']:
            return location
    return Null

def distance(loc1, loc2):
    dx = loc1['LocationX']-loc2['LocationX']
    dy = loc1['LocationY']-loc2['LocationY']
    return math.sqrt(dx**2 + dy**2)

#
# Lösung für den Level 1
dst = distance(getLocation(locations, HyperloopLocationNames[0]),getLocation(locations, HyperloopLocationNames[1]))
print( int(round(dst / 250.0 + 200, 0 )) )
```



# Source Code

- [`ccchyperloop.py`](./ccchyperloop.py)
- [`oopccc.py`](./oopccc.py)

