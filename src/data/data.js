export const QUESTOES = [
  {
    id: 1,
    posicao: { top: "30%", left: "45%" }, 
    dialogos: [
      "Olá, aventureiro!",
      "Aqui começa a sua jornada.",
      "Vamos ver se você tem o que é preciso."
    ],
    pergunta: "Qual é a principal linguagem de estilização da web?",
    opcoes: ["HTML", "Python", "CSS", "Java"],
    respostaCorreta: "CSS", 
    dica: "Pense em cascata."
  },
  {
    id: 2,
    posicao: { top: "60%", left: "70%" },
    dialogos: ["Muito bem! Passou pelo primeiro desafio."],
    pergunta: "Qual hook do React usamos para gerenciar estado?",
    opcoes: ["useEffect", "useState", "useRef", "useContext"],
    respostaCorreta: "useState",
    dica: "A resposta está no nome."
  }
];