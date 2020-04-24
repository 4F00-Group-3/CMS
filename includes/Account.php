<?php
/** 
 * Implements password hashing functions from PHP 5.5
 * older versions of PHP (ie on sandcastle) have vulnerabilities in their encryption methods
 * https://github.com/ircmaxell/password_compat
*/
require_once ('encrypt_functions.php');

/**
 * Account class 
 */
class Account {
    public $accountId;
    public $email;
	public $firstName;
	public $lastName;  
	public $type;
	public $password;
	public $subscription;

	//initalize new account
	function __construct($accountId, $email, $firstName, $lastName, $type,  $password, $sub) {
        $this->accountId = $accountId;
        $this->email = $email;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->type = $type;
        $this->password = $password;
        $this->subscription = $sub;
	}

//	returns account data
	public function get_account_data() {
        return array(
            'accountId' => $this->accountId,
            'email' => $this->email,
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'type' => $this->type,
            'subscription' => $this->subscription
        );
    }
	
	//returns true if the account is a manager of the website
	public function is_admin(){
		return $this->account_type == "manager";
	}

	//returns a new Account object or false if invalid ID was given
    public static function getAccountById($account_id){
        $stmt = Dbh::connect() ->PREPARE("SELECT * FROM accounts WHERE account_id=?");
        $stmt->execute([$account_id]);
        $account = array();
        if($stmt->rowCount()){
            while ($row = $stmt->fetch()){
                $account = array("id"=>$row['account_id'], "email"=>$row['email'], "firstName"=>$row['first_name'], "lastName"=>$row['last_name'],
                    "type"=>$row['account_type'],"password"=>$row['password'],"subscription"=>$row['subscription']);
            }
            return $account;
        } else {
			return false;
		}
    }

	//returns a new Account object or false if invalid email was given
	public static function getAccountByEmail($email){
        $stmt = Dbh::connect() ->PREPARE("SELECT * FROM accounts WHERE email=?");
        $stmt->execute([$email]);

        if($stmt->rowCount()){
            $accountInfo = $stmt->fetch(PDO::FETCH_ASSOC);
            return new Account($accountInfo['account_id'], $accountInfo['email'], $accountInfo['first_name'], $accountInfo['last_name'], $accountInfo['account_type'], $accountInfo['password'], $accountInfo['subscription']);
        } else {
            return false;
        }
    }

	//add a new account to the database
	public static function addAccount($email, $firstName, $lastName, $type,  $password){
		$data = array($email, $firstName, $lastName, $type);
        
		foreach($data as $key => $field){
			$data[$key] = trim(filter_var($field, FILTER_SANITIZE_STRING));
		}

		$data[] = password_hash($password, PASSWORD_BCRYPT);

		$stmt = Dbh::connect() ->PREPARE('INSERT INTO accounts (email, first_name, last_name, account_type, password) VALUES (?, ?, ?, ?, ?) ON CONFLICT DO NOTHING RETURNING account_id');
		$stmt->execute($data);
		
		$accountId = $stmt->fetch(PDO::FETCH_ASSOC)['account_id'];
        mkdir("../sites/".$accountId, 0701, true);
        return Account::getAccountById($accountId);
	}

    //add a new account to the database
    public static function updatePassword($email, $password){
        $pw = password_hash($password, PASSWORD_BCRYPT);

        $stmt = Dbh::connect() ->PREPARE("UPDATE accounts SET password=? WHERE email = ?;");
        $stmt->execute([$pw, $email]);
        if($stmt->rowCount()){
            return true;
        }else {
            return false;
        }
    }

    //add a new account to the database
    public static function confirmSubscription($accountId, $subscription){
        $stmt = Dbh::connect() ->PREPARE("UPDATE accounts SET subscription=? WHERE account_id = ?;");
        $stmt->execute([$subscription, $accountId]);
        if($stmt->rowCount()){
            return true;
        }else {
            return false;
        }
    }

	//queries the entire accounts table
	public static function getAllAccounts(){
		$stmt = Dbh::connect()->query("SELECT * FROM accounts");
		$accounts = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $accounts[] = new Account($row['account_id'], $row['email'], $row['first_name'], $row['last_name'], $row['account_type'], $row['password']);
        }
        return $accounts;
	}

	public static function deleteAccount($accountId = 0){
		$stmt = Dbh::connect()->PREPARE("DELETE FROM accounts WHERE account_id=?");
		$stmt->execute([$accountId]);

		return $stmt->rowCount();
	}

    // Retrieve websites associated with account
    public static function getWebsiteData($account_id) {
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM websites WHERE account_id=?");
        $stmt->execute([$account_id]);
        $websites = array();
        if($stmt->rowCount()){
            while ($row = $stmt->fetch()){
                $data = array("name"=>$row['site_name'], "image"=>$row['image'], "description"=>$row['description'], "id"=>$row['website_id'],
                    "path"=>$row['path']);
                $websites[] = $data;
            }
            return $websites;
        }else{
            return false;
        }
    }

    public static function checkWebsites($account_id) {
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM websites WHERE account_id=?");
        $stmt->execute([$account_id]);
        return $stmt->rowCount();
    }

    function updateAccount($accountId, $userdata){
        $queryString = '';
        foreach($userdata as $key => $data){
            $queryString .= "".$key." = '".$data."',";
        }

        $queryString = substr($queryString, 0, strlen($queryString) - 1);
        // echo "UPDATE ".DB_SCHEMA.".account SET ".$queryString." WHERE account_id = ".$accountId;
        $stmt = Dbh::connect()->PREPARE("UPDATE ".DB_SCHEMA.".accounts SET ".$queryString." WHERE account_id = ?");
        $stmt->execute([$accountId]);

        if($stmt->rowCount()){
            return true;
        }else{
            return false;
        }

    }
}