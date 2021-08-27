---
title: Singleton – Design Pattern
cmds: ['md_html.bash','md_html.bash --small']
tags: [5AHELS, lecture, patterns ]
---

# Singleton

Wenn von einer Klasse nur eine **einzige** Instanz existieren soll.

## Java

```java
//Java
public class SingletonSample {  
   private static SingletonSample instance = null;

   private SingletonSample() {
   }

   public static SingletonSample getInstance() {
      if(instance == null) {
         instance = new SingletonSample();
      }
      return instance;
   }
  
  public void someMethod() {
    System.out.println("");
  }
}
```

Verwenden:

```java
SingletonSample singleton = SingletonSample.getInstance();
singleton.someMethod();
```



Konstruktor ist `private`:

- Kann nicht an anderer Stelle instanziert werden
- Vererbung nicht möglich



## Not thread safe (C#)

```csharp
public sealed class Singleton
{
  // sealed - no subclassing allowed
  private static Singleton instance=null;

  private Singleton()
  {
  }

  public static Singleton Instance
  {
    get
    {
      if (instance==null)
      {
        // lazy instantiation
        instance = new Singleton();
      }
      return instance;
    }
  }
  
  public void someMethod() {
    System.out.println("");
  }
}
```

Verwenden:

```csharp
var singleton = Singleton.Instance;
singleton.someMethod();
```

- `sealed class`: Vererbung nicht möglich
- Konstruktor ist `private`: Kann nicht an anderer Stelle instanziert werden (nur von innerhalb der Klasse)



## Thread safe (C#)

```csharp
public sealed class Singleton
{
  private static Singleton instance = null;
  private static readonly object padlock = new object();

  private Singleton()
  {
  }

  public static Singleton Instance
  {
    get
    {
      lock (padlock)
      {
        if (instance == null)
        {
          instance = new Singleton();
        }
        return instance;
      }
    }
  }
}
```

OK, hat aber wegen dem lock negative Auswirkungen auf die Performance.