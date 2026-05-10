import './Map.css'
import { useEffect, useState } from 'react';
import Dialog from '../../components/Dialog/Dialog';
import { QUESTOES } from '../../data/data';
import Mapa from '../../assets/mapImage.png'
import { IoIosPin } from "react-icons/io";

export default function Map(){
    const [currentPhase, setCurrentPhase] = useState(() =>{
        const saved = localStorage.getItem("progress");
        return saved ? parseInt(saved, 10) : 0; 
    })

    const [activeQuestion, setActiveQuestion] = useState(null);

    useEffect(() => {
        localStorage.setItem("progress", currentPhase);
    }, [currentPhase]);

    const handleCorrect = () => {
        if (activeQuestion.id - 1 === currentPhase) {
            setCurrentPhase(prev => prev + 1);
        }
        setActiveQuestion(null);
    }

    return(
        <main className='mainMap'>
            <h1 className='mapTitle'>MAPA</h1>

            <div className='mapContainer'>
                <figure className='mapImage'>
                    <img src={Mapa} alt="Imagem do mapa da cidade" />
                </figure>

                {QUESTOES.map((question, index) => {
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
                            style={{ 
                                top: question.posicao.top, 
                                left: question.posicao.left 
                            }}
                            onClick={() => setActiveQuestion(question)}
                            disabled={blocked}
                        >
                            <IoIosPin/>
                        </button>
                    );
                })}
            </div>

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