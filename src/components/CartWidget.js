 

import logo from './logo512.png';

const CartWidget = ({carrito=""})=> {
 
     return (
    <>
      <li className="menuRight"><a href="#menucarrito">
        <img className='carrito' src={logo} alt="Logo" />
        <span className='carritoBolsa'>{carrito}</span>
        </a>
      </li>

    </>
    )
}

export default CartWidget;
