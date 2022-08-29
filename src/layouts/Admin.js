import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { useState, useEffect } from 'react';
import axios from "axios";
    


function Admin() {

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
        <>
            <Formulario/>
            <h1>Lista</h1>
            <ul className="list-group">
                { cargado &&
                    data.map(movie => (
                        <Lista
                            key= {movie.id}
                            titulo = {movie.titulo}
                            año = { movie.año }
                            id = { movie.id }
                        />
                    ) ) 
                    
            }
            </ul>
        </>
     );
}

export default Admin;