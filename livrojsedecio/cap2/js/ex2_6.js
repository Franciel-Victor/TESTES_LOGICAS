function mostrarCobranca(){
    let inValor = document.getElementById("inValor");
    let inTempoUso = document.getElementById("inTempoUso");
    let outValor = document.getElementById("outValor");

    let valor = Number(inValor.value);
    let tempo = Number(inTempoUso.value);

    let valorPagar = Math.ceil(tempo/15)*valor;
	
	outValor.textContent = `Valor a pagar R$: ${valorPagar},00`;
}
let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarCobranca);
