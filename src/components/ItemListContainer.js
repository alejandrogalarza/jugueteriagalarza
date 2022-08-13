import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount'; 
import ItemList from './ItemList'; 

const ItemListContainer = ()=> {

    const [ items, setItems ] = useState([])
   
    useEffect(()=>{
        const promesa = new Promise(()=>{
            /// usando api : setTimeout(() => {}, 2000);
            fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res=>res.json())
            .then(lista=>{setItems(lista)});
    
            
        });
        promesa.then();
    },[])
   
    return (
    <>
        <ItemCount stock={5} initial={1} onAdd={(cantidadaSeleccionada)=>{console.log("cantidad cargada"+cantidadaSeleccionada)}}/>
        <div className="itemListContainer">
            <ItemList items={items} />           
        </div>


    </>
    )
}

export default ItemListContainer;
