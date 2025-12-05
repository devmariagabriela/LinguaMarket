document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastro-form');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    // Simulação de envio de formulário de professor
    if (cadastroForm && mensagemSucesso) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            
            // Simula o processamento e exibe a mensagem de sucesso
            cadastroForm.style.display = 'none';
            document.querySelector('.cadastro h2').textContent = 'Cadastro Enviado!';
            document.querySelector('.cadastro p').style.display = 'none';
            mensagemSucesso.style.display = 'block';

            // Opcional: Redirecionar após alguns segundos
            /*
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 5000);
            */
        });
    }
});
