import React, { useState } from 'react';
import ItemCount from './ItemCount'; 
import { Link } from 'react-router-dom';

const ItemDetail = ({item})=> {

  const [ stock, setStock ] = useState(5);
  const [ cantidadComprar, setCantidadComprar ] = useState(0);

  const compra=(cantidad)=>{
    setStock(stock-cantidad);
    setCantidadComprar(cantidadComprar+cantidad);
  }

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
          <h2>Cantidad Entradas Cine :{cantidadComprar}</h2>
          <ItemCount stock={stock} initial={1} onAdd={compra}/>
          {
            (cantidadComprar!==0)?
            (<Link to="/cart">
                <button >
                    <h3>Comprar {cantidadComprar} Entradas</h3>
                </button>
            </Link>):''
          }
        </div>

        </div>


      )
    
}

export default ItemDetail;
