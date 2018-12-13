import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state={
    burgerList: [],
    filteredBurgers: [],
    target: "",
    // filterType: ""
  }

  burgerFilter = (value) => {
    console.log(value)
    if(value === "Bougie"){
      let newArr = [...this.state.burgerList].filter(
        burger => {
          return burger.category === "Bougie"
        })
      console.log("BOUGIE", newArr)
      this.setState({
        filteredBurgers: newArr
      })
    } else if(value === "Relatable"){
      let newArr = [...this.state.burgerList].filter(
        burger => {
          return burger.category === "Relatable"
        })
      console.log("RELATABLE", newArr)
      this.setState({
        filteredBurgers: newArr
      })
    } else if(value === "All"){
      this.setState({
        filteredBurgers: this.state.burgerList
      })
      console.log("ALL", this.state.filteredBurgers.length)
    }
  }

  // changeCategory = () => {
  //   fetch(`http://localhost:3001/burgers/${}`)
  //   .then()
  //   .then()
  // }

  chooseBurger=(e, pickedBurger)=>{
    console.log(pickedBurger)
    this.setState({
      target: pickedBurger.burger
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
      this.setState({
        filteredBurgers: this.state.burgerList,
      })
      console.log("FILTERBURGERS", this.state.filteredBurgers)
    })
  }

  render() {
    let display = this.state.target == "" ? (
      <div className="BurgerDisplay">
        <img src="https://collegian.com/wp-content/uploads/2015/04/BobsBurgers.jpg"/>
        <br/>
        <h1>Welcome to BurgerBobs</h1>
        <br/>
      </div>) : (
        <BurgerDisplay showBurger={this.state.target}/>
      )

    return (
      <div id="App">
        <BurgerContainer burgerList={this.state.filteredBurgers} chooseBurger={this.chooseBurger} burgerFilter={this.burgerFilter}/>
        {display}
      </div>
    );
  }
}

export default App;
