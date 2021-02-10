---
title: Doc
cmds: ['md_html.bash --small']
tags: [assignment,java,strings,3BHELS]
---

# Strings (Übungen)



**Übung (toUpper):**

Schreibe eine `static` Methode `toUpper` mit der ein beliebiges Wort in einem beliebigen Text auf Großbuchstaben geändert werden kann. Der geändere String ist der Rückgabewert.

Anwendung:

```java
String s="Wo sind die Klassen?"
String r=toUpper(s, "sind");
System.out.println(r); // Wo SIND die Klassen?
```



---

**Übung (countWord)**

Implementiere eine `static` Methode `countWord` die zählt wie oft ein Wort in einem Text vorkommt. Hinweis: verwende die `indexOf` Variante mit 2 Parametern ([Siehe Dokumentation hier](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String,%20int))). 

Anwendung:

```java
String s="abcd nur abcde ein abcd test"
int n=countWord(s, "abcd");
System.out.println(n); // 3
```



---

**Übung (Sum Up):**

Gegeben ist ein String mit durch Beistriche getrennte ganzen Zahlen:

```java
String data="25,731,94,-126,33,444,736,21,4,-66";
```

Schreibe ein Programm das die **größte** dieser Zahlen und deren **Summe** ermittelt.



---

**Übung (killWord):**

Implementiere eine `static` Methode `killWord` die das erste Vorkommen eines Worts aus einem Text löscht. Der geändere String ist der Rückgabewert.

Anwendung:

```java
String s="xyz nur abcde ein abcd test"
String r=killWord(s, "abcd");
System.out.println(r); // xyz nur e ein abcd test
```

---

**Übung (killWords):**

Implementiere eine `static` Methoden `killAllWords` mit einem Algorithmus der alle Vorkommen eines Worts aus einem Text löscht. Der geändere String ist der Rückgabewert.

Anwendung:

```java
String s="abcdxyz nur abcde ein abcd test"
String r=killAllWords(s, "abcd");
System.out.println(r); // xyz nur e ein  test
```

---

**Übung (HTML tags)**


Ändere in einem String alle HTML tags auf Großbuchstaben.

```java
String s="<p>...<img>...</img>...</p>";
s=...; // <P>...<IMG>...</IMG>...</P>
```

---