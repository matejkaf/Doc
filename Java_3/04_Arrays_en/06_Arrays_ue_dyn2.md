---
title: Arrays
subtitle: Dynamic Array aus Strings Variante II
tags: [assignment]
---

Erstelle eine Klasse die die Funktion eines dynamischen Arrays (ähnlich ArrayList) zur Verfügung stellt. Es soll ein Array aus Strings verwaltet werden.

Implementierungsdetail: Das enthaltene Array enthält mehr Elemente als gerade benötigt werden. Beim Hinzufügen eines neuen Strings werden zuerst diese **freien Elemente** aufgebraucht, ehe das Array vergrößert wird. In einer zusätzlichen Variable `len` merkt man sich die Anzahl der tatsächlich verwendeten Elemente im Array. Soll ein neues Element eingefügt werden und es sind die freien Element aufgebraucht  – wenn also `n` die Größe des Arrays erreicht hat – wird das Array **verdoppelt**.

Diese Variante hat den **Vorteil**, dass das aufwände Neuanlegen des Arrays viel seltener vorkommt.

Code-Basis:

```java
class DynamicArray {
  // Versteckte Implementierungsdetails – nach Außen nicht sichtbar.
  private int len = 0; // tatsächlich verwendete Elemente
  private String[] arr = new String[2];
}
```



---

#### Übung (DynArray aus Strings – Variante 2)

Implementiere folgende Methoden:

```java
class DynamicArray {
  // Versteckte Implementierungsdetails – nach Außen nicht sichtbar.
  private int len = 0; // tatsächlich verwendete Elemente
  private String[] arr = new String[2];  

  public String toString() {
    // String in der Form [eins,zwei,drei]
    return "";
  }
  
  public void add(String s) {
    // fügt den String ans Ende an
  }
  
  int count() {
    // Anzahl der Elemente
    return -1;
  }

  String get(int n) {
    // Element an Index n zurückgeben
    return null;
  }

  void set(int n, String s) {
    // Element an Index n überschreiben
  }
  
  void add(String s, int n) {
    // s an Index n einfügen
  }
  
  void remove(int n) {
    // Element an Index n entfernen
  }
}
```

**Ausbaustufe:** Das Array soll auch wieder schrumpfen. Wenn die tatsächlich genutzten Elemente nur mehr ein Viertel des gesamten Arrays ausmachen soll die Arraylänge **halbiert** werden.