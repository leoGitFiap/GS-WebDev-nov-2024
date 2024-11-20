function trocar(cor){
    document.body.style.background = cor;
}

const form  =document.getElementById("form")
const nome  =document.getElementById("nome")
const email =document.getElementById("email")
const senha =document.getElementById("telefone")

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    checarCampos()
})  

function checarCampos(){
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const telefoneValor = senha.value.trim()

    if(nomeValor ===""){
       validarErro(nome,"Preencha o nome")
    }
    else if(nomeValor.length > 20)
    {
        validarErro(nome,"O telefone deve ter até 20 caracteres")
    }else{
        validarSucesso(nome)
    }

    if(emailValor === ""){
        validarErro(email, "Preencha o email")
    }
    else if(emailValor.length > 50)
    {
        validarErro(email,"O telefone deve ter até 50 caracteres")
    }else{   
        validarSucesso(email)
    }

    if(telefoneValor === ""){
        validarErro(telefone,"Preencha o telefone")
    }
    else if(telefoneValor.length > 11)
    {
        validarErro(telefone,"O telefone deve ter 11 caracteres")
    }
    else if(telefoneValor.length < 11)
    {
        validarErro(telefone,"O telefone deve ter 11 caracteres")
    }else{
        validarSucesso(telefone)
    }

}

    function validarErro(input,message){
        const controle = input.parentElement;
        const small = controle.querySelector('small')
        small.innerText = message
        controle.className ="controle error"
    }
    
    function validarSucesso(input){
        const controle = input.parentElement;
        controle.className = "controle sucesso"
    }