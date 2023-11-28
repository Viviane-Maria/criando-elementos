// ---------- Método Simples ---------- //
// Cria o elemento h1
let titulo = document.createElement("h1");

// Adiciona id e conteúdo
titulo.id = "titulo";
titulo.innerText = "Loja de livros";

// Captura o elemento body para adicionar o h1
let body = document.querySelector("body");

// Adiciona o elemento h1
body.appendChild(titulo);

// ---------- Método Complexo ---------- //
// Cria uma section para o produto
let produto = document.createElement("section");

// Adiciona os elementos filhos
produto.innerHTML = `
  <section>
    <h2 id="nome-livro">Saga Jogos Vorazes</h2>
    <h3 id="autor">Suzanne Collins</h3>
    <img src="https://m.media-amazon.com/images/I/61KaNOjhi2L._SY466_.jpg" alt="Capa do livro Jogos Vorazes">
    <p id="descricao">Coleção com quatro livros (com marcadores):
    <ul>
        <li>A Cantiga dos Pássaros e das Serpentes</li>
        <li>Jogos Vorazes</li>
        <li>Em Chamas</li>
        <li>A Esperança</li>
    </ul>
    </p>
    <p id="preco">R$ 223,22</p>
  </section>
`;

// Adiciona a section
body.appendChild(produto);
