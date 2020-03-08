<?php
    include_once 'includes/dbh.inc.php';
    include_once 'includes/User.php';
    include_once 'includes/Media.php';

?>

<!DOCTYPE html>
<html>
<head>
    <title>

    </title>
</head>
<body>

<form action="download.php" method="POST" enctype="multipart/form-data">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <button type="submit" name="login">Login</button>
</form>

<form action="upload.php" method="POST" enctype="multipart/form-data">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <input type="file" name="file">

    <button type="submit" name="submit">UPLOAD</button>
</form>

<?php
////$object = new Dbh();
////$object->connect();
//$user = new User();
////$user->addUser();
//$users = $user->getAllUsers();
//echo $users[0]."\n".$users[1];
?>

</body>

</html>



