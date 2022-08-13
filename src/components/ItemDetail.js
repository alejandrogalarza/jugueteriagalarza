import ItemCount from './ItemCount'; 

const ItemDetail = ({item})=> {
    
    return (
    
         <div className="contenedorDetalle">        
          <img src={item.movie_banner} alt="banner" className="fondoDetalle"/>
          <div className="textoDetalle">
            <h2 className="titleDetalle">{item.title}</h2> 
            <p>Titulo original: {item.original_title}</p>
            <p>Director : {item.director}</p>
            <p>Productor: {item.producer}</p>
            <p>Fecha de Estreno : {item.release_date}</p>
            <p>Puntuacion : {item.rt_score}%</p>
            <p>{item.description}</p>  
            <ItemCount stock={5} initial={1} onAdd={(cantidadaSeleccionada)=>{console.log("cantidad cargada"+cantidadaSeleccionada)}}/>

          </div>

          </div>
 

        )
    
}

export default ItemDetail;
