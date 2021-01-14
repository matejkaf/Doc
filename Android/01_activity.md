# Activity starten

Siehe [developer.android: Start another activity](https://developer.android.com/training/basics/firstapp/starting-activity)

- New > Empty Activity

- Start Activity

  ```kotlin
  val intent = Intent(this, SecondActivity::class.java).apply{}
  startActivity(intent)
  ```

- Werte an die neue Activity übergeben

  ```kotlin
  val intent = Intent(this, SecondActivity::class.java).apply{
    putExtra("at.htlbraunau.activitytest.text", "Hi Activity")
  }
  ```

- In der neuen Activity im `onCreate` entnehmen

  ```kotlin
  val extraText = intent.getStringExtra("at.htlbraunau.activitytest.text")
  findViewById<TextView>(R.id.textViewSecond).text =  extraText
  ```

- Doppelten String wegbringen (DRY) – Konstante `EXTRA_TEXT`:

  ```kotlin
  //MainActivity.kt
  const val EXTRA_TEXT = "at.htlbraunau.activitytest.text"
  
  class MainActivity : AppCompatActivity() {
    //...
    val intent = Intent(this, SecondActivity::class.java).apply{
      putExtra(EXTRA_TEXT, "Hi Activity")
    }
    //...
  }
  
  //SecondActivity.kt
  // definition ist global und sofort verwendebar
  val extraText = intent.getStringExtra(EXTRA_TEXT)
  ```

- Upward Navigation `android:parentActivityName` in `AndroidManifest.xml`

  ```xml
  <activity
            android:name=".SecondActivity"
            android:parentActivityName=".MainActivity">
  </activity>
  ```

  





# Daten aus Activity zurücklesen

`startActivityForResult`

Activity mit `EditText` und Submit und Cancel Button.

Szenario – Eine Activity zeigt einen fixen Text in einer TextView an. Über einen Button gelangt man zu einer zweiten Activity in der eine Text-Eingabe möglich ist. Durch einen Button kann zur ersten Activity zurückgekehrt werden und der eingegebene Text übernommen.



MainActivity.kt

```kotlin
package at.htlbraunau.activitytest

const val REQUEST_CODE_NAME = 42

class MainActivity : AppCompatActivity() {
  private val TAG = "MainActivity"

  override fun onCreate(savedInstanceState: Bundle?) {
    findViewById<Button>(R.id.startResultActivityButton).setOnClickListener {startResultActivityButtonClicked(it)}
  }

  private fun startResultActivityButtonClicked(view: View)
  {
    val intent = Intent(this, ResultActivity::class.java)
    //startActivity(intent)
    startActivityForResult(intent, REQUEST_CODE_NAME)
  }

  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    // Achtung: es gibt auch eine Variable intent!
    super.onActivityResult(requestCode, resultCode, data)
    Log.d("MainActivity", "onActivityResult ")
    when(requestCode) {
      REQUEST_CODE_NAME -> {
        Log.d("MainActivity","REQUEST_CODE_NAME")
        when(resultCode) {
          Activity.RESULT_OK -> {
            val name = data?.getStringExtra(EXTRA_NAME) ?: "NA"
            Log.d("MainActivity", "RESULT_OK name="+name)
          }
          Activity.RESULT_CANCELED -> Log.d("MainActivity", "RESULT_CANCELED")
          else -> Log.d("MainActivity", "Unknown Result Code ")
        }
      }
      else -> Log.d("MainActivity","Unknown Request Code")

    }
  }
}
```

- Der Request Code dient zum unterscheiden mehrerer Activities.
- 

ResultActivity.kt

```kotlin
package at.htlbraunau.activitytest

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.EditText

const val EXTRA_NAME = "at.htlbraunau.activityresult.name"

class ResultActivity : AppCompatActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_result)
    findViewById<Button>(R.id.submitButton).setOnClickListener {buttonClicked(it)}
    findViewById<Button>(R.id.cancelButton).setOnClickListener {buttonClicked(it)}
  }

  private fun buttonClicked(view: View)
  {
    when(view.id) {
      R.id.submitButton -> {
        // SUBMIT
        Log.d("ResultActivity","submitButton")
        val editTextName  = findViewById<EditText>(R.id.editTextName)
        val txt = editTextName.text.toString()
        Log.d("ResultActivity",txt)
        val intent = Intent().apply {
          putExtra(EXTRA_NAME, txt)
        }
        val bundle = intent.getExtras()
        Log.d("ResultActivity", "Bundle "+bundle.toString())
        setResult(Activity.RESULT_OK, intent)
        finish() // --> onActivityResult in MainActivity
      }
      R.id.cancelButton -> {
        // CANCEL
        Log.d("ResultActivity","cancelButton")
        setResult(Activity.RESULT_CANCELED)
        finish()
      }
    }

  }
}
```

- Nach finish() wird onActivityResult in der ersten Activity aufgerufen. Dort kann auf result code und auf die Extras zugegriffen werden.

activity_result.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.appcompat.widget.LinearLayoutCompat xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".ResultActivity">

    <EditText
        android:id="@+id/editTextName"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:ems="10"
        android:inputType="textPersonName"
        android:text="Name" />

    <Button
        android:id="@+id/submitButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Submit" />

    <Button
        android:id="@+id/cancelButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Cancel" />
</androidx.appcompat.widget.LinearLayoutCompat>

```







## Neu

[Getting a result from an activity](https://developer.android.com/training/basics/intents/result)

Hmm, es scheint nun ein anderer Ablauf empfohlen zu werden ist aber ziemlicht komplex:

> While the underlying [`startActivityForResult()`](https://developer.android.com/reference/android/app/Activity#startActivityForResult(android.content.Intent, int)) and [`onActivityResult()`](https://developer.android.com/reference/android/app/Activity#onActivityResult(int, int, android.content.Intent)) APIs are available on the `Activity`class on all API levels, it is strongly recommended to use the Activity Result APIs introduced in AndroidX [Activity `1.2.0-alpha02`](https://developer.android.com/jetpack/androidx/releases/activity#1.2.0-alpha02) and [Fragment `1.3.0-alpha02`](https://developer.android.com/jetpack/androidx/releases/fragment#1.3.0-alpha02).



Anderes Beispiel wo eine andere App als Activitty aufgerufen wird.





