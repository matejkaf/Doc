# Sensoren

Grob gibt es 3 Sensor Kategorien:

- **Bewegung**      
Beschleunigungssensor, Schwerkraft-Sensor, Gyroskop.
- **Umgebung**   
Umgebungstemperatur und Druck, Lichtstärke, Luftfeuchte und Luftdruck.
- **Position**     
GPS, Lagesensor, Magnetometer

Siehe [Sensors Overview auf developer.android](https://developer.android.com/guide/topics/sensors/sensors_overview.html).

Android Sensor API ermöglicht:

- Herausfinden welche Sensoren das Gerät unterstützt.
- Die Leistungsdaten des Sensors ermittleln.  
Z.B. Reichweite, Auflösung, etc.
- Sensor-Daten mit einer definierten Rate auslesen.
- Ereignisse registrieren die bei Änderung der Sensor Daten reagieren.



# Allgemeines

Auflisten aller Sensoren:

```java
SensorManager manager = (SensorManager)getSystemService(Context.SENSOR_SERVICE);
List<Sensor> sensors = manager.getSensorList(Sensor.TYPE_ALL);
for (Sensor s : sensors) {
    Log.d("onCreate", s.toString());
}
```

Einige Methode der Klasse `Sensor` ([siehe developer.android](https://developer.android.com/reference/android/hardware/Sensor.html)):   
`getMinDelay()`, `getResolution()`, `getMaximumRange()`, etc.

Die Methode `getReportingMode` 
([siehe developer.android](https://developer.android.com/reference/android/hardware/Sensor.html#getReportingMode()))
zeigt an nach welcher Strategie der Sensor die Daten liefert: (`CONTINUOUS`, `ON_CHANGE`, `ONE_SHOT`)


# Beispiel: Light Sensor

Liefert Lux
([wikipedia](https://de.wikipedia.org/wiki/Lux_(Einheit)))
 als `float` Wert.
[Siehe Environment Sensors auf developer.android](https://developer.android.com/guide/topics/sensors/sensors_environment.html)

**Schritt 1:**   
Sensor Manager und Sensor Objekt ermitteln

Instanzvariablen:

```java
SensorManager sensorManager;
Sensor lightSensor;
```

In `onCreate`:

```java
sensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
lightSensor = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT);
```

**Schritt 2:**   
Interface `SensorEventListener` implementieren, z.B. mit anonymer Klasse.

Instanzvariable

```java
SensorEventListener lightSensorEventListener;
```

Implementierung im Konstruktor der Activity:

```java
lightSensorEventListener = new SensorEventListener() {
    @Override
    public void onSensorChanged(SensorEvent event) {
        float lux_illuminance = event.values[0];
        Log.d("","lux_illuminance "+lux_illuminance);
    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int accuracy) {

    }
};
```

[onSensorChanged auf developer.android](https://developer.android.com/reference/android/hardware/SensorEventListener.html#onSensorChanged(android.hardware.SensorEvent)), der Name ist irreführend, diese Methode wird periodisch aufgerufen wenn der zugrundeliegende Sensor einen neuen Wert liefert (auch wenn sich dieser nicht geändert hat).

**Schritt 3:**   
Listener für den Light Sensor registrieren. Methoden des Interface SensorEventListener werden in Folge aufgerufen.
In `onResume`:

```java
protected void onResume() {
    super.onResume();
    sensorManager.registerListener(lightSensorEventListener, lightSensor, SensorManager.SENSOR_DELAY_NORMAL);
}
```

Der dritte Parameter von `registerListener` 
([siehe developer.android](https://developer.android.com/reference/android/hardware/SensorManager.html#registerListener(android.hardware.SensorEventListener,%20android.hardware.Sensor,%20int))) 
ist die Sampling Rate in Millisekunden (oder die Konstanten: `SENSOR_DELAY_NORMAL`, `SENSOR_DELAY_UI`, `SENSOR_DELAY_GAME`, `SENSOR_DELAY_FASTEST`).

**Schritt 4:**   
In `onPause` wieder deregistrieren:

```java
protected void onPause() {
    super.onPause();
    sensorManager.unregisterListener(lightSensorEventListener);
}
```

Test der Sensoren im Emulator ([siehe developer.android](https://developer.android.com/studio/run/emulator.html))
`Ctrl-Shift-V` (Mac: `Cmd-Shift-V`) öffnet im Emulator die Sensor-Einstellungen.

# Aufgaben

Gib den Wert des Lichtsensors in einem Textfeld aus.

Verwende den Lichtsensor um dem App-Hintergrund unterschiedliche Farben je nach Helligkeit zu geben, z.B. Grün wenn dunkel und Rot wenn hell.

* * *

Verwende den Absolutwert des Accelerometer Vektors 
([android developer](https://developer.android.com/guide/topics/sensors/sensors_motion.html#sensors-motion-accel))
um abzuleiten ob das Handy gerade geschüttelt wird.

Spiele einen Ton ab wenn ein Schwellwert überschritten wird.

```java
MediaPlayer mp = MediaPlayer.create(MainActivity.this, R.raw.whipscream);
mp.start();
```
Dieser Code wird von einem Event Handler aufgerufen.
Dies ist eine (anonyme) innere Klasse daher muss beim Zugriff auf das `this` der umgebenden Klasse der Klassenname (`MainActivity`) angegeben werden.

* * *

Erkenne über das Accelerometer das sich das Handy im freien Fall befindet und spiele für diesen Fall einen Ton ab.

* * *

Durch integration der Beschleunigung entsteht ein Geschwindigkeitswert und daraus durch weitere integration der Weg. Bestimme den zurückgelegten Weg in positiver x Richtung.

* * *
