<?php 

	function validateAndUploadFile(?array $file, string $uploadPath = "/", array $extensions, int $maxFileSize, bool $shouldOverrideFile = true, bool $shouldRenameFile = true){
		if(!is_array($file)){
			echo 'nope';
			return (object)['status' => 0, 'responseMessage' => 'File to be uploaded doesn\'t exists'];
		}

		if(!in_array($fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION)), $extensions)){
			return (object)['status' => 0, 'responseMessage' => 'File extension is not supported'];
		}

		if($file['size'] > $maxFileSize){
			return (object)['status' => 0, 'responseMessage' => 'File size is too large'];
		}

		if(!$shouldRenameFile && !$override && file_exists($uploadPath.$file['name'])){
			return (object)['status' => 0, 'responseMessage' => 'File already exists'];
		}

		if(){

		}
		echo $file['name'];
		echo dechex(time().rand(100,999));
		return (object)['status' => 1, 'responseMessage' => 'File is uploaded successfully'];
	}
