
import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

class App extends React.Component {
  render (){
  return (
    <div className="App">
    <Header></Header>
    <Footer></Footer>
    </div>
  );
}
}

export default App;
