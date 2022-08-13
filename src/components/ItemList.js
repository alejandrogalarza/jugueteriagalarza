import Item from './Item'; 

const ItemList = ({items})=> {
    
    return (
        
        items.length>0?items.map((item)=><Item  key={item.id} item={item} />):<p>cargando...</p>
      
      )  
    
}

export default ItemList;
