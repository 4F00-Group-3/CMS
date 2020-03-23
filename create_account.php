#!/usr/bin/php-cgi
<?php 
/**
 * To do: implement JavaScript to validate fields before submit, display error message, etc
 */

//set this to 1 so we don't infintely redirect to login.php
//session_id('1');
require_once ('header_functions.php');

$functions = array('createAccount');

if(isset($_POST['function']) && in_array($_POST['function'], $functions)){
    $_POST['function']();
}

function createAccount(){
    if (!empty($_POST)) {
        $account = Account::addAccount($_POST['email'], $_POST['first_name'], $_POST['last_name'], 'ADMIN', $_POST['password']);
        if (!$account) {
            echo 'There was a problem creating your account!';
        } else {
            echo 'Account created!';
        }
    }
}
