import React, { useState, useEffect } from 'react';
import Cargando from './Cargando'; 
import ItemList from './ItemList'; 
import { useParams } from "react-router-dom";
const statusType = {load:1,succes:2,error:3};

const ItemListContainer = ()=> {

    const [ items, setItems ] = useState([])
    const [ statusFetch, setStatusFetch ] = useState(statusType.load)
    const { tipo } = useParams()
    useEffect(()=>{
        const promesa = new Promise(()=>{
            /// usando api : setTimeout(() => {}, 2000);
            setStatusFetch(statusType.load)
            fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res=>res.json())
            .then(lista=>{
                switch(tipo){
                    case "nuevas" :
                       
                        setItems(lista.filter(item=>item.release_date>=2000))
                        setStatusFetch(statusType.succes)
                        break;
                    case "clasicas":
                       
                        setItems(lista.filter(item=>item.release_date<2000))    
                        setStatusFetch(statusType.succes)
                        break;
                    default:
                        setItems(lista)
                        setStatusFetch(statusType.succes)
                        break;

                }
                

            });
    
            
        });
        promesa.then();
    },[tipo])
   

    switch(statusFetch){
        case statusType.load:
            return (<Cargando/>);
        case statusType.error:
            return (<>error..</>);
        case statusType.succes:
            return (
            <>
                <div className="itemListContainer">
                    <ItemList categoria={tipo} items={items} />           
                </div>
            </>
            );
        default:
            return (<>fuera de la opcion..</>);

    }
 
}

export default ItemListContainer;
