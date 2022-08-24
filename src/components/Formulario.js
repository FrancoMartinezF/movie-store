import { useState } from "react";
import React from 'react';


const initialFormData = Object.freeze({
    titulo: "",
    sinopsis: "",
    year: "",
    imagen: ""
});

function Formulario() {

    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
      // ... submit to API or something

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData })
        };

        fetch('/agregar', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    };


    return (
        <>
            <h1>Agregar Pelicula</h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control" name="titulo" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="sinopsis" className="form-label">Breve Sinopsis</label>
                    <textarea className="form-control" rows="3" name="sinopsis" onChange={handleChange}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="año" className="form-label">Año</label>
                    <input type="number" className="form-control" name="year" onChange={handleChange}/>
                </div>

                <div className="input-group mb-3 mt-6">
                    <label className="input-group-text" htmlFor="imagen">Imagen</label>
                    <input type="file" className="form-control" name="imagen" onChange={handleChange} />
                </div>

                <button onClick={handleSubmit} className="btn btn-primary">Agregar</button>
            </form>
        </>
     );
}

export default Formulario;