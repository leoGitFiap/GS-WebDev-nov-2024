function trocar(cor){
    document.body.style.background = cor;
}

//DECLARANDO AS VARIAVEIS
const form  =document.getElementById("form")
const email =document.getElementById("email")
const senha =document.getElementById("senha")

//EVENTO QUE VAI PEGAR O QUE ACONTECER NO FORMULARIO

form.addEventListener('submit',(e)=>{
    //PREVINE QUALQUER ALTERAÇÃO NO FORMULÁRIO
    e.preventDefault()

    //CHAMAR A FUNÇÃO QUE VAI CHECAR OS CAMPOS
    checarCampos()
})  


//FUNÇÃO CHECAR CAMPOS
function checarCampos(){
    //DECLARANDO AS VARIAVEIS
    // O METODO TRIM REMOVE ESPAÇOS EM BRANCO NO INICIO E NO FIM DO TEXTO
    const emailValor = email.value.trim()
    const senhaValor = senha.value.trim()

    //SE O CAMPO EMAIL ESTIVER VAZIO

    if(emailValor === ""){
        validarErro(email, "Preencha o campo email")
    }
    else{   
        validarSucesso(email)
    }

    //SE O CAMPO SENHA ESTIVER VAZIO

    if(senhaValor === ""){
        validarErro(senha,"Preencha o campo senha")
    }
    else if(senhaValor.length < 8)
    {
        validarErro(senha,"A senha deve ter mais que 8 caracteres")
    }else{
        validarSucesso(senha)
            window.location ="login.html"
    }

} 

//VALIDAR ERROR

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

    /*
    function chamar(){
        if(validarErro){
            window.location ="#"
        }else{
             window.location ="quiz.html"
        }
    } */