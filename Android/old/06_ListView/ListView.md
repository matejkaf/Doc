# Android List View

Ein List View in Android dient zum darstellen von Element Listen, diese sind scrollbar.

- [developer.android List View](https://developer.android.com/guide/topics/ui/layout/listview.html)


# Einfach

Einen Text pro Zeile darstellen.

```xml
<ListView
    android:id="@+id/mylistview"
    android:layout_height="wrap_content"
    android:layout_width="match_parent">
</ListView>
```

In `onCreate`:

```java
ListView listView = (ListView) findViewById(R.id.mylistview);
String[] listValues = new String[] {
        "red",
        "green",
        "blue" };

ArrayAdapter<String> adapter = new ArrayAdapter<String>(
        this,
        android.R.layout.simple_list_item_1, // Layout for the row
        android.R.id.text1, //ID of the TextView to which the data is written
        listValues // data array
);
listView.setAdapter(adapter);
```

Die Verbindung zwischen eine Zelle der ListView und den Daten wird durch einen Adapter hergestellt. 

Verwendet eine Standard Layout für ein List-Element (`simple_list_item_1`), hier besteht eine Zeile aus einer linksbündigen TextView mit der id `text1`.

Hinweis: 
Als letzter Parameter kann eine `List` (`ArrayList`, etc.) übergeben werden.

Um den Ausgabetext zu ermitteln wird für jedes Array-Element die `toString` Methode aufgerufen.


# Zweifach

Eine ListView mit 2 Zeilen Text.
[stackoverflow](http://stackoverflow.com/questions/11256563/how-to-set-both-lines-of-a-listview-using-simple-list-item-2)

```java
ArrayAdapter adapter = new ArrayAdapter<Person>(this, android.R.layout.simple_list_item_2, android.R.id.text1, persons) {
@Override    
public View getView(int position, View convertView, ViewGroup parent) {
        View view = super.getView(position, convertView, parent);
        TextView text1 = (TextView) view.findViewById(android.R.id.text1);
        TextView text2 = (TextView) view.findViewById(android.R.id.text2);
        text1.setText(persons[position].name);
        text2.setText(persons[position].age+"");
        return view;
    }
};

listView.setAdapter(adapter);
```

wobei:

```java
class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

und 

```java
Person[] persons = new Person[] {
        new Person("Max Mustermann",3),
        new Person("Eva Musterfrau",1)
};
```

# Clicks auf eine Zelle

```java
// ListView Item Click Listener
listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
    @Override
    public void onItemClick(AdapterView<?> parent, View view,
                            int position, long id) {
        int itemPosition     = position;
    }
});
```


# Änderungen

Wenn sich die dargestellten Daten ändern (oder neue Einträge gelöscht bzw. hinzugefügt wurden) muss die `notifyDataSetChanged()` Methode des Adapters aufgerufen werden.


# Freies Layout

Das Layout einer List-Zelle kann frei vorgegeben werden.
Siehe z.B. hier: [Using lists in Android wth ListView - Tutorial](http://www.vogella.com/tutorials/AndroidListView/article.html)

## Beispiel

`myrowlayout.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="horizontal"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:id="@+id/name"
        android:layout_weight="1"
        android:layout_width="0dp"
        android:layout_height="match_parent" />

    <TextView
        android:id="@+id/grade"
        android:layout_width="wrap_content"
        android:layout_height="match_parent" />

</LinearLayout>
```

Im `onCreate`

```java
ArrayAdapter adapter3 = new ArrayAdapter<Grade>(this,-1,list) {
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        LayoutInflater inflater = (LayoutInflater) MainActivity.this
                .getSystemService(MainActivity.this.LAYOUT_INFLATER_SERVICE);
        View rowView = inflater.inflate(R.layout.myrowlayout, parent, false);
        TextView textView = (TextView) rowView.findViewById(R.id.name);
        TextView gradeView = (TextView) rowView.findViewById(R.id.grade);
        Grade grade = list.get(position);
        textView.setText(grade.name);
        gradeView.setText(""+grade.grade);
        return rowView;
    }
};

listView.setAdapter(adapter3);
```