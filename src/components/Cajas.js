import React, { Fragment } from 'react';


function Cajas(props) {
    
    let img = require('./../assets/img/'+ props.imagen);

    return ( 
        <div className="card" style= { { width : '18rem' } }>
            <img src={ img } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ props.titulo }</h5>
                <p className="card-text">{ props.sinopsis }</p>
                <a href="#" className="btn btn-primary">Reproducir</a>
            </div>
            <div className="card-footer">
                <small className="text-muted">{ props.año }</small>
            </div>
        </div>  
    );
}

export default Cajas;