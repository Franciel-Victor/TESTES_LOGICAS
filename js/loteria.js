window.addEventListener("load", function(){
	var segredos = [16, 34, 37, 42, 50, 58],
		caixaDoNumero = document.getElementById("numero"),
		botaoAdivinhar = document.getElementById("adivinhar");
		
		console.log(segredos);
		
		function botaoClicado(){
			for(var i=0; i <= segredos.length-1; i++){
				if(caixaDoNumero.value == segredos[i]){
					alert("Parabéns! Você acertou um dos números secretos.");
					
					return; 
				}
			}
			alert("Infelizmente você errou!");
		}
		
		botaoAdivinhar.onclick = botaoClicado;
});