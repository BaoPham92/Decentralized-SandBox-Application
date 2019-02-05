import React, { Component } from 'react'
import Web3 from 'web3'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isConnected: false,
      accounts: [],
      balance: undefined
    }

    this.web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");

  }

  componentWillMount() {
    // Retrieve currently selected account with MetaMask.
    this.web3.eth.getAccounts().then(res => this.setState({ accounts: res },
    () => 
      // Convert Wei to Ether.
      this.web3.eth.getBalance(this.state.accounts[0])
        .then(res =>
          this.web3.utils.fromWei(res, 'ether') // Conversion to ether for balance.
        )
        .then(res =>
          this.setState({ balance: res })
        )
        .catch(err => console.log(err))
      ))
  }

  render() {
    return (
      <div className="App">
        <h2>Download MetaMask (Chrome or Brave) and log into an account.</h2><br/>
        <h4>Current Account address:</h4>
        <p>Currently connected: {this.state.accounts[0]}</p>
        <p>Current Balance: {this.state.balance} ETH (Currently in wallet)</p>
      </div>
    );
  }
}

export default App;
