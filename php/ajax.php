#!/usr/bin/php-cgi
<?php
require_once ('header_functions.php');

$functions = array('test', 'currentUser', 'currentUserId', 'addUser', 'getAllPages', 'getAllUsers', 'getMedia', 'getPage',
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
    // if(isset($_POST['addMedia'])){
        $files = $_FILES['file']; //all files
        $file_count = (!empty($files['name'][0])? count($files['name']): 0);
        echo '<pre>'.print_r($files, true).'</pre>';
        //for now, redirect back to media library if there are no files
    //     if(!$file_count){
    //         header("Location: ".HOME_URL."media_library.php");
    //         die;
    //     }
    
    //     for($i=0; $i<$file_count; $i++){
    //         $fileName = strtolower($files['name'][$i]); //"example.jpg"
    //         $fileTmpName = $files['tmp_name'][$i]; //browser temp name
    //         $fileSize = $files['size'][$i]; //in bytes
    //         $fileError = $files['error'][$i]; //0 means no errors
    //         $fileType = $files['type'][$i]; //"image/png"
    
    //         $extStartPos = strrpos($fileName, '.'); //last "." in file name
    //         $splitFileName = str_split($fileName, $extStartPos); //filename split at last "."
    //         $fileExt = $splitFileName[1]; // file extension with "." (.png)
    //         $fileName = $splitFileName[0]; //filename without extension
    
    //         $allowed = array('.jpg', '.jpeg','.png', '.pdf');
    //         if(!in_array($fileExt,$allowed)){
    //             echo "You cannot upload files of this type!";
    //         }else if($fileError!==0){
    //             echo("There was an error uploading your file");
    //         }else if($fileSize >= 50000000){
    //             echo "Your file is too big.";
    //         }else{
    //             $accountId = getCurrentAccountId();
    //             $fileName = filter_var($fileName, FILTER_SANITIZE_URL);
    
    //             //store uploads by account id
    //             $dir = 'uploads/'.$accountId.'/';
    //             $dirExists = file_exists(HOME_PATH.$dir);
                
    //             if(!$dirExists){ 
    //                 //create directory and insert upload
    //                 mkdir(HOME_PATH.$dir);
    //                 $dest = $dir.$fileName.$fileExt;
    //                 move_uploaded_file($fileTmpName, HOME_PATH.$dest);
    //             } else {
    //                 //increment $suffix until a unique file name is created
    //                 $suffix = 1;
    //                 $dest = $dir.$fileName.$fileExt;
    //                 while(file_exists($dest)){
    //                     $dest = $dir.$fileName.$suffix.$fileExt;
    //                     $suffix++;
    //                 }
    //                 //insert upload
    //                 move_uploaded_file($fileTmpName, HOME_PATH.$dest);
    //             }
    
    //             //data to insert into database
    // //            $url = HOME_PATH.$dest;
    //             $fileExt = str_replace('.', '', $fileExt);
    // //            $unixDate = time();
    
    //             $mediaFile = Media::addImage($fileExt, $dest, $accountId);
    //             if(!$mediaFile){
    //                 echo 'There was a problem uploading your file!';
    //               } else {
    //                 echo 'Upload complete!';
    //                 echo '<img src='.$mediaFile->path.' alt="test" width="500" height="333"><h3>'.$mediaFile->caption.'</h3>';
    //             }
    //         }
    //     }
    // }
}

function addPage(){

}

