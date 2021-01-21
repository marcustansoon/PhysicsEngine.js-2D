<?php 

	function validateAndUploadFile(?array $file, string $uploadPath = "/", array $extensions, int $maxFileSize, bool $shouldRenameFile = true, bool $shouldOverrideFile = true){
		// Check file existence
		if(!is_array($file)){
			echo 'nope';
			return (object)['status' => 0, 'responseMessage' => 'File to be uploaded doesn\'t exists'];
		}
		// Check file extension
		if(!in_array($fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION)), $extensions)){
			return (object)['status' => 0, 'responseMessage' => 'File extension is not supported'];
		}
		// Check file size
		if($file['size'] > $maxFileSize){
			return (object)['status' => 0, 'responseMessage' => 'File size is too large'];
		}
		// Generate a random file name if required
		$fileName = $shouldRenameFile ? date('Y-m-d H.i.s A - ').dechex(rand(100,999)) : $file['name'];

		// 
		if(!$shouldOverrideFile && file_exists($uploadPath.$fileName.'.'.$fileExtension)){
			return (object)['status' => 0, 'responseMessage' => 'File already exists'];
		}

		move_uploaded_file($file['tmp_name'], $uploadPath.$fileName.'.'.$fileExtension);

		return (object)['status' => 1, 'responseMessage' => 'File uploaded successfully'];
	}
	echo validateAndUploadFile($_FILES['fileToUpload'] ?? null, 'uploads/', ['jpg', 'jpeg', 'png'], 1024 * 1024 *  1, false, false)->responseMessage;
