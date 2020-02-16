<?php
class Media extends Dbh{
    public function addImage($userId, $fileActualExt, $fileDestination, $caption){
        $stmt = $this->connect()
            ->PREPARE('INSERT INTO user_media(file_type, path, user_id, caption) VALUES(:file_type, :path, :user_id, :caption)');
        $stmt->bindValue(':file_type', $fileActualExt);
        $stmt->bindValue(':path', $fileDestination);
        $stmt->bindValue(':user_id', $userId);
        $stmt->bindValue(':caption',$caption);

        $stmt->execute();
    }
}