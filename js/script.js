//alert("Jesus Cristo")
/*console.error("Se voce é fron ender venha me encontra")*/

let nome = document.querySelector("#nome")
nome.addEventListener('keyup',validarCampo)
function validarCampo(){
    //console.log(nome.value)
if(nome.value==""){
    nome.classList.remove("border-success")
    nome.classList.add("border", "border-danger")

}
else{
    nome.classList.remove("border-danger")
    nome.classList.add("border", "border-success")
    

}
}
/*Inserir endereço em campo somente leitura*/
let endereco = document.querySelector("#endereco")
let leitura = document.querySelector("input[readonly]")

endereco.addEventListener("keyup", function(){
    leitura.value = endereco.value
}) 
    /*Validar Email*/
    let email = document.querySelector("#email")
    let msgEmail = document.querySelector("#validarEmail")

    /*Estou trabalhando com aeeow function*/
    email.addEventListener("keyup", ()=>{
        let minusculo = email.value.toLowerCase()//Conevertendo o texto em minusculo

        if(minusculo.indexOf('@') == -1 || minusculo.indexOf(".com")== -1){
            //console.log("Email Inválido")
            msgEmail.textContent ="Este email é inválido"
            msgEmail.classList.remove("text-success")
            msgEmail.classList.add("text-danger")

        }
        else{
            //console.log("Email Válido")
            msgEmail.textContent ="Este email é válido"
            msgEmail.classList.remove("text-danger")
            msgEmail.classList.add("text-success") 

        }     
    })
