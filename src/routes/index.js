import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Layout from '../Pages/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route
            path='/'
            element={<Layout />}
            errorElement={<div>Error Page</div>}
        >
            <Route path='/' element={<div>About Page</div>} > </Route>
            <Route path='/featured' element={<div>featured</div>} ></Route>
            <Route path='/packages' element={<div>packages</div>} ></Route>
            <Route path='/contactUs' element={<div>contactUs</div>} ></Route>


        </Route>
    )
);

const MyRoutes = () => {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default MyRoutes;
