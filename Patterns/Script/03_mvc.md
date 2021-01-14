---
title: Model View Controler – Design Pattern
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---



# Model View Controler (MVC)

Teilt die Aufgaben eines Designs mit grafischer Benutzeroberfläche auf 3 Komponenten auf:

- **Model** – Das Model ist die zentrale Komponente, es repräsentiert die Funktion der Applikation unabhängig von der Benutzeroberfläche. Das Model speichert auch die Daten der Anwendung. Daten und Logik. (Domain object, Geschäftslogik)
- **View** – Die View kann die im Model enthaltenen Daten darstellen. 
- **Controller** – nimmt die Benutzereingabe entgegen und entscheidet was damit geschehen soll.

MVC ist wahrscheinlich das älteste Design Pattern und in den 70er Jahren im Zusammenhang mit der ersten objektorientierten Programmiersprache **Smalltalk** entstanden. 

In seiner ursprünglichen Form wird es kaum noch verwendet, dazu haben sich die User Interface Systeme zu sehr weiterentwickelt – die Views sind bereits in den GUI Frameworks enthalten. Die **Idee** selbst ist aber sehr wertvoll und es gibt unzählige weitere Patterns die auf MVC aufbauen oder dieses abwandeln, z.B. [Presentation Model](https://martinfowler.com/eaaDev/PresentationModel.html) oder [Model–view–viewmodel](https://en.wikipedia.org/wiki/Model–view–viewmodel).

<img src="fig/mvc.png" alt="Model View Controller" style="zoom:33%;" />


- Das Model hat keine Kenntnis von View oder Controller, kann also **ganz für sich alleine** stehen. Das Model enthält nicht nur die Daten sondern auch die **gesamte Business Logic**. Möglichst das ganze Wissen über die Aufgabenstellung steckt im Model und kann ohne View und Controller wiederverwendet werden (z.B. bei einem Wechsel der Benutzeroberfläche).
- Die View kann eine Referenz auf das Model Objekt verwalten.

Häufig wird das MVC Pattern erweitert durch die Möglichkeit alle Views von einer Veränderung der Daten zu verständigen (siehe **Observer** Pattern). Die Views bekommen dadurch die Möglichkeit des Updates wenn sich im Model etwas geändert hat.

[MVC Beispiel - tutorialspoint](https://www.tutorialspoint.com/design_pattern/mvc_pattern.htm)