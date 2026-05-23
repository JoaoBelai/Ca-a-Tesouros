import './Suspects.css'
import { useState, useEffect } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import { SUSPECTS } from '../../data/data';
import Suspect from '../../components/Suspect/Suspect'

function DropZone({children, accusationStatus}){
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
    const [accusedId, setAccusedId] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [accusationStatus, setAccusationStatus] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem("progress");
        if (saved) {
            setProgress(parseInt(saved, 10));
        }
    }, []);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over && over.id === 'killer-section'){
            setAccusedId(active.id);
            setFeedbackMessage("");
            setAccusationStatus(null);
        }
    }

    const handleAccusation = () => {
        if (!accusedId) return;

        const currentSuspect = SUSPECTS.find(s => s.id === accusedId);
        
        if (currentSuspect.isKiller) {
            setFeedbackMessage("Parabéns detetive, você descobriu o assasino!");
            setAccusationStatus('correct');
        } else {
            setFeedbackMessage("Esse não é o assasino! Preste mais atenção nas pistas e diálogos!");
            setAccusationStatus('wrong');
        }
    };

    const unlockedSuspects = SUSPECTS.filter(suspect => suspect.id <= progress);

    const accusedSuspectInfo = unlockedSuspects.find(s => s.id === accusedId);
    
    const remainingSuspects = unlockedSuspects.filter(s => s.id !== accusedId);

    return(
        <main className='mainSuspects'>
            <h1 className='suspectsTitle'>SUSPEITOS</h1>
            <DndContext onDragEnd={handleDragEnd}>
                <DropZone accusationStatus={accusationStatus}>
                    <h2 className='killerSectionTitle'>Arraste o Culpado</h2>

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