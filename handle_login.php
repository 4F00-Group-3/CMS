#!/usr/bin/php-cgi
<?php
//set this to 1 so we don't infintely redirect to login.php
session_id('1');
require_once ('header_functions.php');

$success = false;
if ( ! empty( $_POST ) ) {
    if ( ! empty( $_POST['email'] ) && ! empty( $_POST['password'] ) ) {
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $user = User::getUserByEmail($email);

        // Verify user password and set $_SESSION
        if($user !== false){
            // echo '<pre>'.var_export(print_r($user, true)).'</pre>';
            if ( password_verify( $_POST['password'], $user->password ) ) {
                $_SESSION['user_id'] = $user->userId;
                $success = true;
            }
        }
    }
}


if(!$success){
    echo 'login fail<br><a href="https://www.cosc.brocku.ca/~c4f00g03/login.php">Log in</a>';
    die;
} else { ?>
    <p style="float:left;">If you are reading this you should be logged in</p>

    <div style="float:right;">
        <form action="logout.php" method="POST">
        <button type="submit">Log out</button><br>
        </form>
    </div>
<?php 
}