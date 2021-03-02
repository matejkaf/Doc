---
title: Doc
description: 
tags: [3BHELS,lecture,java,array]
---

# Arrays of Objects

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



# Assignments

**Assignment (Side in arrays):** The rectangle sides should be stored in 2 Arrays, one for side a and another for side b. Create the Rectangle objects using the value from these arrays inside a loop. Implement another loop which outputs the area of every Rectangle object in the Array.



---

**Assignment (max A):** Find the rectangle whith maximum area.



---

**Assignment (Array of frames):**

Consider a typical graphical user interface (GUI). Programms are displayed within rectangular screen areas (called Windows) and are manipulated by the user by moving around a mouse cursor. When the user clicks the mouse button we want to know which program is below the mouse cursor position.

![image-20210104152322083](fig/image-20210104152322083.png)

For this implement a class  `Window`. This class manages the position (x,y) and size (width, height) of a rectangle in a two dimensional coordinate space. Additionally the class shall store the name of the programm.

- Define class, instance variables and constructor.
  Define an array of 7 `Window` Objects.
- Write a method `isHit` that gets *(x,y)* coordinates and checks whether this point is inside the rectangle. 
- Let the user enter *(x,y)​* coordinates, then print out the program name if there is a window at this position.

---



**Assignment (Array of circles):**
Imagine a funny GUI with circular windows.

---












