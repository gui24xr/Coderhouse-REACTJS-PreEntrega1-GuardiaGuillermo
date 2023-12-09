import React from 'react';
import './UsersFeedBackViewer.styles.css'
import { generarValorAleatorio } from '../../global/funcions';
import { useState, useEffect } from 'react';


const CommentItem = (props) => {
    return (
      <div >
        <p >{props.userName}</p>
        <img classNameName='profilePic' src={props.profilePic} alt=''/>
        <p>Hola, yo soy {props.firstname} {props.lastname} de {props.country} y te recomiendo mucho utilizar GCash !!! </p>
      </div>
      
     
    )
  }
  

const CommentCard = (props) =>{

    return(
        <div className="container mx-auto px-4">
            <div className="max-w-xs">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-16 h-16 rounded-full mx-auto" src={props.profilePic}/>
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{props.userName}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>Hola, yo soy {props.firstname} {props.lastname} de {props.country} y te recomiendo mucho utilizar GCash !!! </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const UsersFeedBackViewer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
     
      const cantidadRegistrosPedidos = generarValorAleatorio(4,12) //Entre 4 y 12 opiniones vamos a renderizar.
      const urlApiDatos = "https://random-data-api.com/api/v2/users?size=" + cantidadRegistrosPedidos + "&is_xml=true";
  
      // Función asíncrona para cargar datos
      const fetchData = async () => {
        try {
          
          const response = await fetch(urlApiDatos);
          const result = await response.json();
          setData(result); // Actualiza el estado con los datos cargados
        } catch (error) {
          console.error("Error al cargar datos:", error);
        } finally {
          setLoading(false); // Establece el estado de carga a falso
        }
      };
  
      fetchData(); // Llama a la función de carga de datos
    },[]); // El segundo argumento [] asegura que se ejecute solo una vez (equivalente a componentDidMount en una clase)
  
    return (
      <div className='w-1/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-4'>
        
        {data.map(item => {
           
                return <CommentCard profilePic={item.avatar} userName={item.username} firstname={item.first_name} lastname={item.last_name} country= {item.address.country}/>
           
        })}


      </div>
    );
}

export default UsersFeedBackViewer;