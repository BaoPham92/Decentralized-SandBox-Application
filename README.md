# About:

This is currently a sandbox using ReactJS to integrate blockchain technologies. Using [Web3.js](https://web3js.readthedocs.io/en/1.0/index.html) which is used upon the ([ETH](https://www.ethereum.org/) or Ethereum for decentralized applications.)

I will be using multiple tools for this sandbox. Writing syntax / interactions for local test nodes to ethereum test networks which will replicate identical transactions and contract executions.

## Instructions:
Download MetaMask (extension) for [Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQiA1sriBRD-ARIsABYdwwE9fD-LW_b1qDbDV9eROqzGYZZepnYdRqSrIWb2RWD3nNnFNZdFpXcaAovfEALw_wcB&gclsrc=aw.ds) or [Brave](https://brave.com/) and create an account or log into one.

- In MetaMask's UI, you will see the main ethereum network. Choose the Ropsten Test Network.

- After confirming that your MetaMask account is using the test netWork, continue to the Ropsten test network's [faucet](https://faucet.ropsten.be/3001) or [MetaMask's faucet](https://faucet.metamask.io/) in order to send your account some test Ether for production use.

- Run the following commands in your CLI below:
> - npm install
> - npm run start

## Notes:
- Ganache is a local node of addresses for production with ETH (Ethereum) balances. Here you should be able to click and receive the current balance of the address. (Not yet converted from wei for Web3.js development purposes.)

- In place of Ganache as a production tool for interacting with wallet addresses, we're going to be moving on using [etherscan](https://etherscan.io/) since we plan on writing smart contracts and completing transactions with [Web3.js](https://web3js.readthedocs.io/en/1.0/index.html). We're going to be using the Ropsten Test Network for writing our smart contracts, allowing us to view replicated effects of what the main ethereum network would output with our code.

## Todo:

1. ~~Write up a solution for production in case if no one has a active MetaMask account. Using production environments for development such as [Ganache](https://truffleframework.com/docs/ganache/overview) would be a useful tool for blockchain sandbox development. You are provided enough fake Ethereum in order to replicate transactions or even your smart contracts.~~

2. Write up a solution creating a smart contract. Along with the smart contract on the main network or using a node, the contract will have the following structure:
> - Smart Contract Data
> - Create Transaction Object
> - Transaction Signatur & Serialization
> - Broadcasting Transaction