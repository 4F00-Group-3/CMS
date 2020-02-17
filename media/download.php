<?php
include_once 'includes/dbh.inc.php';
include_once 'includes/User.php';


if (isset($_POST['login'])) {
    $email = $_POST['uname'];
    $psw = $_POST['psw'];
    $userData = UserDB::getUsersWithCountCheck($email, $psw);
    if($userData == "Incorrect credentials!"){
        header( "Location: user_media.php" );
    }else{
        echo"Logged into: ".$userData['email'];
    }
    $user = new User($userData['user_id'],$userData['email'],$userData['first_name'],$userData['last_name'],
        $userData['user_type'],$userData['password']);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>
    </title>
</head>
<body>

</body>
</html>







