window.addEventListener("load", function(){
	var caixaDeNumero = document.getElementById("numero"),
		botaoAdivinhar = document.getElementById("adivinhar"),
		segredo = Math.round(Math.random()*10);
		
		function botaoClicado(){
			if(caixaDeNumero.value == segredo){
				alert("Parabéns! Você acertou o número secreto.");
				window.location.reload();
			}else{
				alert("Infelizmente você errou!");
			}
			caixaDeNumero.value = "";
		}	
		
		botaoAdivinhar.addEventListener("click", botaoClicado, false);
	
	//Trecho abaixo utilizado para saber se o arquivo .js está atingindo o arquivo html.
	//console.log("Js carregado!");
});