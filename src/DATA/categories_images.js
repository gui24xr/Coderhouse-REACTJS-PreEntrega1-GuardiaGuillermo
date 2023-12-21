/* La idea es por cada categoria que tenga la tienda tener una imagen para luego cruzar datos con esta lista y agregarsela.
Pero si tuviesemos la situcion en que una categoria no tiena una imagen entonces vamos a poner 'null' */


const DATA_CATEGORIES_IMAGE = [
    {
        category: 'cascos', 
        categoryImg: 'https://images.unsplash.com/photo-1603743138526-d3bf32966c8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
    },

    {
        category: 'chaquetas', 
        categoryImg: 'https://images.unsplash.com/photo-1690066086649-8eda6340de4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
    },

    {
        category: 'guantes', 
        categoryImg: 'https://images.unsplash.com/photo-1626130933115-a0dbcaae090b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
    },

    {
        category: 'gorras', 
        categoryImg: 'https://images.unsplash.com/photo-1603743138526-d3bf32966c8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
    },

    {
        category: 'pantalones', 
        categoryImg: 'https://images.unsplash.com/photo-1603743138526-d3bf32966c8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
    },
    {
        category: 'botas', 
        categoryImg: 'https://images.unsplash.com/photo-1650355984865-9ed9377f1a6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
    },
    {
        category: 'bolsos', 
        categoryImg: 'https://images.unsplash.com/photo-1652009232683-82a94b9c34ec?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
    },
    {
        category: 'remeras', 
        categoryImg: null,  
    },
    {
        category: 'visores cascos', 
        categoryImg: null,  
    },
]


function getImageCategory(categoryName){

    //Retorna la imagen corresponsdiente a la categoria pasada por paramtro.
    const position = DATA_CATEGORIES_IMAGE.findIndex( item => item.category === categoryName)

    if (position >= 0) return  DATA_CATEGORIES_IMAGE[position].categoryImg 
    else return null
    
}

function setImageCategory(categoryName){
    //Setea la imagen de una categoria.
    console.log('Aun no implementada')
}

export {getImageCategory}