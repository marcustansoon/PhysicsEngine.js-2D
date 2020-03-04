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
	//SELECT id, name, age FROM myTable WHERE name = ?
	function getQueryRSelectPrepared($queryString,$paramsString){//'ii', $betweenStart, $betweenEnd

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
		$temp=$stmt->get_result();
		$stmt->free_result();
		$stmt->close();

		return $temp;
		//return mysqli_stmt_fetch($stmt);
	}

	
	function userLogin($name,$pass,$tableName){
		//$this=>querySelectPrepared("Select ");	
		getQueryRSelectPrepared("Select ",$paramsString)
	}
	

	
}
