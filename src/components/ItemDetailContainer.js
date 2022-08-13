import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'; 
import Cargando from './Cargando';
import { useParams } from "react-router-dom";
const statusType = {load:1,succes:2,error:3};

const ItemDetailContainer = ()=> {


    const { id } = useParams()
    const [ item, setItem ] = useState([])
    const [ statusFetch, setStatusFetch ] = useState(statusType.load)
    /*utilizando api: const promesa = new Promise(()=>{
       // setTimeout(() => { }, 2000);
     });*/
    useEffect(()=>{
        if(id){
            fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
                .then(res=>{
                    if(res.status === 200){
                        res.json().then((lista)=>{
                            setItem(lista);
                            setStatusFetch(statusType.succes)
                        });
                    }else{
                        setStatusFetch(statusType.error)
                    }       
                }
            ).catch(e=>{ setStatusFetch(statusType.error)})
        }else{
            setStatusFetch(statusType.error)
        }
    },[id]);


    switch(statusFetch){
        case statusType.load:
            return (<Cargando/>);
        case statusType.error:
            return (<>error..</>);
        case statusType.succes:
            return (
            <>
                <div className="itemListContainer">
                    <ItemDetail item={item} />           
                </div>
            </>
            );
        default:
            return (<>fuera de la opcion..</>);

    }
}

export default ItemDetailContainer;
