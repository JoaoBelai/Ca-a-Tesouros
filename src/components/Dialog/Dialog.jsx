import { useState } from "react";
import "./Dialog.css";

export default function Dialog({data, onWin, onClose}){
    const [step, setStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [error, setError] = useState("");

    const totalDialogs = data.dialogos.length;
    const showingQuestion = step >= totalDialogs;

    const nextDialog = () => setStep(prev => prev + 1);
    const backDialog = () => setStep(prev => prev - 1);

    const validate = () =>{
        if (!selectedOption){
            setError("Selecione uma opção antes de confirmar");
            return;
        }

        if(selectedOption === data.respostaCorreta){
            onWin();
        } else {
            setError("Resposta Incorreta! Tente novamente.");
        }
    }
    
    return(
        <div className="modal-overlay">
        <div className="modal-content">
            <button onClick={onClose} className="btn-fechar">X</button>

            {!mostrandoPergunta ? (
            <div className="conversa">
                <p className="texto-dialogo">{dados.dialogos[passo]}</p>
                <button className="btn-acao" onClick={avancarDialogo}>Próximo</button>
            </div>
            ) : (
            <div className="pergunta">
                <h3>{dados.pergunta}</h3>
                
                <div className="grid-opcoes">
                {dados.opcoes.map((opcao, index) => (
                    <button
                    key={index}
                    className={`btn-opcao ${opcaoSelecionada === opcao ? "selecionada" : ""}`}
                    onClick={() => {
                        setOpcaoSelecionada(opcao);
                        setErro("");
                    }}
                    >
                    {opcao}
                    </button>
                ))}
                </div>
                
                {erro && <p className="msg-erro">{erro}</p>}
                {dados.dica && <p className="dica">Dica: {dados.dica}</p>}
                
                <button className="btn-acao confirmar" onClick={validar}>Confirmar</button>
            </div>
            )}
        </div>
        </div>
    );
}