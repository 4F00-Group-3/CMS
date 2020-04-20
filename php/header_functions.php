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
// define('DB_NAME', 'c4f00g03');
// define('DB_PASS', 'Brockus12!');
// define('DB_SCHEMA', 'c4f00g03'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...
// define('HOME_URL', 'https://www.cosc.brocku.ca/~c4f00g03/');
// define('HOME_PATH', '/home/student/c4f00g03/public_html/');

// constants PERSONAL
// define('DB_NAME', 'cm15sp');
// define('DB_PASS', '6017974');
// //define('DB_SCHEMA', 'public'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...
// define('HOME_URL', 'https://www.cosc.brocku.ca/~cm15sp/');
// define('HOME_PATH', '/home/student/cm15sp/public_html/');

// constants PERSONAL Matt P
define('DB_NAME', 'mp16vd');
define('DB_PASS', '6053664');
define('DB_SCHEMA', 'mp16vd'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...
define('HOME_URL', 'https://www.cosc.brocku.ca/~mp16vd/');
define('HOME_PATH', '/home/student/mp16vd/public_html/');

// constants Matt A PERSONAL kind of
define('DB_NAME', 'mp16vd');
define('DB_PASS', '6053664');
define('DB_SCHEMA', 'mp16vd'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...
define('HOME_URL', 'https://www.cosc.brocku.ca/~ma15uq/');
define('HOME_PATH', '/home/student/ma15uq/public_html/');


//LOCAL CONSTANTS
//define('DB_NAME', 'localhost');
//define('DB_PASS', '??????');
//define('DB_SCHEMA', 'public'); //website specific, e.g. SELECT * FROM DB_SCHEMA.pages WHERE...
//define('HOME_URL', 'localhost');
//define('HOME_PATH', '/Applications/XAMPP/xamppfiles/htdocs/');

//includes
//HOME_PATH is used so there is no uncertainty in the file path
require_once (HOME_PATH.'includes/Dbh.php'); 
require_once(HOME_PATH . 'includes/Account.php');
require_once (HOME_PATH.'includes/Media.php');
require_once (HOME_PATH.'includes/Website.php');

function getCurrentAccountId(){
    return $_SESSION['account_id'];
}

function getCurrentUser(){
    return Account::getAccountById($_SESSION['account_id']);
}
