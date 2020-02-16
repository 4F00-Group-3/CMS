<?php

class User extends Dbh{

    public function getAllUsers(){
        $stmt = $this->connect()
            ->query("SELECT * FROM users");
        while ($row = $stmt->fetch()){
            $firstName[] = $row['first_name'];
        }
        return $firstName;
    }

    public function getUsersWithCountCheck(){
        $id = 1;
        $firstName = "Casey";

        $stmt = $this->connect()
            ->PREPARE("SELECT * FROM users WHERE id=? AND first_name=?");
        $stmt->execute([$id, $firstName]);

        if($stmt->rowCount()){
            while ($row = $stmt->fetch()){
                return $row['first_name'];
            }
        }
    }

    public function addUser(){
        $firstName = "Casey";
        $lastName = "Craziez";
        $password = "test321";
        $email = "casey981@live.com";
        $userType = "ADMIN";

        $stmt = $this->connect()
            ->PREPARE('INSERT INTO users(first_name, last_name, password, email, user_type) VALUES(:firstName, :lastName, :password, :email, :userType)');
        $stmt->bindValue(':firstName', $firstName);
        $stmt->bindValue(':lastName', $lastName);
        $stmt->bindValue(':password',$password);
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':userType', $userType);

        $stmt->execute();
    }

}