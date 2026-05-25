import './Home.css'
import CrimeScene from '../../assets/crimeScene.png'
import { toast } from 'react-toastify';


export default function Home(){
    /*Função para limpar o local storage e resetar o jogo */
    const handleReset = () => {
        localStorage.clear();
        toast.info("Jogo reiniciado");
    }

    return(
        <>
        
            <header className='bannerHome'>
                <h1 className='homeTitle'>OLÁ DETETIVE</h1> 
            </header>
            <main className='mainHome'>
                <h2 className='caseTitle'>Homicídio na Atlas Tower</h2>

                <p className='caseInfo'>
                    Marcelo Vilar foi encontrado morto em sua cobertura corporativa no edifício 
                    Atlas Tower, no centro de Greyford, após uma reunião privada ocorrida durante 
                    um evento empresarial.
                </p>

                <p className='caseInfo'>
                    A perícia identificou morte por trauma na cabeça causado por um objeto 
                    contundente. O escritório da vítima foi encontrado parcialmente revirado, 
                    levantando suspeitas iniciais de latrocínio. Porém, depoimentos e evidências 
                    apontam para um possível homicídio premeditado.
                </p>

                <figure className='homeImage'>
                    <img src={CrimeScene} alt="imagem da cena do crime" />
                </figure>

                <p className='caseInfo'>
                    Existem 6 principais suspeitos e todos eles apresentaram contradições em 
                    seus depoimentos e possuíam motivos para desejar a morte de Marcelo Vilar.
                </p>

                <p className='caseInfo'>
                    Sua missão é investigar os envolvidos, analisar provas, reconstruir a 
                    linha do tempo da noite do crime e identificar o responsável pelo homicídio.
                </p>

                <button className='resetGameBtn' onClick={handleReset}>
                    Reiniciar Jogo
                </button>

            </main>
        </>
    );
}