import React, {Component} from 'react'
import './App.css';
import { fetchBTCPrice } from './ApiCalls';

class App extends React.Component {
constructor() {
  super()
  this.state = {
    BTC: null
  }
}
// componentDidMount = async() => {
//    fetchBTCPrice()
//    .then(data => {this.setState({BTC: data[0].price})})
//   //  .then(data => console.log(data[0].price))
//  }

componentDidMount() {
  fetchBTCPrice()
    .then(data => {this.setState({BTC: Number(data[0].price).toFixed(2)})})
  setInterval(() => {
    fetchBTCPrice()
    .then(data => {this.setState({BTC: Number(data[0].price).toFixed(2)})})
  }, 10000);
}

 render() {
   return (
     <div className="App">
       <h1>Coin Helper</h1>
 
       <div className='price-section'>
   <h1>BTC: ${this.state.BTC}</h1>
       </div>
     </div>
   );
 }
}

export default App;
