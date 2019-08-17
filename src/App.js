import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Body from './components/Body'
import Card from './components/Card'
import Cards from "./Cards.json"



class App extends Component {
  state = {
    Cards,
    clickCount: 0
  }

  clickCount = () =>  {
   this.setState({
     clickCount: this.state.clickCount+1
   })
   
   console.log(this.state.clickCount);
  }
  render() {
    
    return (

      <div className="App">
        <Navbar />
        <Header />
        <Body />
        {this.state.Cards.map(card =>  <Card key={card.id} image={card.image} name={card.name} clickCount={this.clickCount}/>)}
        <Card />
  
       
      </div>
    );
  }

}

export default App;
