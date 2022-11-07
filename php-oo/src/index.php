<?php
	require_once "Pessoa.php";

	$pessoa1 = new Pessoa();

	//Para setar valores para os atributos de um objeto
	$pessoa1->nome = "franciel";
	$pessoa1->idade = 25;

	//Mostrando valores
	echo "<p>Nome: $pessoa1->nome </p>";
	echo "<p>Idade: $pessoa1->idade </p>";
?>
