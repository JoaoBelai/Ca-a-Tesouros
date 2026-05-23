import Camila from '../assets/Camila.png'
import Gustavo from '../assets/Gustavo.png'
import Helena from '../assets/Helena.png'
import Otavio from '../assets/Otavio.png'
import Renata from '../assets/Renata.png'
import Rodrigo from '../assets/Rodrigo.png'
import CamilaFundo from '../assets/CamilaSFundo.png'
import GustavoFundo from '../assets/GustavoSFundo.png'
import HelenaFundo from '../assets/HelenaSFundo.png'
import OtavioFundo from '../assets/OtavioSFundo.png'
import RenataFundo from '../assets/RenataSFundo.png'
import RodrigoFundo from '../assets/RodrigoSFundo.png'
import Estatueta from '../assets/Estatueta.png'
import Registro from '../assets/Registro.png'
import Ligacao from '../assets/Ligacao.png'
import Envelope from '../assets/Envelope.png'
import Radio from '../assets/Radio.png'
import Comanda from '../assets/Comanda.png'

export const QUESTIONS = [
  {
      id: 1,
      posicao: { top: "30%", left: "45%" },
      pessoa: "Helena",
      imagem: HelenaFundo,
      dialogos: [
        "Marcelo destruiu minha carreira quando cancelou meu contrato no projeto Solaris. Todo mundo sabe disso.",
        "Mas eu não subi até a cobertura naquela noite. Fiquei no bar do térreo depois das 21h20.",
        "Inclusive vi Otávio discutindo com Marcelo pelo telefone perto dos elevadores antes do apagão parcial do prédio.",
        "E antes que perguntem: sim, encontrei Camila saindo do estacionamento por volta das 21h35, nervosa e limpando algo da manga do casaco."
      ],
      pergunta: "Qual detalhe do depoimento de Helena entra em conflito com outro suspeito?",
      opcoes: [
        "Ela afirma que Marcelo cancelou seu contrato.",
        "Ela diz que Otávio estava nos elevadores antes do apagão.",
        "Ela afirma ter visto Camila às 21h35 no estacionamento.",
        "Ela admite estar no térreo após 21h20."
      ],
      respostaCorreta: "Ela afirma ter visto Camila às 21h35 no estacionamento."
    },
    {
      id: 2,
      posicao: { top: "40%", left: "20%" },
      pessoa: "Rodrigo",
      imagem: RodrigoFundo,
      dialogos: [
        "Marcelo me devia dinheiro. Fazia meses. Mas naquela noite eu estava monitorando o acesso dos convidados no lobby.",
        "Camila subiu para a cobertura às 21h12. Isso eu lembro porque Otávio perguntou por ela minutos depois.",
        "E outra coisa: Gustavo desceu do elevador de serviço muito apressado perto das 21h30 carregando uma mochila preta. Ele disse que estava indo embora, mas não parecia tranquilo."
      ],
      pergunta: "Qual informação do relato de Rodrigo depende de um horário impossível de confirmar sozinho?",
      opcoes: [
        "Gustavo carregava uma mochila preta.",
        "Marcelo devia dinheiro para Rodrigo.",
        "Otávio perguntou por Camila minutos depois dela subir.",
        "Gustavo parecia nervoso."
      ],
      respostaCorreta: "Otávio perguntou por Camila minutos depois dela subir."
    },
    {
      id: 3,
      posicao: { top: "50%", left: "60%" },
      pessoa: "Camila",
      imagem: CamilaFundo,
      dialogos: [
        "Marcelo prometeu me entregar documentos sobre lavagem de dinheiro envolvendo a empresa dele.",
        "Só que ele também mentia para todo mundo, inclusive para mim.",
        "Eu subi até a cobertura às 21h12, peguei um envelope e fui embora antes das 21h25. Não encontrei Otávio lá em cima.",
        "E não faço ideia do motivo de Helena dizer que me viu no estacionamento às 21h35.",
        "Na verdade, quando eu saí do prédio, cruzei com Gustavo entrando no elevador de serviço."
      ],
      pergunta: "Qual detalhe torna incompatíveis os relatos de Camila e Helena?",
      opcoes: [
        "Camila diz que saiu antes das 21h25.",
        "Camila afirma que Marcelo mentia.",
        "Camila menciona um envelope.",
        "Camila viu Gustavo no elevador de serviço."
      ],
      respostaCorreta: "Camila diz que saiu antes das 21h25."
    },
    {
      id: 4,
      posicao: { top: "20%", left: "70%" },
      pessoa: "Gustavo",
      imagem: GustavoFundo,
      dialogos: [
        "Marcelo ia me demitir naquela semana.", 
        "Disse que alguém precisava assumir a culpa pelos desvios fiscais antes da auditoria começar.",
        "Eu realmente subi pelo elevador de serviço, mas só para recuperar documentos no arquivo do 18º andar.",
        "E antes que inventem histórias: eu não estava fugindo com mochila nenhuma. Dentro dela só tinha meu notebook.",
        "Ah, e quando saí do elevador ouvi Helena discutindo com alguém perto do corredor executivo."
      ],
      pergunta: "Qual detalhe do depoimento de Gustavo contradiz diretamente outro relato?",
      opcoes: [
        "Ele afirma ter subido pelo elevador de serviço.",
        "Ele diz que ouviu Helena no corredor executivo.",
        "Ele afirma não estar fugindo com mochila nenhuma.",
        "Marcelo ameaçou demiti-lo."
      ],
      respostaCorreta: "Ele afirma não estar fugindo com mochila nenhuma."
    },
    {
      id: 5,
      posicao: { top: "60%", left: "35%" },
      pessoa: "Renata",
      imagem: RenataFundo,
      dialogos: [
        "Marcelo estava pressionando todo mundo.", 
        "Ele ameaçou expor Otávio na reunião daquela noite e disse que Gustavo seria preso se a auditoria descobrisse os desvios.",
        "Eu fiquei no restaurante com investidores até quase 22h. Só subi ao prédio depois da confusão começar.",
        "E sinceramente? Acho estranho Camila dizer que saiu cedo.", 
        "Porque às 21h40 eu vi uma mulher de vestido cinza entrando apressada na escada lateral."
      ],
      pergunta: "Qual detalhe do depoimento de Renata cria um novo conflito temporal?",
      opcoes: [
        "Marcelo ameaçou expor Otávio.",
        "Renata estava com investidores.",
        "Ela afirma ter visto uma mulher de vestido cinza às 21h40.",
        "Gustavo poderia ser preso."
      ],
      respostaCorreta: "Ela afirma ter visto uma mulher de vestido cinza às 21h40."
    },
    {
      id: 6,
      posicao: { top: "80%", left: "50%" },
      pessoa: "Otávio",
      imagem: OtavioFundo,
      dialogos: [
        "Marcelo estava paranoico havia semanas.", 
        "Achava que todo mundo queria derrubá-lo.",
        "Sim, discutimos antes da reunião porque ele queria cancelar minha participação na empresa.", 
        "Mas depois fui embora para encontrar investidores no restaurante onde Renata estava.",
        "Nunca subi para a cobertura depois das 21h15.", 
        "E outra coisa: se Gustavo realmente saiu pelo elevador de serviço às 21h31, então ele teve tempo suficiente para matar Marcelo antes."
      ],
      pergunta: "Qual detalhe do discurso de Otávio exige conhecimento que ele não deveria possuir?",
      opcoes: [
        "Marcelo queria cancelar sua participação.",
        "Ele afirma que Gustavo saiu às 21h31.",
        "Otávio discutiu com Marcelo.",
        "Ele diz que encontrou investidores depois."
      ],
      respostaCorreta: "Ele afirma que Gustavo saiu às 21h31."
    }
];

export const SUSPECTS = [
  {
      id: 1,
      img: Helena,
      name: "Helena",
      alibi: "Afirma ter ficado no bar do térreo depois das 21h20.",
      desc: "Teve sua carreira prejudicada quando Marcelo cancelou seu contrato no projeto Solaris. Mentiu sobre permanecer o tempo todo no bar do térreo, ausentando-se por 11 minutos.",
      profession: "Ex-noiva e arquiteta",
      isKiller: false
    },
    {
      id: 2,
      img: Rodrigo,
      name: "Rodrigo",
      alibi: "Monitorando o acesso dos convidados no lobby e em loja de conveniência 24h.",
      desc: "Marcelo lhe devia dinheiro há meses. Estava na posição ideal para observar o fluxo de pessoas, mas também para agir sem ser notado pelas câmeras.",
      profession: "Segurança noturno",
      isKiller: false
    },
    {
      id: 3,
      img: Camila,
      name: "Camila",
      alibi: "Diz ter saído do prédio antes das 21h25.",
      desc: "Tinha acesso íntimo a Marcelo, mas descobriu suas mentiras. Subiu para pegar documentos comprometedores sobre lavagem de dinheiro da empresa.",
      profession: "Jornalista investigativa e amante",
      isKiller: false
    },
    {
      id: 4,
      img: Gustavo,
      name: "Gustavo",
      alibi: "Foi ao 18º andar recuperar documentos e saiu discretamente pelo elevador de serviço.",
      desc: "Ameaçado de demissão iminente para ser o bode expiatório dos desvios fiscais da empresa antes de uma auditoria.",
      profession: "Assistente financeiro",
      isKiller: false
    },
    {
      id: 5,
      img: Renata,
      name: "Renata",
      alibi: "Ficou em um restaurante executivo com investidores até quase 22h.",
      desc: "Pressionada por Marcelo, tinha ciência das ameaças feitas a Otávio e Gustavo. Seu depoimento cria furos no álibi de Camila.",
      profession: "Diretora administrativa",
      isKiller: false
    },
    {
      id: 6,
      img: Otavio,
      name: "Otávio",
      alibi: "Alega não ter subido à cobertura após 21h15 e que foi ao restaurante encontrar investidores.",
      desc: "Discutiu asperamente com Marcelo, que descobriu seus desvios financeiros e planejava expô-lo. Demonstra conhecimento do sistema de elevadores que não deveria ter.",
      profession: "Sócio minoritário e parceiro financeiro",
      isKiller: true
    }
]

export const PROOFS = [
  {
      id: 1,
      img: Comanda,
      name: "Comanda de bar",
      type: "doc.",
      desc: "Registra 'Mesa 12 — Helena Duarte' fechada às 21h41, mas com a anotação do garçom: 'Cliente ausente da mesa entre aproximadamente 21h26 e 21h37'. Mostra que Helena mentiu no depoimento."
    },
    {
      id: 2,
      img: Radio,
      name: "Rádio da segurança",
      type: "audio",
      desc: "Transcrição parcial que capta agentes de segurança relatando às 21h15 que 'Otávio perguntou se ela (Camila) já tinha chegado'. Confirma o interesse de Otávio no paradeiro de Camila."
    },
    {
      id: 3,
      img: Envelope,
      name: "Envelope rasgado",
      type: "objeto",
      desc: "Encontrado no lixo com cópias de transferências e anotação manual de Marcelo: 'O. continua desviando valores. Resolver isso hoje'."
    },
    {
      id: 4,
      img: Registro,
      name: "Registro dos elevadores",
      type: "doc.",
      desc: "Mostra o elevador de serviço subindo ao 18º andar às 21h27 e descendo ao térreo às 21h31. A porta lateral foi aberta às 21h32, confirmando a saída discreta de Gustavo"
    },
    {
      id: 5,
      img: Ligacao,
      name: "Ligação anônima",
      type: "audio",
      desc: "Gravada às 21h38. Uma voz feminina cobra Marcelo, dizendo 'Você disse que resolveria isso hoje', ao qual ele responde que o faria após a reunião. Áudio muito distorcido para identificar."
    },
    {
      id: 6,
      img: Estatueta,
      name: "Estatueta metálica",
      type: "arma",
      desc: "Objeto pesado com pequenas marcas de impacto e vidro aderido, contendo um resíduo de tecido azul-escuro preso."
    }
]