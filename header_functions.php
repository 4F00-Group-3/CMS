<?php
/**
 * This file is for loading the necessary scripts/resources/functions that wil need to
 * be present on most pages of the site
 */

//starts the browser session
session_start(); 

//redirect to login and end session
//session_id() == 1 on pages to not check for logged in (e.g. create account, log in)
if ( !session_id() && !isset( $_SESSION['user_id']) ) {
    header("Location: https://www.cosc.brocku.ca/~c4f00g03/login.php");
    die;
}

// constants
define('DB_NAME', 'c4f00g03');
define('DB_PASS', 'Brockus12!'); 
define('DB_SCHEMA', 'c4f00g03'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...

define('HOME_URL', 'https://www.cosc.brocku.ca/~c4f00g03/');
define('HOME_PATH', '/home/student/c4f00g03/public_html/');

//includes
//HOME_PATH is used so there is no uncertainty in the file path
require_once (HOME_PATH.'includes/Dbh.php'); 
require_once (HOME_PATH.'includes/User.php');
require_once (HOME_PATH.'includes/Media.php');


function getCurrentUserId(){
    return $_SESSION['user_id'];
}

function getCurrentUser(){
    return User::getUserById($_SESSION['user_id']);
}
