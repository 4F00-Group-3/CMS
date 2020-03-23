<?php
/**
 * Main class for establishing a database connection
 * 
 * @see Media.php
 * @see Users.php
 */
class Dbh {
	public static function connect(){
//		$dbServername= "sandcastle.cosc.brocku.ca";
//		$dbUsername= "c4f00g03";
//		$dbPassword= "Brockus12!";
//		$dbName= "c4f00g03";
//		$charset= "utf8mb4";

//        $dbServername= "sandcastle.cosc.brocku.ca";
//        $dbUsername= "cm15sp";
//        $dbPassword= "6017974";
//        $dbName= "cm15sp";
//        $charset= "utf8mb4";


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