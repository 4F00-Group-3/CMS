
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
    public static function getMediaById($mediaId){
        $stmt = Dbh::connect() ->PREPARE("SELECT * FROM media_file WHERE media_id=?");
        $stmt->execute([$mediaId]);

        if($stmt->rowCount()){
            $mediaInfo = $stmt->fetch(PDO::FETCH_ASSOC);
            return new Media($mediaInfo['media_id'], $mediaInfo['file_type'], $mediaInfo['path'], $mediaInfo['user_id'], $mediaInfo['caption'], $mediaInfo['date']);
        } else {
            return false;
        }
    }

    //add a new file to the database
    public static function addImage($fileType, $path, $userId, $caption =''){
        $date = time();
        $data = array($fileType, $path, $userId, $caption, $date);


		$stmt = Dbh::connect() ->PREPARE('INSERT INTO media_file (file_type, path, user_id, caption, date) VALUES (?, ?, ?, ?, ?) ON CONFLICT DO NOTHING RETURNING media_id');
		$stmt->execute($data);
		
		$mediaId = $stmt->fetch(PDO::FETCH_ASSOC)['media_id'];
		return Media::getMediaById($mediaId);
    }

    //queries the media table
    public static function getAllImages(){
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM media_file");
        $stmt->execute();

        $imageData = array();
        while ($row = $stmt->fetch()){
            $imageData[] = $row;
        }
        return $imageData;
    }

}
