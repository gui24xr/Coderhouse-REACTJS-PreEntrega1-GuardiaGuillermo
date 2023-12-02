import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer/HeaderContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ProductCard from './components/ProductCard/ProductCard';

import { getProductByID } from './DATA/product_data';


function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <HeaderContainer/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting={'Bienvenido'}/>}/>
          <Route  path='categories/:categoryID' element={ <ItemListContainer />}/>
          <Route path='itemdetail/:productID' element={ <ItemDetailContainer/>}/>
        
          <Route path='*' element={<h1>NOT FOUND</h1>}/>
         
          
         
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<Route exact path='categories/:categories' element={ <ItemListContainer />}/>
//<Route exact path='itemdetail/:productID' element={ <ItemDetailContainer/>}/>