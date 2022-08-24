import React from 'react';


function Lista() {
    return ( 
        <>
            <h1>Lista</h1>

            <ul className="list-group">
                <li className="list-group-item d-flex align-items-center justify-content-between">Cras justo odio
                    <span className="pull-right button-group ">
                        <a href="#" className="btn btn-primary me-3"><span className="glyphicon glyphicon-edit"></span> Editar</a> 
                        <button type="button" className="btn btn-danger"><span className="glyphicon glyphicon-remove"></span> Borrar</button>
                    </span>
                </li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </>
     );
}

export default Lista;