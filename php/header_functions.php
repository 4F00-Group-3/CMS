#!/usr/bin/php-cgi
<?php
/**
 * This file is for loading the necessary scripts/resources/functions that wil need to
 * be present on most pages of the site
 */

//starts the browser session
//session_start();

// error_reporting(0);

//redirect to login and end session
//session_id() == 1 on pages to not check for logged in (e.g. create account, log in)
//if ( !session_id() && !isset( $_SESSION['account_id']) ) {
////    header("Location: https://www.cosc.brocku.ca/~c4f00g03/login.php");
////    header("Location: localhost/login.php");
//    die;
//}

//constants GROUP
define('DB_NAME', 'c4f00g03');
define('DB_PASS', 'Brockus12!');
//// define('DB_SCHEMA', 'c4f00g03'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...
define('HOME_URL', 'https://www.cosc.brocku.ca/~jk16qd/');
define('HOME_PATH', '/home/student/jk16qd/public_html/CMS/');

// constants PERSONAL
 //define('DB_NAME', 'cm15sp');
//  define('DB_PASS', '6017974');
 //define('DB_SCHEMA', 'public'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...
//  define('HOME_URL', 'https://www.cosc.brocku.ca/~cm15sp/');
//  define('HOME_PATH', '/home/student/cm15sp/public_html/');

//LOCAL CONSTANTS
//define('DB_NAME', 'localhost');
//define('DB_PASS', '??????');
//define('DB_SCHEMA', 'public'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...
//define('HOME_URL', 'localhost');
//define('HOME_PATH', '/Applications/XAMPP/xamppfiles/htdocs/');

//includes
//HOME_PATH is used so there is no uncertainty in the file path
require_once (HOME_PATH.'includes/Dbh.php'); 
require_once (HOME_PATH. 'includes/Account.php');
require_once (HOME_PATH.'includes/Media.php');
require_once (HOME_PATH.'includes/Website.php');


function getCurrentAccountId(){
    return $_SESSION['account_id'];
}

function getCurrentUser(){
    return Account::getAccountById($_SESSION['account_id']);
}
