import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount'; 
import ItemList from './ItemList'; 

const ItemListContainer = ()=> {

    const [ items, setItems ] = useState([])
    const promesa = new Promise(()=>{
        setTimeout(() => {
            setItems([  { id:1, title:"Auto", description:"Autito a control remoto", price:"$10", pictureUrl:"" } ,
                        { id:2, title:"Muñeca", description:"Barby Medica", price:"$11", pictureUrl:""}, 
                        { id:3, title:"Patin", description:"Patin de 4 ruedas", price:"$22", pictureUrl:"" } ,
                        { id:4, title:"Pelota", description:"Pelota de Futbol", price:"$33", pictureUrl:""} 
                    ])
        }, 2000);
    });
    useEffect(()=>{
        promesa.then();
    })
   
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
