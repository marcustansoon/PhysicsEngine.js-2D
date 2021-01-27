<?php 

	function validateAndUploadFile(?array $file, string $uploadPath = "/", array $extensions, int $maxFileSize, bool $shouldRenameFile = true, bool $shouldOverrideFile = true) : object
	{
		// Make sure file to be uploaded exists
		if(!is_array($file)){
			echo 'nope';
			return (object)['status' => 0, 'responseMessage' => 'File to be uploaded doesn\'t exists'];
		}
		
		// Validate file extension
		if(!in_array($fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION)), $extensions)){
			return (object)['status' => 0, 'responseMessage' => 'File extension is not supported'];
		}
		
		// Validate file size
		if($file['error'] === 1 || $file['size'] > $maxFileSize){
			return (object)['status' => 0, 'responseMessage' => 'File size is too large'];
		}
		
		// Generate random file name if required
		$fileName = $shouldRenameFile ? date('Y-m-d H.i.s A - ').dechex(rand(100,999)) : $file['name'];

		// Check if file already exists
		if(!$shouldOverrideFile && file_exists($uploadPath.$fileName.'.'.$fileExtension)){
			return (object)['status' => 0, 'responseMessage' => 'File already exists'];
		}
		
		// Upload file
		move_uploaded_file($file['tmp_name'], $uploadPath.$fileName.'.'.$fileExtension);

		return (object)['status' => 1, 'responseMessage' => 'File uploaded successfully', 'filePath' => $uploadPath.$fileName.'.'.$fileExtension];
	}

	// Example usage
	$response = validateAndUploadFile($_FILES['fileToUpload'] ?? null, 'uploads/', ['jpg', 'jpeg', 'png'], 1024 * 1024 *  1, false, false);
	
	if($response->status){
		// ...	upload success
		echo '$response->filePath;
	}else{
		// ... upload fail
		echo $response->responseMessage;	
	}
