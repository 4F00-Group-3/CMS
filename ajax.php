#!/usr/bin/php-cgi
<?php
require_once ('header_functions.php');

$functions = array('test', 'currentUser', 'currentUserId', 'addUser', 'getMedia', 'getPage', 'addMedia', 'addPage', '', 'login', 'createAccount');

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
    die;
}

function login(){
    $success = false;
    if (!empty($_POST)) {
        if (!empty($_POST['email']) && !empty($_POST['password'])) {

            $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
            $account = Account::getAccountByEmail($email);

            // Verify account password and set $_SESSION
            if ($account !== false) {
                // echo '<pre>'.var_export(print_r($account, true)).'</pre>';
                $pHash = password_hash($account->password, 1);
                if (password_verify($_POST['password'], $pHash)) {
//                    $_SESSION['account_id'] = $account->accountId;
                    $success = true;
                }
            }
        }
    }
    if($success === true){
        echo $account->accountId;
    }else{
        echo "false";
    }
    die;
}

function test(){
    $message = $_POST['message'];
    if($message == 'hello'){
        echo 'hello';
    } else {
        echo 'good bye';
    }    
    die;
}

function currentUser(){
    $currentUser = getCurrentUser();
    echo (!$currentUser ? '0' : json_encode($currentUser));
    die;
}

function currentUserId(){

}

function addUser(){
    $newUserId = User::addUser($_POST['email'], $_POST['firstName'], $_POST['lastName'], $_POST['type'], $_POST['password']);
    if($newUserId){
        echo '1';
    } else {
        echo '0';
    }

    die;
}



function getMedia(){

}

function getPage(){

}

function addMedia(){

}

function addPage(){

}