import { useState } from 'react';
import './Suspects.css'

function Suspects({img, name, alibi, desc, profession}){
    const [risk, setRisk] = useState(false);

    const handleRisk = () => {
        setRisk(prevRisk => !prevRisk)
    };

    return(
        <article className='suspectsContainer'>
            <figure className='suspectImage'>
                <img src={img} alt="Foto do suspeito" />
            </figure>

            <div className='suspectInfo'>
                <div className='suspectInfoHeader'>
                    <h1 className='suspectName'>{name}</h1>

                    <button onClick={handleRisk} className={risk ? `buttonRisk highRisk` : `buttonRisk lowRisk`}>
                        {risk ? "Alto Risco" : "Baixo Risco"}
                    </button>
                </div>

                <p className='suspectProfession'>{profession}</p>

                <p className='suspectDesc'>{desc}</p>

                <p className='suspectAlibi'><span className='alibiBold'>Alibi:</span>{alibi}</p>
            </div>

        </article>
    );
}

export default Suspects;