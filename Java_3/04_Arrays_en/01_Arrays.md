---
title: Arrays
tags: [lecture,java, array, 3BHELS]
---

> The important thing is not to stop questioning. –Albert Einstein

Two step process:


- 
Define reference variable
```java
int[] values; // like a pointer in C
```
- Allocate with `new`

```java
values = new int[5]; // initialized with 0 values
```

`new` returns the address of the memory block allocated for the array elements.

Or, on a single line:
```java
int[] values = new int[5];
```

Initialize with values:
```java
int[] values = {1,2,3,4};
String[] txts = {"one","two","three"};
// or:
values = new int[] {1,2,3,4};
```


Size of array may be a variable:
```java
int n=7;
int[] values = new int[n*2];
```

Print an array:
```java
System.out.println(Arrays.toString(values) );
```



## Access the Array

Use index:
```java
values[2] = 123;
```

Arrays "know" their size:
```java
int len = values.length;
```




## Watch your index!
Common programming error:
```java
int[] values = {1,2,3,4};
for(int i=0; i<=values.length; i++)
    values[i] = i + 1;
```


Compiler: happy!

Run program:
```java
Exception in thread "main" 
java.lang.ArrayIndexOutOfBoundsException
```

This is a programming error discovered at runtime.

**Exceptions** help to discover problems early. Got an exception? Locate bug in your code!

Distinguish: Compile time error – Run time error



---

#### **Assignment (Create Array):**

Write a program that fills an `int` Array (size entered by user) with the values `1,2,4,8,16,...`.

---





## Arrays and Methods


Arrays may be passed to methods as **parameters**.

Example:
```java
// method definition
int methodName(int[] arrayName)  {
    // ...
}
// method call
methodName(myArray);
```


As reference variables are passed, the behavior is **call by reference**.

Changes of array values within the method modifies the original array.



---

#### **Assignment (Rectangular frame):**

Write a method that takes an array of strings and prints them, one per line, in a rectangular frame. For example the array `"Hello World", "in", "a", "frame"` gets printed as:

```
***************
* Hello World *
*          in *
*           a *
*       frame *
***************
```



---

#### **Assignment (Reverse – in place):**

Implement a `static` method which gets an `int` Array as a parameter and returns `void`. The array passed to the method should be reversed "in place", which means no new array should be allocated to store the reversed array. Instead implement by swapping 2 array elements at a time.

- Implement as explained.
- Use only one local variable: the index.

---




## Arrays as return value of methods
An array may be **returned** by a method. Strictly speaking: a reference (memory address) is returned.

Example:
```java
int[] methodName()  {
    int[] localArray;
    localArray = new int[...];
    ...
    return localArray; // return reference to array
}
```

Method call:
```java
int[] a;
a = methodName();
```



---

#### **Assignment (Reverse):**

Write a `static` method that takes an `int` array as parameter and returns a new array in reversed order. The array passed to the method must not be modified!

- Implement as explained.
- Use only two local variables: index and the reversed array.

---










