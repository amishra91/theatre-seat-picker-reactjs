import React, { Component } from 'react';
import './seat.css';

const gold = (props) => {
  let classes = null;
  if(props.goldSeats == 0) {
    classes = props.free;
  }
  return (
      <div className={`${props.blocked || classes} seat`}
            onClick = {props.clickedGold}
            ></div>
  )
}

export default gold;