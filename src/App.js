import React, { Component } from 'react'
import Web3 from 'web3'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isConnected: false,
      
      // Standard information for MetaMask
      accounts: [],
      balance: undefined,

      // Ganache Information
      accountsG: {},
      balanceG: undefined,
      clickHandler: (param) => {

        this.web3g.eth.getBalance(param)
        .then(res => this.state.balanceG = res)
        .then(() => {
          return alert(`This address's current balance is a total of ${this.state.balanceG}`)
        })
        .catch(err => console.log(err))
      }
    }

    // Standard connection for MetaMask.
    this.web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");

    // Ganache development blockchain environment. g - ganache
    this.web3g = new Web3("HTTP://127.0.0.1:7545")
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

      // Retrieve current accounts within Ganache environment.
    this.web3g.eth.getAccounts()
      .then(res => this.setState({ accountsG: res }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.web3g)
    return (
      <div className="App">
        <h2>Download MetaMask (Chrome or Brave) and log into an account.</h2><br/>
        <h4>Current Account address:</h4>
        <p>Currently connected: {this.state.accounts[0]}</p>
        <p>Current Balance: {this.state.balance} ETH (Currently in wallet)</p>

        <h2>Ganache Blockchain Development Environment:</h2>
        <h4>Current Addresses:</h4>

        {/* List and displays current addresses and wallet balance upon click. */}
        <ul>
          {this.state.accountsG.length > 0 ? this.state.accountsG.map(index => {
            
            return <li className="ganache-address" onClick={() => this.state.clickHandler(index)}>{index}</li>
          }): console.log('error')
        }
        </ul>
      </div>
    );
  }
}

export default App;
