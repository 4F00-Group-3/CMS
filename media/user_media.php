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
<form action="upload.php" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit" name="submit">UPLOAD</button>
</form>

<?php
//$object = new Dbh();
//$object->connect();
$user = new User();
$user->addUser();
$users = $user->getAllUsers();
echo $users[0]."\n".$users[1];
?>

</body>

</html>



