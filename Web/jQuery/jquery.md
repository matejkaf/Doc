# Quellen

- [jQuery Learning Center](https://learn.jquery.com)
- [Introduction to jQuery](http://ejohn.org/apps/workshop/intro/#0)
-[Try jQuery](http://try.jquery.com)


# Basics

[Download jQuery](http://jquery.com/download/)

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Demo</title>
</head>
<body>
    <a href="http://jquery.com/">jQuery</a>
    <script src="jquery.js"></script>
    <script>
 
    $( document ).ready(function() {
        $( "a" ).click(function( event ) {
            alert( "no link any more" );
            event.preventDefault();
        });
    });
 
    </script>
</body>
</html>
```

