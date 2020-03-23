<?php

class Website{

    private $account_id;
    private $schema;
    private $website_id;
    private $path;
    private $name;

    function __construct($account_id, $website_id, $schema, $path, $name){
        $this->account_id = $account_id;
        $this->website_id = $website_id;
        $this->schema = $schema;
        $this->path = $path;
        $this->name = $name;
    }



    public static function createWebsite($accountId, $path, $siteName){
//        $accountId = "1";
//        $path = "testpath3";
//        $siteName = "Test Name";

        // Insert website data
        $stmt = Dbh::connect()
            ->PREPARE('INSERT INTO websites(account_id, path, site_name) VALUES(:accountId, :path, :siteName)');
        $stmt->bindValue(':accountId', $accountId);
        $stmt->bindValue(':path', $path);
        $stmt->bindValue(':siteName',$siteName);
        $stmt->execute();

        // Gather Schema data from website data
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM websites WHERE account_id=? AND path=?");
        $stmt->execute([$accountId, $path]);
        if($stmt->rowCount()){
            $row = $stmt->fetch();
        }else{
            return "Incorrect Website Credentials!";
        }

        //Create Schema
        $schemaName = 'website'.$row['website_id'];
        $schemaStmt = Dbh::connect()
            ->PREPARE('CREATE SCHEMA '.$schemaName);
        $schemaStmt->execute();


        $schemaUsers= $schemaName.".users";
        $schemaPages= $schemaName.".pages";

        //Create pages and users tables
        $schemaStmt = Dbh::connect()
            ->PREPARE('CREATE TABLE '.$schemaUsers.'(
            user_id SERIAL PRIMARY KEY NOT NULL,
            first_name text NOT NULL,
            last_name text NOT NULL,
            password varchar(255) NOT NULL,
            email text NOT NULL,
            user_type text NOT NULL)');
        $schemaStmt->execute();

        $schemaStmt = Dbh::connect()
            ->PREPARE('CREATE TABLE '.$schemaPages.'(
            pages_id SERIAL PRIMARY KEY NOT NULL,
            name text NOT NULL,
            file text NOT NULL)');
        $schemaStmt->execute();
        return "Success!";
    }

    // Retrieve all users from website
    public static function getAllUsers($schema){
        $stmt = Dbh::connect()
            ->query("SELECT * FROM $schema.users");
        while ($row = $stmt->fetch()){
            $firstName[] = $row['first_name'];
        }
        return $firstName;
    }

    // Retrieve user from website by arguments
    public static function getUsersWithCountCheck($schema, $email, $psword){
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM $schema.users WHERE email=? AND password=?");
        $stmt->execute([$email, $psword]);

        if($stmt->rowCount()){
            while ($row = $stmt->fetch()){
                return $row;
            }
        }else{
            return "Incorrect credentials!";
        }
    }

    // Add user to website
    public static function addUser($schema){
        $firstName = "Casey";
        $lastName = "Morgado";
        $password = "test321";
        $email = "casey981@live.com";
        $userType = "ADMIN";

        $stmt = Dbh::connect()
            ->PREPARE('INSERT INTO $schema.users(first_name, last_name, password, email, user_type) VALUES(:firstName, :lastName, :password, :email, :userType)');
        $stmt->bindValue(':firstName', $firstName);
        $stmt->bindValue(':lastName', $lastName);
        $stmt->bindValue(':password',$password);
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':userType', $userType);

        $stmt->execute();
    }

    public static function getAllPages($schema){
        $stmt = Dbh::connect()
            ->query("SELECT * FROM  $schema.pages");
        while ($row = $stmt->fetch()){
            $name[] = $row['page_name'];
        }
        return $name;
    }

    public static function getAllPagesJSON($schema){
        $stmt = Dbh::connect()->query("SELECT * FROM  $schema.pages");
        $pages = array();
        if($stmt->rowCount()){
            while ($row = $stmt->fetch()) {
                $pages[] = $row;
            }
            return $pages;
        }
        else{
                return false;
            }
    }

    public static function getPagesWithCountCheck($schema, $page_id){
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM $schema.pages WHERE pages_id=?");
        $stmt->execute([$page_id]);

        if($stmt->rowCount()){
            while ($row = $stmt->fetch()){
                return $row;
            }
        }else{
            return "Incorrect credentials!";
        }
    }

    public static function addPage($schema){
        $pageName = "TestName";
        $file = "index.php";

        $stmt = Dbh::connect()
            ->PREPARE('INSERT INTO $schema.pages(page_name, file) VALUES(:pageName, :file)');
        $stmt->bindValue(':name', $pageName);
        $stmt->bindValue(':file', $file);

        $stmt->execute();
    }

    public static function addPageJSON($schema, $content, $pageName){
        $data = array($content, $pageName);
		$stmt = Dbh::connect() ->PREPARE("INSERT INTO $schema.pages (content, name) VALUES (?, ?) ON CONFLICT DO NOTHING RETURNING page_id");
		$stmt->execute($data);

		return $stmt->fetch(PDO::FETCH_ASSOC)['page_id'];
    }

    public static function deletePage($schema, $pageId=0){
        $stmt = Dbh::connect()->PREPARE("DELETE FROM $schema.pages WHERE page_id=?");
		$stmt->execute([$pageId]);

		return $stmt->rowCount();
    }

}