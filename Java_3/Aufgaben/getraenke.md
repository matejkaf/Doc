Schreibe ein Programm mit dem du protokollieren kannst wie viel und wann du am Tag etwas getrunken hast. Allerdings möchtest du dabei auch auf die Kalorienzufuhr achten.

Lege dafür eine Klasse `Getraenk` an mit:

- Bezeichnung (Wasser, Cola, Orangensaft, ...)
- Menge (in Litern)
- Uhrzeit (Stunde und Minute)
- Nährwert

Implementiere die Klasse `Getraenk` mit Konstruktor und toString Methode.

Implementiere eine Klasse `Getrunken` mit:

- Einer ArrayList aus `Getraenk` Objekten als Instanzvariable

- Einer Methode `trinken` die die Uhrzeit, die Menge und die Bezeichnung übergeben bekommt, daraus ein `Getraenk` Objekt erzeugt und dieses in der ArrayList speichert. 
  Der Nährwert soll aufgrund der Bezeichnung in der Methode ermittelt werden. Nimm dazu an, dass es zwei Arrays gibt die folgendermaßen aussehen:

  ```java
  String nw_bez[] = {"Eistee", "Wasser", "Cola", ...};
  double nw[] = {290.0, 0.0, 370.0, ...}; // kcal – jeweils für einen Liter
  ```

- Eine Methode `nachmittag` die die Summe aller Nährwerte ermittelt (als Rückgabwert) und zwar nur von Getränken die nach 12:30 konsumiert wurden.

Schreibe ein Hauptprogramm das die Anwendung der Klasse `Getrunken` an einem Beispiel zeigt.