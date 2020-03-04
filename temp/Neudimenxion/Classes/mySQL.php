


class mySQL{
	public $dblocation, $dbname, $dbusername, $dbpass, $mysqli;
	
	function __construct($dblocation,$dbname,$dbuser,$dbpass) {
		$this->dblocation = $dblocation;
		$this->dbname = $dbname;
		$this->dbusername = $dbuser;
		$this->dbpass = $dbpass;
		
		session_start();//auto start session
	}
  
	function connectToDatabase(){
		$this->mysqli = mysqli_connect($this->dblocation, $this->dbusername, $this->dbpass,$this->dbname);
		if (mysqli_connect_errno()) {
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
			exit();
		}
		//success
	}
	//queryString   =  SELECT id, name, age FROM myTable WHERE name = ?
	function getQueryRSelectPrepared($queryString,$paramsString){
	//paramsString  = 'ii, $betweenStart, $betweenEnd'

		//using Object oriented style
		$stmt = $this->mysqli->prepare($queryString);
		//$stmt = mysqli_prepare($this->mysqli,$queryString);
		call_user_func_array(array($stmt, 'bind_param'), explode(' ',$paramsString));

		//mysqli_stmt_bind_param($stmt, "s", $city);
		//$temp=explode(' ',$paramsString);
		//array_unshift($temp,$stmt);

		//call_user_func_array(mysqli_stmt_bind_param,array($stmt,'ss','technical'));

		$stmt -> execute();
		//mysqli_stmt_execute($stmt);
		$result=$stmt->get_result();
		$stmt->free_result();
		$stmt->close();

		return $result;
		//return mysqli_stmt_fetch($stmt);
	}

	
	function userLoginVerification($nameField,$name,$passField,$pass,$tableName){
		//$this=>querySelectPrepared("Select ");	
		$temp = getQueryRSelectPrepared("Select ".$passField." , ".$nameField." from ".$tableName." where ".$nameField." = ? LIMIT 1","S ".$name);
		if($row = mysqli_fetch_assoc($temp) && $row[$passField]=== md5($pass)){
			return $row[$nameField];
		}
		return false;
	}
	//"Select ".$passField." from ".$tableName." where ".nameField." = ?"

	
}


$test=new mySQL("localhost",'marath1673_year17','marath1673_usex','}@KqJoi+sw}U');

$test->connectToDatabase();

$temp= $test->getQueryRSelectPrepared('Select * from registration where participant_firstname LIKE "%Chiew%" limit 2');
//$temp= $test->getQueryRSelectPrepared('Select * from kchmr_users where user_login in (?,?)','ss technical myadmin');

//similar to mysqli_query result
echo mysqli_num_rows($temp);
while ($row = mysqli_fetch_assoc($temp)) {
	echo $row['user_login'].'<br>';
}

