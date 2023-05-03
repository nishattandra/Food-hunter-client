import React from 'react';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;