# Files der App hinzuzufügen

Es ist möglich beliebtige Dateien der App hinzuzufügen und im Code auf diese Daten zuzugreifen.

>  Right click on package or Res folder click on new on popup then click on android resource directory a new window will be appear change the resource type to raw and hit OK copy and past song to raw folder remember don't drag and drop song file to raw folder and song spell should be in lower case!  ([stackoverflow](http://stackoverflow.com/questions/6691951/android-how-to-add-r-raw-to-project))

Wie beschrieben zum Einfügen einer bestehenden Datei copy/paste verwenden. Drag-and-drop funktioniert nicht.
Copy im Dateimanager/Finder, Einfügen im AndroidStudio auf `res/raw`.
Eine so eingefügte Textdatei kann im AndroidStudio editiert werden.

Das Android Asset Packaging Tool fügt die Datei zur Anwendung hinzu.
Es wird unter `R.raw` automatisch eine ID mit dem File Namen erzeugt (ohne Dateiendung).
Der File Name darf **nur Kleinbuchstaben und Ziffern** enthalten.


# Zugriff auf die Datei aus dem Code

Zugriff erhält man über `openRawResource(id)` das ein `java.io.inputStream` zur Verfügung stellt.
([stackoverflow](http://stackoverflow.com/questions/15912825/how-to-read-file-from-res-raw-by-name))

```java
InputStream is = 
    getResources().openRawResource(R.raw.ahels);
BufferedReader br=
    new BufferedReader(
        new InputStreamReader(is));
String line;
try {
    while ((line=br.readLine())!=null) {
        Log.d("",line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

# Erzeugen eines Files unter Android

[developer.android](https://developer.android.com/training/basics/data-storage/files.html)

Es gibt 2 Verzeichnisse in denen eine App Daten ablegen darf.
Folgende Methoden liefern diese als `File` Objekte.
- `getFilesDir()`
- `getCacheDir()`

## Neue Datei schreiben

Die Datei neu anlegen oder überschreiben wenn diese bereits existiert.

```java
File newFile=new File(getFilesDir(),"myfile.txt");
PrintWriter writer = new PrintWriter(newFile);
writer.println("Inhalt neue Datei");
writer.close();
```

Mit `println` wird eine komplette Zeile einer Textdatei geschrieben (inkl. Zeilenumbruch).


## Lesen

Auslesen aus einer bestehenden, durch eigene Programm angelegten, Datei.

```java
File newFile=new File(getFilesDir(),"myfile.txt");
BufferedReader reader = 
    new BufferedReader(
        new FileReader(newFile));
String firstLine=reader.readLine();
reader.close();
```    

Mit `readLine` wird eine komplette Zeile aus einer Textdatei gelesen.

## Datei Ändern

Textdateien werden vollständig eingelesen und, nach den notwendigen Änderungen an den Daten, komplett neu geschrieben.

## Test auf Existent

Feststellen ob eine Datei existiert.

```java
File file = new File(...);
if(file.exists()) {
    // ...
}
```

Hinweis: `new File(...)` legt nur ein Speicherobjekt an, aber **nicht** die Datei.

# External storage

Files die in den *external storage* gespeichert werden können auch von außerhalb eingesehen werden.
Dies geht direkt am Handy oder, wenn aktiviert, bei angestecktem USB Kabel wie ein USB Stick (*USB mass storage*).

Der external storage kann eine entfernbare SD Karte sein aber auch ein interner (nicht entfernbarer) Speicher.

Freischalten in `manifest.xml`
```xml
<manifest ...>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
</manifest>
```

Um ein File Objekt auf ein Verzeichnis im external storage zu bekommen:

```java
public File getAlbumStorageDir(String albumName) {
    File file = new File(Environment.getExternalStoragePublicDirectory(
            Environment.DIRECTORY_DOCUMENTS), albumName);
    if (!file.mkdirs()) {
        Log.e(LOG_TAG, "Directory not created");
    }
    return file;
}
```

Näheres siehe 
[developer.android](https://developer.android.com/guide/topics/data/data-storage.html#filesExternal)
