---
title: Observer – Beispiel Temperatursensor
cmds: ['md_html.bash']
tags: [5AHELS, lecture, patterns ]
---



# Beispiel: Temperatursensor (C#)

```csharp
using System;
using System.Collections.Generic;

namespace _201221_observer
{
  abstract class Observer {
    public abstract void update(Subject t);
  }

  class TooCold : Observer
  {
    public override void update(Subject t)
    {
      var thermo = t as Thermometer;
      if(thermo.Temp<18) {
        System.Console.WriteLine("it is too cold");
      }
    }
  }
  class TooHot : Observer
  {
    public override void update(Subject t)
    {
      var thermo = t as Thermometer;
      if(thermo.Temp>27) {
        System.Console.WriteLine("it is too hot");
      }
    }
  }

  abstract class Subject {
    List<Observer> observers = new List<Observer>();

    public void attachObserver(Observer obs)
    {
      observers.Add(obs);
    }
    public void detachObserver(Observer obs) 
    {
      observers.Remove(obs);
    }
    protected void notifyObservers()
    {
      foreach (var observer in observers)
      {
        observer.update(this);
      }
    }
  }
  class Thermometer : Subject
  {
    double temp = 27.0;
    public double Temp { 
      get {return temp;}
      set {
        if(temp != value)
        {
          temp = value;
          this.notifyObservers();
        }
      }
    }


  }
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
      var thermo = new Thermometer();
      var obs1 = new TooCold();
      thermo.attachObserver(obs1);
      var obs2 = new TooHot();
      thermo.attachObserver(obs2);
      thermo.Temp = 10; // --> too cold
      thermo.Temp = 30; // --> too hot

      thermo.detachObserver(obs1);
      thermo.detachObserver(obs2);

    }
  }
}

```





# Beispiel: Temperatursensor (Java)

```java
abstract class Observer {
    Thermometer thermometer;
    public abstract void update();
}
```


```java
// Subject
class Thermometer {
    private double temp;
    ArrayList<Observer> observers;

    public void attachObserver(Observer observer) {
        if(observers==null) {
            observers = new ArrayList<>();
        }
        observers.add(observer);
    }

    public void notifyObservers() {
        if(observers==null)
            return;
        for(Observer observer : observers) {
            observer.update();
        }
    }

    public void setTemp(double newTemp) {
        if(newTemp!=temp) {
            temp = newTemp;
            notifyObservers();
        }
    }

    public double getTemp() {
        return temp;
    }
}
```


```java
class TooHot extends Observer {
    
    public TooHot(Thermometer thermometer) {
        this.thermometer=thermometer;
        thermometer.attachObserver(this);
    }

    public void update() {
        if(thermometer.getTemp()>35.0) {
            System.out.println("it is too hot");
        }
    }

}

class TooCold extends Observer {

    public TooCold(Thermometer thermometer) {
        this.thermometer=thermometer;
        thermometer.attachObserver(this);
    }

    public void update() {
        if(thermometer.getTemp()<5.0) {
            System.out.println("it is too cold");
        }
    }

}
```

```java
public class ObserverMain {    
    public static void main(String[] args) {
        System.out.println("Design Pattern: Observer");

        Thermometer therm = new Thermometer();
        Observer hot = new TooHot(therm);
        Observer cold = new TooCold(therm);
        therm.setTemp(22.0);        
        therm.setTemp(40.0);
        therm.setTemp(-3.0);

    }
}
```

[Weiteres Observer Beispiel - tutorialspoint](https://www.tutorialspoint.com/design_pattern/observer_pattern.htm)


