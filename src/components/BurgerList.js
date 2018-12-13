import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = ({burgerList, chooseBurger}) => {
  let allBurgers = burgerList.map(burger => {
    return <BurgerItem key={burger.name} burger={burger} chooseBurger={chooseBurger}/>
  console.log(allBurgers)
  })

  return (
    <div className="BurgerList">
      {allBurgers}
    </div>
  )
}

export default BurgerList
