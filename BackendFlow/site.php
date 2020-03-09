#!/usr/bin/php-cgi
<?php
require_once ('header_functions.php');

if(isset($_POST['submit'])){

    $siteName = $_POST['siteName'];

    echo Website::createWebsite(getCurrentAccountId(), "testpath4", $siteName);
}
?>

<div style="float:right;">
    <button onclick="document.location = 'media_library.php'">Media Library</button>
</div>
