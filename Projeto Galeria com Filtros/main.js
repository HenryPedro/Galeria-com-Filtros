// Dentro de script.js
// 1. Pegamos o "alvo" (a lista vazia) do HTML
const listaProdutosEl = document.getElementById("lista-produtos");
const botao_compra = document.getElementById("bot_carrinho");
const filtro = document.getElementById("filtros");
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const PRODUTOS = [
  {
    id: 1,
    nome: "Tagima Woodstock TG-530",
    marca: "Tagima",
    secao: "Strato",
    preco: 1399,
    imagemUrl:
      "/Projeto Galeria com Filtros/img/guitarra_tagima_woodstock_tg_530_preto_bk_.webp",
    alt: "Imagem da guitarra tagima woodstock TG-530, na cor preto, com o escudo vermelho e escala clara. Essa guitarra contém 3 captadores single coil.",
  },
  {
    id: 2,
    nome: "Ibanez GRG121DX BKF",
    marca: "Ibanez",
    secao: "6 Cordas",
    preco: 2100,
    imagemUrl: "/Projeto Galeria com Filtros/img/ibanez_grg121dx_bkf.jpg",
    alt: "Imagem da guitarra Ibanez linha GIO, toda preta...",
  },
  {
    id: 3,
    nome: "Seizi Vintage Budokan HSS",
    marca: "Seizi",
    secao: "Strato",
    preco: 3490.0,
    imagemUrl: "/Projeto Galeria com Filtros/img/Seizi_Vintage_Budokan_HSS.jpg",
    alt: "Imagem da guitarra Seizi Vintage, na cor Ash. Guitarra conta com 2 singles e 1 humbucker na ponte. Sua ponte são 2 pivôs e contém alavanca.",
  },
  {
    id: 4,
    nome: "Tagima Grace 70 WHSPK (Cacau Santos)",
    marca: "Tagima",
    secao: "Tele",
    preco: 4199.0,
    imagemUrl: "/Projeto Galeria com Filtros/img/tagima_grace_70_whspk.jpg",
    alt: "Tagima Grace 70 WH SP. É uma guitarra Signature do talentosíssimo Cacau Santos. Com corpo estilo Tele, possui 2 Humbuckers Zaganin estilo CS. Ela ainda conta com tarraxas com trava, oferecendo afinações mais estáveis. Ponte Tremolo com 2 Pivôs. Disponível na cor White Sparkle. Acompanha Bag Tagima Trip Cool G.",
  },
  {
    id: 5,
    nome: "Seizi Budokan Reinaldo Meirelles - BK Gold",
    marca: "Seizi",
    secao: "Superstrato",
    preco: 4500.0,
    imagemUrl:
      "/Projeto Galeria com Filtros/img/SZ_VintageBudokan_HSS_ReinaldoM.jpg",
    alt: "Guitarra Seizi Budokan Reinaldo Meirelles Satin Black Gold, estilo superstrato, com captação HSS em Alnico V, ponte 2 pivôs, escala em maple no acabament preto fosco com ferragens douradas.",
  },
  {
    id: 6,
    nome: "Seizi Budokan Reinaldo Meirelles - WH Gold",
    marca: "Seizi",
    secao: "Superstrato",
    preco: 4800.0,
    imagemUrl:
      "/Projeto Galeria com Filtros/img/SZ_VintageBudokanWH_HSS_ReinaldoM.jpg",
    alt: "superstrato equipada com o histórico headstock Vintage, captadores em configuração HSS e ponte flutuante de 2 pivôs com alavanca. Mais especial ainda é essa edição especial feita em parceria com o guitarrista Reinaldo Meirelles. Disponível na cor preta fosca, ela vem com o headstock pintado na cor, com a assinatura do artista e várias das características do modelo Custom Shop que o Reinaldo Meirelles desenvolveu conosco para ter tudo o que ele precisa no palco e nos estúdios! Uma verdadeira obra-prima que certamente vai te conquistar.",
  },
];
// 2. Criamos a função que "renderiza" (desenha) os produtos
function renderizarProdutos(produtosParaRenderizar) {
  // Limpa a lista antes de desenhar (para filtros futuros)
  listaProdutosEl.innerHTML = "";

  // um loop em cada item do array
  produtosParaRenderizar.forEach((produto) => {
    // novo item de lista (<li>)
    const cardProduto = document.createElement("li");

    // Classe para estilizar no CSS depois
    cardProduto.className = "card-produto";
    cardProduto.innerHTML = `
            
            <img src="${produto.imagemUrl}" alt="${produto.alt}">
            
            <h3>${produto.nome}</h3>
            <p class="marca">${produto.marca}</p>
            
            <p class="preco">R$ ${formatadorMoeda.format(produto.preco)}</p>
            
            <button class="comprar-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>Comprar</span>
            </button>
        `;

    // Adiciona o <li> pronto dentro da lista <ul>
    listaProdutosEl.appendChild(cardProduto);
  });
}
renderizarProdutos(PRODUTOS);

let marcasSelecionadas = [];

const checkboxesMarca = document.querySelectorAll('input[name="marca"]');

checkboxesMarca.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    marcasSelecionadas = Array.from(checkboxesMarca)
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    aplicarFiltros();
  });
});

function aplicarFiltros() {
  let produtosFiltrados = PRODUTOS;

  if (marcasSelecionadas.length > 0) {
    produtosFiltrados = produtosFiltrados.filter((produto) => {
      return marcasSelecionadas.includes(produto.marca);
    });
  }
  renderizarProdutos(produtosFiltrados);
}
