
# Anonyme Klasse

Libraries oder Frameworks definieren häufig Abstrakte Klassen oder Interfaces.
Diese sind im eigenen Code abzuleiten bzw. zu implementieren.
Dabei braucht man in vielenn Fällen nur eine einzige Instanz.

Java stellt für diese Anwendung sogenannte **Anonyme Klassen** zur Verfügung.
Dabei wird, in einem Konstrukt, eine Klasse abgeleitet (von Klasse bzw. Interface) **und** von dieser Klasse ein Objekt angelegt.
Die Klasse selbst erhält bei diesem Vorgang keinen Namen --- daher Anonym.

# Beispiel

Abstrakte Klasse `car`:

```java
abstract class Car {
    abstract String color();
}
```

Eine von `Car` abgeleitete Klasse:

```java
class RedCar extends Car {
    @Override String color() {
        return "green";
    }
}
```

Instanzierung der abgeleiteten Klasse `RedCar`:

```java
Car redCar = new RedCar();
```

Selber Vorgang mit **anonymer Klasse** --- ableiten und instanzieren in einem Konstrukt:

```java
Car greenCar = new Car() {
    @Override
    String color() {
        return "green";
    }
};
```

# Real World Example (Android)

Setzen eines `onclick` Event Listeners auf einen Button.

```java
Button button = (Button)findViewById(R.id.theButton);
assert button != null;
button.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Log.d("MainActivity","onClick");
    }
});
```

`View.OnClickListener` ist ein Interface.

[Android.Developer View.OnClickListener](https://developer.android.com/reference/android/view/View.OnClickListener.html)


# Quellen

[Oracle tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html)