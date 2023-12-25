import React from 'react';
import DATA_BRANCHS from '../../DATA/branchs_data';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import { MdSportsMotorsports } from "react-icons/md";
import LogoSite from '../LogoSite/LogoSite'





const AnyReactComponent = ({ text }) => <div className='flex flex-col text-1xl font-bold text-shadow-lg text-black indent-8 drop-shadow-2xl'>
                                            {text}
                                            <MdSportsMotorsports 
                                              size={50}
                                              color={'red'}
                                              lat={-34.61}
                                              lng={-58.38}/>
                                        </div>;


const BranchInfoContainer = () => {

    const defaultProps = {
        center: {
          lat: -34.61,
          lng: -58.38
        },
        zoom: 17
      };

    

    return (
        <div >
           <h1 className='text-3xl font-bold text-shadow-lg text-black indent-8 drop-shadow-2xl'>BranchInfoContainer</h1>
           <div style={{ height: '60vh', width: '40%' }}>
            <GoogleMapReact 
                    bootstrapURLKeys={{ key: "AIzaSyAglupgqMfkvyqOSmS5qEWdZY-CC8VHbeo" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    >
              
                <img className= "rounded-full border border-gray-100 shadow-sm" 
                      src= {require('../../assets/img/cascoico.png')}
                      alt='logo'
                      />

                      <Marker 
                              className = 'rounded-full border border-gray-100 shadow-sm '
                              bootstrapURLKeys={{ key: "AIzaSyAglupgqMfkvyqOSmS5qEWdZY-CC8VHbeo" }} 
                              lat={-34.61} 
                              lng={-58.38} 
                              text="Mi Marcador" />

                      
                 
                
      </GoogleMapReact>
    </div>
        </div>
    );
}

export default BranchInfoContainer;