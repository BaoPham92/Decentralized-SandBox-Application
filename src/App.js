import React, { Component } from 'react'
import Web3 from 'web3'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isConnected: false
    }

    this.web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");

  }

  componentWillMount() {
    // Retrieve currently selected account with MetaMask.
    this.web3.eth.getAccounts().then(res => this.setState({ accounts: res }))
  }

  render() {
    return (
      <div className="App">
        <h2>Download MetaMask for (Chrome or Brave) and log into an account.</h2><br/>
        <h4>Current Account address:</h4>
        <p>Currently connected: {this.state.accounts}</p>
      </div>
    );
  }
}

export default App;
