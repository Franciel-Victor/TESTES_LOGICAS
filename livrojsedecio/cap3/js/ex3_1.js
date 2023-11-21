function calcularMedia(){
    //cria referência aos elementos da página
    let inNome = document.getElementById("inNome");
    let inNota1 = document.getElementById("inNota1");
    let inNota2 = document.getElementById("inNota2");
    let outSituacao = document.getElementById("outSituacao");
    let outMedia = document.getElementById("outMedia");

    //obtém os conteúdos dos camps de edição da página
    let nome = inNome.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    //calcula a média das notas
    let media = (nota1+nota2)/2;

    //apresenta a média(altera o conteúdo do elemento outMedia)
    outMedia.textContent = "Média das notas: "+media.toFixed(1);

    //cria a condição
    if(media >= 7){
        outSituacao.textContent = `Parabéns ${nome} ... Você foi aprovado(a).`;
        outSituacao.style.color = "blue";
    }else{
        outSituacao.textContent = `Ops ${nome}... Você foi reprovado(a).`;
        outSituacao.style.color = "red";
    }
}
//cria uma referência ao elemento btResultado (botão)
var btResultado = document.getElementById("btResultado");
//registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener("click",calcularMedia);