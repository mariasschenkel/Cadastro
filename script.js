
{const btnCadastro = document.getElementById("cadastro");
btnCadastro.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    document.getElementById("nome2").innerHTML = "Nome: " +nome;
});
btnCadastro.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    document.getElementById("email2").innerHTML = "E-mail: " +email;
});
btnCadastro.addEventListener("click", () => {
    let data = document.getElementById("data").value;
    document.getElementById("data2").innerHTML = "Data de Nascimento: " +data;
});
 }
 
const btnRestart = document.getElementById("limpar");
btnRestart.addEventListener ("click", () => {
    document.getElementById("nome2").innerHTML = "Nome: ";
    document.getElementById("email2").innerHTML = "E-mail: ";
    document.getElementById("data2").innerHTML = "Data de Nascimento: ";
});