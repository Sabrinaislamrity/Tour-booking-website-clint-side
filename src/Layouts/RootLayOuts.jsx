import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';

const RootLayOuts = () => {
    return (
        <div >
            <div className=" max-w-7xl mx-auto ">
        <Navbar></Navbar>
        
      
       </div>
        <Outlet  ></Outlet>
       <Footer></Footer>
        </div>
    );
};

export default RootLayOuts;