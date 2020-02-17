<?php
include_once 'includes/Media.php';

class User extends Dbh{
    private $userId;
    private $email;
    private $firstName;
    private $lastName;
    private $type;
    private $password;
    private $images;

    function __construct($userId, $email, $firstName, $lastName, $type,  $password) {
        $this->userId = $userId;
        $this->email = $email;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->type = $type;
        $this->password = $password;
        $this->images = Media::getAllImages($userId);
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @return mixed
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * @return mixed
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @return mixed
     */
    public function getUserId()
    {
        return $this->userId;
    }


    public function uploadImage($files){
            $file = $_FILES['file'];
            $fileName = $file['name'];
            $fileTmpName = $file['tmp_name'];
            $fileSize = $file['size'];
            $fileError = $file['error'];
            $fileType = $file['type'];
            $userId = 1;

            $fileExt = explode('.',$fileName); // file extension with '.' (ex: '.jpg')
            $fileActualExt = strtolower(end($fileExt)); // file extension without '.' (ex: 'jpg')

            $allowed = array('jpg', 'jpeg','png', 'pdf');

            if(in_array($fileActualExt,$allowed)){
                if($fileError===0){
                    if($fileSize < 1000000){
//                $fileNameNew = uniqid('',true).".".$fileActualExt;// for files with same name
                        $fileDestination = 'uploads/'.$userId.'/'.$fileName;
                        $check = move_uploaded_file($fileTmpName, $fileDestination);
                        if($check != true){
                            mkdir('uploads/'.$userId);
                            $check = move_uploaded_file($fileTmpName, $fileDestination);
                        }
                        $media = new Media();
                        $media->addImage(1,$fileActualExt,$fileDestination,"rawrXD");
                        header("Location: download.php?uploadsuccess");
                    }else{
                        echo "Your file is too big.";
                    }

                }else{
                    echo("There was an error uploading your file");
                }
            }
            else{
                echo"You cannot upload files of this type!";
            }
        }
}


    class UserDB extends Dbh{


    public static function getAllUsers(){
        $stmt = Dbh::connect()
            ->query("SELECT * FROM users");
        while ($row = $stmt->fetch()){
            $firstName[] = $row['first_name'];
        }
        return $firstName;
    }

    public static function getUsersWithCountCheck($email, $psword){
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM users WHERE email=? AND password=?");
        $stmt->execute([$email, $psword]);

        if($stmt->rowCount()){
            while ($row = $stmt->fetch()){
                return $row;
            }
        }else{
            return "Incorrect credentials!";
        }
    }

    public static function addUser(){
        $firstName = "Casey";
        $lastName = "Craziez";
        $password = "test321";
        $email = "casey981@live.com";
        $userType = "ADMIN";

        $stmt = Dbh::connect()
            ->PREPARE('INSERT INTO users(first_name, last_name, password, email, user_type) VALUES(:firstName, :lastName, :password, :email, :userType)');
        $stmt->bindValue(':firstName', $firstName);
        $stmt->bindValue(':lastName', $lastName);
        $stmt->bindValue(':password',$password);
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':userType', $userType);

        $stmt->execute();
    }

}