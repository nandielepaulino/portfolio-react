// =============================================
// PORTFÓLIO EM REACT
// =============================================
// Neste arquivo, eu fiz a migração do portfólio para React, como solicitado na atividade.
// A ideia principal é separar a interface em componentes reutilizáveis,
// deixando o projeto organizado e fácil de manter.

// ----------------------------------------------------
// ARRAY DE DADOS DOS PROJETOS (REQUISITO DA ATIVIDADE)
// ----------------------------------------------------
// Aqui eu centralizo os dados em um único lugar.
// Depois, esses dados são renderizados dinamicamente na tela com o método map().
const projetos = [
    {
        id: 1,
        titulo: "Projeto 1: Landing Page",
        descricao: "Uma landing page responsiva criada com HTML e CSS para um produto fictício.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+1",
        link: "https://github.com/"
    },
    {
        id: 2,
        titulo: "Projeto 2: To-Do List",
        descricao: "Um aplicativo de lista de tarefas interativo utilizando JavaScript para manipulação do DOM.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+2",
        link: "https://github.com/"
    },
    {
        id: 3,
        titulo: "Projeto 3: Calculadora",
        descricao: "Uma calculadora funcional construída com HTML, CSS e lógica em JavaScript.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+3",
        link: "https://github.com/"
    }
];

// ------------------------------------
// COMPONENTE 1: CABEÇALHO/NAVEGAÇÃO
// ------------------------------------
// Este componente cuida apenas da parte superior da página.
function Header() {
    return (
        <header>
            <nav>
                <div className="logo">Meu Portfólio</div>
                <ul className="nav-links">
                    <li><a href="#sobre">Sobre Mim</a></li>
                    <li><a href="#projetos">Meus Projetos</a></li>
                </ul>
            </nav>
        </header>
    );
}

// ------------------------------------
// COMPONENTE 2: SEÇÃO SOBRE MIM
// ------------------------------------
// Este componente deixa isolado o bloco de apresentação pessoal.
function SobreMim() {
    return (
        <section id="sobre" className="section">
            <div className="container">
                <h2>Sobre Mim</h2>
                <div className="sobre-content">
                    <img src="img/image.png" alt="Foto de Perfil" className="perfil-img" />
                    <div className="sobre-texto">
                        <p>Olá! Tenho 28 anos e sou apaixonada por tecnologia.</p>
                        <p>
                            Atualmente estou aprimorando minhas habilidades em desenvolvimento web
                            (HTML, CSS e JavaScript), buscando sempre aprender novas tecnologias
                            e criar interfaces intuitivas e dinâmicas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ------------------------------------
// COMPONENTE 3: CARD DE PROJETO
// ------------------------------------
// Recebe um projeto por "props" e monta um card.
// Esse componente é reutilizado para todos os itens da lista.
function ProjetoCard({ projeto }) {
    return (
        <article className="projeto-card">
            <img src={projeto.imagem} alt={projeto.titulo} className="projeto-img" />
            <div className="projeto-info">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <a href={projeto.link} className="projeto-link" target="_blank" rel="noreferrer">
                    Ver Projeto
                </a>
            </div>
        </article>
    );
}

// ------------------------------------
// COMPONENTE 4: SEÇÃO DE PROJETOS
// ------------------------------------
// Aqui acontece a renderização dinâmica dos dados com map().
// Ou seja, para cada objeto do array "projetos", o React cria um ProjetoCard.
function ProjetosSection() {
    return (
        <section id="projetos" className="section bg-light">
            <div className="container">
                <h2>Meus Projetos</h2>
                <div className="projetos-grid">
                    {projetos.map((projeto) => (
                        <ProjetoCard key={projeto.id} projeto={projeto} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ------------------------------------
// COMPONENTE 5: RODAPÉ
// ------------------------------------
// Separar o footer em componente também ajuda na organização e reaproveitamento.
function Footer() {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2026 Meu Portfólio. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

// ------------------------------------
// COMPONENTE PRINCIPAL (APP)
// ------------------------------------
// O App junta todos os outros componentes em uma estrutura única.
function App() {
    return (
        <>
            <Header />
            <main>
                <SobreMim />
                <ProjetosSection />
            </main>
            <Footer />
        </>
    );
}

// ------------------------------------
// MONTAGEM DO REACT NA TELA
// ------------------------------------
// ReactDOM.createRoot encontra a div #root do index.html
// e renderiza o componente principal App dentro dela.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
