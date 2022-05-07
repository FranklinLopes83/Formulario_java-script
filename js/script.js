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
