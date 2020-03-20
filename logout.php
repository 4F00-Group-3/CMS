#!/usr/bin/php-cgi
<?php
session_id('0');
session_start();

$_SESSION = array();
session_destroy();
header("Location: https://www.cosc.brocku.ca/~c4f00g03/login.php");
die;
?>