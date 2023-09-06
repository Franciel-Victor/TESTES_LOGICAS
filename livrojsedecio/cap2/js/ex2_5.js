function mostrarPromocao(){
    let inMedicamento = document.getElementById("inMedicamento");
    let inPreco = document.getElementById("inPreco");
    let outMendicamento = document.getElementById("outMedicamento");
    let outPromocao = document.getElementById("outPromocao");

    let medicamento = inMedicamento.value;
    let preco = Number(inPreco.value);

    let promocao = Math.floor(preco*2);
    
    outMendicamento.textContent = `Promoção de ${medicamento}`;
    outPromocao.textContent = `Leve 2 por apenas R$ ${promocao},00`;
}
let btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao);