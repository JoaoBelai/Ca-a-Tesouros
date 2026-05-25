import './Map.css'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Dialog from '../../components/Dialog/Dialog';
import { QUESTIONS } from '../../data/data';
import Mapa from '../../assets/mapImage.png'
import { IoIosPin } from "react-icons/io";

export default function Map(){
    // Inicializa o estado de progressão buscando dados no cache do navegador (localStorage).
    // O fallback garante que jogadores novos comecem do zero (fase 0) caso o cache esteja vazio.
    const [currentPhase, setCurrentPhase] = useState(() =>{
        const saved = localStorage.getItem("progress");
        return saved ? parseInt(saved, 10) : 0; 
    })

    // estado da página
    const [activeQuestion, setActiveQuestion] = useState(null);

    // Efeito colateral de sincronização: toda vez que currentPhase mudar, o novo valor é imediatamente persistido no localStorage.
    useEffect(() => {
        localStorage.setItem("progress", currentPhase);
    }, [currentPhase]);

    // Regra de negócio para avanço de fase. 
    const handleCorrect = () => {
        // A trava "activeQuestion.id - 1 === currentPhase" garante que o jogador só avance se estiver resolvendo a fase atual.
        // Impede que refazer fases anteriores avance o progresso indevidamente.
        if (activeQuestion.id - 1 === currentPhase) {
            setCurrentPhase(prev => prev + 1);
        }
        
        // Fecha o modal de diálogo independentemente de ser um avanço de fase ou apenas uma re-resolução.
        setActiveQuestion(null);

        toast.success("Parabéns, você acertou! Nova prova e suspeito desbloqueado.");
    }

    return(
        <main className='mainMap'>
            <h1 className='mapTitle'>MAPA</h1>

            <div className='mapContainer'>
                <figure className='mapImage'>
                    <img src={Mapa} alt="Imagem do mapa da cidade" />
                </figure>

                {QUESTIONS.map((question, index) => {
                    // Lógica de status espacial: define o estado de cada pino no mapa em relação à fase atual do jogador.
                    const resolved = index < currentPhase;
                    const available = index === currentPhase;
                    const blocked = index > currentPhase;

                    let pinClass = "pin";
                    if (resolved) pinClass += " resolved";
                    if (available) pinClass += " available";
                    if (blocked) pinClass += " blocked";

                    return (
                        <button
                            key={question.id}
                            className={pinClass}
                            // Injeta as coordenadas estáticas definidas no JSON de dados para posicionar o pino fisicamente sobre a imagem do mapa.
                            style={{ 
                                top: question.posicao.top, 
                                left: question.posicao.left 
                            }}
                            onClick={() => setActiveQuestion(question)}
                            // Bloqueia nativamente a interação com fases que o jogador ainda não alcançou.
                            disabled={blocked}
                        >
                            <IoIosPin/>
                        </button>
                    );
                })}
            </div>

            {/* Renderização condicional do modal: só é montado no DOM se houver uma questão ativamente selecionada. */}
            {activeQuestion && (
                <Dialog 
                    data={activeQuestion} 
                    onWin={handleCorrect} 
                    onClose={() => setActiveQuestion(null)} 
                />
            )}
        </main>
    );
}