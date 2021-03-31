Besonderheiten von Parametern in C#.



# ref

```csharp
void Method(ref int refArgument)
{
    refArgument = refArgument + 44;
}

int number = 1; // must be initialized
Method(ref number);
Console.WriteLine(number);
```

[ref (C# Reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ref)

# out

Wie `ref` - nur keine Initilisierung notwendig

```csharp
void OutArgExample(out int number)
{
    number = 44;
}

int initializeInMethod;
OutArgExample(out initializeInMethod);
Console.WriteLine(initializeInMethod);     // value is now 44
```

[out parameter modifier (C# Reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/out-parameter-modifier)

# Named Arguments

[Named and Optional Arguments (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments)

```csharp
class NamedExample
{
    static void Main(string[] args)
    {
        // The method can be called in the normal way, by using positional arguments.
        PrintOrderDetails("Gift Shop", 31, "Red Mug");

        // Named arguments can be supplied for the parameters in any order.
        PrintOrderDetails(orderNum: 31, productName: "Red Mug", sellerName: "Gift Shop");
        PrintOrderDetails(productName: "Red Mug", sellerName: "Gift Shop", orderNum: 31);
    }

    static void PrintOrderDetails(string sellerName, int orderNum, string productName)
    {
        if (string.IsNullOrWhiteSpace(sellerName))
        {
            throw new ArgumentException(message: "Seller name cannot be null or empty.", paramName: nameof(sellerName));
        }

        Console.WriteLine($"Seller: {sellerName}, Order #: {orderNum}, Product: {productName}");
    }
}
```

# Optional Arguments

[Named and Optional Arguments (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/named-and-optional-arguments)

```csharp
public void ExampleMethod(int required, string optionalstr = "default string",
    int optionalint = 10)
{
    //...
}
ExampleMethod(42,"xyz",21);
ExampleMethod(42,"xyz");
ExampleMethod(42);
ExampleMethod(required: 21, optionalint:84);
ExampleMethod(42, optionalint:84);
```

