---
title: Stack
subtitle: Lösung
subtitle: Auswerten arithmetischer Ausdrücke
tags: [solution]
---

Lösung für: Auswertung von **arithmetischen Ausdrücken**.



```java
public class StackChar {

    public void push(char c) {
        Node n = new Node(c);
        n.next = start;
        start = n;
    }
    
    public char pop() {
        char c = start.data;
        start=start.next;
        return c;
    }
    
    public char peek() {
        return start.data;
    }
    
    public boolean empty() {
        if (start==null) {
            return true;
        } else {
            return false;
        }
    }
            
    private Node start;
    
    private class Node {
        public Node(char data) {
            this.data = data;
        }
        char data;
        Node next;
    }
    
}

```


```java
public class StackInt {
  public void push(int c) {
        Node n = new Node(c);
        n.next = start;
        start = n;
    }
    
    public int pop() {
        int c = start.data;
        start=start.next;
        return c;
    }
    
    public boolean empty() {
        if (start==null) {
            return true;
        } else {
            return false;
        }
    }
            
    private Node start;
    
    private class Node {
        public Node(int data) {
            this.data = data;
        }
        int data;
        Node next;
    }  
}

```


```java
public class Main {

    public static void main(String[] args) {
        StackChar sc = new StackChar();
        StackInt si = new StackInt();
        String expr = "(2+3*4)";

        for (int i = 0; i < expr.length(); i++) {
            char ch = expr.charAt(i);
            if (ch == '(') {
                sc.push(ch);
            }
            if (Character.isDigit(ch)) {
                si.push(Integer.parseInt("" + ch));
            }
            if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
                if( prio(sc.peek())>=prio(ch)) {
                    int r = si.pop();
                    int l = si.pop();
                    si.push(calc(sc.pop(),l,r));
                }
                sc.push(ch);
            }
            if (ch == ')') {
                char op;
                while ((op = sc.pop()) != '(') {
                    int r = si.pop();
                    int l = si.pop();
                    si.push(calc(op,l,r));
                }
            }
        }
        System.out.println("Ergebnis=" + si.pop());
    }

    public static int calc(char op, int l, int r) {
        int e=0;
        if (op == '+') {
            e = l + r;
        } else if (op == '-') {
            e = l - r;
        } else if (op == '*') {
            e = l * r;
        } else if (op == '/') {
            e = l / r;
        }
        return e;
    }

    public static int prio(char c) {
        if (c == '(') {
            return 0;
        }
        if (c == '+' || c == '-') {
            return 1;
        }
        if (c == '*' || c == '/') {
            return 2;
        }
        return -1;
    }
}

```


