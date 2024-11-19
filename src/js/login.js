function trocar(cor){
    document.body.style.background = cor;
}

// Função para validar o login
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar página)
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Verificar se o email existe no localStorage
    const usuarioSalvo = JSON.parse(localStorage.getItem(email));
    
    if (!usuarioSalvo) {
        alert('Email não encontrado.');
        return;
    }

    // Verificar se a senha corresponde ao email cadastrado
    if (usuarioSalvo.senha !== senha) {
        alert('Senha incorreta.');
        return;
    }

    // Login bem-sucedido
    alert('Login realizado com sucesso!');
    window.location.href = 'quiz.html'; // Redireciona para a página do quiz ou área restrita
});


function cadastrar() {
    window.open("cadastro.html")
}

function inserir() {
    let numero = document.getElementById("posicao").value -1;
    let novo = document.getElementById("novo").value;
    document.getElementsByClassName("time")[numero].innerHTML =novo;
}
