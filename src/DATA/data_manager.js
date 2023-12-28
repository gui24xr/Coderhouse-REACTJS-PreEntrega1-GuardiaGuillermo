import DATA_PRODUCTS from "./product_data";
import DATA_BRANDS from "./brand_data";
import DATA_BRANCHS from "./branchs_data";

import { getDocs, collection, addDoc, doc, setDoc, writeBatch } from 'firebase/firestore';
import { db } from '../config/firebase';

//----REFERENCIA A COLECCIONES EN FIREBASE ----------------------//
const refCollectionProducts = collection(db, "items")




//FUNCIONES RELACIONADAS A LA GESTION DE LOS DATOS.-----------------------------------

//Esta funcion va a lista las categorias existentes en el catalogo
function quitarRepetidos(array) {
  return array.filter((valor, indice, arreglo) => {
    return arreglo.indexOf(valor) === indice;
  });
}

const getAllList = async () => {
  //getDocs me trae en forma de promesa los datos de la coleccion que le paso por parametro(Le paso la referencia)
  const data = await getDocs(refCollectionProducts)
  const filteredData = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc
  }))


  return filteredData
}


const getCategoriesFromProductList = () => {
  //Esta funcion devuelve todas las categorias de productos existentes en el catalogo.
  //LO hago de esta manera para ganar escabilidad si a futuro apareciese una nueva categoria
  //Leo todo el catalogo de productos  y extraigo las diferentes categorias existentes.
  let categoryList = DATA_PRODUCTS.map((item) => item.category);
  categoryList = quitarRepetidos(categoryList);
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
  //return myProduct;


  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(myProduct)
    }, 0)
  })


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

const getProductList = () => {
  //La differencia entre esta lista y DATA_PRODUCT es que esta lista devuelve productos con los datos ya cruzados.
  const productList = []
  DATA_PRODUCTS.forEach(item => productList.push(item))
  //Ya tengo la lista para retornado, con marcas y con todos los datos cruzados.
  return new Promise((resolve) => {
    setTimeout(() => {

      resolve(productList)
    }, 500)
  })
}

const getListFromDB = async () => {
  //Traigo de la base de datos en firebase mi array de productos entero listo para utilizar
  const data = await getDocs(refCollectionProducts)
  const filteredData = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc
  }))


  return filteredData
}


const getProductList2 = async () => {

  const productos = await getListFromDB()
  console.log(productos)
  return productos
}

const getProductByCategories = (categoriesArray) => {
  //Devuelve los productos del array de categorias pasado por parametro
  //Esto lo voy a usar para el filtro por categorias. Es un filtrado dentro de cada categoria 
  const productsFilterByCategories = []

  DATA_PRODUCTS.forEach(item => {
    //Recorro todo el catalogo y si la categoria del producto esta en categoriesArray entonces agrego al array a devolver el producto
    //Y como quiero que lo manda con toda la data entera como imagen de su marca, etc entonces lo pido x getproductbyID
    if (categoriesArray.indexOf(item.category) >= 0) productsFilterByCategories.push(item)
  })

  return productsFilterByCategories


}

const getOfferList = () => {
  //Devuelve un array de productos de oferta al azar del array de todos lso produdctos 
  const productsInOffer = []
  //Esto hay que modificarlo asique pedire 'cant' de productos 
  for (let i = 0; i < 15; i++) {
    productsInOffer.push(DATA_PRODUCTS[i])
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsInOffer)
    }, 500)
  })


}

const getProductsByCategory2 = (category) => {
  //Devuelve los productos del la categoria pasada por parametro
  const productsOfCategory = []

  const getItemList = async () => {
    //getDocs me trae en forma de promesa los datos de la coleccion que le paso por parametro(Le paso la referencia)
    const data = await getDocs(refCollectionProducts)
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc
    }))

    //Ahora busco los productos de la categoria y los meto a un nuevo array para devolver como promesa
    filteredData.forEach(item => {
      //Recorro todo el catalogo y si la categoria del producto esta en categoriesArray entonces agrego al array a devolver el producto
      //Y como quiero que lo manda con toda la data entera como imagen de su marca, etc entonces lo pido x getproductbyID
      if (item.category === category) productsOfCategory.push(item)
    })

    return productsOfCategory
  }


  return getItemList()
}

const getProductsByCategory = (category) => {
  //Devuelve los productos del la categoria pasada por parametro
  const productsOfCategory = []

  
    //Ahora busco los productos de la categoria y los meto a un nuevo array para devolver como promesa
    DATA_PRODUCTS.forEach(item => {
      //Recorro todo el catalogo y si la categoria del producto esta en categoriesArray entonces agrego al array a devolver el producto
      //Y como quiero que lo manda con toda la data entera como imagen de su marca, etc entonces lo pido x getproductbyID
      if (item.category === category) productsOfCategory.push(item)
    })

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsOfCategory)
      }, 500)
    })
  
  }

//Tallas y stock----------------------------------------
const getStockProduct = (productID) => {
  //Devuelve un objeto con con las tallas existentes,cantidades y stock por conteo total.

  //console.log('ppp: ', productID)
  const productIndex = DATA_PRODUCTS.findIndex(item => item.productID ===Number(productID))
  const myProduct = DATA_PRODUCTS[productIndex]
 /*Se devuelve un objeto de la siguiente forma:
  Si no es por categorias el stock entonces se devuelve vacio categorieList
  {
    stockByCategories : true o false segun corresponda
    categoriesList:[categoria1, categoria2...categoriaN],
    stockCount:{l:5,m:2,s:4}
    
    si no tiene categorias no tiene propiuedades el objeto dira
    stockCount: cantidadTotal

  }*/
  

  const objetoStock = {
    isStockByCategories : myProduct.stockByCategories ? true : false,
    categoriesList: myProduct.stockByCategories ? [...Object.keys(myProduct.stockBySize)] : ['sin categorias'],
    //Ahora construyo un objeto y luego hago deconstructuracion
    stockCount: myProduct.stockByCategories ? {...myProduct.stockBySize} : myProduct.stockByCount
  }

  //console.log(objetoStock)
  
  return objetoStock
}


//-- SUCURSALES --------------------------------------------------------------------------------//

const getBrandsList = () => {
  return DATA_BRANDS
}

const getProductsByBrand = (brand) => {

  return DATA_PRODUCTS.filter(item => item.brand === brand)
}

const getBranchsList = () => {
  return DATA_BRANCHS
}


export {
  getProductList,
  getCategoriesFromProductList,
  getProductByID,
  getProductByCategories,
  getProductsByCategory,
  getDiscountPrice,
  getUrlImgBrand,
  getOfferList,
  getBrandsList,
  getProductsByBrand,
  getBranchsList,
  getStockProduct,
};
