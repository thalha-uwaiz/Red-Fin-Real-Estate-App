import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Header from '../Components/Header';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path='/'
                element={<Header />}
                errorElement={<div>Error Page</div>}
            />
            <Route
                path='/about'
                element={<div>About Page</div>}
                errorElement={<div>Error Page</div>}
            />
        </>
    )
);

const MyRoutes = () => {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
};

export default MyRoutes;
