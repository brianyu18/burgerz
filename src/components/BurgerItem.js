import React, { Component } from 'react';

const BurgerItem = ({burger, chooseBurger}) => {

  function thisBurger(e){
    console.log(e.target)
  }
  return (
    <div>
      <div className="BurgerItem">
        {burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={(e)=>chooseBurger(e, {burger})}>Show</button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
