const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita envio do form

    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1+nota2)/2;

    resp1.innerText = `A média das notas ${media.toFixed(1)}`;

    if(media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado!`;
        resp2.style.color = "blue";
    }else if(media >= 4){
        resp2.innerText = `Atenção ${nome}. Você está de recuperação!`;
        resp2.style.color = "green";
    }else{
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`;
        resp2.style.color = "red";
    }
});