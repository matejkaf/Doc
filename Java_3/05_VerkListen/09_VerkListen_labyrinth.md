---
title: Labyrinth
subtitle: Wegsuche
---

Es soll der Weg durch ein Labyrinth gefunden werden.
Von S nach Z.

```
######
#S   #
# # ##
#  ###
#Z####
######
```


Benötigt wird:

- Pro Feld eine Information ob dieses bereits besucht wurde.
- Ein Speicher für noch zu besuchende Felder (Bag)


Initialisierung:

- Alle Felder auf unbesucht setzen
- Das Feld S in den Bag legen

Wiederholen:

- Nimm ein Feld aus dem Bag (ist der Bag leer so konnte kein Weg gefunden werden)
- Beende falls Ziel erreicht
- Setze Feld auf besucht
- Alle noch nicht besuchten Nachbarknoten in den Bag geben 


**Hinweis:**

Gibt es mehr als einen Weg zu einem Feld so kann es vorkommen, dass ein Feld mehrfach in den Bag gegeben wird. In diesem Fall lässt sich der Algorithmus verbessern indem nach dem herausnehmen aus dem Bag das Feld geprüft wird ob es bereits besucht wurde und falls ja sofort mit dem nächsten Element aus dem Bag fortgesetzt wird.

**Weg:**

Obiger Algorithmus findet heraus ob es überhaupt einen Weg gibt, aber nicht wie dieser aussieht. Um dies zu erreichen wird für jedes Feld gespeichert von welchem anderen Feld aus dieses besucht wurde.
Nach dem erreichen des Ziels kann man von dort aus Rückwärts gehen.

**Verhalten:**

Je nachdem ob der Bag als Stack oder als Queue implementiert wird ergibt sich unterschiedliches Verhalten.

- Stack: Tiefensuche (depth first search)
- Queue: Breitensiche (breadth first search)



---

#### Übung (Labyrinth)

Ein Labyrinth ist gegeben durch ein Array aus Strings. Die Wände werden durch \textsf{\#} markiert. Implementiere die Suche eines Wegs von S nach Z. 
Verwende zuerst einen Stack zum Speichern noch nicht besuchter Felder, dann eine Queue.
Welches Verfahren führt mit den wenigsten Schritten zum Ziel (in diesem Fall)?

---

```c
String = laby[] {
	"#########################", 
	"#S#     # #             #", 
	"# # ### # # # # #########", 
	"#   # #   # # #     #   #", 
	"# # # # ### # ##### # # #", 
	"# #   #     # 	   #   # #", 
	"# ############# ### ### #", 
	"#       #     # #   # # #", 
	"####### # ### # # ### # #", 
	"#       #   # # #     # #", 
	"# ### ##### # ####### ###", 
	"#   #     # # #     #   #", 
	"##### ### # # # ### ### #", 
	"#     #   # # # # # #   #", 
	"# ######### # # # # # # #", 
	"#           # # #     #Z#", 
	"#########################" 
	};
```

---

