<?php
	$babyBirthDate = new DateTime("19 April");
	echo $babyBirthDate->format("d/m")."<br>";
	echo var_dump($babyBirthDate);
	
	//$data = date("d/m");
	//echo $data;

	$zodiacs = array(
		'Aries' => array(
			new DateTime('21 March'),
			new DateTime('20 April')
		),
		'Taurus' => array(
			new DateTime('21 April'),
			new DateTime('20 may')
		)
	);
	
	//echo $zodiacs['Aries'][0];
	
	/*foreach($zodiacs as $zodiac => $dateTimeRange){
		if($babyBirthDate >= $dateTimeRange[0] && $babyBirthDate <= $dateTimeRange[1]){
			echo $zodiac;
			break;
		}
		echo var_dump($dateTimeRange);
	}*/	
?>
