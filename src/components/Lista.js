import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";


function Lista(props) {

    const handleDelete = () => {
        alert("Seguro que querés eliminar?");

            async function deleteMovie(){
                try {
                    const url = `http://localhost:4000/delete/${props.id}`;
                    const respuesta = await axios.delete(url);
                    window.location.reload();
                  } catch (error) {
                    console.log(error);
                  }
            };
    
            deleteMovie();
    }

    return ( 
        <>
                <li className="list-group-item d-flex align-items-center justify-content-between">{ props.titulo } - { props.año }
                    <span className="pull-right button-group ">
                        <a href="#" className="btn btn-primary me-3"><span className="glyphicon glyphicon-edit"></span> Editar</a> 
                        <button type="button" className="btn btn-danger" onClick={ handleDelete }><span className="glyphicon glyphicon-remove"></span> Borrar</button>
                    </span>
                </li>
        </>
     );
}

export default Lista;