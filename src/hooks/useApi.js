
import React, {useState, useEffect} from 'react'
import axios from 'axios';


export const useApi = (APIurl) => {
  const [loading, setLoading] = useState(false)
	const [data, setData] = useState()  
	
	useEffect(() => {
	  setLoading(true)
	/* fetch(APIurl)
	    .then(data => data.json())
	    .then(json => {
	      setData(json)
	      setLoading(false)
	    })
    */
        axios.get(APIurl)
            .then(response => {
                console.log('YYYY: ',response)
                setData(response)
                setLoading(false)
            })

    
	 
	}, [])

  return {loading, data}
}


