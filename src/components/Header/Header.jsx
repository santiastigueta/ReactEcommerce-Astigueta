import React from 'react';
import './Header.css';

//componentes
import NavBar from './NavBar/NavBar';



const Header = () => {
    return (
        <div className="Header">
            <NavBar
                user='usuario'
                cart='carro'
                store='tienda'
            />
        </div>
    );
}

export default Header;
