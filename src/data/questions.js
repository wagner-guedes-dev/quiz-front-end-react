const data = [
  // HTML
  {
    question: "Qual tag cria um parágrafo?",
    options: ["<p>", "<h1>", "<text>", "<ul>"],
    answer: "<p>",
    tip: "É uma tag de uma letra apenas",
  },
  {
    question: "Qual atributo adiciona um link para a tag a?",
    options: ["alt", "href", "src", "link"],
    answer: "href",
    tip: "Hyperlink Reference",
  },
  {
    question: "As listas não ordenadas tem a tag de:",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "Qual atributo deixa o input obrigatório?",
    options: ["placeholder", "value", "required", "maxlength"],
    answer: "required",
  },
  {
    question: "A tag semântica indicada para rodapés é a:",
    options: ["div", "main", "section", "footer"],
    answer: "footer",
  },
  //CSS
  {
    question: "Qual regra altera a cor de um elemento?",
    options: ["color", "background-color", "font-size", "transition"],
    answer: "color",
    tip: "Cor em inglês",
  },
  {
    question: "Para aumentar a fonte de um elemento utilizamos:",
    options: ["font", "text-transform", "font-size", "hover"],
    answer: "font-size",
  },
  {
    question: "A posição que deixa um elemento fixo é a:",
    options: ["static", "absolute", "fixed", "relative"],
    answer: "fixed",
  },
  {
    question: "É possível customizar várias características de um texto, utilizando-se das propriedades do CSS. Assim sendo, a propriedade CSS que pode ser utilizada para tornar um texto negrito é:",
    options: ["text-decoration: bold", "boldness: true", "font-style: bold", "font-weight: bold"],
    answer: "font-weight: bold}",
  },{
    question: `No contexto do CSS numa página Web, assinale o script que estabelece que todos os elementos serão exibidos de acordo com a definição dos estilos. `,
    options: ["p { font-size: 20px; color: blue}", ".p { font-size: 20px; color: blue}", '#p { font-size: 20px; color: blue}', "<p> { font-size: 20px; color: blue}"],
    answer: "p { font-size: 20px; color: blue}",
  },
  // JavaScript
    {
      question: "O que é Vanilla JavaScript?",
      options: [
        "JavaScript puro",
        "Uma biblioteca JavaScript",
        "Um framework JavaScript",
        "Um compilador de JavaScript",
      ],
      answer: "JavaScript puro",
    },
    {
      question: "Com qual instrução declaramos uma constante em JavaScript?",
      options: ["const", "let", "var", "define"],
      answer: "const",
    },
    {
      question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
      options: ["string", "number", "boolean", "float"],
      answer: "float",
    },
    {
      question: "Qual dos métodos a seguir seleciona um elemento?",
      options: ["querySelector", "parseInt", "sort", "reduce"],
      answer: "querySelector",
    },
    {
      question:
        "Qual destas propriedades da a quantidade de elementos de um array?",
      options: ["qty", "length", "items", "index"],
      answer: "length",
    },
  ];
  
  export default data;