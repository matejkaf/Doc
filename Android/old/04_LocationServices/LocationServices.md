# Location Services

Bestimmen der aktuellen Position (über GPS und WLAN Daten). Siehe:

- [developer.android Location and Sensors](https://developer.android.com/guide/topics/location/index.html)
- [developer.android Location Strategies](https://developer.android.com/guide/topics/location/strategies.html)

Position kann im Emulator simuliert werden.
Ctrl-Shift-V (Cmd-Shift-V) öffnet im AVD Emulator die Sensor-Einstellungen

# Berechtigungen

Positionen können von `NETWORK_PROVIDER` (=WLAN) oder `GPS_PROVIDER` zur Verfügung gestellt werden.
Die Berechtigung dafür ist im `AndroidManifest.xml` einzustellen. Für `GPS_PROVIDER`:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```
Bzw. `ACCESS_COARSE_LOCATION` für `NETWORK_PROVIDER`

Weiters muss der Benutzer, beim ersten Zugriff der App auf Positionsdaten, dies Bestätigen.
Dazu ist im Code 
`requestPermissions` 
([developer.android](https://developer.android.com/reference/android/support/v4/app/ActivityCompat.html#requestPermissions(android.app.Activity,%20java.lang.String[],%20int)))
aufzurufen
(Siehe
[stackoverflow](http://stackoverflow.com/questions/32083913/android-gps-requires-access-fine-location-error-even-though-my-manifest-file)).
Eine gute Stelle dafür ist `onResume`:

```java
private static final String[] INITIAL_PERMS = {
        Manifest.permission.ACCESS_FINE_LOCATION
};
private static final int INITIAL_REQUEST = 1234;

protected void onResume() {
    super.onResume();
    if (
            ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
                    != PackageManager.PERMISSION_GRANTED
        )
    {
        // this is only called once at first start of app
        ActivityCompat.requestPermissions(this, INITIAL_PERMS, INITIAL_REQUEST);
    } else {
        // request location updates here
        ...
    }
}
```




# Location Updates anfordern

Zum Abfragen der Positionsdaten dient der `LocationManager`.
Mit der Methode  `requestLocationUpdates` können Positionsupdates "aboniert" werden.
Dazu ist ein Objekt mit implementierten `LocationListener` Interface zu übergeben (Siehe nächstes Kapitel).


```java

protected void onResume() {
    ...
    if ( /*...check for permissions...*/ )
    {
        // Request Permissions ...
    } else {
        // request location updates here
        LocationManager locationManager = (LocationManager) this.getSystemService(Context.LOCATION_SERVICE);
        locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, locationListener);
        Location lastKnownLocation = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER);
        Log.d("onCreate", "lastKnownLocation: " + lastKnownLocation);
    }
}
```
# LocationListener

Um Updates der Position zu verarbeiten ist ein `LocationListener` zu implementieren.

```java
LocationListener locationListener;

protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    locationListener = new LocationListener() {

        @Override
        public void onLocationChanged(Location location) {
            double latitude = location.getLatitude(); // Breitengrad
            double longitude = location.getLongitude(); // Laengengrad
            Log.d("LocationListener", "" + location);
            Log.d("LocationListener", "latitude" + latitude);
            Log.d("LocationListener", "longitude" + longitude);
        }

        @Override
        public void onStatusChanged(String s, int i, Bundle bundle) {

        }

        @Override
        public void onProviderEnabled(String s) {

        }

        @Override
        public void onProviderDisabled(String s) {

        }
    };

}
```


[LocationListener](https://developer.android.com/reference/android/location/LocationListener.html)
ist ein Interface, mit obiger `new` Syntax wird eine anonyme Klasse angelegt - eine Klasse ohne Namen die das Interface `LocationListener` implementiert.

`onLocationChanged` wird erst aufgerufen wenn sich die Position ändert (auch nicht unmittelbar nach dem Starten der App).



# Location Updates abmelden

In `onPause` sollte man die updates für die Position wieder deaktivieren.

```java
protected void onPause() {
    super.onPause();
    if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
    } else {
        LocationManager locationManager = (LocationManager) this.getSystemService(Context.LOCATION_SERVICE);
        locationManager.removeUpdates(locationListener);
    }
}
```

# Aufgaben

Erstelle eine App die die aktuelle Position ermittelt und Google Maps für diese Position öffnet.

* * * 

Erstelle eine App die Live die Entfernung von Deiner aktuellen Position zu Deinem Heimatort darstellt.
Verwende die *Haversine* Formel auf [stackoverflow](http://stackoverflow.com/a/27943).

* * * 

Baue eine Google Maps Kartenansicht direkt in die App ein.
Siehe dazu auf [developers.google](https://developers.google.com/maps/documentation/android-api/?hl=de)

- Die Kartenansicht soll auf den aktuellen Standort zentriert werden.
- Auf der Kartenansicht soll der aktuelle Standort und der Heimatort als Marker dargestellt werden.
- Passe den Zoomfaktor automatisch so an, dass die Anzeige möglichst genau aber Standort und Heimatort noch gemeinsam sichtbar sind.
- Verbinde die Positionen in der Luftline mit Hilfe von Polyline.
- Stelle den tatsächliche Weg näherungsweise durch eine weitere (andersfarbige) Polyline dar und ermittle auch diese Entfernung.

