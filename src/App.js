//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer/HeaderContainer'
import HomeContainer from './components/HomeContainer/HomeContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="mx-auto md:p-4 lg:p-6 xl:p-8">
      
      <BrowserRouter>
        <HeaderContainer/>
        <Routes>
          <Route path='/' element={ <HomeContainer />}/>
          <Route  path='categories/:categoryID' element={ <ItemListContainer />}/>
          <Route  path='brands/:brandID' element={ <ItemListContainer />}/>
          <Route path='itemdetail/:productID' element={ <ItemDetailContainer/>}/>
        
          <Route path='*' element={<h1>NOT FOUND</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

//<Route exact path='categories/:categories' element={ <ItemListContainer />}/>
//<Route exact path='itemdetail/:productID' element={ <ItemDetailContainer/>}/>