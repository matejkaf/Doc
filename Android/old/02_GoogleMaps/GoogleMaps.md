# Google Maps


Öffnen für die Position der HTL Braunau:

```java
Uri uri=Uri.parse("geo:48.243540,13.029035?z=17"); 
// latitude, longitude
// z ... zoom
Intent intent= new Intent(Intent.ACTION_VIEW);
intent.setData(uri);
startActivity(intent);
```

Koordinate der HTL Braunau:

```java
double latitude = 48.243540; // Breitengrade
double longitude = 13.029035; // Längengrad
```

+Breite: Nordhalbkugel,
-Breite: Südhalbkugel.

+Länge: östlich vom Nullmeridian,
-Länge: westlich vom Nullmeridian.


# NumberPicker

NumberPicker für Zoom-Faktor:
[stackoverflow](http://stackoverflow.com/questions/12317960/android-numberpicker-set-min-max-default-from-xml)
[developer.android](https://developer.android.com/reference/android/widget/NumberPicker.html)

Kann über XML nicht konfiguriert werden. Geht nur über Java Methoden

```java
NumberPicker np = (NumberPicker) findViewById(R.id.);
np.setMaxValue(20);
np.setMinValue(1);
np.setValue(17);
```

```xml
<NumberPicker
    ...
    android:id="@+id/zoomNumberPicker">
</NumberPicker>
```

# Übungsaufgabe

![](screenshot1.png)
\ 

![](screenshot2.png)    
\ 

