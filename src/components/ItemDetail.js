import Item from './Item'; 

const ItemDetail = ({item})=> {
    
    return (
      <div className="flip-card">        
         <div className="flip-card-inner">
          <img src={item.image} alt="Avatar" className="frenteFilm"/>
       
          
          <img src={item.movie_banner} alt="banner" className="frenteFilm"/>
          <h2>{item.title}</h2> 
          <p>Titulo original: {item.original_title}</p>
          <p>Director : {item.director}</p>
          <p>Productor: {item.producer}</p>
          <p>Fecha de Estreno : {item.release_date}</p>
          <p>Puntuacion : {item.rt_score}%</p>
          </div>
      </div>

        )
    
}

export default ItemDetail;
