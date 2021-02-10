---
title: Doc
description: 
cmds: ['md_html.bash','md_html.bash --small']
tags: [lecture,java, array]
---




# for-each loop

Frequently: process all array elements.

Example:

```java
int[] a={44,2,52,25,17,99,1};
for(int i=0 ; i<a.length ; i++)
    System.out.print(a[i]+" ");
```

Java supports a special kind of loop for this purpose called `for-each` loop.

```java
int[] a={44,2,52,25,17,99,1};
for (int el : a) {
    System.out.print(el+" ");
}
```



- No index required.
- `el`:  copy of one array element, changes with every loop
- Watch out: **read only** – writing not possible!
- The for/each loop may be used also for `ArrayList`.




## Programming exercise


Implement a class `MyArray`, with one instance variable which is an array of `int`.

- Write a constructor which takes an `int` array as parameter.
- Make a copy of this array and store in instance variable.
- Write a method `max()` which finds the largest array value using a for-each loop.
  






