import React from 'react';
import './ItemList.styles.css'
import ProductCard from '../ProductCard/ProductCard';

const ItemList = ({products}) => {

      return (
        <div className='itemlist-container'>
           {products.map(product => <ProductCard key={product.productID} product={product}/>)}
        </div>
    );
}

export default ItemList;



/*
export default function ItemListContainer({greeting}) {

    const {categories} = useParams()
    //console.log('Parametro Ingresado: ', categories)
  
    //Puedo recibir categorias sea por componente(Ejemplo cuando aplique filtros o por parametro. Segun el caso una de las 2 variables sera undefined)
    const [products, setProducts] = useState(categories === undefined ? getProductList() : getProductsByCategory(categories))
    //console.log(getProductByCategories(['cascos','guantes']))
    
    useEffect(()=>{
  
      categories === undefined 
      ? setProducts(getProductList())
      : setProducts(getProductsByCategory(categories))
      
      //setProducts(getProductsByCategory(categories))
      console.log(categories)
     
     console.log(products)
    },[categories])
    
  
    
  
    return (
      
      
        <div className='grid-container'>
      
        <ItemList/>
        {products.map((item) => (
          <ProductCard  productID={item.productID} /> 
        ))}
        
          </div>
      
    )
  }
*/