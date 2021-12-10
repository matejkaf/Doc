---
title: ArrayList
subtitle: Dynamic arrays in Java (Exercises)
tags: [lecture,java,array,3AHITS]
---

#### Exercise (Reverse input)

Write a programm that allows the input of an unlimited number of integer values. A value of –1 ends the input. Afterwards all entered numbers should be printed in reverse order (not including –1).

```java
import java.util.Scanner;
// input of one integer
Scanner scn = new Scanner(System.in);
System.out.println("Value: ");
int input = scn.nextInt();
System.out.println(input);
```

---

#### Exercise (Count words)

Write a program to count word occurences. The program lets the user enter words and counts how often each word is entered. The program shall support an arbitrary amount of different words. At program start the number of different words is not known.

If the user enters `"END"` the program stops and prints out:

- All words and their number of occurence.
- The word which was entered most often.

Hints:
Use a class `Word` which stores the word as `String` and the count as `int`. Store instances of this class in an `ArrayList`.


---

#### Exercise (Count words in sorted order)

Extend the last exercise: Sort the list. Hint: Use bubblesort for sorting. 

- Sort words by number of occurence in descending order. 
- Sort words in alphabetical ascending order. Hint: Read about the `compareTo` method of `String`.

---

#### Übung (Gemeinden)

Implementiere das Übungsbeispiel "Gemeinden" mit Hilfe einer ArrayList.

---

