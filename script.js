document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica do Formulário de Cadastro (cadastro.html) ---
    const cadastroForm = document.getElementById('cadastro-form');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    if (cadastroForm && mensagemSucesso) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            
            // Validação Simples (apenas verifica se os campos obrigatórios estão preenchidos)
            const camposObrigatorios = ['nome', 'idioma', 'whatsapp'];
            let formValido = true;
            
            camposObrigatorios.forEach(id => {
                const input = document.getElementById(id);
                if (!input.value.trim()) {
                    formValido = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '1px solid #ced4da'; // Retorna ao normal
                }
            });

            if (formValido) {
                // Simula o processamento e exibe a mensagem de sucesso
                cadastroForm.style.display = 'none';
                document.querySelector('.cadastro h2').textContent = 'Cadastro Enviado!';
                document.querySelector('.cadastro p').style.display = 'none';
                mensagemSucesso.style.display = 'block';
            } else {
                alert('Por favor, preencha todos os campos obrigatórios (Nome, Idioma, WhatsApp).');
            }
        });
    }

    // --- Lógica de Filtro de Professores (index.html) ---
    const searchInput = document.getElementById('search-input');
    const professorCards = document.querySelectorAll('.professor-card');

    if (searchInput && professorCards.length > 0) {
        searchInput.addEventListener('keyup', function() {
            const termoBusca = searchInput.value.toLowerCase();

            professorCards.forEach(card => {
                // Pega o texto completo do card para busca (Nome, Idioma, Bio)
                const cardText = card.textContent.toLowerCase();

                if (cardText.includes(termoBusca)) {
                    card.style.display = 'block'; // Mostra o card
                } else {
                    card.style.display = 'none'; // Esconde o card
                }
            });
        });
    }
});
