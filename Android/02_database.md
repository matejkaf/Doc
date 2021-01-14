---
title: Datenbankzugriff in in Android/Kotlin
cmds: ['md_html.bash --small']
---

# SQLite

SQL Refresh: [SQL primer](https://developer.android.com/courses/extras/sql-primer)

Code Quelle: [Save data using SQLite](https://developer.android.com/training/data-storage/sqlite)

## Code - SQLite



```kotlin
package at.htlbraunau.sqlitetest2

import android.content.ContentValues
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.BaseColumns
import android.util.Log
import android.view.View
import android.widget.Button

// object = singleton
// https://kotlinlang.org/docs/reference/object-declarations.html#object-declarations
object MusicDbContract {
    const val DATABASE_NAME = "musicDB"
    const val DATABASE_VERSION = 1
    object SongEntry : BaseColumns {
        const val TABLE_NAME = "songs"
        const val COLUMN_NAME_TITLE = "title"
        const val COLUMN_NAME_ARTIST = "artist"
        const val COLUMN_NAME_YEAR = "launch"
    }
}

const val SQL_CREATE_ENTRIES =
        "CREATE TABLE ${MusicDbContract.SongEntry.TABLE_NAME} (" +
                "${BaseColumns._ID} INTEGER PRIMARY KEY," +
                "${MusicDbContract.SongEntry.COLUMN_NAME_TITLE} TEXT," +
                "${MusicDbContract.SongEntry.COLUMN_NAME_ARTIST} TEXT," +
                "${MusicDbContract.SongEntry.COLUMN_NAME_YEAR} INTEGER )"

const val SQL_DELETE_ENTRIES = "DROP TABLE IF EXISTS ${MusicDbContract.SongEntry.TABLE_NAME}"

class MusicDbHelper(context: Context)
    : SQLiteOpenHelper(context, MusicDbContract.DATABASE_NAME, null, MusicDbContract.DATABASE_VERSION)
{
    override fun onCreate(db: SQLiteDatabase) {
        db.execSQL(SQL_CREATE_ENTRIES)
    }
    override fun onUpgrade(db: SQLiteDatabase, oldVersion: Int, newVersion: Int) {
        db.execSQL(SQL_DELETE_ENTRIES)
        onCreate(db)
    }
    // alle anderen Methoden sind optional
}

class MainActivity : AppCompatActivity() {

    val dbHelper = MusicDbHelper(this)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        Log.d("MainActivity","START")
        findViewById<Button>(R.id.add_to_db).setOnClickListener {addToDB(it)}
        findViewById<Button>(R.id.list_db).setOnClickListener {listDb(it)}

    }

    fun addToDB(view: View) {
        Log.d("addToDB","START")
        val db = dbHelper.writableDatabase

        // create a ContentValue object and insert into table
        val values = ContentValues()
        values.put(MusicDbContract.SongEntry.COLUMN_NAME_TITLE, "Smoke on the Water")
        values.put(MusicDbContract.SongEntry.COLUMN_NAME_ARTIST, "Deep Purple")
        values.put(MusicDbContract.SongEntry.COLUMN_NAME_YEAR, 1972)
        val newRowId = db?.insert(MusicDbContract.SongEntry.TABLE_NAME, null, values)
        Log.d("addToDB","newRowId=${newRowId}")
    }

    fun listDb(view: View) {
        Log.d("listDb","START")
        val db = dbHelper.readableDatabase
        val sortOrder = "${MusicDbContract.SongEntry.COLUMN_NAME_YEAR} DESC"
        val cursor = db.query(
                MusicDbContract.SongEntry.TABLE_NAME,   // The table to query
                null,             // The array of columns to return (pass null to get all)
                null,              // The columns for the WHERE clause
                null,          // The values for the WHERE clause
                null,                   // don't group the rows
                null,                   // don't filter by row groups
                sortOrder               // The sort order
        )
        while(cursor.moveToNext()) {
            val id = cursor.getLong(cursor.getColumnIndex(BaseColumns._ID))
            val title = cursor.getString(cursor.getColumnIndex(MusicDbContract.SongEntry.COLUMN_NAME_TITLE))
            val artist = cursor.getString(cursor.getColumnIndex(MusicDbContract.SongEntry.COLUMN_NAME_ARTIST))
            val year = cursor.getInt(cursor.getColumnIndex(MusicDbContract.SongEntry.COLUMN_NAME_YEAR))
            val out = "${id}/${title}/${artist}/${year}"
            Log.d("listDb",out)
        }
    }

    // close DB connection as last resort
    override fun onDestroy() {
        dbHelper.close()
        super.onDestroy()
    }
}
```



# Room

Zusätzlich zur [Android Doku](https://developer.android.com/training/data-storage/room)

- build.gradle (Module:App), kann zusätzlich unten hinzugefügt werden.

```
apply plugin: 'com.android.application'
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-android-extensions'
apply plugin: 'kotlin-kapt' <-- einfügen !!!

```



- `java.lang.IllegalStateException: Room cannot verify the data integrity. Looks like you've changed schema but forgot to update the version number. You can simply fix this by increasing the version number.` 
  - App deinstallieren, long press auf app, app nach oben rechts ziehen

## Code – Room

```kotlin
package at.htlbraunau.roomtest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import androidx.room.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

@Entity
data class Song(
        @PrimaryKey(autoGenerate = true) val id: Int?,
        @ColumnInfo(name = "title") val title: String?,
        @ColumnInfo(name = "artist") val artist: String?,
        @ColumnInfo(name = "year") val year: Int?
)

@Dao
interface SongDao {
    @Query("SELECT * FROM song")
    fun getAll(): List<Song>

    @Query("SELECT * FROM song WHERE id IN (:ids)")
    fun loadAllByIds(ids: IntArray): List<Song>

    @Query("SELECT * FROM song WHERE artist LIKE :artist LIMIT 1")
    fun findByArtist(artist: String): Song

    @Query("SELECT * FROM song WHERE id LIKE :id LIMIT 1")
    fun findById(id: Int): Song

    @Insert
    fun insertAll(vararg songs: Song)

    @Delete
    fun delete(song: Song)
}

@Database(entities = arrayOf(Song::class), version = 1)
abstract class SongDatabase : RoomDatabase() {
    abstract fun songDao(): SongDao
}

class MainActivity : AppCompatActivity() {
    lateinit var db : SongDatabase
  
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        db = Room.databaseBuilder(
                applicationContext,
                SongDatabase::class.java, "songsDB"
        ).build()
        findViewById<Button>(R.id.add_button).setOnClickListener {addSong(it)}
        findViewById<Button>(R.id.list_button).setOnClickListener {listSongs(it)}
        findViewById<Button>(R.id.delete_button).setOnClickListener {deleteSong(it)}
    }

    fun addSong(view:View) {
        Log.d("addSong","START")
        // execute not in Main Thread
        GlobalScope.launch {
            db.songDao().insertAll(Song( null,"Smoke", "Deep", 1972))
        }
    }

    fun listSongs(view:View) {
        Log.d("listSongs","START")
        GlobalScope.launch {
            val songs = db.songDao().getAll()
            for (song in songs) {
                var out = "${song.id}/${song.title}/${song.artist}/${song.year}"
                Log.d("listSongs", out)
            }
        }
    }

    fun deleteSong(view:View) {
        Log.d("deleteSong", "START")
        GlobalScope.launch {
            val songToDelete = db.songDao().findById(2)
            db.songDao().delete(songToDelete)
        }
    }
}
```

