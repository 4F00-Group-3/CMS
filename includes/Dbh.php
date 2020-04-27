<?php
/**
 * Main class for establishing a database connection
 * 
 * @see Media.php
 * @see Users.php
 */
class Dbh {

	/**
	 * creates a static database connection to use for a single query
	 */
	public static function connect(){
		/* Sandcastle credentials for different prod/dev sandcastle database */

		//group account
		$dbServername= "sandcastle.cosc.brocku.ca";
		$dbUsername= "c4f00g03";
		$dbPassword= "Brockus12!";
		$dbName= "c4f00g03";
		$charset= "utf8mb4";

		//casey
    //    $dbServername= "sandcastle.cosc.brocku.ca";
    //    $dbUsername= "cm15sp";
    //    $dbPassword= "6017974";
    //    $dbName= "cm15sp";
    //    $charset= "utf8mb4";

		//Matt P
    //    $dbServername= "sandcastle.cosc.brocku.ca";
    //    $dbUsername= "mp16vd";
    //    $dbPassword= "6053664";
    //    $dbName= "mp16vd";
    //    $charset= "utf8mb4";

		//establish a connection and return, or return error message
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
