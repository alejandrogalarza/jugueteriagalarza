import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import './index.css';

const App = ()=> {
    return (
    <>
        <BrowserRouter>
            <NavBar/>
            <main>
            <Routes>
                <Route exact path="/" element={<ItemListContainer />}/>
                <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
            </Routes>
            </main>
            <footer>pie de pagina</footer>        
        </BrowserRouter>

    </>
    )
}

export default App;
