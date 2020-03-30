
<?php
/**
 * Media file class
 */
class Media{
    public $mediaId;
    public $fileType;
	public $path;
	public $userId;  
	public $caption;
	public $date;

    //initalize media file
	function __construct($mediaId, $fileType, $path, $userId, $caption,  $date) {
        $this->mediaId = $mediaId;
        $this->fileType = $fileType;
        $this->path = $path;
        $this->userId = $userId;
        $this->caption = $caption;
        $this->date = $date;
    }
    
    //gets the name of the file from the path
    public function getFileName(){
        return basename($this->path);
    }

    //returns a new Media object or false on failure
    public static function getMediaByAccount($accountId){
        $stmt = Dbh::connect() ->PREPARE("SELECT * FROM account_media WHERE account_id=?");
        $stmt->execute([$accountId]);
        $imageData = array();
        if($stmt->rowCount()){
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                $imageData[] = $row;
            }
            return $imageData;
//            $mediaInfo = $stmt->fetch(PDO::FETCH_ASSOC);
//            return new Media($mediaInfo['media_id'], $mediaInfo['file_type'], $mediaInfo['path'], $mediaInfo['user_id'], $mediaInfo['caption'], $mediaInfo['date']);
        }else{
            return false;
        }
    }

    //returns a new Media object or false on failure
    public static function getMediaById($mediaId){
        $stmt = Dbh::connect() ->PREPARE("SELECT * FROM account_media WHERE media_id=?");
        $stmt->execute([$mediaId]);

        if($stmt->rowCount()){
            $mediaInfo = $stmt->fetch(PDO::FETCH_ASSOC);
            return new Media($mediaInfo['media_id'], $mediaInfo['file_type'], $mediaInfo['path'], $mediaInfo['account_id'], $mediaInfo['caption'], $mediaInfo['date']);
        } else {
            return false;
        }
    }

    //add a new file to the database
    public static function addImage($fileType, $path, $accountId, $caption =''){
//        $date = time();
        $data = array($fileType, $path, $caption, $accountId);

		$stmt = Dbh::connect() ->PREPARE('INSERT INTO account_media (file_type, path, caption, account_id) VALUES (?, ?, ?, ?) ON CONFLICT DO NOTHING RETURNING media_id');
		$stmt->execute($data);
		
		$mediaId = $stmt->fetch(PDO::FETCH_ASSOC)['media_id'];
		return Media::getMediaById($mediaId);
    }

    //queries the media table
    public static function getAllImages(){
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM account_media");
        $stmt->execute();

        $imageData = array();
        if($stmt->rowCount()){
            while ($row = $stmt->fetch()) {
                $imageData[] = $row;
            }
            return $imageData;
        }else{
            return false;
        }
    }

}
