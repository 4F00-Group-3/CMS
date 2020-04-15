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



    public static function createWebsite($accountId, $path, $siteName, $description){
        // Insert website data
        $stmt = Dbh::connect()
            ->PREPARE('INSERT INTO websites(account_id, path, site_name, description) VALUES(:accountId, :path, :siteName, :description)');
        $stmt->bindValue(':accountId', $accountId);
        $stmt->bindValue(':path', $path);
        $stmt->bindValue(':siteName',$siteName);
        $stmt->bindValue(':description',$description);
        $stmt->execute();

        // Gather Schema data from website data
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM websites WHERE account_id=? AND site_name=?");
        $stmt->execute([$accountId, $siteName]);
        if($stmt->rowCount()){
            $row = $stmt->fetch();
            $websiteId = array("id"=>$row['website_id']);
        }else{
            return false;
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
            path text UNIQUE NOT NULL,
            file text NOT NULL)');
        $schemaStmt->execute();


        // ADD PAGE to new schema page table
        $file[] = array(
            array("id"=>1,
                "type"=>"heading",
                "text"=>"Your Homepage",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"81px",
                    "textAlign"=>"center",
                    "fontFamily"=>"Lucida Sans Unicode", "Lucida Grande", "sans-serif")),
            array("id"=>12,"type"=>"spacer","text"=>"heading 1",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"13px",
                    "textAlign"=>"left"
                )),

            array("id"=>2,
                "type"=>"image",
                "text"=>"alt text here",
                "url"=>"https://images.unsplash.com/photo-1528557692780-8e7be39eafab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "style"=>array(
                    "width"=>"px",
                    "borderRadius"=>"5px",
                    "marginLeft"=>"0",
                    "marginRight"=>"0",
                    "marginTop"=>"0",
                    "marginBottom"=>"0",
                    "textAlign"=>"center")),

            array("id"=>3,
                "type"=>"row",
                "style"=>array(),
                "col"=>1,
                "page"=>array(
                    "id"=>"3|1",
                    "type"=>"column",
                    "style"=>array(),
                    "page"=>array())),

            array("id"=>4,
                "type"=>"row",
                "style"=>array(),
                "col"=>1,
                "page"=>array(
                    "id"=>"4|1",
                    "type"=>"column",
                    "style"=>array(),
                    "page"=>array())),

            array("id"=>13,
                "type"=>"spacer",
                "text"=>"heading 1",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"12px",
                    "textAlign"=>"left")),

            array("id"=>6,
                "type"=>"heading",
                "text"=>"Add videos and pictures to express your company's unique culture",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"38px",
                    "textAlign"=>"center",
                    "fontFamily"=>"Lucida Sans Unicode", "Lucida Grande", "sans-serif")),

            array("id"=>14,
                "type"=>"spacer",
                "text"=>"heading 1",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"12px",
                    "textAlign"=>"left")),

            array("id"=>5,
                "type"=>"video",
                "text"=>"heading 1",
                "url"=>"https://youtu.be/X4Q7d0CtYyk",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"10vh",
                    "textAlign"=>"center",
                    "height"=>"500px",
                    "width"=>"750px",
                    "margin"=>"auto",
                    "autoplay"=>"0",
                    "loop"=>"0")),
            array("id"=>11,
                "type"=>"divider",
                "text"=>"rounded divider",
                "style"=>array(
                    "borderTop"=>"8px solid #000000",
                    "borderRadius"=>"0px",
                    "width"=>"100%")),
            array("id"=>7,
                "type"=>"heading",
                "text"=>"Create custom buttons",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"43px",
                    "textAlign"=>"center",
                    "fontFamily"=>"Lucida Sans Unicode", "Lucida Grande", "sans-serif")),
            array("id"=>8,
                "type"=>"button",
                "text"=>"Your Button",
                "href"=>"#",
                "style"=>array(
                    "color"=>"#000000",
                    "backgroundColor"=>"#696969",
                    "textAlign"=>"center",
                    "border"=>"0px",
                    "borderRadius"=>"12px")),
            array("id"=>10,
                "type"=>"divider",
                "text"=>"rounded divider",
                "style"=>array(
                    "borderTop"=>"8px solid #0a0606",
                    "borderRadius"=>"0px",
                    "width"=>"100%")),
            array("id"=>9,
                "type"=>"heading",
                "text"=>"Get started by clicking an element to edit it!",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"40px",
                    "textAlign"=>"center",
                    "fontFamily"=>"Lucida Sans Unicode", "Lucida Grande", "sans-serif")),
            array("id"=>15,
                "type"=>"heading",
                "text"=>"Or, try adding other elements to the site by choosing one to the left in the editor!",
                "style"=>array(
                    "color"=>"black",
                    "fontSize"=>"22px",
                    "textAlign"=>"center",
                    "fontFamily"=>"Lucida Sans Unicode", "Lucida Grande", "sans-serif")));


        $stmt = Dbh::connect()
            ->PREPARE("INSERT INTO $schemaPages(name, file, path) VALUES(:name, :file, :path)");
        $stmt->bindValue(':name', "home.html");
        $stmt->bindValue(':file', json_encode($file));
        $stmt->bindValue(':path',"sites/".$siteName."/html/home.html" );
        $stmt->execute();
        //Check to see if page is in DB
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM $schemaPages WHERE path=?");
        $stmt->execute(["sites/".$siteName."/html/home.html"]);
        if(!$stmt->rowCount()){
            return false;
        }

        //Create backend directory and home page
        mkdir("../sites/".$siteName);
        mkdir("../sites/".$siteName."/html");
        mkdir("../sites/".$siteName."/css");
        mkdir("../sites/".$siteName."/js");
        $file = fopen("../sites/".$siteName."/html/home.html","w");
        $txt = "<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>";
        fwrite($file, $txt);
        fclose($file);
        return $websiteId;
    }

    //********************* FUNCTIONS FOR WEBSITE USERS *****************************


    // Retrieve user from website by arguments
    public static function getUsersByLogin($schema, $email, $psword){
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

    // Retrieve all users from website
    public static function getAllUsers($schema){
        $stmt = Dbh::connect()
            ->query("SELECT * FROM  $schema.users");
        $users = array();
        if($stmt->rowCount()){
            while ($row = $stmt->fetch()){
                $data = array("firstName"=>$row['first_name'],"lastName"=>$row['last_Name'],"email"=>$row['email'],"type"=>$row['user_type'], "id"=>$row['user_id']);
                $users[] = $data;
            }
            return $users;
        }else{
            return false;
        }
    }

    // Add user to website
    public static function addUser($schema, $firstName, $lastName, $password, $email, $userType){
//        $firstName = "Casey";
//        $lastName = "Morgado";
//        $password = "test321";
//        $email = "casey981@live.com";
//        $userType = "ADMIN";

        $stmt = Dbh::connect()
            ->PREPARE('INSERT INTO $schema.users(first_name, last_name, password, email, user_type) VALUES(:firstName, :lastName, :password, :email, :userType)');
        $stmt->bindValue(':firstName', $firstName);
        $stmt->bindValue(':lastName', $lastName);
        $stmt->bindValue(':password',$password);
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':userType', $userType);

        $stmt->execute();

        //Check to see if user is in DB
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM $schema.users WHERE email=? AND password=?");
        $stmt->execute([$email, $password]);
        if($stmt->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public static function deleteUserById($userId, $schema){
        $stmt = Dbh::connect()->PREPARE("DELETE FROM $schema.users WHERE user_id=?");
        $stmt->execute([$userId]);

        //Check to see if user is in DB
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM $schema.users WHERE user_id=?");
        $stmt->execute([$userId]);
        if($stmt->rowCount()){
            return false;
        }else{
            return true;
        }
    }

    //********************* FUNCTIONS FOR WEBSITE PAGES *****************************

    public static function getAllPages($schema){
        $stmt = Dbh::connect()
            ->query("SELECT * FROM  $schema.pages");
        $pages = array();
        if($stmt->rowCount()){
            while ($row = $stmt->fetch()){
                $data = array("title"=>$row['page_name'], "id"=>$row['pages_id']);
                $pages[] = $data;
            }
            return $pages;
        }else{
            return false;
        }
    }


//    public static function getAllPagesJSON($schema){
//        $stmt = Dbh::connect()
//            ->query("SELECT * FROM  $schema.pages");
//        $pages = array();
//        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
//            $pages[] = $row;
//        }
//        return $pages;
//    }

    public static function getPagesByPageId($schema, $page_id){
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

    public static function addPage($schema, $pageName, $siteId){
        //Get website name
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM websites WHERE website_id=?");
        $stmt->execute([$siteId]);
        if($stmt->rowCount()){
            $row = $stmt->fetch();
            $websiteId = array("name"=>$row['site_name']);
        }else{
            return false;
        }
        $siteName = $websiteId["name"];

        // ADD PAGE to new schema page table
        $file[] = array("source" =>"<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>");
        $path = "sites/".$siteName."/html/".$pageName.".html";
        $stmt = Dbh::connect()
            ->PREPARE("INSERT INTO $schema.pages(name, file, path) VALUES(:name, :file, :path)");
        $stmt->bindValue(':name', $pageName.".html");
        $stmt->bindValue(':file', json_encode($file));
        $stmt->bindValue(':path', $path);
        $stmt->execute();

        //Add page in server under /sites/"websiteName"/html/"pageName"
        $file = fopen("../".$path,"w");
        fwrite($file, $file["source"]);
        fclose($file);

        //Check to see if page is in DB
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM $schema.pages WHERE path=?");
        $stmt->execute([$path]);
        if($stmt->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public static function addPageJSON($schema, $content, $pageName){
        $data = array($content, $pageName);

		$stmt = Dbh::connect() ->PREPARE("INSERT INTO $schema.pages (content, name) VALUES (?, ?) ON CONFLICT DO NOTHING RETURNING page_id");
		$stmt->execute($data);

		return $stmt->fetch(PDO::FETCH_ASSOC)['page_id'];
    }

    public static function deletePageById($schema, $pageId){
        $stmt = Dbh::connect()->PREPARE("DELETE FROM $schema.pages WHERE page_id=?");
		$stmt->execute([$pageId]);

        //Check to see if user is in DB
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM $schema.pages WHERE page_id=?");
        $stmt->execute([$pageId]);
        if($stmt->rowCount()){
            return false;
        }else{
            return true;
        }
    }

}