import './Proofs.css'
import { useState, useEffect } from 'react';
import Proof from '../../components/Proof/Proof'
import { PROOFS } from '../../data/data';

export default function Proofs(){
    // estado da página
    const [progress, setProgress] = useState(0);

    // Efeito executado apenas na montagem inicial do componente (array de dependências vazio).
    // Busca o progresso atual do jogador no cache do navegador para sincronizar a interface.
    useEffect(() => {
        const saved = localStorage.getItem("progress");
        if (saved) {
            setProgress(parseInt(saved, 10));
        }
    }, []);

    // Regra de negócio de exibição: filtra o array global de provas.
    // Retorna apenas os itens cujo ID seja menor ou igual ao progresso atual do jogador, bloqueando provas futuras.
    const unlockedProofs = PROOFS.filter(proof => proof.id <= progress);

    return(
        <main className='mainProofs'>
            <h1 className='proofsTitle'>PROVAS</h1>
            <section className='proofsContainer'>
                {/* Renderização condicional de lista baseada no filtro acima. 
                    Exibe as provas se o array filtrado tiver itens, ou um fallback visual (empty state) se o progresso for zero. */}
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