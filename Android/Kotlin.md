



# Kotlin

[Kotlin playground](https://developer.android.com/training/kotlinplayground)

```kotlin
val y=42 // Konstante (type inferance)
var x:Int // Variable
x=3
x++
println(x)
```



```kotlin
val data = 42
println("Wert=${data}")
println("Wert="+data)
```

Datentyp-Wandlungen:

```kotlin
var x = 5
println(x.toDouble()/2)
var s : String = "123"
x = s.toInt()  // string --> int
println(x)
```

String interpolation

```kotlin
val numberOfFish = 5
val numberOfPlants = 12
val s="I have $numberOfFish fish" + " and $numberOfPlants plants"
val ss="I have ${numberOfFish + numberOfPlants} fish and plants
```

Test mit range

```kotlin
val fish = 50
if (fish in 1..100) {
    println(fish)
}
```

`when`:

```kotlin
when (numberOfFish) {
    0  -> println("Empty tank")
    in 1..39 -> println("Got fish!")
    else -> println("That's a lot of fish!")
}
```

`?` operator

```kotlin
var fishFoodTreats = 6
if (fishFoodTreats != null) {
    fishFoodTreats = fishFoodTreats.dec()
}
//...
var fishFoodTreats = 6
fishFoodTreats = fishFoodTreats?.dec()
//...
fishFoodTreats = fishFoodTreats?.dec() ?: 0
// Elvis operator - default Wert wenn null
```

```kotlin
    var x: Int = 5
    var y: Int
    var s1 = "xyz"
    println(s1.length)
    var s : String? = "1234" // ? = nullable
    s = null // nur erlaubt wenn nullable
		// s.length - nicht erlaubt (Compilerfehler!)
    println(s?.length)
    println(s?.length ?: -1) // ergibt -1 wenn s==null
    println(s!!.length) // "normale" null-pointer-exception
```

Schleifen:

```kotlin
for (i in 1..5) print(i)
⇒ 12345

for (i in 5 downTo 1) print(i)
⇒ 54321

for (i in 3..6 step 2) print(i)
⇒ 35

for (i in 'd'..'g') print (i)
⇒ defg
```

Alles ist ein Ausdruck:

```kotlin
val isHot = if (temperature > 50) true else false
```



```kotlin
fun foo() { ... }

fun test() : Int
{
    return 21
}

//------------
fun test(a:Int, b:Int=3) : Int {
    return a+b
}

fun main() {
	println(test(42,5))    
	println(test(42))    
}
```

## Range

```kotlin
val diceRange = 1..6
var randomNumber = diceRange.random()
println("Zufallszahl = ${randomNumber}")
```


## Klassen


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

```kotlin
fun main() {
  val myFirstDice = Dice(6)
  println("Your ${myFirstDice.numSides} sided dice rolled ${myFirstDice.roll()}!")

  val mySecondDice = Dice(20)
  println("Your ${mySecondDice.numSides} sided dice rolled ${mySecondDice.roll()}!")
}

// argument for the class definition
class Dice (val numSides: Int) {

  fun roll(): Int {
    return (1..numSides).random()
  }
}	
```





# Android

## Button Click

```xml
<Button
    android:id="@+id/button"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:onClick="buttonWasClicked"
    android:text="Button" 
/>
```

```kotlin
class MainActivity : AppCompatActivity() {
  private val TAG = "MainActivity"

  override fun onCreate(savedInstanceState: Bundle?) {
    val myButton=findViewById<Button>(R.id.button)
    myButton.setOnClickListener {
      buttonWasClicked(it)
    }
  }

  fun buttonWasClicked(view:View) {
    Log.d(TAG, "button pressed") // Logging, Debug Level
    val myButton = view as Button
    myButton.text = "Clicked" // change button text on click
  }
}
```



Ein Click Handler für mehrere Views:

```kotlin
private fun makeColored(view: View) {
  when (view.id) {

    // Boxes using Color class colors for the background
    R.id.box_one_text -> view.setBackgroundColor(Color.DKGRAY)
    R.id.box_two_text -> view.setBackgroundColor(Color.GRAY)
    R.id.box_three_text -> view.setBackgroundColor(Color.BLUE)
    R.id.box_four_text -> view.setBackgroundColor(Color.MAGENTA)
    R.id.box_five_text -> view.setBackgroundColor(Color.BLUE) 
    else -> view.setBackgroundColor(Color.LTGRAY)
  }
}
```



## Lambdas

[Quelle](https://antonioleiva.com/lambdas-kotlin-android/)

Click Listener mit Lambdas

```
view.setOnClickListener({ view -> toast("Hello") })
```

Easier, right? But this can be simplified even more.

**If the function’s last parameter is a function, it can go outside the parentheses**

Therefore, we can extract the listener as follows:

```
view.setOnClickListener() { view -> toast("Hello") }
```

If we had more parameters, the rest of the parameters would go inside the parentheses, even if these were functions. Only the last parameter can be extracted.

**If a function has only one parameter, and this is a function, the parentheses can be deleted**

Instead of having empty parentheses, we can better delete them:

```
view.setOnClickListener { view -> toast("Hello") }
```

This comes great for building code blocks. In this way we can define DSLs that model our own language.

A very typical example is the Kotlin reference page, where [they build a DSL to create HTML by code](https://kotlinlang.org/docs/reference/type-safe-builders.html).

**If you don’t use the parameter of a lambda, you can remove the left side of the function**

This is true if you only have one parameter. The view (`v`) isn’t being used, so we can remove it:

```
view.setOnClickListener { toast("Hello") }
```

In addition, in functions that only receive a parameter, instead of defining the left side, we could use the reserved word `it`, saving some characters.

For example, if we used the view to pass it to another method:

```
view.setOnClickListener { view -> doSomething(view) }
```

We have the option to simply use `it`:

```
view.setOnClickListener { doSomething(it) }
```