#!/usr/bin/php-cgi
<? 
/**
 * To do: implement JavaScript to validate fields before submit, display error message, etc
 */
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>

<h1>Login</h1>

<!-- Test login form -->
<div style="width:250px;">
  <h3>Login to your account</h3>
  <form action="handle_login.php" method="POST">
    <input type="text" name="email" placeholder="email" /><br>
    <input type="password" name="password" placeholder="password" /><br>
    <button type="submit" class="btn">Login</button><br>
    <a class="forgot" href="#">Forgot password?</a>
  </form>
</div><!--end log form -->

<body>
</html>