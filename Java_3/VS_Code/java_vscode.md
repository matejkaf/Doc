# Java mit VS Code



## Allgemein

https://code.visualstudio.com/docs/languages/java 

Auf der Seite kann man ein Coding Pack (VS Code + JDK) Downloaden (für Zuhause praktisch)



## Windows

Beschreibung wenn das JDK nicht "normal" installiert werden kann (z.B. fehlende Admin Rechte)

OpenJDK [download](http://jdk.java.net/15/ ) der aktuellsten Version

Entpacken z.B. nach `C:\Users\matejkafr\Documents\jdk-15.0.2`

In VS Code ein .java File erstellen und die Extension: Java Extension Pack installieren

Fehlermeldung “Fehlendes JDK” ignorieren 

Settings mit Strg-, öffnen, `java.home` suchen, Edit in settings.json anwählen

Für `java.home` den kompletten Pfad angeben

```
{ 
  "editor.suggestSelection": "first", 
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue", 
  "java.home": "C:\\Users\\matejkafr\\Documents\\jdk-15.0.2", 
} 
```

Settings.json Pfad mit `\\` 

Probleme: 

- Unter Windows scheint QuickFix nicht zu funktionieren 



## macOS 

JSON settings (Cmd-,)

`java.home`: "/Users/matejkafr/Documents/Htl/lib/jdk-15.0.2.jdk/Contents/Home", 

