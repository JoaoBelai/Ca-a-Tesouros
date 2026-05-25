import './Suspects.css'
import { useState, useEffect } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import { SUSPECTS } from '../../data/data';
import Suspect from '../../components/Suspect/Suspect'

function DropZone({children, accusationStatus}){
    // Define este componente como uma área válida para receber elementos arrastáveis.
    // O id 'killer-section' é o alvo que verificaremos ao final do arrasto.
    const { isOver, setNodeRef } = useDroppable({
        id: 'killer-section',
    });

    let zoneClass = 'killerSection';
    if (isOver) zoneClass += ' isOver';
    if (accusationStatus === 'correct') zoneClass += ' isCorrect';
    if (accusationStatus === 'wrong') zoneClass += ' isWrong';

    return (
        <section 
            ref={setNodeRef} 
            className={zoneClass}
        >
            {children}
        </section>
    );
}

export default function Suspects(){
    // estados da página
    const [accusedId, setAccusedId] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [accusationStatus, setAccusationStatus] = useState(null);
    const [progress, setProgress] = useState(0);

    // Carrega o progresso salvo no cache para sincronizar a lista de suspeitos disponíveis logo na montagem.
    useEffect(() => {
        const saved = localStorage.getItem("progress");
        if (saved) {
            setProgress(parseInt(saved, 10));
        }
    }, []);

    // Intercepta o evento disparado quando o usuário solta um elemento arrastável.
    const handleDragEnd = (event) => {
        // active: o elemento que está sendo arrastado. over: a zona onde ele foi solto.
        const { active, over } = event;

        // Se foi solto em cima da dropzone correta, registra o ID do suspeito e reseta o feedback de tentativas anteriores.
        if (over && over.id === 'killer-section'){
            setAccusedId(active.id);
            setFeedbackMessage("");
            setAccusationStatus(null);
        }
    }

    // Valida se o suspeito arrastado para a zona é de fato o assassino.
    const handleAccusation = () => {
        // Trava de segurança: impede a acusação se a zona estiver vazia.
        if (!accusedId) return;

        const currentSuspect = SUSPECTS.find(s => s.id === accusedId);
        
        // Altera os estados de feedback baseados na flag isKiller definida na base de dados (SUSPECTS).
        if (currentSuspect.isKiller) {
            setFeedbackMessage("Parabéns detetive, você descobriu o assasino!");
            setAccusationStatus('correct');
        } else {
            setFeedbackMessage("Esse não é o assasino! Preste mais atenção nas pistas e diálogos!");
            setAccusationStatus('wrong');
        }
    };

    // Filtra os suspeitos que o jogador já liberou baseado no progresso.
    const unlockedSuspects = SUSPECTS.filter(suspect => suspect.id <= progress);

    // Isola o objeto do suspeito que está atualmente na zona de acusação (se houver).
    const accusedSuspectInfo = unlockedSuspects.find(s => s.id === accusedId);
    
    // Cria um array apenas com os suspeitos que não estão na zona de acusação, evitando renderização duplicada.
    const remainingSuspects = unlockedSuspects.filter(s => s.id !== accusedId);

    return(
        <main className='mainSuspects'>
            <h1 className='suspectsTitle'>SUSPEITOS</h1>
            {/* O DndContext envelopa tudo que envolve arrastar (Suspect) e soltar (DropZone), gerenciando os eventos globais. */}
            <DndContext onDragEnd={handleDragEnd}>
                <DropZone accusationStatus={accusationStatus}>
                    <h2 className='killerSectionTitle'>Arraste o Culpado</h2>

                    {/* Renderiza o suspeito dentro da dropzone caso haja um accusedId registrado no estado. */}
                    {accusedSuspectInfo && (
                        <Suspect
                            id={accusedSuspectInfo.id} 
                            img={accusedSuspectInfo.img}
                            name={accusedSuspectInfo.name}
                            alibi={accusedSuspectInfo.alibi}
                            desc={accusedSuspectInfo.desc}
                            profession={accusedSuspectInfo.profession}
                        />    
                    )}

                    <div className='killerSectionBottom'>
                        <button onClick={handleAccusation} className='accuseBtn'>
                            Fazer Acusação
                        </button>

                        {feedbackMessage && (
                            <h3 className={accusedSuspectInfo?.isKiller ? 'successText' : 'errorText'}>
                                {feedbackMessage}
                            </h3>
                        )}
                    </div>
                </DropZone>

                <section className='suspectsContainer'>
                    {/* Renderiza apenas a lista filtrada (remainingSuspects), garantindo que quem foi arrastado saia do grid principal. */}
                    {remainingSuspects.length > 0 ? (
                        remainingSuspects.map((suspect) => (
                            <Suspect
                                key={suspect.id}
                                id={suspect.id} 
                                img={suspect.img}
                                name={suspect.name}
                                alibi={suspect.alibi}
                                desc={suspect.desc}
                                profession={suspect.profession}
                            />
                        ))
                    ) : (
                        <p className="emptyState">Nenhum suspeito identificado ainda.</p>
                    )}
                </section>
            </DndContext>
        </main>
    );
}