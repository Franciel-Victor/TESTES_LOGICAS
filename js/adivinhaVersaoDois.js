window.addEventListener("load", function(){
	
	var caixaDeNumero = document.getElementById("numero"),
		botaoAdivinhar = document.getElementById("adivinhar");
		
		botaoAdivinhar.addEventListener("click", function(){
			alert(caixaDeNumero.value);
		});
	
	//Trecho abaixo utilizado para saber se o arquivo .js está atingindo o arquivo html.
	//console.log("Js carregado!");
});