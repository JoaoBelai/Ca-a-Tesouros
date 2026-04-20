import './Proof.css'

const validTypes = ['arma', 'doc.', 'objeto', 'audio'];

export default function Proof({img, name, desc, type}){

    const isValidType = validTypes.includes(type);
    const tagClass = isValidType ? type : 'default';

    return(
        <article className='proofContainer'>
            <figure className='proofImage'>
                <img src={img} alt="Foto do pista" />
            </figure>

            <div className='proofInfo'>
                <div className='proofInfoHeader'>
                    <h1 className='proofName'>{name}</h1>

                    <span className={`tagBase tag-${tagClass}`}>
                        {type}
                    </span>
                </div>

                 <p className='proofDesc'>{desc}</p>
            </div>
        </article>
    );
}
