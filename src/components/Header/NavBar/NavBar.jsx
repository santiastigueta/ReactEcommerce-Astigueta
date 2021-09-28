
import React from 'react'


const styles = {
    Header: {
        paddingLeft: 50
    }

}

const NavBar = (props) => {
    return (
        <div className="Navbar" style={styles.Header}>
            <h1>MyLogo</h1>
            <ul className="links">
                <li><a href=""><i class="fas fa-user"></i>{props.user}</a></li>
                <li><a href=""><i class="fas fa-store fa-lg"></i>{props.store}</a></li>
                <li><a href=""><i class="fas fa-shopping-cart"></i>{props.cart}</a></li>
            </ul>
        </div>
    );
}

export default NavBar
