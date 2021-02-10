---
title: Doc
tags: [assignment,challenge]
---

# Challenges – Advent Programming Contest

**Übung (Distributing the Presents):**

Every year Santa Claus faces the challenge of delivering all Christmas presents on time. Therefore to speed up the process, this year he wants to take the shortest possible trip to deliver all the presents.

**Problem**

Everything takes place on a grid map of 100x100 grid cells. There are five cities (A, B, C, D and E) that have to be visited. Find the shortest path that connects all cities. Since Santa is flying you can use the euclidian distance measure. You will be given the X and Y coordinates of each city on a grid ranging from 0 to 99 on each axis. As a result print the names of the cities in the order of their visit without spaces to stdout. Santa Clause starts from the north pole which is at the coordinates (X,Y) = (50,99). His job is done as soon as he visited the last city.

**Sample Input**

```
22,7
99,45
34,51
70,82
19,66
```

**Sample Output**

`DBCEA`


Quelle: Advent Programming Contest

---

**Übung (Order the Presents):**

Kids are always excited about big Christmas presents. Write a program that helps finding the biggest present.

You will be given a list of presents described as rectangular-shaped parcels defined by their width w, length l and height h. No dimension is bigger than 5. The input has a maximum length of 100 characters. Order the presents by their volume. Presents having a non positive volume should be ignored since they result from measurement errors. All values are given as real numbers with maximum precision of two digits after the decimal point.
Your program shall read a list dimensions w1,l1,h1,w2,l2,h2,... from stdin. Output the dimensions ordered by the volume of the present they represent to stdout. The output dimensions should have the same format as the input!


**Sample Input**

```
2.5,3,1,5,3.25,8,1,0.75,0.5,7,2,0.8
```

**Sample Output**

```
5,3.25,8,7,2,0.8,2.5,3,1,1,0.75,0.5
```
 
Quelle: Advent Programming Contest

---
