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
            onAdd(contador)
        }else{
            console.log("stock no disponible")
        }
    }
   

    return (
        <div className="itemCount">

            <div className="itemCount__contador">
                <button   onClick={menosUno}>restar uno </button>
                    <h3>{contador}</h3>
                <button   onClick={masUno}>sumar uno</button>
            </div>
            <button onClick={agregarCantidad}>Agregar cantidad</button>

        </div>
    )
}

export default ItemCount;