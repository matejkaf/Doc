---
title: Android Zwei-Operanden Rechner (Lösung)
cmds: []
tags: [solution]
---

---

```xml
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <EditText
        android:id="@+id/zahl1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:autofillHints=""
        android:ems="10"
        android:inputType="textPersonName"
        android:text="@string/zahl1"
        android:textAlignment="center" />

    <EditText
        android:id="@+id/zahl2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:autofillHints=""
        android:ems="10"
        android:inputType="textPersonName"
        android:text="@string/zahl2"
        android:textAlignment="center" />

    <Button
        android:id="@+id/rechne"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/RECHNE" />


    <TextView
        android:id="@+id/plusrechnung"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/plusrechnung" />

    <TextView
        android:id="@+id/minusrechnung"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/minusrechnung" />

    <TextView
        android:id="@+id/malrechnung"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/malrechnung" />

    <TextView
        android:id="@+id/geteiltrechnung"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/geteiltrechnung" />

    <TextView
        android:id="@+id/ErrorMessage"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/errorMessage" />

    <RadioGroup
        android:layout_width="match_parent"
        android:layout_height="match_parent" >

        <RadioButton
            android:id="@+id/binary"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="@string/binaryradio" />

        <RadioButton
            android:id="@+id/hex"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="@string/hexradio" />

        <RadioButton
            android:id="@+id/decimal"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:checked="true"
            android:text="@string/decimalradio" />
    </RadioGroup>

</LinearLayout>
```

```kotlin
package com.example.rechner

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.inputmethod.InputMethodManager
import android.widget.Button
import android.widget.EditText
import android.widget.RadioButton
import android.widget.TextView
import org.w3c.dom.Text

class MainActivity : AppCompatActivity() {




    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val zahl1 = findViewById<EditText>(R.id.zahl1)
        val zahl2 = findViewById<EditText>(R.id.zahl2)



        val button: Button = findViewById(R.id.rechne)



        val plusrechnung: TextView = findViewById(R.id.plusrechnung)
        val minusrechnung: TextView = findViewById(R.id.minusrechnung)
        val malrechnung: TextView = findViewById(R.id.malrechnung)
        val geteiltrechnung: TextView = findViewById(R.id.geteiltrechnung)

        var ErrorMessage: TextView = findViewById(R.id.ErrorMessage)






        button.setOnClickListener {

            var operand1 = GetInt(zahl1.text.toString())
            var operand2 = GetInt(zahl2.text.toString())


            if((operand1 != -1) && (operand2 != -1)){


                var ergebnisplus = operand1 + operand2
                ErrorMessage.setText(ergebnisplus.toString())


                var stringplus = zahl1.text.toString().plus("+").plus(zahl2.text.toString()).plus("=").plus(ergebnisrichtigformat(ergebnisplus))

                var ergebnisminus = operand1 - operand2
                var stringminus = zahl1.text.toString().plus("-").plus(zahl2.text.toString()).plus("=").plus(ergebnisrichtigformat(ergebnisminus))

                var ergebnismal = operand1 * operand2
                var stringmal = zahl1.text.toString().plus("*").plus(zahl2.text.toString()).plus("=").plus(ergebnisrichtigformat(ergebnismal))



                if(operand2 != 0){
                    var ergebnisgeteilt = operand1 / operand2
                    geteiltrechnung.setText(zahl1.text.toString().plus("/").plus(zahl2.text.toString()).plus("=").plus(ergebnisrichtigformat(ergebnisgeteilt)))

                }else{
                    geteiltrechnung.text = "Geteilt durch 0 nicht möglich!"
                }

                plusrechnung.setText(stringplus)
                minusrechnung.setText(stringminus)
                malrechnung.setText(stringmal)
                ErrorMessage.setText("")

            }else{


                ErrorMessage.setText("Bitte richtige Zahlen eingeben!")

            }
        }

    }

    fun ergebnisrichtigformat(ergebnis: Int): String{
        val binary: RadioButton = findViewById(R.id.binary)
        val hex: RadioButton = findViewById(R.id.hex)
        val decimal: RadioButton = findViewById(R.id.decimal)

        var string_ergebnis = ""

        if(hex.isChecked){
            string_ergebnis = ("0x").plus(java.lang.Integer.toHexString(ergebnis))
        }else if(binary.isChecked){
            string_ergebnis = ("0b").plus(java.lang.Integer.toBinaryString(ergebnis))
        }else if(decimal.isChecked){
            string_ergebnis = ergebnis.toString()
        }

        return string_ergebnis

    }

    fun  IstRichtig(zahl: String): Boolean{

        return zahl.toIntOrNull() != null

    }

    fun GetInt(zahl: String): Int{

        var moinsnString = zahl
        var moinsnInt = -1
        var ErrorMessage: TextView = findViewById(R.id.ErrorMessage)


        var nummer = -1

        if(zahl.contains("0x", ignoreCase = true)){
            moinsnString = moinsnString.replace(oldValue = "0x", newValue = "")

            try {
              	// moinsnString.toInt(16) ginge auch
                nummer = Integer.parseInt(moinsnString,16)
                return nummer

            }catch (e: Exception) {

                return -1;

            }
        }

        if(zahl.contains("0b", ignoreCase = true)){
            moinsnString = moinsnString.replace(oldValue = "0b", newValue = "")

            try {

                nummer = Integer.parseInt(moinsnString,2)
                return nummer
                ErrorMessage.setText(nummer.toString())
            }catch (e: Exception) {

                return -1;

            }

        }

        if(IstRichtig(zahl)){
            nummer = zahl.toInt()
        }else{
            nummer = -1
            return nummer
        }


        return nummer
    }



}

```

