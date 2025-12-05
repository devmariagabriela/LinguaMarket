// --- DADOS SIMULADOS (Simulando um Backend) ---
const professores = [
    {
        nome: "Ana Silva",
        idioma: "Inglês (Avançado)",
        bio: "Especialista em conversação e inglês para negócios. Mais de 10 anos de experiência. Metodologia focada na fluência rápida.",
        foto: "https://via.placeholder.com/150.png?text=Prof.+Ana",
        whatsapp: "5511999999999"
    },
    {
        nome: "John Smith",
        idioma: "Inglês (Nativo )",
        bio: "Professor nativo dos EUA, focado em preparatórios para TOEFL e IELTS. Aulas dinâmicas e material exclusivo.",
        foto: "https://via.placeholder.com/150.png?text=Prof.+John",
        whatsapp: "5511999999999"
    },
    {
        nome: "Carlos Mendes",
        idioma: "Inglês (Básico/Intermediário )",
        bio: "Aulas de reforço e para iniciantes. Pacotes especiais para estudantes e foco em gramática e pronúncia básica.",
        foto: "https://via.placeholder.com/150.png?text=Prof.+Carlos",
        whatsapp: "5511999999999"
    },
    {
        nome: "Maria Oliveira",
        idioma: "Espanhol (Intermediário )",
        bio: "Professora de Espanhol com foco em cultura latina e viagens. Aulas leves e divertidas.",
        foto: "https://via.placeholder.com/150.png?text=Prof.+Maria",
        whatsapp: "5511999999999"
    }
];

// --- FUNÇÕES DE RENDERIZAÇÃO ---

// 1. Função para gerar o HTML de um card de professor
function criarCardProfessor(professor ) {
    const whatsappLink = `https://wa.me/${professor.whatsapp}?text=Ol%C3%A1%2C%20vi%20seu%20perfil%20no%20LinguaMarket%20e%20gostaria%20de%20saber%20mais%20sobre%20suas%20aulas%20de%20${professor.idioma}.`;
    
    return `
        <div class="professor-card" data-nome="${professor.nome.toLowerCase( )}" data-idioma="${professor.idioma.toLowerCase()}">
            <img src="${professor.foto}" alt="Foto do Professor ${professor.nome}">
            <h4>${professor.nome}</h4>
            <p class="idioma">Idioma: ${professor.idioma}</p>
            <p class="bio">${professor.bio}</p>
            <a href="${whatsappLink}" target="_blank" class="btn-whatsapp">Falar no WhatsApp</a>
        </div>
    `;
}

// 2. Função para renderizar a lista de professores
function renderizarProfessores(lista) {
    const professorList = document.querySelector('.professor-list');
    if (professorList) {
        professorList.innerHTML = lista.map(criarCardProfessor).join('');
    }
}

// 3. Função para gerar o HTML da página inicial completa
function renderizarPaginaInicial() {
    const appRoot = document.getElementById('app-root');
    if (!appRoot) return;

    appRoot.innerHTML = `
        <header>
            <div class="container">
                <h1>LinguaMarket</h1>
                <nav>
                    <ul>
                        <li><a href="#hero" class="smooth-scroll">Home</a></li>
                        <li><a href="#professores" class="smooth-scroll">Professores</a></li>
                        <li><a href="cadastro.html">Quero ser Professor</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section id="hero" class="hero">
                <div class="container">
                    <h2>Conecte-se Diretamente com Professores de Idiomas</h2>
                    <p>Encontre o professor ideal para suas aulas particulares e comece a aprender hoje mesmo, sem intermediários.</p>
                    <a href="#professores" class="btn-primary smooth-scroll">Ver Professores</a>
                </div>
            </section>

            <section id="video-validacao" class="video-validacao">
                <div class="container">
                    <h3>Conheça a Professora Ana Silva e o LinguaMarket</h3>
                    <p>Veja como a plataforma empodera professores autônomos e facilita a sua busca pelo aprendizado ideal.</p>
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=r7gY1j2y7q-j0t0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

            <section id="professores" class="professores">
                <div class="container">
                    <h3>Professores em Destaque</h3>
                    <div class="search-bar">
                        <input type="text" id="search-input" placeholder="Buscar por nome, idioma ou especialidade...">
                    </div>
                    <div class="professor-list">
                        <!-- Cards serão injetados aqui pelo JS -->
                    </div>
                </div>
            </section>

            <section id="funcionalidades" class="funcionalidades">
                <div class="container">
                    <h3>Vantagens do LinguaMarket</h3>
                    <ul>
                        <li>**Conexão Direta:** Fale com o professor sem intermediários.</li>
                        <li>**Flexibilidade:** Negocie horários e preços diretamente.</li>
                        <li>**Foco em Inglês:** Curadoria inicial focada nos melhores professores de inglês.</li>
                        <li>**Expansão Futura:** Em breve, outros idiomas disponíveis.</li>
                    </ul>
                </div>
            </section>
        </main>

        <footer>
            <div class="container">
                <p>&copy; 2025 LinguaMarket. Todos os direitos reservados.</p>
                <p><a href="cadastro.html">Quero ser Professor</a> | <a href="#">Termos de Uso</a></p>
            </div>
        </footer>
    `;

    // Renderiza os professores após a estrutura estar no DOM
    renderizarProfessores(professores );
}

// --- LÓGICA DE INTERATIVIDADE ---

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se estamos na página inicial (pelo ID app-root)
    if (document.getElementById('app-root')) {
        renderizarPaginaInicial();
        
        // 1. Lógica de Filtro de Professores
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('keyup', function() {
                const termoBusca = searchInput.value.toLowerCase();
                
                // Filtra o array de professores
                const professoresFiltrados = professores.filter(p => 
                    p.nome.toLowerCase().includes(termoBusca) || 
                    p.idioma.toLowerCase().includes(termoBusca) ||
                    p.bio.toLowerCase().includes(termoBusca)
                );
                
                // Renderiza a lista filtrada
                renderizarProfessores(professoresFiltrados);
            });
        }

        // 2. Lógica de Scroll Suave
        document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // --- Lógica do Formulário de Cadastro (para cadastro.html) ---
    const cadastroForm = document.getElementById('cadastro-form');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    if (cadastroForm && mensagemSucesso) {
        cadastroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const camposObrigatorios = ['nome', 'idioma', 'whatsapp'];
            let formValido = true;
            
            camposObrigatorios.forEach(id => {
                const input = document.getElementById(id);
                if (!input.value.trim()) {
                    formValido = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '1px solid #ced4da';
                }
            });

            if (formValido) {
                cadastroForm.style.display = 'none';
                document.querySelector('.cadastro h2').textContent = 'Cadastro Enviado!';
                document.querySelector('.cadastro p').style.display = 'none';
                mensagemSucesso.style.display = 'block';
            } else {
                alert('Por favor, preencha todos os campos obrigatórios (Nome, Idioma, WhatsApp).');
            }
        });
    }
});
