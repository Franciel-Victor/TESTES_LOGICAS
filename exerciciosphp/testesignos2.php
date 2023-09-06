<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<?php
		$data = new DateTime("29 march");
		$dataFormatada = $data->format("d/m");
		
		echo var_dump($dataFormatada)."<br><br>";
		
		$signos = [
			"aries" => array(
		    	new DateTime("21 march"),
		        new DateTime("19 april")
		    ),
		    "taurus" => array(
		    	new DateTime("20 april"),
		        new DateTime("20 may")
		    )
		];
		
		foreach($signos as $sg => $datasSignos){
			echo $sg."<br><br>";
			/*if(gettype($datasSignos[1]->format("d/m")) == gettype($dataFormatada)){
		    	echo "sucesso"."<br><br>";
		    }else{
		    	echo "erro";
		    }*/
		}
	?>
</body>
</html>
