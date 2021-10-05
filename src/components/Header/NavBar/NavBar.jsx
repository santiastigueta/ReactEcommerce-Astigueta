
import React from 'react'


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

const NavBar = (props) => {
    return (
        <div className="Navbar" style={styles.Header}>
            <h1 style={styles.Title}>MyLogo</h1>
            <ul className="links">
                <li><a href=""><i class="fas fa-user"></i>{props.user}</a></li>
                <li><a href=""><i class="fas fa-store fa-lg"></i>{props.store}</a></li>
                <li><a href=""> <CartWidget cart='Cart' /> </a></li>
            </ul>
        </div>
    );
}

export default NavBar
