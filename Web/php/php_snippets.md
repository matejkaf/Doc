# Generel

```php
// Import
require_once 'htl_job_global.php';

<?= $a ?>
//als Kurzform für
<?php echo $a; ?>

die(1);
die('Error Text');
```

```php
$_SERVER['SERVER_NAME']
```



# Strings

```php
$s1 = "abc";
$s2 = 'xyz';
$s3 = $s1 . 'wow';
$s1 .= '<br>';
```

# Datenstrukturen

```php
$arr = [1,2,3];
$arr[] = 4; // append
echo count($arr); // array length
echo implode(', ', $arr); // string mit Trenner
```

```php
$data = [
			'userName' => $_POST['userName'],
			'firstName' => $_POST['firstName'],
			'lastName' => $_POST['lastName'],
			'email' => $_POST['email'],
        ];

// test for content
if(!isset($data[email])) { 
    $data[email] = 'default@foo.com';
}
```

# Loop

```php
<ul>
  <?php foreach($databaseTest as $row): ?>
      <li>Hello, <?= $row->name ?></li>
  <?php endforeach; ?>
</ul>
```

oder so:

```php
<ul>
  <?php 
  foreach($databaseTest as $row) {
    echo "<li>Hello, $row->name</li>";
  }
  ?>
</ul>
```

```php
<?php 
for ($x = 0; $x <= 100; $x+=10) {
    echo "The number is: $x <br>";
} 
?>
```



# Formular (mit Daten)

```php
<?php
    // form data present?
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $formName = htmlspecialchars($_POST['name']);
        $formAge = (int)$_POST['age'];
    } 
?>

<form action="form01.php" method="post">
 <p>Your name: <input type="text" name="name" value="<?=$formName?>" /></p>
 <p>Your age: <input type="text" name="age" value="<?=$formAge?>" /></p>
 <p><input type="submit" /></p>
</form>
```

Link der Seite auf sich selbst:
```html
<form action="<?=htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
```

# Variablen vom query String


```php
//`http://www.example.com/foo.php?id=42`
$_GET['id']
// Test ob vorhanden
if($_GET['id']) {

}
```


# Funktionen

```php
// general
function foo($arg_1, $arg_2, /* ..., */ $arg_n) {
    echo "Example function.\n";
    return $retval;
}

// globale variablen
$myglob = 42;
function bar() {
    global $myglob;
    $a = $myglob * 2;
}
```

```php
// call-by-reference
function add_some_extra(&$string) {
    $string .= 'and something extra.';
}
$str = 'This is a string, ';
add_some_extra($str);
echo $str;    // outputs 'This is a string, and something extra.'
```

```php
// argument default values
function makeyogurt($flavour, $type = "acidophilus") {
    return "Making a bowl of $type $flavour.\n";
} 
echo makeyogurt("raspberry");   // works as expected
```

```php
// Variable functions
$func = 'foo';
$func();        // This calls foo()
```
[siehe](https://www.php.net/manual/en/functions.variable-functions.php)

Es gibt auch [anonyme Funktionen](https://www.php.net/manual/en/functions.anonymous.php) (=Lambda expressions).

# Klassen

```php
class MyClass {
    private $a = NULL;
    public $b = NULL;
    public function __construct() {
        $this->b = "abc";
    }    
    public function foo() {
        $this->a = 42;
        self::bar();
    }
    public static function bar() {}
}
```

```php
$mc = new MyClass();
$mc->foo();
MyClass::bar();
```

# JSON API

```php
<?php 
header('Content-Type: application/json');
$response_data = ['cmd'=>$_GET['cmd'], 'data'=>42];
echo json_encode($response_data);
?>
```

# Files

```php
// create subdir if not existing
if (!file_exists($subdir)) {
    mkdir($subdir, 0777, true);
}

copy($path, $target_file);

```

Path information:
```php
$path_parts = pathinfo('/www/htdocs/inc/lib.inc.php');

echo $path_parts['dirname'], "\n";      // /www/htdocs/inc
echo $path_parts['basename'], "\n";     // lib.inc.php
echo $path_parts['extension'], "\n";    // php
echo $path_parts['filename'], "\n";     // lib.inc
```

# Datenbank Zugriff

[(The only proper) PDO tutorial](https://phpdelusions.net/pdo)

 

```php
$database_host = 'localhost';
$dsn="mysql:host={$database_host};dbname=htl_job_2019;charset=utf8mb4";
$dbh = new PDO( $dsn, 'user', 'pass');
$sql = 'SELECT * FROM `table` WHERE `id`=:id';
$stmt = $dbh->prepare($sql);
$stmt->execute(['id' => $id]);
$stmt->debugDumpParams(); // echos executed SQL statement

// single line query results (but may be called multiple times for larger result sets)
$fetchedRow = $stmt->fetch(PDO::FETCH_ASSOC); // returns an array indexed by column name as returned in your result set
echo $fetchedRow['colname'];

// multi line query results
$queryResult = $stmt->fetchAll(PDO::FETCH_ASSOC);
$ret = []; // array of usernames
foreach($queryResult as $row) {
    $ret[] = $row['username'];
}
```

## Execute content of sql file

```php
/**
 * Execute content of sql file
 * @param PDO $pdo PDO instance connected to a database.
    * @param string $path path to file with sql statements.
    * @return TRUE if success, PDO::errorInfo on error
    */
function htl_job_execute_sql_from_file($db, $path) {
    $sql = file_get_contents($path);
    $sql_result = $db->exec($sql);
    if ($sql_result === false) {
        $err = $conn->errorInfo();
        if ($err[0] !== '00000' && $err[0] !== '01000') {
            return TRUE;
        } else {
            return FALSE;
        }
    }
    return TRUE;
}
```


## Insert or update / error processing

```php
/**
 * Insert or update a record, depending on id is NULL or not
 * @return offer id
    */
public static function replaceInto($offer_data, &$ref_error) {
$ref_error = null;
$dbh = htl_job_getPDO();

$sql = "INSERT INTO htl_job_offer (id, company_id, title, description, duration, active, attachment) VALUES (:id, :company_id, :title, :description, :duration, :active, :attachment) ON DUPLICATE KEY UPDATE 
company_id=:company_id, title=:title, description=:description, duration=:duration, active=:active, attachment=:attachment";
$stmt = $dbh->prepare($sql);

if($stmt->execute($offer_data)) {
    // success
    if($dbh->lastInsertId()==0) {
        // If the row exists but NO value is updated, lastInsertId() returns 0.
        //  (https://www.php.net/manual/en/pdo.lastinsertid.php)
        return $offer_data['id'];
    } else {
        $offer_id = $dbh->lastInsertId();
        if ($stmt->rowCount()==1) {
            /* ! new row inserted
                * MySQL doc: the affected-rows value per row is 1 if the row is inserted as a new 
                * row, 2 if an existing row is updated, and 0 if an existing row is set to its 
                * current values
            */
            self::setCreationDate($offer_id);
        }

        return $offer_id;
    }
} else {
    // failure
    $ref_error = $stmt->errorInfo();
    return 0;
}
```

# POST data processing

```php

# response Body: JSON
header('Content-Type: application/json');

//Make sure that it is a POST request.
if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
    throw new Exception('Request method must be POST!');
}

// for JSON response
$dataResponse = [ 'cmd'=>'savePerson', 'success' => FALSE, 'newFileSaved' => FALSE, 'oldFileDeleted' => FALSE ];

// process form data
$company_data_untrimmed = [
    'companygroup_id' => filter_input(INPUT_POST, 'companygroup_id', FILTER_SANITIZE_STRING),
    'name' => filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING),
    'zip' => filter_input(INPUT_POST, 'zip', FILTER_SANITIZE_STRING),
    'city' => filter_input(INPUT_POST, 'city', FILTER_SANITIZE_STRING),
    'adress' => filter_input(INPUT_POST, 'adress', FILTER_SANITIZE_STRING),
    'country' => filter_input(INPUT_POST, 'country', FILTER_SANITIZE_STRING),
    'phone' => filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING),
    'fax' => filter_input(INPUT_POST, 'fax', FILTER_SANITIZE_STRING),
    'email' => filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING),
    'www' => filter_input(INPUT_POST, 'www', FILTER_SANITIZE_STRING),
    'image' => filter_input(INPUT_POST, 'image', FILTER_SANITIZE_STRING),
    'imageDelete' => filter_input(INPUT_POST, 'imageDelete', FILTER_SANITIZE_STRING),
    
];
$company_data = array_map('trim', $company_data_untrimmed);
$company_id = filter_input(INPUT_POST, 'companyId', FILTER_SANITIZE_NUMBER_INT);
$company_data['id']  = $company_id ? $company_id : null;


// imageDelete is a hidden form field, if set to 1 the file is deleted
if($company_data['imageDelete']=='1') {
    $file_to_delete = $htl_job_images_target_dir . $company_data['image'];
    if(file_exists($file_to_delete) && unlink($file_to_delete)) {
        $dataResponse['oldFileDeleted'] = TRUE;
        $company_data['image'] = null;
    } else {
        // error - ignore
    }
}


//
// process uploaded file
if(file_exists($_FILES["imageFile"]['tmp_name']) && is_uploaded_file($_FILES['imageFile']['tmp_name'])) 
{
    $path_parts = pathinfo($_FILES["imageFile"]["name"]);
    $target_file_name = uniqid($path_parts['filename'].'_', true).'.'.$path_parts['extension'];
    $target_file = $htl_job_images_target_dir . $target_file_name;

    if (move_uploaded_file($_FILES["imageFile"]["tmp_name"], $target_file)) {
        $company_data['image'] = $target_file_name;
        $dataResponse['newFileSaved'] = TRUE;
    } else {
        // error 2do
    }

}

//
// save to database
$errorInfo = null;
$company_data['id'] = Company::replaceInto($company_data, $errorInfo);
if ($company_data['id']!=0) {
    $dataResponse['success'] = TRUE;
    $dataResponse['savedData'] = $company_data; 
} else {
    $dataResponse['success'] = FALSE;
    $dataResponse['errortext'] = 'Konnte nicht in Datenbank gespeichert werden.';
    $dataResponse['errorinfo'] = $errorInfo;
}

echo json_encode($dataResponse);
```

# PHPMailer

```php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    ///////////////////////////////////////////////////////////////////////////
    // send Emails
    ///////////////////////////////////////////////////////////////////////////

    function htl_job_sendEmail($toAddress, $subject, $body, $attachment=null) {
        try {
            $mail = new PHPMailer(true);

            $mail->CharSet = 'UTF-8';
            $mail->isSMTP();
            $mail->Host = 'smtp.office365.com'; 
            $mail->Port  = 587;
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = 'tls';
            $mail->Username = 'jobboerse@htl-braunau.at';
            $mail->Password = 'Passwort!1234';

            //Recipients
            $mail->setFrom('jobboerse@htl-braunau.at', 'Sender');
            $mail->addAddress($toAddress, 'Test');

            // Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body    = $body;

            // Attachment
            if ($attachment) {
                $mail->addAttachment($attachment);
            }

            $mail->send();

        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

    }
```

# Misc

## URL Correction

```php
if  ( $ret = parse_url($url) ) {
    if ( !isset($ret["scheme"]) )  {
        $url = "http://{$url}";
    }
}
```


## Random String (password)

```php
function htl_job_rand_passwd( $length = 12, $chars = '0123456789abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' ) {
    return substr( str_shuffle( $chars ), 0, $length );
}
```

## Error Ausgaben aktivieren

Als ersten php Teil:

```php
<?php
// Fehlerausgaben aktivieren:
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
?>
```

##  Log to web-server console


```php
file_put_contents('php://stderr', print_r($foo, TRUE))
```


# 