---
title: Arrays
subtitle: Dynamic Array aus Strings Variante I
tags: [assignment,3BHELS]
---

Erstelle eine Klasse die Funktion eines dynamischen Arrays (ähnlich ArrayList) zur Verfügung stellt. Es soll ein Array aus Strings verwaltet werden.

Implementierungsdetail: Das in der Klasse enthaltene String Array soll beim Hinzufügen um ein Element verlängert und beim entfernen um ein Element verkürzt werden. 

Code-Basis:

```java
class DynamicArray {
  private String[] arr = new String[];
	// das Array ist ein verstecktes Implementierungsdetail und daher nach
  // außen nicht sichtbar.
}
```





---

#### Übung (DynArray aus Strings – Variante 1)

Implementiere folgende Methoden:

```java
class DynamicArray {
  private String[] arr = new String[];
  
  public String toString() {
    // String in der Form [eins,zwei,drei]
    return "";
  }
  
  public void add(String s) {
    // fügt den String ans Ende an
    // Anleitung: ein neues um ein Element längeres Array anlegen, 
    //            alte Daten umkopieren, Referenz arr auf das neue Array setzen
  }
  
  void add(String s, int n) {
    // s an Index n einfügen
    // Anleitung: ein neues um ein Element längeres Array anlegen, 
    //            alte Daten umkopieren dabei Platz für das neue Element lassen,
    //            Referenz arr auf das neue Array setzen
  }
  
  int count() {
    // Anzahl der Elemente
    return -1;
  }
  
  void remove(int n) {
    // Element an Index n entfernen
  }
  
  String get(int n) {
    // Element an Index n zurückgeben
    return null;
  }
  void set(int n, String s) {
    // Element an Index n überschreiben
  }
}
```