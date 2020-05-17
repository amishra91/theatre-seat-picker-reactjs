import React, { Component } from 'react';
import './seat.css';

const diamond = (props) => {
  let classes = null;
  if(props.diamondSeats == 0) {
    classes = props.free;
  }
  return (
    <div className={`${props.blocked || classes} seat`}
        onClick = {props.clicked}></div>
    
  )
}

export default diamond;