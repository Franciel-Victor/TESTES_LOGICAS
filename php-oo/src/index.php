<?php
	require_once "Pessoa.php";

	$pessoa1 = new Pessoa("Franciel Victor", 3);
	$pessoa2 = new Pessoa("Freitas de Araujo", 5);
	echo "<p>Número de pessoas: ".Pessoa::getNumDePessoas()."</p>";

	//Para setar valores para os atributos de um objeto
	//$pessoa1->nome = "franciel";
	//$pessoa1->idade = 25;

	//Mostrando valores
	//echo "<p>Nome: $pessoa1->nome </p>";
	//echo "<p>Idade: $pessoa1->idade </p>";

	//USAR MÉTODOS ACESSORES
	//$pessoa1->setNome("Franciel");
	//$pessoa1->setIdade(-3);

	echo "<p>Nome: {$pessoa1->getNome()} </p>";
	echo "<p>Idade: {$pessoa1->getIdade()} anos </p>";
	echo "<hr>";
	echo "<p>Nome: {$pessoa2->getNome()} </p>";
	echo "<p>Idade: {$pessoa2->getIdade()} anos </p>";
?>
