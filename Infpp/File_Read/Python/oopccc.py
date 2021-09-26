import math 

inputPath = "2017_level1-eg.txt"

class Location:
    locations=None
    def __init__(self,name,x,y):
        self.name=name
        self.x=x
        self.y=y

    def __str__(self):
        return f"{self.name:25} X:{self.x:7} Y:{self.y:7}"

    @classmethod
    def getLocation(cls, name):
        for location in cls.locations:
            if name==location.name:
                return location
        return None

    @staticmethod
    def distance(loc1, loc2):
        dx = loc1.x-loc2.x
        dy = loc1.y-loc2.y
        return math.sqrt(dx**2 + dy**2)
# END class Location

#
# Einlesen aller Daten
inputFile = open(inputPath,"r") 
NumberOfLocations = int(inputFile.readline())
locations = []
for i in range(NumberOfLocations):
    line=inputFile.readline()
    splitted = line.split()
    location = Location(splitted[0], int(splitted[1]), int(splitted[2]) )
    locations.append(location)
Location.locations=locations
HyperloopLocationNames = inputFile.readline().split()

#
# Ausgabe aller eingelesenen Daten
print(f'NumberOfLocations={NumberOfLocations}')
for location in Location.locations:
    print(location)
print(f'HyperloopLocationNames: {HyperloopLocationNames}')

#
#

loc1 = Location.getLocation(HyperloopLocationNames[0])
loc2 = Location.getLocation(HyperloopLocationNames[1])
print(loc1)
print(loc2)
print( int(round(Location.distance(loc1,loc2) / 250.0 + 200, 0 )) )
