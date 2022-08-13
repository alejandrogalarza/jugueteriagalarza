import Cargando from './Cargando';
import Item from './Item'; 

const ItemList = ({items})=> {
    
    return (
        
        items.length>0?items.map((item)=><Item  key={item.id} item={item} />):<Cargando/>
      
      )  
    
}

export default ItemList;
