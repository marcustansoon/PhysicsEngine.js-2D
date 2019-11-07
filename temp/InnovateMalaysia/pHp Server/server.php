<?php

$servername = "localhost";
$username = "id2365534_username";
$password = "password";
$database = "id2365534_name";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//echo "Connected successfully";




$query = $_GET["query"];
$mainArr=array();
if(isset($_GET["multiquery"])){
    $arr = explode(";", $query);
    
    foreach ($arr as &$subquery) {
        $tempArr=array();
        $result = mysqli_query($conn, $subquery);//get result from database
        while ($row = mysqli_fetch_array($result)) {
            $tempArr[] = $row;
        }
        $mainArr[]= $tempArr;
    }
    unset($value);//brk reference
    
    echo json_encode($mainArr);
}
else{
    $result = mysqli_query($conn, $query);//get result from database
    
    while ($row = mysqli_fetch_array($result)) {

        $mainArr[] = $row;
        
    }
    echo json_encode($mainArr);
    
}

 


$conn->close();


/*
$mystring = 'home/a/b/c';
$prevString=" ";
$substr="";

while(true){
    $substr = strtok($mystring, ';');
    if($prevString==$substr)
    break;
    $prevString=$substr;
    echo $substr;
}

echo "done";*/
?>
