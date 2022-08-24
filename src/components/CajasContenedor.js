import React from 'react';
import Cajas from './Cajas';

function CajasContenedor() {
    return ( 
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-5'>
            <div className='col'>
                <Cajas/>
            </div>
            <div className='col'>
                <Cajas/>
            </div>
            <div className='col'>
                <Cajas/>
            </div>
            <div className='col'>
                <Cajas/>
            </div>
            <div className='col'>
                <Cajas/>
            </div>
            <div className='col'>
                <Cajas/>
            </div>
        </div>

     );
}

export default CajasContenedor;