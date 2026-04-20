import './Suspects.css'
import Suspect from '../../components/Suspect/Suspect'
import Fausto from '../../assets/Faustosilva.jpg'

export default function Suspects(){
    return(
        <main className='mainSuspects'>
            <h1 className='suspectsTitle'>SUSPEITOS</h1>
            <section className='suspectsContainer'>
                <Suspect
                    img = {Fausto}
                    name = "João Belai"
                    alibi = "Estava na Cozinha"
                    desc = "João não tinha motivos para matar ele, ou é o que ele quer que você pense. Chef de cozinha sabe mexer com facas, e os cortes estavam precisos."
                    profession = "Chef de Cozinha"
                />
                <Suspect
                    img = {Fausto}
                    name = "João Belai"
                    alibi = "Estava na Cozinha"
                    desc = "João não tinha motivos para matar ele, ou é o que ele quer que você pense. Chef de cozinha sabe mexer com facas, e os cortes estavam precisos."
                    profession = "Chef de Cozinha"
                />
                <Suspect
                    img = {Fausto}
                    name = "João Belai"
                    alibi = "Estava na Cozinha"
                    desc = "João não tinha motivos para matar ele, ou é o que ele quer que você pense. Chef de cozinha sabe mexer com facas, e os cortes estavam precisos."
                    profession = "Chef de Cozinha"
                />
                <Suspect
                    img = {Fausto}
                    name = "João Belai"
                    alibi = "Estava na Cozinha"
                    desc = "João não tinha motivos para matar ele, ou é o que ele quer que você pense. Chef de cozinha sabe mexer com facas, e os cortes estavam precisos."
                    profession = "Chef de Cozinha"
                />
                <Suspect
                    img = {Fausto}
                    name = "João Belai"
                    alibi = "Estava na Cozinha"
                    desc = "João não tinha motivos para matar ele, ou é o que ele quer que você pense. Chef de cozinha sabe mexer com facas, e os cortes estavam precisos."
                    profession = "Chef de Cozinha"
                />
                <Suspect
                    img = {Fausto}
                    name = "João Belai"
                    alibi = "Estava na Cozinha"
                    desc = "João não tinha motivos para matar ele, ou é o que ele quer que você pense. Chef de cozinha sabe mexer com facas, e os cortes estavam precisos."
                    profession = "Chef de Cozinha"
                />
            </section>
        </main>
    );
}