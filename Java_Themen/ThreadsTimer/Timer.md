


# Timer

2 Klassen 
[`Timer`](https://docs.oracle.com/javase/8/docs/api/java/util/Timer.html)
 und [`TimerTask`](https://docs.oracle.com/javase/7/docs/api/java/util/TimerTask).



Von `TimerTask` ableiten:

```java
class MyTimerTask extends TimerTask {
    @Override
    public void run() {
        // ...
    }
}
```

`Timer` Objekt:

```java
Timer timer = new Timer();
```

Den Timer Task nach einer fixen Wartezeit **einmal** ausführen.

```java
timer.schedule(new MyTimerTask(), 3000);
```

Eine andere Variante von `schedule` ermöglicht einen wiederholenden Timer der nach `delay` ms gestartet und alle `period` ms ausgeführt wird.    
`schedule(TimerTask task, long delay, long period)`

Ein Timer unterstützt eine belieibige Menge von Tasks. Beispiel:

```java
timer.schedule(new MyTimerTask(), 3000);
timer.schedule(new MyTimerTask(), 3100);
timer.schedule(new MyTimerTask(), 3200);
```

Um alle Tasks zu beenden:
`timer.cancel()`

Hinweis:
Um einen ganz bestimmten Task zu beenden dient die `cancel()` Methode von `TimerTask`

