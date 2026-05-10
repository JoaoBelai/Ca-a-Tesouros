import { useState } from "react";
import "./Dialog.css";

export default function Dialog({data, onWin, onClose}){
    const [step, setStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [error, setError] = useState("");

    const totalDialogs = data.dialogos.length;
    const showingQuestion = step >= totalDialogs;

    const nextDialog = () => setStep(prev => prev + 1);
    const backDialog = () => setStep(prev => (prev > 0 ? prev - 1 : 0));

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
        <div className="modalOverlay">
            <article className="modalContent">
                <button onClick={onClose} className="closeBtn">X</button>

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