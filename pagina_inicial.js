// Lista de livros (exemplo fixo)
const livros = [
  {
    titulo: "Hábitos Atômicos",
    imagem: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg",
    categoria: "Desenvolvimento Pessoal",
    quantidade: 3,
    descricao:
      "Um guia prático para construir bons hábitos e eliminar maus hábitos, com base em pesquisas científicas e exemplos reais."
  },
  {
    titulo: "O poder do Hábito",
    imagem: "https://m.media-amazon.com/images/I/71xLmdLOQ0L.jpg",
    categoria: "Psicologia / Autodesenvolvimento",
    quantidade: 2,
    descricao:
      "Explora os mecanismos por trás dos hábitos e mostra como mudá-los para transformar a vida pessoal e profissional."
  },
  
{
    titulo: "Pense e enriqueça",
    imagem: "https://m.media-amazon.com/images/I/71Vji8FDaPL._SL1500_.jpg",
    categoria: "Autoajuda",
    quantidade: 1,
    descricao:
      "Pense & enriqueça propõe um programa de 13 passos que mostra a importância do autoconhecimento, da imaginação e das associações de ideias para criar resultados satisfatórios. Neste clássico absoluto da autoajuda financeira, descubra a fórmula para acumular fortuna, provando que a receita do sucesso é atemporal.."
  },
  {
    titulo: "Aprendendo a aprender",
    imagem: "https://m.media-amazon.com/images/I/911tVSa4fJL._SY425_.jpg",
    categoria: "Educação e Psicologia Cognitiva",
    quantidade: 1,
    descricao:
      "Ensina técnicas baseadas na neurociência para otimizar o aprendizado, focando no uso de dois modos de pensamento: focado (lógico e direto) e difuso (criativo e geral). "
  },
  {
    titulo: " O homem mais rico da babilonia",
    imagem: "https://m.magazineluiza.com.br/a-static/420x420/livro-o-homem-mais-rico-da-babilonia/livrariaepapelariablulivro/l99073261a/4f2b9df0c026cde9707b3fc321a30303.jpeg",
    categoria: "",
    quantidade: 1,
    descricao:
      "O Homem Mais Rico da Babilonia é categorizado como um livro de finanças pessoais e educação financeira. Ele é considerado um clássico atemporal e é frequentemente recomendado para jovens e adultos que buscam melhorar sua educação financeira e alcançar a liberdade financeira. O livro é amplamente reconhecido por suas lições sobre planejamento financeiro, a importância de se poupar, empréstimos, e investimentos."
  },
  {titulo:"Essencialismo",
   imagem:"https://m.media-amazon.com/images/I/41tL0XNglML._SY445_SX342_ML2_.jpg",
   categoria:"",
   quantidade:1,
   descricao:"O livro Essencialismo: A disciplinada busca por menos de Greg McKeown é categorizado como um livro de filosofia de vida e gestão de tempo. Ele desafia a mentalidade de fazer tudo e propõe uma abordagem mais focada e intencional para a vida e o trabalho. McKeown argumenta que, em vez de tentar fazer tudo, devemos nos concentrar nas poucas coisas que realmente importam e eliminar o resto."
  },

{titulo:"7 habitos das pessoas altamente eficazes",
 imagem:"https://m.magazineluiza.com.br/a-static/420x420/livro-os-7-habitos-das-pessoas-altamente-eficazes-stephen-r-covey/leituraalvoradapatiobrasil/9788576840626/c0b0df2f03be6acda72c93d0c6310cf8.jpg",
 categoria:"",
 quantidade:1,
 descricao:"",
},
{titulo:"como convencer alguém em 90 segundos",
 imagem:"https://m.magazineluiza.com.br/a-static/420x420/livro-como-convencer-alguem-em-90-segundos/livrariassis/1267487843/5bea397ccdb44709d7227af63a8f734f.jpg",
 categoria:"",
 quantidade:1,
 descricao:"",
},
{titulo:"Como fazer amigos e influenciar pessoas",
 imagem:"https://m.media-amazon.com/images/I/71x-i7sKSvL._SY385_.jpg",
 categoria:"",
 quantidade:1,
 descricao:"",
},
{titulo:"descubra seus pontos fortes",
 imagem:"https://m.media-amazon.com/images/I/51bpkuYQCvL._SY445_SX342_ML2_.jpg",
 categoria:"",
 quantidade:1,
 descricao:"",
},
{titulo:"Micro-hábitos",
 imagem:"https://m.magazineluiza.com.br/a-static/420x420/livro-micro-habitos/livrariacirculo/90015p/d29193718c95e60c17e5176301525990.jpg",
 categoria:"",
 quantidade:1,
 descricao:"",
},
{titulo:"o milagre do amanhã",
 imagem:"https://m.media-amazon.com/images/I/81sExobsgoL._SY425_.jpg",
 categoria:"",
 quantidade:1,
 descricao:"",
},
]
// ELEMENTOS
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const menu = document.getElementById("menu");
const content = document.getElementById("content");

const bookDetail = document.getElementById("bookDetail");
const detailImage = document.getElementById("detailImage");
const detailTitle = document.getElementById("detailTitle");
const detailQty = document.getElementById("detailQty");
const detailCat = document.getElementById("detailCat");
const detailDesc = document.getElementById("detailDesc");
const closeDetail = document.getElementById("closeDetail");

// Renderizar livros
function renderBooks(filtro = "") {
  bookList.innerHTML = "";
  const filtrados = livros.filter(l =>
    l.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  filtrados.forEach(livro => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = `
      <img src="${livro.imagem}" alt="${livro.titulo}">
      <p>${livro.titulo}</p>
    `;
    div.onclick = () => mostrarDetalhes(livro);
    bookList.appendChild(div);
  });
}

renderBooks();

// Buscar livros
searchInput.addEventListener("input", e => {
  renderBooks(e.target.value);
});

// Ocultar menu ao clicar na área principal
content.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Mostrar detalhes
function mostrarDetalhes(livro) {
  detailImage.src = livro.imagem;
  detailTitle.textContent = livro.titulo;
  detailQty.textContent = livro.quantidade;
  detailCat.textContent = livro.categoria;
  detailDesc.textContent = livro.descricao;

  bookDetail.classList.add("show");
}

// Fechar detalhes
closeDetail.addEventListener("click", () => {
  bookDetail.classList.remove("show");
});
