import Web3 from 'web3'
import {address, ABI} from './constants/casinoContract'
import expopulo from './generated/expopulo.json'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let expopuloContract = web3.eth.contract(expopulo.abi)
  let casinoContract = web3.eth.contract(ABI)
  let casinoContractInstance = casinoContract.at(address)
  console.log('Expop add', expopulo.address)
  console.log('Expop contract', expopuloContract)
  console.log(casinoContractInstance)
  resolve(casinoContractInstance)
})

export default getContract
