<?php
require_once('dbh.inc.php');
class Media extends Dbh{

    public static function addImage($userId, $fileActualExt, $fileDestination, $caption){
        $stmt = Dbh::connect()
            ->PREPARE('INSERT INTO user_media(file_type, path, user_id, caption) VALUES(:file_type, :path, :user_id, :caption)');
        $stmt->bindValue(':file_type', $fileActualExt);
        $stmt->bindValue(':path', $fileDestination);
        $stmt->bindValue(':user_id', $userId);
        $stmt->bindValue(':caption',$caption);

        $stmt->execute();
    }

    public static function getAllImages($userId){
        $stmt = Dbh::connect()
            ->PREPARE("SELECT * FROM user_media WHERE user_id=?");
        $stmt->execute([$userId]);
        while ($row = $stmt->fetch()){
            $imageData[] = $row;
        }
        return $imageData;
    }
}