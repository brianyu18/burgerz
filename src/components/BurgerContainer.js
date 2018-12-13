import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {


  render(){
    console.log('CONTAINER', this.props);
    return (
      <div className="BurgerContainer">
        <BurgerFilter />
        <BurgerList burgerList={this.props.burgerList} chooseBurger={this.props.chooseBurger}/>
      </div>
    )
  }
}
