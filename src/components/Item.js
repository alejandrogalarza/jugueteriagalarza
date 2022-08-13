import { Link } from "react-router-dom"

const Item = ({ item } )=> {


    return (
    <Link to={`/item/${item.id}`} title="Ver detalle"  >
        <div className="flip-card">        
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={item.image} alt="Avatar" className="frenteFilm"/>
                </div>
                <div className="flip-card-back">
                
                <img src={item.movie_banner} alt="banner" className="frenteFilm"/>
                <h2>{item.title}</h2> 
                <p>Titulo original: {item.original_title}</p>
                <p>Director : {item.director}</p>
                <p>Productor: {item.producer}</p>
                <p>Fecha de Estreno : {item.release_date}</p>
                <p>Puntuacion : {item.rt_score}%</p>
                </div>
            </div>
        </div> 
    </Link>      
    
    )
}

export default Item;
