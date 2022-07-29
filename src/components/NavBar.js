import CartWidget from './CartWidget';

const NavBar = ()=> {


    return (
    <>
  <header>
		
	</header>
	<nav>
        <ul>
            <CartWidget carrito = {"1"}/>
            <li className="menuLeft"><a href="#logo">JuegueteriaGalarza</a></li>
            <li className="menuRight"><a href="#menuContact">contact</a></li>
            <li className="menuRight"><a href="#menuCatalogo">catalogo</a></li>
            <li className="menuRight"><a href="#menuBuscador">buscador</a></li>

        </ul>
     </nav> 
    </>
    )
}

export default NavBar;
