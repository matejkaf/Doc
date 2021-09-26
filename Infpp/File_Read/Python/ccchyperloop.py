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
    location = {
        'LocationName':splitted[0],
        'LocationX':int(splitted[1]),
        'LocationY':int(splitted[2])
        }
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
