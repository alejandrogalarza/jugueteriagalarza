import React, { useState } from 'react';

const ItemCount = ({stock,initial, onAdd})=> {
    const [ contador, setContador ] = useState(initial)
 
    const menosUno = ()=>{
        if(contador > 0){
            setContador(contador-1)
        }
    }
    const masUno = ()=>{
        if(contador < stock){
            setContador(contador+1)
        }
    }
    const agregarCantidad = ()=>{
        if(contador <= stock){
            onAdd(contador);
            setContador(0)

            // navegar a /cart
        }else{
            console.log("stock no disponible")
        }
    }
   

    return (
        <div className="itemCount">

            <div className="itemCount__contador">
                <p>Stock Actual {stock}</p>
                <button   onClick={menosUno}>restar uno </button>
                <h2>{contador}</h2>
                <button   onClick={masUno}>sumar uno</button>
            </div>
            <button onClick={agregarCantidad}>Agregar cantidad</button>

        </div>
    )
}

export default ItemCount;