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
		
		$sql_find = "SELECT *  FROM illustration WHERE color LIKE '" . $color . "'";

		$result = mysqli_query( $con, $sql_find );
		if(!$result)
	{
		echo ("Error: ".mysqli_error($con));
		exit();
	}
		else echo $sql_find;
		
		$td = "";
		$tr = "";
		
		while ( $row = mysqli_fetch_array( $result ) ) {
		
			$td .= "<td>" . $row["name"] . "</td>"; 
			$td .= "<td>" . 
				"<a data-fancybox href=" . $row["picture"] . ">" .
				"<img src=" . $row["picture"] . " height=\"300\">" .
				"</a></td>";
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
