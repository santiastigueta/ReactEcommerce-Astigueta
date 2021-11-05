import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//componentes
import NavBar from './components/NavBar/NavBar';

//views:
import Cart from './views/Cart';
import Contact from './views/Contact';
import ItemListContainer from './components/UserCard/ItemListContainer';
//Context:
import { CartProvider } from './CartContext';
import ItemDetailContainer from './views/ItemDetail/ItemDetailContainer';


const App = () => {

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
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
