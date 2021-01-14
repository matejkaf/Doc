# Server

Das Ziel ist einen einfachen Web-Server zu implementieren. Wir verwenden dazu NodeJS.

NodeJS verwendet die Programmiersprache JavaScript.


# NodeJs unter Windows 10 installieren

Download nodejs Zip Datei für Windows (32 Bit ist OK)
In `C:\nodejs` extrahieren (die Dateien befinden sich dann z.B. im Verzeichnis `C:\nodejs\node-v10.15.0-win-x86`)

Achtung:
Wenn man in tiefer verschachtelte Verzeichnisse extrahiert kann es zu einem *Path to long* Fehler beim entpacken des ZIP Files kommen!

Unter den entpackten Dateien befinden sich die benötigten Programme `node` und `npm`, damit diese Programm von Windows gefunden werden muss der Suchpfad erweitert werden.

- Kopiere dazu den Pfad des neuen Verzeichnisse in die Zwischenablage (im Dateiexplorer mit rechter Maustaste in den Pfad klicken und "Adresse kopieren" auswählen).
- Nun das Startmenü öffnen und "Umgebungsvariable" eintippen. "Umgebungsvariable für dieses Konto bearbeiten" auswählen, die Path Variable (Unter den Benutzvariablen) bearbeiten, mit "Neu" eine weitere Zeile mit dem vorher kopierten Pfad anlegen.

Nochmals Startmenü öffnen, "cmd" eingeben und Eingabeaufforderung auswählen.

In der Eingabeaufforderung `node --version` eingeben, sollte die Version von NodeJS ausgegeben werden. Wenn das funktioniert ist NodeJS verwendbar.


# Erste Schritte mit NodeJS

Lege ein neues Verzeichnis an. Öffne ein Terminal (Windows: Eingabeaufforderung) und wechsle dort in das neu angelegte Verzeichnis. Hinweis: Verzeichnisse können per drag-and-drop in das Terminal Fenster  (Windows: Eingabeaufforderung) gezogen werden. Unter Windows kann es erforderlich sein das Laufwerk zu wechseln, wenn nicht 'C: ...' angezeigt wird dann 'C:' eingeben um das Laufwerk zu wechseln.

```bash
$ cd <Verzeichnisname>
```

Das Projekte mit dem Node Package Manager (npm) initialisieren:

```bash
$ npm init -y
```

NodeJS kann nun mit Paketen erweitert werden, wir verwenden `express` um einen http Server zu implementieren:

```bash
$ npm install express --save
```

Erstelle ein `index.js` File mit folgendem Inhalt:

```javascript
const express = require('express')
const app = express()

app.get('/api/greetme', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
```

Den Server starten:

```bash
$ node index.js
```

In einem Webbrowser folgende Adresse aufrufen:

```
http://localhost:8000/api/greetme
```

Im Terminal kann mit Ctrl-C (Windows: Strg-C) der Server wieder gestoppt werden.

Ergänze in `index.js`:

```javascript
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
```

```bash
$ mkdir public
$ cd public/
$ touch index.html
```

Windows: Befehl `touch` nicht verfügbar.

Erstelle einen Inhalt für `index.html` und öffne im Browser `http://localhost:8000/`

Wir haben nun einen Web-Server, der 
- Zugriff auf Dateien im public Verzeichnis ermöglicht
- Mit `apt.get` beliebige Daten im Programm erzeugen kann


# Auf anderen Server zugreifen

Kennt man die IP Adresse kann auf jeden anderen Server zugegriffen werden.

Zum ermitteln der IP Adresse: 

- unter Windows in der Eingabeaufforderung `ipconfig` eingeben.
- unter Mac im Terminal `ipconfig getifaddr en0` bzw `en1` eingeben

Dann (auf einem anderen Rechner) in der Browser-Adresszeile statt `localhost` die IP Adresse des gewünschten Servers einsetzen:

```
http://10.8.200.11:8000/api/greetme
```
