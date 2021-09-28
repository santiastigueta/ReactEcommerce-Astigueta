import React from 'react';
import './App.css';


// Componentes
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="UserSection">
          <UserCard
            product='guitar'
            price='us$29.99'
            purchases='12.456'
            description='A nice guitar, you can play music with it'
            image='http://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/guitarra-electro-criolla-fonseca-40kec-41kec-funda_iz1141063776xvzxxpz1xfz74514398-617309937-1-jpgxsz74514398xim1-abb1dc4f6db4a4b4b515990563207217-640-0.jpg' />
          <UserCard
            product='guitar'
            price='us$29.99'
            purchases='12.456'
            description='A nice guitar, you can play music with it'
            image='http://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/guitarra-electro-criolla-fonseca-40kec-41kec-funda_iz1141063776xvzxxpz1xfz74514398-617309937-1-jpgxsz74514398xim1-abb1dc4f6db4a4b4b515990563207217-640-0.jpg' />
          <UserCard
            product='guitar'
            price='us$29.99'
            purchases='12.456'
            description='A nice guitar, you can play music with it'
            image='http://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/guitarra-electro-criolla-fonseca-40kec-41kec-funda_iz1141063776xvzxxpz1xfz74514398-617309937-1-jpgxsz74514398xim1-abb1dc4f6db4a4b4b515990563207217-640-0.jpg' />
          <UserCard
            product='guitar'
            price='us$29.99'
            purchases='12.456'
            description='A nice guitar, you can play music with it'
            image='http://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/guitarra-electro-criolla-fonseca-40kec-41kec-funda_iz1141063776xvzxxpz1xfz74514398-617309937-1-jpgxsz74514398xim1-abb1dc4f6db4a4b4b515990563207217-640-0.jpg' />
        </div>

      </div >
    );
  }
}

export default App;
