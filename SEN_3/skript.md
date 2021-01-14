
# Stoffübersicht

• Sudoku
• Das n-Damenproblem
• Arrays und verkettete Listen
• Stack (mit Array) 
• Warteschlange (mit Array/Ringpuffer)
• Infix / Postfix Notation
• Binäre Suchbäume
• Rekursion
• Anwendung Rekursion bei String-Funktion (Gerhard fragen!)
• Anwendung Rekursion bei Suchbäumen 
• Mergesort / Quicksort
• Hashing



# Einleitung

Siehe Skript.

Code für Zeitmessung


# Sudoku

- Problemstellung verstehen, Lösungsidee entwickeln.
- Sensibilisieren, dass Algorithmen lange Laufzeiten haben können.
- Zeit messen.
- Verbesserten Algorithmus messen.
- space-time tradeoff.


Big O Notation

# Damenproblem

- Lösung mittels Backtracking, Algorithmus vorgegeben
- Organisation als 2-dim Array, Laufzeiten messen, Big O?
- Gleicher Algorithmus, aber bessere Datenstruktur, Verbesserung der Laufzeit?!, Big O?


# Elementare Datenstrukturen

- Array
- verk. Liste

El. Operationen: CRUD

O(n) Vergleich für:
- statisches Array mit Belegt-Kennung
- Array mit kompakter Belegung (dyn.), Spezialfall: sortiert
- verk. Liste

Suchen in O(log n) - sortiertes Array mit binary search.

# Stack

Auswertung arithmetischer Ausdruck

- in Postfix Notation
- Infix nach Postfix wandeln und dann Postfix auswerten

Für schnelle: EBNF

# Queue / Warteschlange

Array Ringpuffer Lösung

# Bäume

- Aufbau
- Suchen
- Einfügen
- Ausgabe/Traversieren mit Stack und Queue.

Ausgabe mit Stack
- (1) Lege die Wurzel (wenn vorhanden) auf den Stack
- (2) pop vom Stack
- (3) Ausgeben 
- (4) linken und rechten Knoten auf den Stack legen
- (5) gehe zu (2) bzw. beenden wenn Stack leer

Was ergibt sich für eine Reihenfolge?

Sortierte Ausgabe:

[Inorder Tree Traversal without Recursion](https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/)

 1) Create an empty stack S.
 2) Initialize current node as root
 3) Push the current node to S and set current = current->left until current is NULL
 4) If current is NULL and stack is not empty then
    a) Pop the top item from stack.
    b) Print the popped item, set current = popped_item->right
    c) Go to step 3.
 5) If current is NULL and stack is empty then we are done.

Löschen aus einem Baum.

- Einfache Fälle
- Allgemeiner Fall (schlechte und bessere Lösung)

- Balanzierte Bäume: AVL und Red-Black-Tree


# Idee: Suche eines Wegs

Labyrinth, mit Stack und Queue


# Einstieg in Java ?

Als Beispiel für die Stack / Queue Abstraktion


# Rekursion

2h
Allgemeine Einleitung
Dreieckszahl
Stack
Inneinander Verschachtelte Aufrufe
ggT

2h
- Hochzahlen
- Fibonacci Zahlen (Baum, Dynamic Programming)
- Türme von Hanoi
- Flood fill

Übungsstunden (2h):
- Rekursion bei Binär-Bäumen
   - Traversal
   - Anzahl Knoten
   - Höhe des Baumes
   - Knoten auf einer bestimmten Ebene
   - Ist Baum vollständig?


# Rekursive Sortierverfahren

divide an conquer

Für Tests:

Funktion `bool isSorted(arr, von, bis)` die feststellt ob (im Bereich) sortiert.


# Mergesort

- [Sedgewick](https://algs4.cs.princeton.edu/22mergesort/)
- [Visualisierung](https://visualgo.net/bn/sorting)

```java
    // stably merge a[lo .. mid] with a[mid+1 ..hi] using aux[lo .. hi]
    private static void merge(Comparable[] a, Comparable[] aux, int lo, int mid, int hi) {
        // precondition: a[lo .. mid] and a[mid+1 .. hi] are sorted subarrays
        assert isSorted(a, lo, mid);
        assert isSorted(a, mid+1, hi);

        // copy to aux[]
        for (int k = lo; k <= hi; k++) {
            aux[k] = a[k]; 
        }

        // merge back to a[]
        int i = lo, j = mid+1;
        for (int k = lo; k <= hi; k++) {
            if      (i > mid)              a[k] = aux[j++];
            else if (j > hi)               a[k] = aux[i++];
            else if (less(aux[j], aux[i])) a[k] = aux[j++];
            else                           a[k] = aux[i++];
        }

        // postcondition: a[lo .. hi] is sorted
        assert isSorted(a, lo, hi);
    }

    // mergesort a[lo..hi] using auxiliary array aux[lo..hi]
    private static void sort(Comparable[] a, Comparable[] aux, int lo, int hi) {
        if (hi <= lo) return;
        int mid = lo + (hi - lo) / 2;
        sort(a, aux, lo, mid);
        sort(a, aux, mid + 1, hi);
        merge(a, aux, lo, mid, hi);
    }
```


# Quicksort

Idee: Suche die Wurzel eines binären Baums.

- [Sedgewick](https://algs4.cs.princeton.edu/23quicksort/)
- [Visualisierung I](https://visualgo.net/bn/sorting)
- [Visualisierung II](https://www.toptal.com/developers/sorting-algorithms)

Dokument auf Dropbox.

```java
    // quicksort the subarray from a[lo] to a[hi]
    private static void sort(int[] a, int lo, int hi) { 
        if (hi <= lo) return;
        int j = partition(a, lo, hi);
        sort(a, lo, j-1);
        sort(a, j+1, hi);
        assert isSorted(a, lo, hi);
    }

    // partition the subarray a[lo..hi] so that a[lo..j-1] <= a[j] <= a[j+1..hi]
    // and return the index j.
    private static int partition(int[] a, int lo, int hi) {
        int i = lo;
        int j = hi + 1;
        v = a[lo]; // pivot = first element
        while (true) { 

            // find item on lo to swap
            while (a[++i] < v) {
                if (i == hi) break;
            }

            // find item on hi to swap
            while (v < a[--j]) {
                if (j == lo) break;      // redundant since a[lo] acts as sentinel
            }

            // check if pointers cross
            if (i >= j) break;

            exch(a, i, j);
        }

        // put partitioning item v at a[j]
        exch(a, lo, j);

        // now, a[lo .. j-1] <= a[j] <= a[j+1 .. hi]
        return j;
    }
```

Quicksort schlecht wenn Array teilweise schon sortiert.
Daher wird in einem ersten Schritt das Array gut gemischt (Shuffle).

[Fisher–Yates Shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)

```
-- To shuffle an array a of n elements (indices 0..n-1):
-- To shuffle an array a of n elements (indices 0..n-1):
for i from 0 to n−2 do
     j ← random integer such that i ≤ j < n
     exchange a[i] and a[j]
```

[When Random Isn't Random Enough: Lessons from an Online Poker Exploit](http://www.lauradhamilton.com/random-lessons-online-poker-exploit)

[From: ](https://www.developer.com/tech/article.php/10923_616221_2/How-We-Learned-to-Cheat-at-Online-Poker-A-Study-in-Software-Security.htm)

To illustrate this problem using a small example, we'll shuffle a deck consisting of only three cards (i.e, n=3) using the algorithm described above.
Figure 2: How not to shuffle cards

```
for (i is 1 to n)
  Swap i with random position between 1 and n 
```

Figure 2 contains the algorithm we used to shuffle our deck of three cards, and also depicts the tree of all possible decks using this shuffling algorithm. If our random number source is a good one, then each leaf on the tree in Figure 2 has an equal probability of being produced.

Given even this small example, you can see that the algorithm does not produce shuffles with equal probability. It will produce the decks 231, 213, and 132 more often than the decks 312, 321, 123. If you were betting on the first card and you knew about these probabilities, you would know that card 2 is more likely to appear than any other card. The uneven probabilities become increasingly exaggerated as the number of cards in the deck increase. When a full deck of 52 cards is shuffled using the algorithm listed above (n=52), the unequal distribution of decks skews the probabilities of certain hands and changes the betting odds. Experienced poker players (who play the odds as a normal course of business) can take advantage of the skewed probabilities.

Siehe `ShuffelTest.java`.

# Hashing


# Heap

Priority Queue

Heap Sort


