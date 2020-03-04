<?php
/** 
 * Implements password hashing functions from PHP 5.5
 * older versions of PHP (ie on sandcastle) have vulnerabilities in their encryption methods
 * https://github.com/ircmaxell/password_compat
*/
require_once (HOME_PATH.'includes/encrypt_functions.php');

/**
 * User class 
 */
class User {
    public $userId;
    public $email;
	public $firstName;
	public $lastName;  
	public $type;
	public $password;

	//initalize new user
	function __construct($userId, $email, $firstName, $lastName, $type,  $password) {
        $this->userId = $userId;
        $this->email = $email;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->type = $type;
        $this->password = $password;
	}

	//returns user data
	public function get_user_data(){
        return array(
            'userId' => $userId,
            'email' => $email,
            'firstName' => $firstName,
            'lastName' => $lastName, 
            'type' => $type
        );
    }
	
	//returns true if the user is a manager of the website
	public function is_admin(){
		return $this->user_type == "manager";
	}

	//returns a new User object or false if invalid ID was given
    public static function getUserById($user_id){
        $stmt = Dbh::connect() ->PREPARE("SELECT * FROM users WHERE user_id=?");
        $stmt->execute([$user_id]);

        if($stmt->rowCount()){
			$userInfo = $stmt->fetch(PDO::FETCH_ASSOC);
            return new User($userInfo['user_id'], $userInfo['email'], $userInfo['first_name'], $userInfo['last_name'], $userInfo['user_type'], $userInfo['password']);
        } else {
			return false;
		}
    }

	//returns a new User object or false if invalid email was given
	public static function getUserByEmail($email){
		$stmt = Dbh::connect() ->PREPARE("SELECT * FROM users WHERE email=?");
        $stmt->execute([$email]);

        if($stmt->rowCount()){
			$userInfo = $stmt->fetch(PDO::FETCH_ASSOC);
            return new User($userInfo['user_id'], $userInfo['email'], $userInfo['first_name'], $userInfo['last_name'], $userInfo['user_type'], $userInfo['password']);
        } else {
			return false;
		}
	}

	//add a new user to the database
	public static function addUser($email, $firstName, $lastName, $type,  $password){
		$data = array($email, $firstName, $lastName, $type);

		foreach($data as $key => $field){
			$data[$key] = trim(filter_var($field, FILTER_SANITIZE_STRING));
		}

		$data[] = password_hash($password, PASSWORD_BCRYPT);

		$stmt = Dbh::connect() ->PREPARE('INSERT INTO users (email, first_name, last_name, user_type, password) VALUES (?, ?, ?, ?, ?) ON CONFLICT DO NOTHING RETURNING user_id');
		$stmt->execute($data);
		
		$userId = $stmt->fetch(PDO::FETCH_ASSOC)['user_id'];
		return User::getUserById($userId);
	}

	//queries the entire users table
	public static function getAllUsers(){
		$stmt = Dbh::connect()->query("SELECT * FROM users");
		$users = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $users[] = new User($row['user_id'], $row['email'], $row['first_name'], $row['last_name'], $row['user_type'], $row['password']);
        }
        return $users;
    }

}