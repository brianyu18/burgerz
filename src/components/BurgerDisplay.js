import React, { Component } from 'react';

const BurgerDisplay = ({showBurger}) => {

  console.log({showBurger})

  function changeHandler(e, burger){
    console.log("CHANGE", burger)

  }

  let theBurger
  if(showBurger.category === "Bougie"){
    theBurger = `${showBurger.category} 💸💸💸`
  } else {theBurger = `${showBurger.category} 💩💩💩`}

  return (
    <div className="BurgerDisplay">
      <img src={`${showBurger.imgURL}` /* Insert burger Image URL here */}/>
      <br/>
      <h1>{showBurger.name}</h1>
      <h4>This Burger is: {theBurger}</h4>
      <br/>
      <select onChange={(e) => changeHandler(e, showBurger.id)} value={showBurger.category}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
