#!/usr/bin/php-cgi
<?php
require_once ('header_functions.php');

$functions = array('test', 'currentUser', 'updateUser', 'currentUserId', 'addUser', 'getAllPages', 'getAllUsers', 'getMedia', 'getPage',
    'addMedia', 'addPage', 'deletePage', 'deleteUser', 'login', 'createAccount','getWebsiteData','getAccountMedia');

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

            $response = array();
            $response['email'] = $_POST['email'];

            if ($account !== false) {
                if (password_verify($_POST['password'], $account->password)) {
                    $success = true;
                }
            }
        }
    }
    if($success === true){
        $response['accountId'] = $account->accountId;
        echo json_encode($response);
    }else{
        echo "false";
    }
    die;
}

function getWebsiteData(){
    $success = false;
    if (!empty($_POST['accountId'])) {
        $accountId = $_POST['accountId'];
        $data = Account::getWebsiteData($accountId);
        // Verify account password and set $_SESSION
        if ($data !== false) {
            $json = json_encode($data);
            $success = true;
        }
    }
    if($success === true){
        echo $json;
    }else{
        echo "false";
    }
    die;
}

function getAccountMedia(){
    $success = false;
    if (!empty($_POST['accountId'])) {
        $data = Media::getMediaByAccount($_POST['accountId']);
        if ($data !== false) {
            $json = json_encode($data);
            $success = true;
        }
    }
    if($success === true){
        echo $json;
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
    $currentUser = Account::getAccountById($_POST['accountId']);
    if($currentUser != false){
        echo json_encode($currentUser);
    } else {
        echo 'false';
    }
    
    die;
}

function updateUser(){
    $accountId = $_POST['accountId'];
    unset($_POST['accountId']);
    unset($_POST['function']);
    $success = Account::updateAccount($accountId, $_POST);

    if($success){
        echo 'true';
    } else {
        echo 'false';
    }
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
    $file = $_FILES['file'];

    $fileName = $file['name']; //"example.jpg"
    $fileTmpName = $file['tmp_name']; //browser temp name
    $fileSize = $file['size']; //in bytes
    $fileError = $file['error']; //0 means no errors
    $fileType = $file['type']; //"image/png"

    $extStartPos = strrpos($fileName, '.'); //last "." in file name
    $splitFileName = str_split($fileName, $extStartPos); //filename split at last "."
    $fileExt = $splitFileName[1]; // file extension with "." (.png)
    $fileName = $splitFileName[0]; //filename without extension

    $accountId = $_POST['accountId'];
    $fileName = filter_var($fileName, FILTER_SANITIZE_URL);

    $dir = 'uploads/'.$accountId.'/';
    $dirExists = file_exists(HOME_PATH.$dir);
    
    if(!$dirExists){ 
        //create directory and insert upload
        mkdir(HOME_PATH.$dir);
        $dest = HOME_PATH.$dir.$fileName.$fileExt;
        move_uploaded_file($fileTmpName, $dest);
    } else {
        //increment $suffix until a unique file name is created
        $suffix = 1;
        $dest = HOME_PATH.$dir.$fileName.$fileExt;
        while(file_exists($dest)){
            $dest = HOME_PATH.$dir.$fileName.$suffix.$fileExt;
            $suffix++;
        }
        //insert upload
        move_uploaded_file($fileTmpName, $dest);
    }

    //data to insert into database
    $url = str_replace(HOME_PATH, HOME_URL, $dest);
    $fileExt = str_replace('.', '', $fileExt);

    $mediaFile = Media::addImage($fileExt, $url, $accountId, time());
    if(!$mediaFile){
        echo 'false';
    } else {
        echo 'true';
    }
    die;
}

function addPage(){

}

