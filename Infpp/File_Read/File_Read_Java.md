---
title: Daten aus Textdateien lesen in Java
---




Testdaten für ein Programm in einer Textdatei abzuspeichern erspart mühsame Tastatureingaben. In vielen Programmierwettbewerben (z.B. CCC) werden zu beabeitende Daten in Textdateien vorgegeben.



# Einzelwert

Beispiel: Lesen einer Zahl aus einer Textdatei `test.txt`:

```
123
```


Mit den Klassen `FileReader` und `BufferedReader`.

```java
BufferedReader reader = new BufferedReader( new FileReader("test.txt"));
String line = br.readLine();
int x;
x = Integer.parseInt(line);
```




# Array (in Java)


Lesen von mehreren Zahlen in ein Array. Die Anzahl steht in der Datei.

Beispiel – `test.txt`:

```
3
111
122
133
```


Stehen die Zahlen nicht untereinander ist etwas anders vorzugehen – siehe unten.


In diesem Fall wird zuerst die Länge eingelesen, dann ein Array der entsprechenden Länge angelegt und anschließend in einer Schleife die einzelnen Array-Werte eingelesen.

```java
BufferedReader reader = new BufferedReader( new FileReader("test.txt"));
String line = br.readLine();
int len;
len = Integer.parseInt(line);
int[] a = new int[len];
for(int i=0; i<len; i++) {
	line = br.readLine();
	a[i] = Integer.parseInt(line);
}
```




Beispiel – `test.txt`:

Die Zahlen stehen nebeneinander in der gleichen Zeile.

```
3
111 122 133
```

Mit `readLine` wird die komplette Zeile in einen String eingelesen.
Dieser String kann mit der String Methode `split` zerlegt werden, es entsteht ein Array aus Strings.
Parameter von split ist das Trennzeichen – im Beispiel Leerzeichen.

```java
BufferedReader reader = new BufferedReader( new FileReader("test.txt"));
String line = br.readLine();
int len;
len = Integer.parseInt(line);
int[] a = new int[len];
line = br.readLine();
String[] strs = line.split(" ");
for(int i=0; i<len; i++) {
	a[i] = Integer.parseInt(strs[i]);
}
```



