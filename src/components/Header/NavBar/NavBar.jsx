
import React from 'react';
import { Link } from 'react-router-dom';


//componentes
import CartWidget from './CartWidget/CartWidget';

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
                <Link to="/" className="li">Home
                </Link>
                <Link to="/contact" className="li">Contact
                </Link>
                <Link to="/cart" className="li">Cart
                </Link>
            </ul>
        </div>
    );
}

export default NavBar;
