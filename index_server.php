<?php

	function php_name() 
    {
		$name = $_POST["name"];
        echo "name is : ";
		echo $name;
		echo "<br>";
    }
	
	function php_email() 
    {
		$email = $_POST["email"];
        echo "eamil is : ";
		echo $email;
		echo "<br>";
    }
   
	function sql_select( $color ) {
		
		$con = new mysqli( "localhost", "Gary", "135792468", "granathaxtreme" );
		if ( !$con ) exit( "Could not connect: " . mysql_error());
		
		
		$result = mysqli_query( $con, "SELECT * from illustration" );
		
		$td = "";
		$tr = "";
		
		while ( $row = mysqli_fetch_array( $result ) ) {
		
			$td .= "<td>" . $row["name"] . "</td>"; 
			$td .= "<td>" . "<img src=" . $row["picture"] . "></td>";
			$td .= "<td>" . $row["rank"] . "</td>";
			$tr .= "<tr>" . $td . "/<tr>";
			$td = "";
		}
				
		echo $tr;
		$tr = "";
				
		mysqli_close($con);
	}

	if ( isset( $_POST["color"])) {
		sql_select( $_POST["color"] );
	}
	else {
		echo "error";
	}
?>
