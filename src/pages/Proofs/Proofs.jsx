import './Proofs.css'
import Proof from '../../components/Proof/Proof'
import Faca from '../../assets/faca.png'

export default function Proofs(){
    return(
        <main className='mainProofs'>
            <h1 className='proofsTitle'>PROVAS</h1>
            <section className='proofsContainer'>
                <Proof
                    img={Faca}
                    name="Faca de caça"
                    desc="Faca de caça encontrada com sangue na cena do crime, provavel arma utilizada para o assasinato"
                    type= "arma"
                />
                <Proof
                    img={Faca}
                    name="Faca de caça"
                    desc="Faca de caça encontrada com sangue na cena do crime, provavel arma utilizada para o assasinato"
                    type= "audio"
                />
                <Proof
                    img={Faca}
                    name="Faca de caça"
                    desc="Faca de caça encontrada com sangue na cena do crime, provavel arma utilizada para o assasinato"
                    type= "doc."
                />
                <Proof
                    img={Faca}
                    name="Faca de caça"
                    desc="Faca de caça encontrada com sangue na cena do crime, provavel arma utilizada para o assasinato"
                    type= "audio"
                />
                <Proof
                    img={Faca}
                    name="Faca de caça"
                    desc="Faca de caça encontrada com sangue na cena do crime, provavel arma utilizada para o assasinato"
                    type= "objeto"
                />
                <Proof
                    img={Faca}
                    name="Faca de caça"
                    desc="Faca de caça encontrada com sangue na cena do crime, provavel arma utilizada para o assasinato"
                    type= "doc."
                />
            </section>
        </main>
    );
}