# Getting started

Allgemeine Übersichtsseite: [Google: Develop Android apps with Kotlin](https://developer.android.com/kotlin)

-   [Get Started](https://developer.android.com/kotlin/first)
    -   Android Basics in Kotlin (2x Apps Birthday Card und Dice Roller)
    -   Learn the Kotlin Language

Ganz einfacher Einstiegskurs in 4 Teilen: [Course: Android Basics in Kotlin](https://developer.android.com/kotlin/androidbasics)

Code aus dem ersten Teil (adaptiert)

```kotlin
fun main() {
		println("   ,,,,,   ")
    println("   |||||   ")
    println(" =========")
    println("@@@@@@@@@@@")
    println("{~@~@~@~@~}")
    println("@@@@@@@@@@@")
    println("")
    
    val age = 51
    border()
    println("you are ${age}")
    border(30)
}

fun border()
{
    repeat(40) {
        print("=")
    }
    println()
}

fun border(size: Int)
{
    repeat(size) {
        print("*")
    }
    println()
}
```



-   [Einstiegskurs Teil 2: Android Basics: Create your first Android app](https://developer.android.com/courses/pathways/android-basics-kotlin-two) – Jeder zu Hause – einige Downloads erforderlich

Das Setup dauert ein wenig – zuhause erledigen – mit dem Kurs kann man erst später weitermachen. In der Zwischenzeit Kotlin Basics:

[Tutorial: Learn the Kotlin programming language](https://developer.android.com/kotlin/learn)

[Kotlin – Language Guide – Basic Syntax](https://kotlinlang.org/docs/reference/basic-syntax.html)

Dann weiter mit dem Kurs

-   [Einstiegskurs Teil 3: Create a Birthday Card app](https://developer.android.com/codelabs/basic-android-kotlin-training-birthday-card-app?return=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-three%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-training-birthday-card-app#0) – Arbeiten mit dem Layout Editor (Video enthält keine relevanten Informationen)

-   Einstiegskurs Teil 4 – Android Basics: Add a button to an app

    -   Classes and object instances in Kotlin

      ```kotlin
      val diceRange = 1..6
      var randomNumber = diceRange.random()
      println("Zufallszahl = ${randomNumber}")
      ```

      ```kotlin
      fun main() {
          val myFirstDice = Dice()
          println(myFirstDice.sides)
          myFirstDice.roll()
      }

      class Dice {
          var sides = 6

          fun roll() {
              val randomNumber = (1..6).random()
              println(randomNumber)
          }
      }
      ```

    	Erweiterung: Anzahl der Seiten nur beim Anlegen des Objekts setzbar

      ```kotlin
    fun main() {
      val myFirstDice = Dice(6)
      println("Your ${myFirstDice.numSides} sided dice rolled ${myFirstDice.roll()}!")

      val mySecondDice = Dice(20)
      println("Your ${mySecondDice.numSides} sided dice rolled ${mySecondDice.roll()}!")
    }

    // by specifying argument for the class definition
    class Dice (val numSides: Int) {

      fun roll(): Int {
        return (1..numSides).random()
      }
    }
      ```

    -   App ... (siehe Web Seiten "codelab")
    -   Dice Roller mit Bildern im Endausbau




# Android Kotlin Fundamentals Course

- [Android Kotlin Fundamentals Course](https://codelabs.developers.google.com/android-kotlin-fundamentals/)
  - [Android Kotlin Fundamentals 01.2: Anatomy of Basic Android Project](https://codelabs.developers.google.com/codelabs/kotlin-android-training-app-anatomy/)
    - Dice Roller App, Button, Zufallszahlen
    - Mögliche Übung: Anzahl der Seiten des Würfels sind einstellbar (durch Anwender)
  - [Android Kotlin Fundamentals 01.3: Image resources and compatibility](https://codelabs.developers.google.com/codelabs/kotlin-android-training-images-compat/)
    - Bilder für den Würfel
  - [Android Kotlin Fundamentals 01.4: Learn to help yourself](https://codelabs.developers.google.com/codelabs/kotlin-android-training-available-resources/)



# Next Steps

Direkt von der Kotlin Seite

-   [Kotlin Bootcamp for Programmers](https://developer.android.com/courses/kotlin-bootcamp/overview)
-   
-   [Advanced Android in Kotlin Course](https://codelabs.developers.google.com/advanced-android-kotlin-training/)

android > developers > training (eher selber Inhalt wie obige Kurse)

-   [codelab: Android Kotlin Fundamentals](https://codelabs.developers.google.com/codelabs/kotlin-android-training-welcome/index.html?index=..%2F..android-kotlin-fundamentals#0)
    -   Lesson 1: Build your first app
    -   Lesson 2: Layouts
    -   Lesson 3: Navigation
    -   Lesson 4: Activity and fragment lifecycles
    -   Lesson 5: Architecture components
    -   Lesson 6: Room database and coroutines
    -   Lesson 7: RecyclerView
    -   Lesson 8: Connecting to the internet
    -   Lesson 9: Repository
    -   Lesson 10: Designing for everyone
-   [Advanced Android in Kotlin](https://codelabs.developers.google.com/codelabs/advanced-android-kotlin-training-welcome/index.html?index=..%2F..advanced-android-kotlin-training#0)
    -   Lesson 1: Notifications
    -   Lesson 2: Advanced Graphics
    -   Lesson 3: Animation
    -   Lesson 4: Geo
    -   Lesson 5: Testing and Dependency Injection
    -   Lesson 6: Login



# Ideen

-   Peitschen App, Beschleunigungssensor, abspielen eines Tons
-   Zugriff auf ein JSON API (Wetter?, here – reverse geocoding?)
-   Eigener API Server mit Python
-   Capstone Project?





## Resourcen

-   [Download Android Studio](https://developer.android.com/studio)

-   [Online Kotlin Playground](https://developer.android.com/training/kotlinplayground)

-   [Tutorial: Learn the Kotlin programming language](https://developer.android.com/kotlin/learn)

-   [Kotlin – Language Guide – Basic Syntax](https://kotlinlang.org/docs/reference/basic-syntax.html)

-   Clean der sehr großen Projekt-Verzeichnisse 

  ```bash
  cd <PRJ_DIR>
  sh gradlew clean
  # 24.1 MB => 2.1 MB
  ```
- 
  
    



# Journal

-   Udacity Kurs: [Developing Android Apps with Kotlin](https://classroom.udacity.com/courses/ud9012)

-   

