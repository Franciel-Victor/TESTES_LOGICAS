function calcularFuso(){
    let inHoraBrasil = document.getElementById("inHoraBrasil");
    let outHoraFranca = document.getElementById("outHoraFranca");

    let horaBrasil = Number(inHoraBrasil.value);

    if(inHoraBrasil.value == "" || isNaN(horaBrasil)){
        alert("Informe a hora no Brasil corretamente");
        inHoraBrasil.focus();
        return;
    }

    let horaFranca = horaBrasil + 5;

    //condição que verifica se o número é maior que 24
    if(horaFranca > 24){
        horaFranca -= 24;
    }
    outHoraFranca.textContent = `Hora na França: ${horaFranca.toFixed(2)}`;
}
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);
