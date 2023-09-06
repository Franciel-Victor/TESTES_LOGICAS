//Declara a função mostrarOla
function mostrarOla() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = "Olá " + nome;
}
//Cria uma referência ao botão (com id="mostrar")
let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla); 