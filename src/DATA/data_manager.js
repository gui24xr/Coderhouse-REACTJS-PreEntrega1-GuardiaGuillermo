import DATA_PRODUCTS from "./product_data";
import DATA_BRANDS from "./brand_data";

//FUNCIONES RELACIONADAS A LA GESTION DE LOS DATOS.-----------------------------------

//Esta funcion va a lista las categorias existentes en el catalogo
function quitarRepetidos(array) {
  return array.filter((valor, indice, arreglo) => {
    return arreglo.indexOf(valor) === indice;
  });
}

const getCategoriesFromProductList = () => {
  let categoryList = DATA_PRODUCTS.map((item) => item.category);
  categoryList = quitarRepetidos(categoryList);
  //console.log('catego', categoryList)
  return categoryList;
};

const getProductByID = (productID) => {
  /*return new Promise((resolve)=>{
    setTimeout(()=>{resolve(DATA_PRODUCTS.find(prod => prod.id === id))
                      console.log('gfgf')},5000)
  })*/

  //Devuelve toda la data del producto, incluso le agrega conteo de stock y la imagen de la marca.
  //Busco la posicion del producto en el listado. LA transformo en numero para leerla en DATA PRODUCTS
  const productPosition = DATA_PRODUCTS.findIndex(item => item.productID === Number(productID))
  const myProduct = DATA_PRODUCTS[productPosition]
  //Agrego datos de marca. EN este caso solo la imagen para representarla.
  const brandPosition = DATA_BRANDS.findIndex(item => item.brand === myProduct.brand)
  myProduct.brandImg = DATA_BRANDS[brandPosition].brandImg
  //Calculo stock segun el tipo de producto
  //console.log(myProduct)
  return myProduct;


};

//provisorio para descuentos:
const getDiscountPrice = (productID) => {
  const precioSinSigno = DATA_PRODUCTS[productID].productPrice.slice(1, -1);

  const p = Number(precioSinSigno);
  const discountPrice = Math.round(p * 0.2, 4);
  const precioStr = "$" + discountPrice.toString();
  console.log(precioStr);
  return precioStr;
};

//Esta funcion recibe el nombre de la marca como parametro y devuelve la url con su logo.
const getUrlImgBrand = (brand) => {
  const position = DATA_BRANDS.findIndex((item) => item.brand === brand);
  if (position < 0) console.log(brand);
  return DATA_BRANDS[position].brandImg;
};

const getProductList = ()=>{
  //Por ahora devuelve la lista de productos entera pero a futuro tmb devolver on la informacion de su marca, comentarios,etc
  //Dado que por cada articulo quiero ejecutar getProctByID para que me de los datos
  //La differencia entre esta lista y DATA_Product es que esta lista devuelve productos con los datos ya cruzados.
  const productList = []
  DATA_PRODUCTS.forEach( item => productList.push(getProductByID(item.productID)))
 
  return productList
}

const getProductByCategories = (categoriesArray) =>{
  //Devuelve los productos del array de categorias pasado por parametro
  //Esto lo voy a usar para el filtro por categorias. Es un filtrado dentro de cada categoria 
  const productsFilterByCategories = []
  
  DATA_PRODUCTS.forEach(item => {
    //Recorro todo el catalogo y si la categoria del producto esta en categoriesArray entonces agrego al array a devolver el producto
    //Y como quiero que lo manda con toda la data entera como imagen de su marca, etc entonces lo pido x getproductbyID
    if ( categoriesArray.indexOf(item.category)>=0 ) productsFilterByCategories.push(getProductByID(item.productID))
  })
   
    return productsFilterByCategories


}


const getProductsByCategory = (category) =>{
  //Devuelve los productos del la categoria pasada por parametro
   const productsOfCategory = []
  
  DATA_PRODUCTS.forEach(item => {
    //Recorro todo el catalogo y si la categoria del producto esta en categoriesArray entonces agrego al array a devolver el producto
    //Y como quiero que lo manda con toda la data entera como imagen de su marca, etc entonces lo pido x getproductbyID
    if ( item.category === category )productsOfCategory.push(getProductByID(item.productID))
  })

  console.log(productsOfCategory)
    return productsOfCategory
}
 
export {
  getProductList,
  getCategoriesFromProductList,
  getProductByID,
  getProductByCategories,
  getProductsByCategory,
  getDiscountPrice,
  getUrlImgBrand,
};
