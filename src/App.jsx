import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//componentes
import Header from './components/Header/Header';

//views:
import Home from './views/Home';
import Cart from './views/Cart';
import Contact from './views/Contact';
import ItemDetail from './views/ItemDetail/ItemDetail';

//Context:
import { CartProvider } from './CartContext';

const App = () => {

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/detail/:id" component={ItemDetail} />+
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );

}

export default App;
