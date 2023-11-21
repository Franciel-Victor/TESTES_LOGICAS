function mostrarPromocao(){
    let inProduto = document.getElementById("inProduto");
    let inPreco = document.getElementById("inPreco");
    let outAlertaProm = document.getElementById("outAlertaProm");
    let outPromocao = document.getElementById("outPromocao");

    let produto = inProduto.value;
    let preco = Number(inPreco.value);

    let promocao = preco/2;

    outAlertaProm.textContent = `${produto} - Promoção: Leve 3 por R$: ${(preco*2)+promocao}.00`;
    outPromocao.textContent = `O 3º produto custa apenas R$: ${promocao}.00`;
}
btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao);