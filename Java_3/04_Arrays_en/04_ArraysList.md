---
title: ArrayList
subtitle: Dynamic arrays in Java
tags: [lecture,java,array,3AHITS]
---

* TOC
{:toc}

# Dynamisches Array

With class `ArrayList` (Java library)

- Can "grow'' and "shrink"
- insert elements
- remove elements


The class [`ArrayList`](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html), which comes with the Java library, makes it easy to define dynamic arrays.

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



# Methods of ArrayList

For `ArrayList<TYPE>`:

- `get(int index)`
- `set(int index, TYPE element)`
- 
`remove(int index)`
- `add(TYPE element)`
- 
`add(int index, TYPE element)`
- 
`size()`

Attention: ArrayLists's are objects, the elements stored by these objects must therefore be accessed using the above methods. There is no square bracket (`[]`) access – use the `get` and `set` Methods instead.



# Objects only!

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

These classes can be used instead of the primitive data types, Java manages the conversion between both representations automatically. From primitive datatype to Wrapper object this conversion is called boxing (e.g. `int` to `Integer`), the other way is called unboxing.

```java
int n = 42; // primitive data type
Integer m; // object of class Integer
m = n; // boxing – new Integer object created
int k = 2*m // unboxing – Integer to int
```

Example: Array of `int`

```java
ArrayList<Integer> list = new ArrayList(); // class Integer for primitive data type int
list.add(42); // auto boxing converts int to Integer object
int n = list.get(0); // auto unboxing converts Integer object to int value
```



# Output

For ArrayList's there is an extraordinary easy way to print out the content:

```java
System.out.println(alist);
```

Which calls the ArrayLists `toString` Method.
