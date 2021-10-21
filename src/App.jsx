import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//componentes
import Header from './components/Header/Header';

//views:
import Home from './views/Home';
import Cart from './views/Cart';
import Contact from './views/Contact';
import ItemDetail from './views/ItemDetail/ItemDetail';
import ItemDetailContainer from './views/ItemDetail/ItemDetailContainer';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/detail/:id" component={ItemDetailContainer} />+
        </Switch>
      </div>
    </Router>
  );

}

export default App;
