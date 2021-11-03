# Maven

- [REPLIT Packaging Support for Java - Try Maven Packages in Your Browser](https://blog.replit.com/maven)

- [Search Maven Repository](https://search.maven.org)



# Libraries



[Awesome Java](https://github.com/akullpp/awesome-java) – Liste von Libraries, z.B:

- [ASCII Table](https://github.com/vdmeer/asciitable) - Library to draw tables in ASCII. [Maven Rep](https://search.maven.org/artifact/de.vandermeer/asciitable)
- [Web Crawler](https://github.com/yasserg/crawler4j)
- log4j – Logger



## ASCII Table

Getestet in REPLIT

```java
import de.vandermeer.asciitable.*;

class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");    
    AsciiTable at = new AsciiTable();
    at.addRule();
    at.addRow("row 1 col 1", "row 1 col 2");
    at.addRule();
    at.addRow("row 2 col 1", "row 2 col 2");
    at.addRule();
    String rend = at.render();
    System.out.println(rend);

  }
}
```

