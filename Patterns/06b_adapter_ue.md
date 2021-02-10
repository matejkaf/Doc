---
title: Doc
cmds: ['md_html.bash','md_html.bash --small']
tags: [assignment, 5AHELS, patterns ]
---

# Adapter Design Pattern (Übungen)

**Übung (Graphics Adapter)**

Adaptee:

```csharp
class Graphics
{
  // coordinates of upper left corner, width and height
  public void Rectangle(int left, int top, int width, int height)
  {
    Console.WriteLine("Rectange, Left: " + left + ", Top: " + top + ", Width: " + width + ", Height: " + height);
  }
}
```

Target:

```csharp
interface IMyGraphics
{
  // coordinates of upper left corner and lower right corner
  void Rectangle(int left, int top, int right, int bottom);
}
```

Schreibe eine Adapter für diese Situation

---



