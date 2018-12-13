import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state={
    burgerList: [],
    filteredBurgers: [],
    target: ""
  }

  chooseBurger=(e, burger)=>{
    console.log(burger)
    this.setState({
      target: burger
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(burgers => {
      console.log(burgers)
      this.setState({
        burgerList: burgers
      })
      console.log(this.state.burgerList)
    })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgerList={this.state.burgerList} chooseBurger={this.chooseBurger}/>
        <BurgerDisplay chooseBurger={this.chooseBurger}/>
      </div>
    );
  }
}

export default App;
