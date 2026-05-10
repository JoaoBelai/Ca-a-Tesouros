import Luciano from '../assets/luciano.png'

export const QUESTOES = [
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