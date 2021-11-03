
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './NavBar.css';

//componentes
import CartWidget from './CartWidget';

const styles = {
    Header: {
        paddingLeft: 100
    },
    Title: {
        paddingTop: 20
    }
}

const NavBar = () => {
    return (
        <div className="Navbar" style={styles.Header}>
            <h1 style={styles.Title}>MyLogo</h1>
            <ul className="links">
                <Button component={Link} to="/" color="inherit">Home</Button>
                <Button component={Link} to="/category/1" color="inherit">Intel</Button>
                <Button component={Link} to="/category/2" color="inherit">AMD</Button>
                <Button component={Link} to="/contact" color="inherit">Contacto</Button>
                <CartWidget />
            </ul>
        </div>

    );
}

export default NavBar;
