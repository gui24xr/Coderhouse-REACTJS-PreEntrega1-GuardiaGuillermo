// ./hooks/usApi.js
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { getDatoAleatoriaArray } from '../global/funcions'

const getUnplashURLCategoria = (categoria, cantidad) =>
  "https://api.unsplash.com/search/photos?query=" +
  categoria +
  "&per_page=" +
  cantidad +
  "&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";


  const urlPicsCBR =
  "https://api.unsplash.com/search/photos?query=motorbikes&per_page=50&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";




const useUnplash = (category) => {
  
    const [data, setData] = useState()  
	
	useEffect(() => {
        axios.get(getUnplashURLCategoria(category,10))
            .then(response => {setData(getDatoAleatoriaArray(response.data.results).urls.regular)
                        
            })

	},[])

  console.log(data)
  return {data}
}

export default  useUnplash