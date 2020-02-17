<?php

class Dbh{
//    private $dbServername;
//    private $dbUsername;
//    private $dbPassword;
//    private $dbName;
//    private $charset;

    public static function connect(){
        $dbServername= "localhost";
        $dbUsername= "caseymorgado";
        $dbPassword= "cutierox09";
        $dbName= "caseymorgado";
        $charset= "utf8mb4";

        try{
            $dsn = "pgsql:host=".$dbServername.";port=5432;dbname=".$dbName
            .";user=".$dbUsername.";password=".$dbPassword;
            $pdo = new PDO($dsn);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // if get error, call exception
            return $pdo;
        }catch (PDOException $e){
            echo "Connection failed: ".$e->getMessage();
        }


    }


}
