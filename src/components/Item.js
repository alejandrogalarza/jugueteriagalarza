const Item = ({ id, title, description, price, pictureUrl } )=> {


    return (
    <div className="item">
        <h2>{title}</h2>
        <p>{id} - {description} - {price} - {pictureUrl}</p>
        <button>Ver detalle</button>
    </div>
    )
}

export default Item;
