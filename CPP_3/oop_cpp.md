---

title: OOP in C++
---

# C++



```c++
#include <iostream>
// using namespace std;
// dann ist std:: nicht notwendig
int main()
{
  std::cout << "Hello, world!\n";
  int myAge = 35;
  cout << "I am " << myAge << " years old.";
}
```


```c++
int x; 
cin >> x; // Get user input from the keyboard
```

String Library


```c++
// Include the string library
#include <string>

// Create a string variable
string greeting = "Hello";

// concatenation
string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName;
cout << fullName;

// append
string firstName = "John ";
string lastName = "Doe";
string fullName = firstName.append(lastName);
cout << fullName;

// length
string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
cout << "The length of the txt string is: " << txt.size();


```


```c++
const x = 42;
```


```c++
bool isCodingFun = true;
bool isFishTasty = false;
```

Default Parameter


```c++
void myFunction(string country = "Norway") {
  cout << country << "\n";
}
```

pass by reference


```c++
void swapNums(int &x, int &y) {
  int z = x;
  x = y;
  y = z;
}
```

function overloading


```c++
int myFunction(int x)
float myFunction(float x)
double myFunction(double x, double y)
```

## OOP in C++

[w3schools](https://www.w3schools.com/cpp/cpp_oop.asp)

### Beispiel

Motivation für Klassen = Variablen + Methoden

- Rechteck
- [Raute](https://de.wikipedia.org/wiki/Raute) (A = 0,5 * e * f)

Berechnung von Umfang und Fläche

Einmal mit Strukturen (führt zu Namenskollision bei den Funktionen)

und einmal mit Klasse

? Argument für information hidding

- evtl. bei der Raute e, f gegeben oder a, e
- bzw. a wird gleich ausgerechnet?



### Code




```c++
class MyClass {       // The class
  public:             // Access specifier
  int myNum;        // Attribute (int variable)
  string myString;  // Attribute (string variable)
};

int main() {
  MyClass myObj;  // Create an object of MyClass

  // Access attributes and set values
  myObj.myNum = 15; 
  myObj.myString = "Some text";

  // Print attribute values
  cout << myObj.myNum << "\n"; 
  cout << myObj.myString; 
  return 0;
}
```

Methoden


```c++
class MyClass {        // The class
  public:              // Access specifier
  void myMethod() {  // Method/function defined inside the class
    cout << "Hello World!";
  }
};
```

Konstruktor


```c++
class MyClass {     // The class
  public:           // Access specifier
  MyClass() {     // Constructor
    cout << "Hello World!";
  }
};
```

Methoden außerhalb definieren


```c++
#include <iostream>
using namespace std;

class Car {
  public:
  int speed(int maxSpeed);
};

int Car::speed(int maxSpeed) {
  return maxSpeed;
}

int main() {
  Car myObj; // Create an object of Car
  cout << myObj.speed(200); // Call the method with an argument
  return 0;
}
```



Vererbung


```c++
// Base class
class Vehicle {
  public: 
  string brand = "Ford";
  void honk() {
    cout << "Tuut, tuut! \n" ;
  }
};

// Derived class
class Car: public Vehicle {
  public: 
  string model = "Mustang";
};

int main() {
  Car myCar;
  myCar.honk();
  cout << myCar.brand + " " + myCar.model;
  return 0;
}
```

public private protected

Überschreiben von Methoden


```c++
// Base class
class Animal {
  public:
  void animalSound() {
    cout << "The animal makes a sound \n" ;
  }
};

// Derived class
class Pig : public Animal {
  public:
  void animalSound() {
    cout << "The pig says: wee wee \n" ;
  }
};

// Derived class
class Dog : public Animal {
  public:
  void animalSound() {
    cout << "The dog says: bow wow \n" ;
  }
};

int main() {
  Animal myAnimal;
  Pig myPig;
  Dog myDog;

  myAnimal.animalSound();
  myPig.animalSound();
  myDog.animalSound();
  return 0;
}
```

Polymorphismus, mit `virtual`


```c++

```


```c++

```


```c++

```


```c++

```


```c++

```


```c++

```


