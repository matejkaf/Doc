
# Manifest Permission

In `AndroidManifest.xml` permission `INTERNET` setzen.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest ...>
    <uses-permission android:name="android.permission.INTERNET"/>
    <application>
        ...
    </application>
```


# Android Netzwerkclient

Netzwerkzugriffe aus dem MainThread heraus führen zu einer Exception

    NetworkOnMainThreadException

Der MainThread ist für die Benutzschnittstelle verantwortlich. 
Ist dieser blockiert (durch eine länger dauernde Operation) ist eine Interaktion mit der App nicht mehr möglich. Es wird auf Benutzeraktionen nicht mehr reagiert.

Daher werden Netzwerkaktionen in einem eigenen Thread ausgeführt.

> Ein Programm kann aus mehreren **Threads** bestehen. Den **MainThread** gibt es immer. Das Programm kann weitere Threads starten.
Jeder Thread hat einen eigenen Programmfluss.
Die Threads werden parallel und gleichzeitig ausgeführt.


# Mit Message und Handler

Grundsätzlich ist es in Android möglich mit der Klasse `Thread` zu arbeiten.

```java
public class MainActivity extends AppCompatActivity 
{
    // onclick
    public void netLoad(View view) {
        NetworkThread thread = new NetworkThread();
        thread.start();
    }

    // Network thread (als innere Klasse)
    class NetworkThread extends Thread {
        @Override
        public void run() {
            super.run();
            // ... hier Netzwerkzugriff
            textView = (TextView)findViewById(R.id.mytextview);
            // ==> Laufzeitfehler
    }
}
```

Führt zu einer Exception, mit folgender Fehlermeldung:

    Only the original thread that created a view hierarchy can touch its views.

Das bedeutet man darf aus einem Hintergrund Thread nicht auf das User Interface zugreifen.
Das macht Sinn, denn wenn andere als der Main Thread das UI verändern könnten würde das zu Chaos führen.

Die Lösung ist aus dem Background Thread heraus den Main Thread zu informieren.
Im Background Thread wird ein
[Message](https://developer.android.com/reference/android/os/Message.html)
Objekt erzeugt.
Dieses Message Objekt wird an ein 
[Handler](https://developer.android.com/reference/android/os/Handler.html)
 Objekt im Main Thread gesendet.
Die Methode `handleMessage` des Handlers wird im Kontext des Main Threads aufgerufen und darf daher auf das UI zugreifen.

```java
Message msg = handler.obtainMessage();
msg.what = SET_TEXT_VIEW; // int: message code zur Unterscheidung im Main Thread
msg.obj = "String ist auch ein Object"; // Beliebiges Objekt als Bestandteil der Message
msg.arg1 = R.id.mytextview; // int, beliebiger Wert
handler.sendMessage(msg); // handler object in der Activity
```

Für größere Datenmengen (mehr als `obj`, `arg1` und `arg2`) kann die Methode `setData` verwendet werden.

Handler Objekt im Main Thread - wird in Folge von `sendMessage` aufgerufen:

```java
final static int SET_TEXT = 1;

final Handler handler = new Handler(){
  @Override
  public void handleMessage(Message msg) {
    if(msg.what == SET_TEXT_VIEW){
      textView = (TextView)findViewById(msg.arg1);
      textView.setText((String)msg.obj);
    }
    super.handleMessage(msg);
  }
};
```

Siehe auch
[stackoverflow #5185015](http://stackoverflow.com/questions/5185015/updating-android-ui-using-threads)


# AsyncTask

Die Android
[Klasse AsyncTask](https://developer.android.com/reference/android/os/AsyncTask.html) vereinfacht diesen Handler/Message Mechanismus.

Siehe:
[Android Training: Performing Network Operations](https://developer.android.com/training/basics/network-ops/).

Beispiel:

```java
private class DownloadFilesTask extends AsyncTask<URL, Integer, Long> {

    //  invoked on the UI thread
    void onPreExecute () {  
        setProgressPercent(0);
    }

    // background thread
    protected Long doInBackground(URL... urls) {
        int count = urls.length;
        long totalSize = 0;
        for (int i = 0; i < count; i++) {
            totalSize += Downloader.download(urls[i]);
            Integer progr = (int) ((i / (float)count) * 100);
            publishProgress(progr); // passed to onProgressUpdate
            // Escape early if cancel() is called
            if (isCancelled()) 
                break;
        }
        return totalSize; // passed to onPostExecute
    }

    //  invoked on the UI thread
    protected void onProgressUpdate(Integer... progress) {
        setProgressPercent(progress[0]);
    }

    //  invoked on the UI thread
    protected void onPostExecute(Long result) {
        showDialog("Downloaded " + result + " bytes");
    }
}
```

Instanzieren und anschließend den Thread mit `execute` starten (die Argumente sind die Parameter von `doInBackground`).

```java
mDownloadTask = new DownloadTask();
mDownloadTask.execute(new URL("..."));
```

Die mit `on` beginnenden Methoden werden im Kontext des Main Threads aufgerufen und daher können hier die Zugriffe auf das User Interface stattfinden.



# TextView mit Scrolling

Zur Anzeige größerer Datenmengen.

Im XML Layout:

```xml
android:scrollbars = "vertical"
```

Im Code:

```java
yourTextView.setMovementMethod(new ScrollingMovementMethod());
```
