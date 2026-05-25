import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import './Suspect.css'

export default function Suspect({id, img, name, alibi, desc, profession}){
    // estado do componente
    const [risk, setRisk] = useState(false);

    // Inicializa a funcionalidade de drag and drop. 
    // attributes e listeners capturam as ações do usuário, setNodeRef vincula o elemento DOM ao dnd-kit, e transform rastreia as coordenadas durante o arrasto.
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id:id,
    })

    // Converte as coordenadas do dnd-kit (transform) em uma regra CSS válida (transform: translate) para mover o elemento visualmente.
    const style = {
        transform: CSS.Translate.toString(transform),
        touchAction: 'none',
    };

    // Alterna a flag de risco.
    // O stopPropagation é crítico aqui: ele impede que clicar neste botão seja interpretado pelo navegador como o início de um arrasto do container pai.
    const handleRisk = (e) => {
        e.stopPropagation();
        setRisk(prevRisk => !prevRisk)
    };

    return(
        <article 
            className='suspectContainer'
            // Informa ao dnd-kit que este é o container principal que sofrerá o drag.
            ref={setNodeRef}
            style={style}
            // Espalha os listeners de evento que tornam o elemento de fato arrastável.
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
                        // Isola o botão do dnd-kit. Cancela o evento de ponteiro na descida para garantir que o click passe limpo e não inicie um arrasto acidental.
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