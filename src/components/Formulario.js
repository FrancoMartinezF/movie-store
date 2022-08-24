import React from 'react';


function Formulario() {
    return (
        <>
            <h1>Agregar Pelicula</h1>
            <form>
                <div className="mb-3">
                    <label for="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control"/>
                </div>

                <div class="mb-3">
                    <label for="sinopsis" class="form-label">Breve Sinopsis</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label for="año" className="form-label">Año</label>
                    <input type="number" className="form-control"/>
                </div>

                <div class="input-group mb-3 mt-6">
                    <label className="input-group-text" for="imagen">Imagen</label>
                    <input type="file" class="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </>
     );
}

export default Formulario;