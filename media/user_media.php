#!/usr/bin/php-cgi
<?php
require_once ('../header_functions.php');
?>

<!DOCTYPE html>
<html>
<head>
    <title>

    </title>
</head>
<body>

<form action="download.php" method="POST" enctype="multipart/form-data">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <button type="submit" name="login">Login</button>
</form>

<form action="upload.php" method="POST" enctype="multipart/form-data">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <input type="file" name="file[]" multiple>

    <button type="submit" name="submit">UPLOAD</button>
</form>

