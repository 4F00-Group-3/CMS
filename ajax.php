#!/usr/bin/php-cgi
<?php
require_once ('header_functions.php');

$functions = array('test', 'currentUser', 'currentUserId', 'addUser', 'getAllPages', 'getAllUsers', 'getMedia', 'getPage', 'addMedia', 'addPage', 'deletePage', 'deleteUser');

if(isset($_POST['function']) && in_array($_POST['function'], $functions)){
    $_POST['function']();
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
    $newUserId = Account::addAccount($_POST['email'], $_POST['firstName'], $_POST['lastName'], $_POST['type'], $_POST['password']);
    if($newUserId){
        echo '1';
    } else {
        echo '0';
    }

    die;
}

function getAllPages(){
    $all_pages = Website::getAllPagesJSON(DB_SCHEMA);
    echo json_encode($all_pages);
    die;
}

function getAllUsers(){
    $all_users = Account::getAllAccounts();
    echo json_encode($all_users);
    die;
}

function getMedia(){

}

function getPage(){

}

function addMedia(){

}

function addPage(){
    $newPageId = Website::addPageJSON(DB_SCHEMA, $_POST['content'], $_POST['name']);
    echo $newPageId;
    die;
}

function deleteUser(){
    echo Account::deleteAccount($_POST['accountId']);
}

function deletePage(){
    echo Website::deletePage(DB_SCHEMA, $_POST['pageId']);
}