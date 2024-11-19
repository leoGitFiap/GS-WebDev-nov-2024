function trocar(cor){
    document.body.style.background = cor;
}

// Função para validar e cadastrar o usuário
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar página)
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    
    // Verificando se o email já está cadastrado
    if (localStorage.getItem(email)) {
        alert('Este email já está cadastrado.');
        return;
    }

    // Verificando se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    // Salvar o usuário no localStorage
    const usuario = { email, senha };
    localStorage.setItem(email, JSON.stringify(usuario)); // Armazenando o usuário com o email como chave
    
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página de login
});
