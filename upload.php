    #!/usr/bin/php-cgi
<?php
require_once('header_functions.php');

if(isset($_POST['submit'])){
    $files = $_FILES['file']; //all files
    $file_count = (!empty($files['name'][0])? count($files['name']): 0);

    //for now, redirect back to media library if there are no files
    if(!$file_count){
        header("Location: ".HOME_URL."media_library.php");
        die;
    }

    for($i=0; $i<$file_count; $i++){
        $fileName = strtolower($files['name'][$i]); //"example.jpg"
        $fileTmpName = $files['tmp_name'][$i]; //browser temp name
        $fileSize = $files['size'][$i]; //in bytes
        $fileError = $files['error'][$i]; //0 means no errors
        $fileType = $files['type'][$i]; //"image/png"

        $extStartPos = strrpos($fileName, '.'); //last "." in file name
        $splitFileName = str_split($fileName, $extStartPos); //filename split at last "."
        $fileExt = $splitFileName[1]; // file extension with "." (.png)
        $fileName = $splitFileName[0]; //filename without extension

        $allowed = array('.jpg', '.jpeg','.png', '.pdf');
        if(!in_array($fileExt,$allowed)){
            echo "You cannot upload files of this type!";
        }else if($fileError!==0){
            echo("There was an error uploading your file");
        }else if($fileSize >= 50000000){
            echo "Your file is too big.";
        }else{
            $accountId = getCurrentAccountId();
            $fileName = filter_var($fileName, FILTER_SANITIZE_URL);

            //store uploads by account id
            $dir = 'uploads/'.$accountId.'/';
            $dirExists = file_exists(HOME_PATH.$dir);
            
            if(!$dirExists){ 
                //create directory and insert upload
                mkdir(HOME_PATH.$dir);
                $dest = $dir.$fileName.$fileExt;
                move_uploaded_file($fileTmpName, HOME_PATH.$dest);
            } else {
                //increment $suffix until a unique file name is created
                $suffix = 1;
                $dest = $dir.$fileName.$fileExt;
                while(file_exists($dest)){
                    $dest = $dir.$fileName.$suffix.$fileExt;
                    $suffix++;
                }
                //insert upload
                move_uploaded_file($fileTmpName, HOME_PATH.$dest);
            }

            //data to insert into database
//            $url = HOME_PATH.$dest;
            $fileExt = str_replace('.', '', $fileExt);
//            $unixDate = time();

            $mediaFile = Media::addImage($fileExt, $dest, $accountId);
            if(!$mediaFile){
                echo 'There was a problem uploading your file!';
              } else {
                echo 'Upload complete!';
                echo '<img src='.$mediaFile->path.' alt="test" width="500" height="333"><h3>'.$mediaFile->caption.'</h3>';
            }
        }
    }
}
?>
<div style="float:right;">
    <button onclick="document.location = 'media_library.php'">Media Library</button>
</div>


