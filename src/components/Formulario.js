import { useState } from "react";
import React from 'react';
import axios from "axios";


const initialFormData = Object.freeze({
    titulo: "",
    sinopsis: "",
    year: "",
    file: "",
    fileName: ""
});

function Formulario() {

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        //console.log(e.target.files[0]);
        if ( e.target.name == 'year' ){
            updateFormData({
                ...formData,
                [e.target.name]:  parseInt(e.target.value)
              });
        } else {
            updateFormData({
                ...formData,
          
                // Trimming any whitespace
                
                [e.target.name]: e.target.value.trim()
              });
        }

    };

    const handleUpload = e => {
        let fn = e.target.files[0].name;
        console.log(fn);
        updateFormData({
            ...formData,
            fileName: fn,
            file: e.target.files[0]
        }); 
    }
  
    const handleSubmit = async e => {
      e.preventDefault()
      console.log(formData);
      // ... submit to API or something

      try {
        const url = 'http://localhost:4000/agregar';
        const respuesta = await axios.post(url, formData, { headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(respuesta);

        if ( respuesta.status == 200 ){
            alert("Pelicula agregada");
            window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }

    };


    return (
        <>
            <h1>Agregar Pelicula</h1>
            <form encType="multipart/form-data" >
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control" name="titulo" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="sinopsis" className="form-label">Breve Sinopsis</label>
                    <textarea className="form-control" rows="3" name="sinopsis" onChange={handleChange}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Año</label>
                    <input type="number" className="form-control" name="year" onChange={handleChange}/>
                </div>

                <div className="input-group mb-3 mt-6">
                    <label className="input-group-text" htmlFor="imagen">Imagen</label>
                    <input type="file" className="form-control" name="imagen" onChange={handleUpload} />
                </div>

                <button onClick={handleSubmit} className="btn btn-primary">Agregar</button>
            </form>
        </>
     );
}

export default Formulario;