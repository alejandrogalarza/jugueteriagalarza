import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ()=> {


    return (
    <>
  <header>
		
	</header>
	<nav>
        <ul>
            <CartWidget carrito = {1}/>
            <li className="menuLeft"><Link to={"/"}>JuegueteriaGalarza</Link></li>
            <li className="menuRight"><Link to={"/categoria/nuevas"}>nuevas</Link></li>
            <li className="menuRight"><Link to={"/categoria/clasicas"}>clasicas</Link></li>

        </ul>
     </nav> 
    </>
    )
}

export default NavBar;
