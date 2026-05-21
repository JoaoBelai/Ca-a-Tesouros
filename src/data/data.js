import Luciano from '../assets/luciano.png'
import Fausto from '../assets/Faustosilva.jpg'

export const QUESTIONS = [
  {
    id: 1,
    posicao: { top: "30%", left: "45%" },
    pessoa: "Luciano",
    imagem: Luciano,
    dialogos: [
      "Olá, aventureiro!",
      "Aqui começa a sua jornada.",
      "Vamos ver se você tem o que é preciso."
    ],
    pergunta: "Qual é a principal linguagem de estilização da web?",
    opcoes: ["HTML", "Python", "CSS", "Java"],
    respostaCorreta: "CSS"
  },
  {
    id: 2,
    posicao: { top: "60%", left: "70%" },
    pessoa: "Washington",
    imagem: Luciano,
    dialogos: ["Muito bem! Passou pelo primeiro desafio."],
    pergunta: "Qual hook do React usamos para gerenciar estado?",
    opcoes: ["useEffect", "useState", "useRef", "useContext"],
    respostaCorreta: "useState"
  },
  {
    id: 3,
    posicao: { top: "40%", left: "30%" },
    pessoa: "Washington",
    imagem: Luciano,
    dialogos: ["Muito bem! Passou pelo primeiro desafio."],
    pergunta: "Qual hook do React usamos para gerenciar estado?",
    opcoes: ["useEffect", "useState", "useRef", "useContext"],
    respostaCorreta: "useState"
  }
];

export const SUSPECTS = [
  {
    id: 1,
    img: Fausto,
    name: "João Belai",
    alibi: "Estava na cozinha do refeitório",
    desc: "Chef de cozinha, sabe mexer com facas, e os cortes na vítima foram extremamente precisos.",
    profession: "Chef de Cozinha",
    isKiller: false
  },
  {
    id: 2,
    img: Fausto,
    name: "Helena",
    alibi: "Disse que estava organizando arquivos na biblioteca",
    desc: "Bibliotecária reservada que conhecia profundamente a rotina da vítima e tinha acesso às plantas do prédio.",
    profession: "Bibliotecária",
    isKiller: false
  },
  {
    "id": 3,
    img: Fausto,
    name: "Ricardo",
    alibi: "Afirmou estar fazendo a ronda noturna nos corredores",
    desc: "Ex-militar com comportamento rígido e conhecimento em combate corpo a corpo.",
    profession: "Segurança",
    isKiller: true
  },
  {
    "id": 4,
    img: Fausto,
    name: "Camila",
    alibi: "Disse que estava no laboratório realizando testes químicos",
    desc: "Química inteligente e calma, tinha acesso fácil a substâncias perigosas e reagentes tóxicos.",
    profession: "Química",
    isKiller: false
  },
  {
    "id": 5,
    img: Fausto,
    name: "Eduardo",
    alibi: "Estava no estacionamento consertando o gerador",
    desc: "Mecânico habilidoso que conhecia todas as passagens técnicas e áreas restritas do local.",
    profession: "Mecânico",
    isKiller: false
  },
  {
    "id": 6,
    img: Fausto,
    name: "Valentina",
    alibi: "Disse que estava em seu quarto durante toda a noite",
    desc: "Psicóloga manipuladora, conhecida por conseguir extrair segredos e influenciar emocionalmente as pessoas.",
    profession: "Psicóloga",
    isKiller: false
  }
]