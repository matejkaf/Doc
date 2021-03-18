---
title: ArrayList
subtitle: Dynamic arrays in Java
tags: [3BHELS, lecture,java, array]
---

With class `ArrayList` (Java library)

- Can "grow'' and "shrink"
- insert elements
- remove elements


The class [`ArrayList`](http://download.oracle.com/javase/6/docs/api/java/util/ArrayList.html), which comes with the Java library, makes it easy to define dynamic arrays.

Dynamic arrays may grow and shrink as necessary. New elements can be inserted at any time and position, also it is possible to remove elements from the array.

```java
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> alist = new ArrayList();
        alist.add("Hello");
        alist.add("World");
        for(int i=0; i<alist.size(); i++) {
            System.out.println(alist.get(i));
        }
    }
}
```


The Method `add` inserts a new element at the end of the array – the array grows by one element.

`ArrayList` may be used to store objects of any class.



## Methods of ArrayList

- 
`get(int index)`
- 
`set(int index, TYPE element)`
- 
`remove(int index)`
- 
`add(TYPE element)`
- 
`add(int index, TYPE element)`
- 
`size()`

Attention: ArrayLists's are objects, the elements stored by these objects must therefore be accessed using the above methods. There is no square bracket (`[]`) access – use the `get` and `set` Methods instead.



## Objects only!

ArrayList's store **references to objects**!

- Q: How to use primitive data types? (`int`, `double`, ...)
- A: Use a **wrapper class** 

Example:
```java
ArrayList<Integer> alist;
```

The wrapper classes are:

- `Character`
- `Integer`
- `Float`
- `Double`
- `Boolean`

These classes can be used instead of the primitive data types, Java manages the conversion between both representations. From primitive datatype to Wrapper object this conversion is called boxing (e.g. `int` to `Integer`), the other way is called unboxing.



## Output

For ArrayList's there is an extraordinary easy why to print out the content:

```java
System.out.println(alist);
```

Which calls the ArrayLists `toString` Method.





## Dynamic Arrays – Exercises



#### **Exercise (Reverse input):**

Write a programm that allows the input of an unlimited number of integer values. A value of –1 ends the input. Afterwards all entered numbers should be printed in reverse Order (not including –1).

```java
// input of one integer
Scanner scn = new Scanner(System.in);
System.out.println("Value: ");
int input = scn.nextInt();
System.out.println(input);
```



---

#### **Exercise (Count words):**

Write a program to count word occurences. The program lets the user enter words and counts how often each word is entered. The program shall support an arbitrary amount of different words. At program start the number of different words is not known.

If the user enters `"END"` the program stops and prints out:

- All words and their number of occurence.
- The word which was entered most often.

Hints:
Use a class `Word` which stores the word as `String` and the count as `int`. Store instances of this class in an `ArrayList`.




---

#### **Exercise (Count words in sorted order):**

Extend the last exercise: Sort the list. Hint 1: Use bubblesort for sorting. Hint 2: Read about the `compareTo` method of `String`.

- 
Sort words by number of occurence in descending order.
- Sort words in alphabetical ascending order.






