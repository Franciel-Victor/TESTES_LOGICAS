<?php
	$fibonacci = array(1,2,3,4,5);
	print_r(var_dump($fibonacci));

	foreach($fibonacci as $i => $value){
		unset($fibonacci[$i]);
	}

	print_r(var_dump($fibonacci));
?>
