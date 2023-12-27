//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext, CartProvider } from './context/CartContext';
import { ItemDetailProvider } from './context/ItemDetailContext';
import HeaderContainer from './components/HeaderContainer/HeaderContainer'
import HomeContainer from './components/HomeContainer/HomeContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import BranchInfoContainer from './components/BranchInfoContainer/BranchInfoContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <div className="mx-auto mt-0 md:px-4 lg:px-6 xl:px-3">
      <BrowserRouter>
        <CartProvider>
          <HeaderContainer/>
          <Routes>
            <Route path='/' element={ <HomeContainer />}/>
            <Route  path='categories/:categoryID' element={ <ItemListContainer />}/>
            <Route  path='brands/:brandID' element={ <ItemListContainer />}/>
        
            <Route path='itemdetail/:productID' element={ <ItemDetailContainer/>}/>
            <Route path='branchinfo/:branchID' element={ <BranchInfoContainer/>}/>
            <Route path='/cart' element={ <CartContainer/>}/>
          
            <Route path='*' element={<h1>NOT FOUND</h1>}/>
          </Routes>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<Route exact path='categories/:categories' element={ <ItemListContainer />}/>
//<Route exact path='itemdetail/:productID' element={ <ItemDetailContainer/>}/>