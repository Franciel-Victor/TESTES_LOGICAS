<?php
	class Pessoa{
		//ATRIBUTOS, CARACTERÍSTICAS = variáveis
		private string $nome;
		private int $idade;
		private static int $numDePessoas = 0;

		//COMPORTAMENTOS, MÉTODOS = funções
		public function __construct(string $nome, int $idade){
			$this->nome = $nome;	
			$this->idade = $idade;
			$this->validaIdade($idade);
			self::$numDePessoas++;
		}

		//ACESSORES são os métodos de acesso get = pega, set = defini

		//GET
		public function getNome(){
			return $this->nome;
		}

		public function getIdade(){
			return $this->idade;
		}
		public static function getNumDePessoas(){
			return self::$numDePessoas;
		}
		//SET
		public function setNome(string $nome){
			$this->nome = $nome;
		}	
		public function setIdade(string $idade){
			$this->idade = $idade;
		}

		//MÉTODO ESPECÍFICO
		private function validaIdade(int $idade){
			if($this->idade > 0 AND $this->idade < 120){
				$this->idade = $idade;
			}else{
				echo "Idade não permitida!";
				exit;
			}
		}
	}
?>
