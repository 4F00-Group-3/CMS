<?php

class Dbh{
    private $dbServername;
    private $dbUsername;
    private $dbPassword;
    private $dbName;
    private $charset;


    public function connect(){
        $this->dbServername= "localhost";
        $this->dbUsername= "caseymorgado";
        $this->dbPassword= "cutierox09";
        $this->dbName= "caseymorgado";
        $this->charset= "utf8mb4";

        try{
            $dsn = "pgsql:host=".$this->dbServername.";port=5432;dbname=".$this->dbName
            .";user=".$this->dbUsername.";password=".$this->dbPassword;
            $pdo = new PDO($dsn);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // if get error, call exception
            return $pdo;
        }catch (PDOException $e){
            echo "Connection failed: ".$e->getMessage();
        }


    }


}
