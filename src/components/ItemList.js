import Item from './Item'; 

const ItemList = ({items})=> {
    
    return (
        
        items.length>0?items.map((item)=><Item  id={item.id} title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                pictureUrl={item.pictureUrl} />):<p>cargando...</p>
      
      )  
    
}

export default ItemList;
