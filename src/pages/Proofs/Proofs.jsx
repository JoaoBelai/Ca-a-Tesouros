import './Proofs.css'
import { useState, useEffect } from 'react';
import Proof from '../../components/Proof/Proof'
import { PROOFS } from '../../data/data';

export default function Proofs(){
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem("progress");
        if (saved) {
            setProgress(parseInt(saved, 10));
        }
    }, []);

    const unlockedProofs = PROOFS.filter(proof => proof.id <= progress);

    return(
        <main className='mainProofs'>
            <h1 className='proofsTitle'>PROVAS</h1>
            <section className='proofsContainer'>
                {unlockedProofs.length > 0 ? (
                    unlockedProofs.map((proof) => (
                        <Proof
                            key={proof.id}
                            img={proof.img} 
                            name={proof.name}
                            desc={proof.desc}
                            type={proof.type}
                        />
                    ))
                ) : (
                    <p className="emptyState">Nenhuma prova desbloqueada ainda. Resolva os diálogos no mapa.</p>
                )}
            </section>
        </main>
    );
}