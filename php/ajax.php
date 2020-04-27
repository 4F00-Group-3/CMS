#!/usr/bin/php-cgi
<?php
//import PHP constants and required files
require_once ('header_functions.php');

//array of ajax handler functions implemented below
$functions = array('test', 'currentUser', 'updateUser','currentUserId', 'addUser', 'getAllPages', 'getAllUsers', 'getMedia', 'getPage',
    'addMedia', 'addPage', 'deletePage', 'deleteUser', 'login', 'createAccount', 'createWebsite', 'getWebsiteData',
    'getPagesData','getUsersData','getAccountMedia', 'deleteUser', 'deletePage', 'deleteWebsite', 'addUser','addPage',
    'updateAccountPassword', 'confirmSubscription', 'checkWebsites', 'savePage');

//execute the function if it exists in the above array
if(isset($_POST['function']) && in_array($_POST['function'], $functions)){
    $_POST['function']();
}

/**
 * All functions below handle asynchronous HTTP requests made from the 
 * React application
 */

/**
 * Handles the "Create Account" form submission
 * 
 * @param string $_POST['email'] The new user's email
 * @param string $_POST['first_name'] The new user's first name
 * @param string $_POST['last_name'] The new user's last name
 * @param string $_POST['password'] The new user's password
 * 
 * @return string "false" on failure, otherwise the data pertaining to the new account
 */
function createAccount(){
    if (!empty($_POST)) {
        $account = Account::addAccount($_POST['email'], $_POST['first_name'], $_POST['last_name'], 'ADMIN', $_POST['password']);
        if ($account === false) {
            echo "false";
        } else {
            echo json_encode($account);
        }
    }
    die;
}

/**
 * Handles the "Create Website" form submission
 * 
 * @param string $_POST['accountId'] the ID of the logged in user
 * @param string $_POST['title'] The title of the website
 * @param string $_POST['description'] The description for the new site
 * 
 * @return string "false" on failure, otherwise the data pertaining to the new website
 */
function createWebsite(){
    if (!empty($_POST)) {
        $website = Website::createWebsite($_POST['accountId'], "sites/".$_POST['accountId']."/".$_POST['title']."/html/home.html", $_POST['title'], $_POST['description']);
        if ($website == 'duplicate'){
            echo $website;
        } else if ($website === false) {
            echo "false";
        } else {
            echo json_encode($website);
        }
    }
    die;
}

/**
 * Handles the "Delete Website" onclick
 * 
 * @param string $_POST['accountId'] the ID of the logged in user
 * @param string $_POST['websiteId'] the ID of the website to be deleted
 * 
 * @return string "false" on failure, otherwise "true"
 */
function deleteWebsite(){
    $success = Website::deleteWebsite($_POST['accountId'], $_POST['websiteId']);
    if ($success) {
        echo "true";
    } else {
        echo "false";
    }
    die;
}

/**
 * Handles the "Login" form submission
 * 
 * @param string $_POST['email'] the email of the user
 * @param string $_POST['password'] the password of the user

 * 
 * @return string "false" on failure, otherwise the data pertaining to the user
 */
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
        $response['subscription'] = $account->subscription;
        echo json_encode($response);
    }else{
        echo "false";
    }
    die;
}

/**
 * Handles the "Forgot Password" form submission
 * 
 * @param string $_POST['email'] the email of the user
 * @param string $_POST['password'] the new password of the user
 * 
 * @return string whether or not the password was changed
 */
function updateAccountPassword(){
    $success = false;
    if (!empty($_POST['email']) && !empty($_POST['password'])) {
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $success = Account::updatePassword($email, $_POST['password']);
    }
    if($success === true){
        echo "true";
    }else{
        echo "false";
    }
    die;
}

/**
 * Handler to check if the user has payed for a subscription
 *
 * @param string $_POST['accountId'] the ID of the user
 * @param string $_POST['subscription'] the subscription tier (1-3)
 * 
 * @return string whether or not the user has made a payment
 * 
 */
function confirmSubscription(){
    $success = false;
    if (!empty($_POST['accountId']) && !empty($_POST['subscription'])) {
        $success = Account::confirmSubscription($_POST['accountId'], $_POST['subscription']);
    }
    if($success === true){
        echo "true";
    }else{
        echo "false";
    }
    die;
}

/**
 * Handler for the getting the data pertaining to a selected website
 * 
 * @param string $_POST['accountId'] the ID of the user
 * 
 * @return string "false" on failure, otherwise the website data
 */
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

/**
 * Handler for the check that takes place when a user cretes a website, to check
 * if their subscription level allows them to add another site
 * 
 * @param string $_POST['accountId'] the ID of the user
 * @param string $_POST['subscription'] the subscription tier (1-3)
 * 
 * @return string whether or not the user can add a new site
 */
function checkWebsites(){
    if (!empty($_POST['accountId'])) {
        $accountId = $_POST['accountId'];
        $data = Account::checkWebsites($accountId);
    }
    if ($_POST['subscription']==="1"){
        if ($data<1){
            echo "true";
        }else
            echo "false";
    }else if ($_POST['subscription']==="2"){
        if ($data<3)
            echo "true";
        else
            echo "false";
    }else if ($_POST['subscription']==="3") {
        if ($data < 5)
            echo "true";
        else
            echo "false";
    }
    die;
}

/**
 * Returns the pages belonging to a particular website
 * 
 * @param string $_POST['websiteId'] the ID of the website
 * 
 * @return string "false" on failure, or the page data
 */
function getPagesData(){
    $success = false;
    if (!empty($_POST['websiteId'])) {
        $schema = "website".$_POST['websiteId'];
        $data = Website::getAllPages($schema);
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

/**
 * Returns the users belonging to a particular website
 * 
 * @param string $_POST['websiteId'] the ID of the website
 * 
 * @return string "false" on failure, or the user data
 */
function getUsersData(){
    $success = false;
    if (!empty($_POST['websiteId'])) {
        $schema = "website".$_POST['websiteId'];
        $data = Website::getAllUsers($schema);
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

/**
 * Handler for the new page onclick
 * 
 * @param string $_POST['websiteId'] the ID of the website
 * @param string $_POST['pageName'] the title of the page
 * @param string $_POST['accountId'] the ID of the logged in user
 * 
 * @return string whether the page was added
 */
function addPage(){
    $success = false;
    if (!empty($_POST['websiteId']) && !empty($_POST['pageName']) && !empty($_POST['accountId'])) {
        $schema = "website".$_POST['websiteId'];
        $data = Website::addPage($schema, $_POST['pageName'], $_POST['websiteId'], $_POST['accountId']);
        if ($data !== false) {
            $success = true;
        }
    }
    if($data == "duplicate"){
        echo $data;
    } else if($success === true){
        echo json_encode($data);
    }else{
        echo "false";
    }
    die;
}

/**
 * Adds a user to a website
 * 
 * @param string $_POST['websiteId'] the ID of the website
 * @param string $_POST['firstName'] the user's first name
 * @param string $_POST['lastName'] the user's last name
 * 
 * @return string whether the user was added
 */
function addUser(){
    $success = false;
    if (!empty($_POST['websiteId']) && !empty($_POST['firstName'])&& !empty($_POST['lastName'])
        && !empty($_POST['password'])&& !empty($_POST['email'])&& !empty($_POST['type']) ) {
        $schema = "website".$_POST['websiteId'];
        $data = Website::addUser($schema, $_POST['firstName'], $_POST['lastName'], $_POST['password'], $_POST['email'], $_POST['type']);
        if ($data !== false) {
            $success = true;
        }
    }
    if($success === true){
        echo "true";
    }else{
        echo "false";
    }
    die;
}

/**
 * Deletes a page from a website
 * 
 * @param string $_POST['websiteId'] the ID of the website
 * @param string $_POST['pageId'] the ID of the page
 * @param string $_POST['path'] the path to the page's HTML file
 * 
 * @return string whether the page was removed
 */
function deletePage(){
    $success = false;
    if (!empty($_POST['websiteId']) && !empty($_POST['pageId']) && !empty($_POST['path'])) {
        $schema = "website".$_POST['websiteId'];
        $data = Website::deletePageById($schema, $_POST['pageId'], $_POST['path']);
        if ($data !== false) {
            $success = true;
        }
    }
    if($success === true){
        echo "true";
    }else{
        echo "false";
    }
    die;
}

/**
 * Deletes a user from a website
 * 
 * @param string $_POST['websiteId'] the ID of the website
 * @param string $_POST['userId'] the ID of the user
 * 
 * @return string whether the user was removed
 */
function deleteUser(){
    $success = false;
    if (!empty($_POST['websiteId']) && !empty($_POST['userId'])) {
        $schema = "website".$_POST['websiteId'];
        $data = Website::deleteUserById($_POST['userId'],$schema);
        if ($data !== false) {
            $success = true;
        }
    }
    if($success === true){
        echo "true";
    }else{
        echo "false";
    }
    die;
}

/**
 * Handler to get all the images uploaded by a user
 * 
 * @param string $_POST['accountId'] the ID of the user
 * 
 * @return string "false" if no images, else image data
 */
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

/**
 * Handler to get info about the currently logged in user
 * 
 * @param string $_POST['accountId'] the ID of the user
 * 
 * @return string "false" if no user, else user data
 */
function currentUser(){
    $currentUser = Account::getAccountById($_POST['accountId']);
    if($currentUser != false){
        echo json_encode($currentUser);
    } else {
        echo 'false';
    }

    die;
}

/**
 * Handler to update user data
 * 
 * @param string $_POST['accountId'] the ID of the user
 * 
 * @return string whether the user's info was updated
 */
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

/**
 * Returns the pages belonging to a particular website
 * 
 * @param string $_POST['websiteId'] the ID of the website
 * 
 * @return string "false" on failure, or the page JSON data
 */
function getAllPages(){
    $success = false;
    if (!empty($_POST['websiteId'])) {
        $schema = "website".$_POST['websiteId'];
        $data = Website::getAllPagesJSON($schema);
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

/**
 * Returns all accounts that exist
 * 
 * @return string query rows or false if no data
 */
function getAllUsers(){
    $all_users = Account::getAllAccounts();
    echo json_encode($all_users);
    die;
}

/**
 * Adds an image upload to sandcastle and adds the URL to the database
 * 
 * @param string $_FILES['file'] uploaded file data
 * @param string $_POST['accountId'] the ID of the user
 * 
 * @return string whether the image was uploaded 
 */
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
        mkdir(HOME_PATH.$dir, 0701, true);
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
    $unixDate = time();

    $mediaFile = Media::addImage($fileExt, $url, $accountId);

    if(!$mediaFile){
        echo 'false';
    } else {
        echo 'true';
    }

}

/**
 * Updates the JSON data of a page 
 * 
 * @param string $_POST['data'] page name, path, contents.
 * 
 */
function savePage(){
    if (!empty($_POST) && isset($_POST['data'])) {
        $data = $_POST['data'];
        $schema = "website".$data['websiteId'];
        $pageId = $data['pageId'];
        $page = $data['page'];
        $path = $data['path'];
        $html = $data['html'];

        Website::savePage($schema, $pageId, $page, $path, $html);
    }
   
    die;
}
