---
title: Arrays in Java (Mock Exercises)
type: assignment
description: 
cmds: ['md_html.bash','md_html.bash --small']
tags: [java, array]
---





Is there a flaw in following program fragment?

```java
int[] a={1,2,3};
for(int i=0;i<3;i++)
    a[i] = a[i] + i;
```

---

What happens if you try to compile and execute the following code?

```java
int[] a=new int[4];
int i;
for(i=0;i<a.length;i++);
    a[i] = i;    
```

---

What happens if you try to compile and execute the following code?

```java
int[] a={1,4,6,8};
int n=7;
for(int i=0;i<a.length;i++) {
    if (a[i] == n)
        break;
}
if(i==a.length)
    System.out.println("not found");
```

---

You want to assign a value to the last element in an array. What happens if you try to compile and execute the following code?


```java
int[] i = new int[5];
i[5]=0;
System.out.println(i[5]);
```




-  compile time error
-  run time error
-  print out 0
-  print out text "null"



---

What happens if you try to compile and execute the following code?

```java
//MyClass.java
public class MyClass {
    int a=2;
    int b=3;
}
// Main:
MyClass[] array;
array = new MyClass[10];
System.out.println(array[9].a);
```



- 2
- 3
- compile time error
- run time error: array index out of bounds
- run time error: null pointer exception 





