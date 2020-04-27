<?php
/** 
 * Implements password hashing functions from PHP 5.5
 * older versions of PHP (i.e. on sandcastle) have vulnerabilities in their encryption methods
 * SOURCE: https://github.com/ircmaxell/password_compat
*/
require_once ('encrypt_functions.php');

/**
 * Account class which defines information kept about a user and
 * the functions a user can perform
 */
class Account {
    public $accountId;
    public $email;
	public $firstName;
    public $lastName;
    public $password;

    //the account type ('ADMIN' by default)
    public $type;
    
	//ranges from 1 to 3
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

    /**
     * Returns all data related to an account
     */
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
	
	/**
     * Returns true if the account is a manager of the website
     */
	public function is_admin(){
		return $this->account_type == "manager";
	}

    
    /**
     * Returns a new Account object or false if invalid ID was given
     * 
     * @param account_id the ID of the user to get
     * 
     * @return Account|boolean Account info or false on failure
     */
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

    /**
     * Returns a new Account object or false if invalid email was given
     * 
     * @param email the email of the user to get
     * 
     * @return Account|boolean Account info or false on failure
     */
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

    /**
     * Adds a new account to the database
     * 
     * @param email the email of the user to get
     * @param firstName the first name of the user to get
     * @param lastName the last name of the user to get
     * @param type the type of the user to get
     * @param password the password of the user to get
     * 
     * @return Account|boolean Account info or false on failure
     */
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

    /**
     * Updates the password for an account
     * 
     * @param string email the email of the user to update
     * @param string password the password of the user to update
     * 
     * @return boolean whether the password was updated 
     */
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

    /**
     * Confirms if the user has made a payment through PayPal
     * 
     * @param accountId the accountId of the user to update
     * @param subscription the subscription of the user to update
     * 
     * @return boolean if a payment was successfully made
     */
    public static function confirmSubscription($accountId, $subscription){
        $stmt = Dbh::connect() ->PREPARE("UPDATE accounts SET subscription=? WHERE account_id = ?;");
        $stmt->execute([$subscription, $accountId]);
        if($stmt->rowCount()){
            return true;
        }else {
            return false;
        }
    }

    /**
     * Queries the entire accounts table
     * 
     * @return Account[] all users of the CMS
     */
	public static function getAllAccounts(){
		$stmt = Dbh::connect()->query("SELECT * FROM accounts");
		$accounts = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $accounts[] = new Account($row['account_id'], $row['email'], $row['first_name'], $row['last_name'], $row['account_type'], $row['password']);
        }
        return $accounts;
	}

    /**
     * Deletes an account
     * 
     * @param int account_id The ID of the account
     * 
     * @return int whether the account wa deleted
     */
	public static function deleteAccount($accountId = 0){
		$stmt = Dbh::connect()->PREPARE("DELETE FROM accounts WHERE account_id=?");
		$stmt->execute([$accountId]);

		return $stmt->rowCount();
    }
    
    /**
     * Retrieve websites associated with account
     * @param int account_id the ID of the user
     * 
     * @return Website[]|boolean website lists or false on failure
     */
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

    /**
     * Return the number of website a user has
     * 
     * @param int account_id the ID of the user
     * 
     * @return int the number of websites the user has
     */
    public static function checkWebsites($account_id) {
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM websites WHERE account_id=?");
        $stmt->execute([$account_id]);
        return $stmt->rowCount();
    }

    /** 
    * Updates the data for an account 
    *
    * @param int account_id the ID of the user
    * @param array the database fields to update

    * @return boolean if the account has updated
    */
    function updateAccount($accountId, $userdata){
        $queryString = '';
        foreach($userdata as $key => $data){
            $queryString .= "".$key." = '".$data."',";
        }

        $queryString = substr($queryString, 0, strlen($queryString) - 1);
        $stmt = Dbh::connect()->PREPARE("UPDATE ".DB_SCHEMA.".accounts SET ".$queryString." WHERE account_id = ?");
        $stmt->execute([$accountId]);

        if($stmt->rowCount()){
            return true;
        }else{
            return false;
        }

    }
}