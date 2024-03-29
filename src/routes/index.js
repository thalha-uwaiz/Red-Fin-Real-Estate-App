import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Layout from '../Pages/Layout';
import Home from '../Pages/HomePage';
import Featured from '../Pages/Featured';
import ContactUs from '../Pages/ContactUs';
import ComingSoon from '../Components/ComingSoon';

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route
            path='/'
            element={<Layout />}
            errorElement={<div>Error Page</div>}
        >
            <Route path='/' element={<Home />} > </Route>
            <Route path='/featured' element={<Featured />} ></Route>
            <Route path='/packages' element={<ComingSoon />} ></Route>
            <Route path='/contactUs' element={<ContactUs />} ></Route>


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
