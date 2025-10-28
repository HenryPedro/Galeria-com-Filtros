// Dentro de script.js
// 1. Pegamos o "alvo" (a lista vazia) do HTML
const listaProdutosEl = document.getElementById("lista-produtos");
const botao_compra = document.getElementById("bot_carrinho");

const PRODUTOS = [
  {
    id: 1,
    nome: "Guitarra Tagima Woodstock TG-530",
    marca: "Tagima",
    secao: "Strato",
    preco: 1399,
    imagemUrl: "/Projeto Galeria com Filtros/img/guitarra_tagima_woodstock_tg_530_preto_bk_.webp",
    alt: "Imagem da guitarra tagima woodstock TG-530, na cor preto, com o escudo vermelho..." // O seu texto 'alt' completo
  },
  {
    id: 2,
    nome: "Ibanez GRG121DX BKF",
    marca: "Ibanez",
    secao: "6 Cordas",
    preco: 2100,
    imagemUrl: "/Projeto Galeria com Filtros/img/ibanez_grg121dx_bkf.jpg",
    alt: "Imagem da guitarra Ibanez linha GIO, toda preta..." // O seu texto 'alt' completo
  },
  // ... (Adicione os outros 3 e mais alguns)
];
// 2. Criamos a função que "renderiza" (desenha) os produtos
function renderizarProdutos(produtosParaRenderizar) {
    
    // Limpa a lista antes de desenhar (para filtros futuros)
    listaProdutosEl.innerHTML = ""; 

    // 3. Fazemos um loop em cada item do array
    produtosParaRenderizar.forEach(produto => {
        
        // 4. Criamos um novo item de lista (<li>)
        const cardProduto = document.createElement("li");
        
        // 5. Adicionamos uma classe para estilizar no CSS depois
        cardProduto.className = "card-produto"; 

        // 6. Criamos o HTML interno do card
        // (Note como usamos os dados do objeto 'produto')
        cardProduto.innerHTML = `
            <img src="${produto.imagemUrl}" alt="${produto.alt}">
            <h3>${produto.nome}</h3>
            <p class="marca">${produto.marca}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
        `;
        // 7. Adicionamos o card (o <li>) pronto dentro da lista (a <ul>)
        listaProdutosEl.appendChild(cardProduto);
        
        /* botao_compra.addEventListener('click', function(){
       console.log("Botão do carrinho funcionando!"); 
})*/

    });
}

// 8. Finalmente, chamamos a função pela primeira vez!
// Ela vai pegar seu array 'PRODUTOS' e desenhar tudo na tela.
renderizarProdutos(PRODUTOS);

