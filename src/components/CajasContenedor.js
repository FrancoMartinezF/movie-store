import React from 'react';
import Cajas from './Cajas';
import { useState, useEffect } from 'react';
import axios from "axios";

function CajasContenedor() {

    const [data,setData] = useState({});
    const [cargado, setCargado] = useState(false);


    useEffect(() => {
        async function fetchMovies(){
            try {
                const url = 'http://localhost:4000/fetch';
                const respuesta = await axios.get(url);
        
                //console.log(respuesta.data);
                

                setData(respuesta.data);
                setCargado(true);
    
              } catch (error) {
                console.log(error);
              }
        };

        fetchMovies();
        //console.log(data);

    }, [] );



    return ( 
        <div>

            {cargado && 
                <div className='row row-cols-1 row-cols-md-3 g-4 mt-5'>
                    {  data.map( movie => (
                        <div className='col' key={movie.id}>
                            <Cajas
                            id={movie.id}
                            titulo={movie.titulo}
                            sinopsis={movie.sinopsis}
                            año={movie.año}
                            imagen={movie.imagen}
                            />
                        </div>
                    ) ) }

                </div>
            }


        </div>
     );
}

export default CajasContenedor;