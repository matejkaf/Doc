# Collections



## Array

```csharp
int[] arr = new int[] { 1, 2, 3, 4 };
for (int i = 0; i < arr.Length; i++)
{
  Console.WriteLine(arr[i]);
}
Console.WriteLine(string.Join(", ", arr));
foreach (int n in arr)
{
  Console.WriteLine($"aus arr {n}");
}
```

Klasse [System.Array](https://docs.microsoft.com/en-us/dotnet/api/system.array?view=netframework-4.8#methods): [System.Array.Resize](https://docs.microsoft.com/en-us/dotnet/api/system.array.resize?view=netframework-4.8#System_Array_Resize__1___0____System_Int32_)

```csharp
System.Array.Resize(ref arr, arr.Length+3);
Console.Write("after resize:");
foreach (int n in arr) 
{
  Console.Write($" {n}");
}
```



## List

[Generic List](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netframework-4.8)

```csharp
var names = new List<String> {
  "Ana",
  "Felipe",
  "Emillia"
};

foreach (var name in names) {
  Console.WriteLine($"Hello {name}");
}
Console.WriteLine(names[0]); // Aha! - operator overloading
Console.WriteLine(names.Count); // oh no ! - again - why not .Length?
Console.WriteLine(names.ToString());
/* ToString ist nicht so implementiert wie in Java - schade */
Console.WriteLine(string.Join(", ", names)); // so gehts halt auch
names.Add("Hans");
names.RemoveAt(1);
names[0] = "Eve";
```



## Dictionary

-   [MS Doku](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=netframework-4.8)
-   [tutorialsteacher](https://www.tutorialsteacher.com/csharp/csharp-dictionary)

```csharp
var dict = new Dictionary<string,int>();
dict["4AHELS"] = 28;
dict["1BHELS"] = 34;
foreach (KeyValuePair<string, int> item in dict) {
  Console.WriteLine("Key: {0}, Value: {1}", item.Key, item.Value);
}
System.Console.WriteLine(dict.ContainsKey("2BHELS"));
//System.Console.WriteLine(dict["2BHELS"]); // KeyNotFoundException

int resultValue;
if(dict.TryGetValue("2BHELS", out resultValue)) {
  Console.WriteLine(resultValue);
} else {
  System.Console.WriteLine("not found");
}
// initialization
var dict2 = new Dictionary<string,int>() {
  {"4AHELS", 28}, {"1BHELS", 34}
};
```



## Div

`IList<T>`, `IDictionary<T>`, `ISet<T>`

[Generic Collections](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic?view=netframework-4.8)

