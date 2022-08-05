import ItemCount from './ItemCount'; 

const ItemListContainer = ()=> {


    return (
    <>
        <ItemCount stock={5} initial={1} onAdd={(cantidadaSeleccionada)=>{console.log("cantidad cargada"+cantidadaSeleccionada)}}/>
     CATALOGO
        
    </>
    )
}

export default ItemListContainer;
