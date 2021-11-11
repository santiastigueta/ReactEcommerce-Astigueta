import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//componentes
import NavBar from './components/NavBar/NavBar';

//views:
import Cart from './views/Cart';
import Contact from './views/Contact';
import ItemDetailContainer from './views/ItemDetail/ItemDetailContainer';
import Procesadores from './views/Procesadores';
import placas from './views/placas'
import home from './views/home';
//Context:
import { CartProvider } from './CartContext';



const App = () => {

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/placas" component={placas} />
            <Route path="/procesadores" component={Procesadores} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );

}

export default App;
