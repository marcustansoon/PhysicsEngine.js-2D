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
	function querySelectPrepared($queryString,$param){//'ii', $betweenStart, $betweenEnd
		$stmt = $this->mysqli->prepare($queryString);
		call_user_func_array($stmt->bind_param, $param);
		$stmt -> execute();
		return $stmt -> get_result();
		//call_user_func_array($stmt -> bind_result, $bind);
		//return $stmt;
	}

	
}


$test=new mySQL("localhost",'marath1673_year17','marath1673_usex','}@KqJoi+sw}U');

$test->connectToDatabase();

$temp= $test->querySelectPrepared('Select * from registration where participant_firstname = " Chiew Siew Cheng"');
while ($row = $temp -> fetch_assoc()) {
	echo $row['autoID'];
}
