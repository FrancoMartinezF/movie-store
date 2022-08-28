import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './layouts/Home';
import Admin from './layouts/Admin';


function App() {

  return (
    <div className='container'>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    
                </Route>


                <Route path='/admin' element={<Admin />}>

                </Route>
            </Routes>
        </BrowserRouter>

    </div>

  );
}

export default App;
