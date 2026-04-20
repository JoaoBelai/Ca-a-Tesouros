import './Map.css'
import Mapa from '../../assets/mapImage.png'

export default function Map(){
    return(
        <main className='mainMap'>
            <h1 className='mapTitle'>MAPA</h1>
            <figure className='mapImage'>
                <img src={Mapa} alt="Imagem do mapa da cidade" />
            </figure>
        </main>
    );
}