In einem Constraint Layout befinden sich die folgenden 2 TextView

```xml
    <TextView
        android:id="@+id/box_two_text"
        style="@style/whiteBox"
        android:layout_width="130dp"
        android:layout_height="130dp"
        android:layout_marginStart="16dp"
        android:layout_marginTop="16dp"
        android:text="@string/box_two"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/box_one_text" />

    <TextView
        android:id="@+id/box_three_text"
        style="@style/whiteBox"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="@dimen/margin_wide"
        android:layout_marginEnd="@dimen/margin_wide"
        android:text="@string/box_three"
        app:layout_constraintBottom_toTopOf="@+id/box_four_text"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toEndOf="@+id/box_two_text"
        app:layout_constraintTop_toTopOf="@+id/box_two_text" />
```

Was ist die Bedeutung von `layout_constraintStart_toEndOf` und `layout_constraintTop_toTopOf`



