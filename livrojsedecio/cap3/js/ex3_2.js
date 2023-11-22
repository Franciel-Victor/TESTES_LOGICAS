function calcularPeso(){
    let inNome = document.getElementById("inNome");
    let rbMasculino = document.getElementById("rbMasculino");
    let rbFeminino = document.getElementById("rbFeminino");
    let inAltura = document.getElementById("inAltura");
    let outResposta = document.getElementById("outResposta");

    let nome = inNome.value;
    let masculino = rbMasculino.checked;
    let feminino = rbFeminino.checked;
    let altura = Number(inAltura.value);
    let peso = 0;
    
    //verifica se nome foi preenchido e sexo selecionado
    if(nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus(); //posiciona o foco no campo de edição inNome
        return;
    }
    //se altura for vazio (0) ou NaN: not-a-number(um texto for informado, por exemplo)
    if(altura == 0 || isNaN(altura)){
        alert("Por fabor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }
    //se masculino (significa se masculino == true)
    if(masculino){
        peso = 22 * Math.pow(altura, 2);
    }else{
        peso = 21 * Math.pow(altura, 2);
    }
    //apresenta a resposta(altera o conteúdo da linha outResposta)
    outResposta.textContent = `${nome} seu peso ideal é ${peso.toFixed(3)} kg`;
}
function limparCampos(){
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResposta").textContent = "";

    //posiciona o foco no elemento inNome
    document.getElementById(inNome).focus();
}   
//cria referência ao elemento btCalcular e registra evento associado a calcularPeso
let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click",calcularPeso);

//cria referência ao elemento btLimpar e registra o evento a ele associado
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click",limparCampos);
