# Sensoren

Grob gibt es 3 Sensor Kategorien:

- **Bewegung**  Beschleunigungssensor, Schwerkraft-Sensor, Gyroskop.
- **Umgebung**  Umgebungstemperatur und Druck, Lichtstärke, Luftfeuchte und Luftdruck.
- **Position**  GPS, Lagesensor, Magnetometer

Siehe [Sensors Overview auf developer.android](https://developer.android.com/guide/topics/sensors/sensors_overview.html).

Android Sensor API ermöglicht:

- Herausfinden welche Sensoren das Gerät unterstützt.
- Die Leistungsdaten des Sensors ermittleln. Z.B. Reichweite, Auflösung, etc.
- Sensor-Daten mit einer definierten Rate auslesen.
- Ereignisse registrieren die bei Änderung der Sensor Daten reagieren.



# Allgemeines

Auflisten aller Sensoren:

```
  val manager = getSystemService(Context.SENSOR_SERVICE) as SensorManager
  val sensors = manager.getSensorList(Sensor.TYPE_ALL)
  for (s in sensors) {
    Log.d(TAG, s.toString())
  }
```

Einige Methode der Klasse `Sensor` ([siehe developer.android](https://developer.android.com/reference/android/hardware/Sensor.html)): `getMinDelay()`, `getResolution()`, `getMaximumRange()`, etc.

Die Methode `getReportingMode` ([siehe developer.android](https://developer.android.com/reference/android/hardware/Sensor.html#getReportingMode())) zeigt an nach welcher Strategie der Sensor die Daten liefert: (`CONTINUOUS`, `ON_CHANGE`, `ONE_SHOT`)




# Beispiel: Light Sensor

Liefert Lux ([wikipedia](https://de.wikipedia.org/wiki/Lux_(Einheit))) als `float` Wert.
[Siehe Environment Sensors auf developer.android](https://developer.android.com/guide/topics/sensors/sensors_environment.html)

**Schritt 1:** Sensor Manager und Sensor Objekt ermitteln

Attribute:

```kotlin
private lateinit var sensorManager: SensorManager
private var pressureSensor: Sensor? = null
private var lightSensor: Sensor? = null
```

In `onCreate`:

```kotlin
sensorManager = getSystemService(Context.SENSOR_SERVICE) as SensorManager
pressureSensor = sensorManager.getDefaultSensor(Sensor.TYPE_PRESSURE)
lightSensor = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT)
```

**Schritt 2:**  

Listener (De-)Registrieren

```kotlin
//
//Register and deregister Sensor Listener
//

override fun onResume() {
  // Register a listener for the sensor.
  super.onResume()
  sensorManager.registerListener(this, pressureSensor, SensorManager.SENSOR_DELAY_NORMAL)
  sensorManager.registerListener(this, lightSensor, SensorManager.SENSOR_DELAY_NORMAL)
}

override fun onPause() {
  // Be sure to unregister the sensor when the activity pauses.
  super.onPause()
  sensorManager.unregisterListener(this)
}
```

Der dritte Parameter von `registerListener`  ([siehe developer.android](https://developer.android.com/reference/android/hardware/SensorManager.html#registerListener(android.hardware.SensorEventListener,%20android.hardware.Sensor,%20int))) ist die Sampling Rate in Millisekunden (oder die Konstanten: `SENSOR_DELAY_NORMAL`, `SENSOR_DELAY_UI`, `SENSOR_DELAY_GAME`, `SENSOR_DELAY_FASTEST`).



**Schritt 3**

Interface `SensorEventListener` implementieren

```kotlin
class MainActivity : AppCompatActivity(), SensorEventListener {

  //...
  //
  // Sensor Methods
  override fun onSensorChanged(event: SensorEvent) {
    when(event?.sensor) {
      pressureSensor -> {
        //val millibarsOfPressure = event.values[0]
        val pressure_hPa = event.values[0]
        Log.d(TAG, "onSensorChanged pressureSensor:"+pressure_hPa+" hPa")

      }
      lightSensor -> {
        val light_lux = event.values[0]
        Log.d(TAG, "onSensorChanged lightSensor:"+light_lux+" lux")
      }
    }
  }
```





---

**Übung (Sensoren)**

Gib den Wert der Sensoren in einem Textfeld aus.

Verwende den Lichtsensor um dem App-Hintergrund unterschiedliche Farben je nach Helligkeit zu geben, z.B. Grün wenn dunkel und Rot wenn hell.

---

**Übung (Sensoren)**

Verwende den Absolutwert (=Länge) des Accelerometer Vektors ([android developer](https://developer.android.com/guide/topics/sensors/sensors_motion.html#sensors-motion-accel)) um abzuleiten ob das Handy gerade geschüttelt wird. Spiele einen Ton ab (Peitsche) wenn ein Schwellwert überschritten wird.

- Sound: Rechtsklick auf `res` new Folder: `raw`, wav File hineinkopieren. ([Adding sounds – Android #16](https://appsandbiscuits.com/adding-sounds-android-16-c6c4bd777b42))

  ```kotlin
  // play sound button
  findViewById<Button>(R.id.playSoundButton).setOnClickListener {
    val mp = MediaPlayer.create(this, R.raw.whipscream)
      mp.start()
  }
  ```

  

---

**Übung (Fallerkennung)**

Erkenne über das Accelerometer das sich das Handy im freien Fall befindet und spiele für diesen Fall einen Ton ab.

---

**Übung (Weg)**

Durch Integration der Beschleunigung entsteht ein Geschwindigkeitswert und daraus durch weitere integration der Weg. Bestimme den zurückgelegten Weg in positiver x Richtung.

---
