import React, { Component } from 'react';

const BurgerFilter = ({burgerFilter}) => {

  function changeHandler(e){
    console.log(e.target.value)
    burgerFilter(e.target.value)
  }

  return (
    <div className="BurgerFilter">
      <select onChange={(e) => changeHandler(e)}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerFilter
