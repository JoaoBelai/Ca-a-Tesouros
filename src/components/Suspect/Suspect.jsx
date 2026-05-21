import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import './Suspect.css'

export default function Suspect({id, img, name, alibi, desc, profession}){
    const [risk, setRisk] = useState(false);

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id:id,
    })

    const style = {
        transform: CSS.Translate.toString(transform),
        touchAction: 'none',
    };

    const handleRisk = (e) => {
        e.stopPropagation();
        setRisk(prevRisk => !prevRisk)
    };

    return(
        <article 
            className='suspectContainer'
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            <figure className='suspectImage'>
                <img src={img} alt={`Foto do suspeito: ${name}`} />
            </figure>

            <div className='suspectInfo'>
                <div className='suspectInfoHeader'>
                    <h1 className='suspectName'>{name}</h1>

                    <button 
                        onPointerDown={(e) => e.stopPropagation()} 
                        onClick={handleRisk} 
                        className={risk ? `buttonRisk highRisk` : `buttonRisk lowRisk`}
                    >
                        {risk ? "Alto Risco" : "Baixo Risco"}
                    </button>
                </div>

                <p className='suspectProfession'>{profession}</p>

                <p className='suspectDesc'>{desc}</p>

                <p className='suspectAlibi'><span className='alibiBold'>Alibi: </span>{alibi}</p>
            </div>

        </article>
    );
}
