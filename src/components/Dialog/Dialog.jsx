import { useState } from "react";
import "./Dialog.css";

export default function Dialog({data, onWin, onClose}){
    // estados do componente
    const [step, setStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [error, setError] = useState("");

    const totalDialogs = data.dialogos.length;
    
    // Define a transição de tela: se o passo atual atingir ou ultrapassar o total de diálogos, muda para a interface de pergunta.
    const showingQuestion = step >= totalDialogs;

    // Controlam a navegação no array de diálogos. O backDialog possui uma trava para impedir índices negativos.
    const nextDialog = () => setStep(prev => prev + 1);
    const backDialog = () => setStep(prev => (prev > 0 ? prev - 1 : 0));

    // Concentra a regra de negócio da validação da resposta do usuário.
    const validate = () =>{
        // Trava a execução se o usuário tentar confirmar sem escolher uma alternativa.
        if (!selectedOption){
            setError("Selecione uma opção antes de confirmar");
            return;
        }

        // Compara a escolha com o gabarito. Dispara a prop onWin no acerto ou exibe erro no erro.
        if(selectedOption === data.respostaCorreta){
            onWin();
        } else {
            setError("Resposta Incorreta! Tente novamente.");
        }
    }
    
    return(
        <div className="modalOverlay">
            <article className="modalContent">
                <button onClick={onClose} className="closeBtn">X</button>

                {/* Renderização condicional principal: alterna entre exibir a leitura do diálogo ou o formulário da pergunta com base no estado showingQuestion */}
                {!showingQuestion ? ( 
                    <div className="dialog">

                        {data.imagem && (
                            <img src={data.imagem} alt={data.pessoa} className="personImage" />
                        )}

                        <div className="dialogContentArea">
                            <h2 className="announcer">{data.pessoa}</h2>
                            <p className="dialogText">{data.dialogos[step]}</p>

                            <div className="passButtons">
                                <button 
                                    className="actionButton" 
                                    onClick={backDialog}
                                    disabled={step === 0}
                                    style={step === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                                >
                                    Anterior
                                </button>
                                <button className="actionButton" onClick={nextDialog}>Próximo</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="question">
                        <h2 className="statement">{data.pergunta}</h2>
    
                        <div className="options">
                            {data.opcoes.map((option, index) => (
                                <button
                                    key={index}
                                    className={`optionBtn ${selectedOption === option ? "selected" : ""}`}
                                    onClick={() => {
                                        // Registra a alternativa escolhida e limpa qualquer mensagem de erro de tentativas anteriores.
                                        setSelectedOption(option);
                                        setError("");
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        
                        {error && <p className="errorMessage">{error}</p>}
                        
                        <button className="confirmButton" onClick={validate}>Confirmar</button>
                    </div>
                )}
            </article>
        </div>
    );
}