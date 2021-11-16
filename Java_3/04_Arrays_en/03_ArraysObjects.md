---
title: Arrays of Objects
tags: [lecture,java,array,3AHITS]
---

Java lets you define arrays containing objects.

Example: Class `Rectangle` 

```java
class Rectangle {
    double a;
    double b;
    Rectangle(double a, double b) {
        this.a=a;
        this.b=b;
    }
    double area() {
        return a*b;
    }
}
```



Task: Construct an array of 3 rectangles and calculate the area sum.

```java
// build array of 3 reference variables
Rectangle rarr = new Rectangle[3];
```

`rarr` is an array of 3 elements. Every element is of data type `Rectangle`, so each is a reference variable which stores the address of an object.

When you define an object array you get an **array of reference variables**. The objects themselves are **not** instantiated. 


Object creation is an additional step:

```java
rarr[0] = new Rectangle(2,3);
rarr[1] = new Rectangle(7,1);
rarr[2] = new Rectangle(9,4);
```

Now the references stored in the array `arr` can be used.

```java
// sum rectangle areas
double sum=0;
for(int i=0; i<rarr.length; i++) {
    sum = sum + rarr[i].area();
}
System.out.println(sum);
```



