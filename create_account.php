#!/usr/bin/php-cgi
<?php 
/**
 * To do: implement JavaScript to validate fields before submit, display error message, etc
 */

//set this to 1 so we don't infintely redirect to login.php
session_id('1');
require_once ('header_functions.php');
?>

<!-- Test signup form -->
<div style="width:300px;">
  <h3>Sign up</h3>
  <p>This is a test form, proper validation and feedback must still be implemented</p>
  <form action="" method="POST" auto>
    <input type="text" name="first_name" placeholder="first name" /><br>
    <input type="text" name="last_name" placeholder="last name" />
    <input type="text" name="email" placeholder="email" /><br>
    <input type="password" name="password" placeholder="password" />
    <input type="password" name="password2" placeholder=" confirm password" /><br> 
    <button type="submit" class="btn">Create Account</button><br>
    <a class="forgot" href="#">Forgot password?</a>
  </form>
</div><!--end log form -->

<?php
if ( ! empty( $_POST ) ) {
  $user = User::addUser( $_POST['email'], $_POST['first_name'], $_POST['last_name'], 'manager', $_POST['password']);
  if(!$user){
    echo 'There was a problem creating your account!';
  } else {
    echo 'Account created!<br><a href="https://www.cosc.brocku.ca/~c4f00g03/login.php">Log in</a>';
  }
}
?>