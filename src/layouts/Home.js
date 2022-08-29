import React from 'react';
import Titulo from './../components/Titulo';
import CajasContenedor from './../components/CajasContenedor';
import { useState, useEffect } from 'react';
import axios from "axios";


function Home() {
    const [data,setData] = useState({});
    const [cargado, setCargado] = useState(false);


    useEffect(() => {
        async function fetchMovies(){
            try {
                const url = 'http://localhost:4000/delete/26';
                const respuesta = await axios.delete(url);
        
                console.log(respuesta);
                

                setData(respuesta.data);

    
              } catch (error) {
                console.log(error);
              }
        };

        fetchMovies();
        //console.log(data);

    }, [] );

    return ( 
        <>
            <Titulo/>
            <CajasContenedor/>
        </>
     );
}

export default Home;


