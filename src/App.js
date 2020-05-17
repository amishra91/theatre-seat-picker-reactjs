import React, { Component } from 'react';
import Gold from './components/seatTypes/gold';
import Diamond from './components/seatTypes/diamond';

class App extends Component {
  state = {
    seats: [
      {
        "tname": "gold",
        "free" : 10,
        "blocked": 20,
        "price": 200
      },
      {
        "tname": "diamond",
        "free" : 5,
        "blocked": 30,
        "price": 500
      }
    ],
    goldSeats: 0,
    diamondSeats: 0,
    totalSeats: 0,
    totalPrice: 0
  }

  setSeatPrice = (tname, event) => {
    event.persist();
    
    if(tname == 'gold') {
      this.setState({
        goldSeats: this.state.goldSeats + 1,
        diamondSeats: 0,
        totalSeats: this.state.goldSeats + 1,
        totalPrice: (this.state.goldSeats + 1) * this.state.seats[0].price
      }, () => {
        this.updateStateCallback(this.state.goldSeats, this.state.diamondSeats, this.state.totalSeats, this.state.totalPrice, event)
      });
    }

    if(tname == 'diamond') {
      this.setState({
        diamondSeats: this.state.diamondSeats + 1,
        goldSeats: 0,
        totalSeats: this.state.diamondSeats + 1,
        totalPrice: (this.state.diamondSeats + 1) * this.state.seats[1].price
      }, () => {
        this.updateStateCallback(this.state.goldSeats, this.state.diamondSeats, this.state.totalSeats, this.state.totalPrice, event)
      });
    }
  }

  updateStateCallback = (goldSeats, diamondSeats, totalSeats, totalPrice, event) => {
    event.target.classList.add('blocked');
  }

  render() {
    let itemDisplayGold = [];
    let itemDisplayDiamond = [];

    this.state.seats.map(item => {
      if(item.tname == 'gold' && item.free) {
        for(let i = 0; i < item.free; i++) {
          itemDisplayGold.push(<Gold key={`item-${item.free}+${i+1}`} 
                                free = "free"
                                clickedGold = {this.setSeatPrice.bind(this, item.tname)}
                                goldSeats = {this.state.goldSeats}
                                />);
        }
      }
      if(item.tname == 'gold' && item.blocked) {
        for(let j = 0; j < item.blocked; j++) {
          itemDisplayGold.push(<Gold key={`item-${item.blocked}+${j+1}`} blocked = "blocked"/>);
        }
      }

      if(item.tname == 'diamond' && item.free) {
        for(let k = 0; k < item.free; k++) {
          itemDisplayDiamond.push(
                  <Diamond key={`item-${item.free}+${k+1}`} free="free"
                  clicked={this.setSeatPrice.bind(this, item.tname)}
                  diamondSeats = {this.state.diamondSeats}
                  />)
        }
      }

      if(item.tname == 'diamond' && item.blocked) {
        for(let l = 0; l < item.blocked; l++) {
          itemDisplayDiamond.push( <Diamond key={`item-${item.blocked}+${l+1}`} blocked = "blocked"/> )
        }
      }
    });

    return (
      <div className="App">
        <div className="main">
          <p>Gold</p>

          { itemDisplayGold }

          <p>Diamond</p>
          
          { itemDisplayDiamond }

        </div>

        <div>
          <p>Total Price: {this.state.totalPrice}</p>
          <p>Selected Seats: {this.state.totalSeats}</p>
        </div>
      </div>
    );
  }
}

export default App;
