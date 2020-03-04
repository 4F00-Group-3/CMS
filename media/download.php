#!/usr/bin/php-cgi
<!DOCTYPE html>
<html>
<head>
    <title>
    </title>
</head>
<body>
    <div>
        <h2>User Gallery</h2>
        <div>
            <?php
            include_once 'includes/dbh.inc.php';
            include_once 'includes/User.php';

            if (isset($_POST['login'])||isset($_POST['submit'])) {
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


                foreach ($user->getImages() as $img) {
//                    echo $img['path'];
                    echo '<img src='.$img["path"].' alt="test" width="500" height="333">
                        <h3>'.$img['caption'].'</h3>';
                }
            }
            ?>
        </div>
    </div>
</body>
</html>







