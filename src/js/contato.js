function trocar(cor){
    document.body.style.background = cor;
}

//DECLARANDO AS VARIAVEIS
const form  =document.getElementById("form")
const nome  =document.getElementById("nome")
const email =document.getElementById("email")
const senha =document.getElementById("telefone")

//EVENTO QUE VAI PEGAR O QUE ACONTECER NO FORMULARIO

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    checarCampos()
})  


//FUNÇÃO CHECAR CAMPOS
function checarCampos(){
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const telefoneValor = senha.value.trim()

    //SE O CAMPO NOME ESTIVER VAZIO
    if(nomeValor ===""){
       validarErro(nome,"Preencha o nome")
    }
    else if(nomeValor.length > 20)
    {
        validarErro(nome,"O telefone deve ter até 20 caracteres")
    }else{
        validarSucesso(nome)
    }

    //SE O CAMPO EMAIL ESTIVER VAZIO

    if(emailValor === ""){
        validarErro(email, "Preencha o email")
    }
    else if(emailValor.length > 50)
    {
        validarErro(email,"O telefone deve ter até 50 caracteres")
    }else{   
        validarSucesso(email)
    }

    //SE O CAMPO SENHA ESTIVER VAZIO

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

//VALIDAR ERROR

    function validarErro(input,message){
        const controle = input.parentElement;
        const small = controle.querySelector('small')
        small.innerText = message
        controle.className ="controle error"
    }

//VALIDAR SUCESSO
    function validarSucesso(input){
        const controle = input.parentElement;
        controle.className = "controle sucesso"
    }

    // function chamar(){
    //     if(validarErro ){
    //         window.location ="index.html"
    //     }else{
    //         window.location ="menu.html"
    //     }
    // }