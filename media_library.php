#!/usr/bin/php-cgi
<?php
require_once ('header_functions.php');
session_id('1');
?>

<!DOCTYPE html>
<html>
<head>
    <title>Media Library</title>

    <div style="float:right;">
        <form action="logout.php" method="POST">
            <button type="submit">Log out</button><br>
        </form>
    </div>

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

<h2>Uploads</h2>

<?php
//list all images in database
//$images = Media::getAllImages();
//foreach ($images as $img) {
//    $path = str_replace(HOME_URL, HOME_PATH, $img['path']);
//    if(file_exists($path)){
//        echo '<img src='.$img["path"].' alt="test" width="500" height="333"><h3>'.$img['caption'].'</h3>';
//    }
//}

//List all images for account logged in
$images = Media::getMediaByAccount($_SESSION['account_id']);
if($images!= false){
    foreach ($images as $img) {
        $path = str_replace(HOME_URL, HOME_PATH, $img['path']);
        if(file_exists($path)){
            echo '<img src='.$img["path"].' alt="test" width="500" height="333"><h3>'.$img['caption'].'</h3>';
        }
    }
}
?>
<h1>Create new website</h1>

<form action="site.php" method="POST" enctype="multipart/form-data">
    <label for="siteName"><b>Website Name</b></label>
    <input type="text" placeholder="Enter Website Name" name="siteName" required>

    <button type="submit" name="submit">WEBSITE</button>
</form>

<body>


</html>