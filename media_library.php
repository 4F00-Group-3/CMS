#!/usr/bin/php-cgi
<?php
require_once ('header_functions.php');
?>

<!DOCTYPE html>
<html>
<head>
    <title>Media Library</title>
</head>
<body>

<h1>Media Library</h1>

<!-- <form action="media/download.php" method="POST" enctype="multipart/form-data">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <button type="submit" name="login">Login</button>
</form> -->

<form action="upload.php" method="POST" enctype="multipart/form-data">
    <!-- <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required> -->

    <input type="file" name="file[]" multiple>

    <button type="submit" name="submit">UPLOAD</button>
</form>

<?php
//list all images
$images = Media::getAllImages();
foreach ($images as $img) {
    $path = str_replace(HOME_URL, HOME_PATH, $img['path']);
    if(file_exists($path)){
        echo '<img src='.$img["path"].' alt="test" width="500" height="333"><h3>'.$img['caption'].'</h3>';
    }
}


?>
<body>
</html>