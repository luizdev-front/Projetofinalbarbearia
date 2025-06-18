function Comprar() {
    alert("Este é um produto de alta qualidade,consulte o site oficial para mais informações.");
}
const produtos = [
  {
    imagem: "cremedecoloracao.webp",
    titulo: "Creme de Coloração - ",
    preco: "R$ 49,99",
    descricao: "O creme de coloração é perfeito para renovar o visual, realçar a cor natural ou cobrir os fios brancos. Sua fórmula cremosa proporciona uma aplicação fácil e uniforme, garantindo resultado vibrante e duradouro. Ideal para quem busca praticidade e cuidado em um só produto."


  },
  {
    imagem: "gelcreme.webp",
    titulo: "Gel creme ",
    preco: "R$ 54,99",
    descricao: "O Gel Creme combina a fixação do gel com a hidratação do creme, oferecendo controle e estilo sem deixar o cabelo rígido ou ressecado. Ideal para modelar e dar forma com aspecto natural e toque macio."
  },
  {
    imagem: "hidratanteparabarba.webp",
    titulo: "Hidratante",
    preco: "R$ 59,99",
    descricao: "O creme hidratante para barba é essencial para manter os fios macios, saudáveis e com aspecto alinhado. Ele combate o ressecamento da pele sob os pelos, evitando coceiras e irritações. Com uma aplicação fácil, deixa a barba suave ao toque e com um brilho natural, garantindo um visual sempre impecável."


  }
];

let indiceAtual = 0;

function proximaImagem() {
  indiceAtual = (indiceAtual + 1) % produtos.length;
  atualizarProduto();
}

function atualizarProduto() {
  const produto = produtos[indiceAtual];
  document.getElementById("img-produto").src = produto.imagem;
  document.getElementById("titulo-produto").innerText = produto.titulo;
  document.getElementById("preco-produto").innerText = produto.preco;
  document.getElementById("desc-produto").innerText = produto.descricao;
}

function Comprar() {
  alert("Você clicou em comprar: " + produtos[indiceAtual].titulo);
}

window.onload = atualizarProduto;
let index = 0;

const  produto = [
  {
    imagem: "cremedecoloracao.webp",
    titulo: "Creme de Coloração",
    preco: "R$ 49,99",
    descricao: "O Creme de Coloração é a solução ideal para quem deseja mudar o visual, realçar a cor natural ou cobrir os fios brancos."
  },
  {
    imagem: "cremedebarbear.jpeg",
    titulo: "Creme de Barbear",
    preco: "R$ 34,90",
    descricao: "Perfeito para um barbear suave e sem irritações, com hidratação profunda da pele."
  },
  {
    imagem: "gelblackcola.jpeg",
    titulo: "Gel Black Cola",
    preco: "R$ 69,90",
    descricao: "Ideal para penteados com alta fixação e brilho intenso."
  }
];

function trocarProduto() {
  const img = document.getElementById('img-produto');
  const titulo = document.getElementById('titulo-produto');
  const preco = document.getElementById('preco-produto');
  const desc = document.getElementById('desc-produto');

  // Esconde e reduz com transform e opacity
  [img, titulo, preco, desc].forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'scale(0.95)';
  });

  setTimeout(() => {
    index = (index + 1) % produtos.length;

    img.src = produtos[index].imagem;
    img.alt = produtos[index].titulo;
    titulo.textContent = produtos[index].titulo;
    preco.textContent = produtos[index].preco;
    desc.textContent = produtos[index].descricao;

    // Volta ao normal suavemente
    [img, titulo, preco, desc].forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'scale(1)';
    });
  }, 300); // corresponde ao tempo da transição
}
