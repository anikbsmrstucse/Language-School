import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPages/Footer/Footer';
import NavComponent from '../Pages/SharedPages/NavComponent/NavComponent';
import Navbar from '../Pages/SharedPages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <NavComponent></NavComponent>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;