import Cargando from './Cargando';
import Item from './Item'; 

const ItemList = ({items,categoria})=> {
    
    return (
        <>
          <h2>{categoria?categoria:"Todas Las Peliculas"}</h2>
          {items.length>0?items.map((item)=><Item  key={item.id} item={item} />):<Cargando/>}
        </>
      )  
    
}

export default ItemList;
