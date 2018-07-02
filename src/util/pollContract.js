import Web3 from 'web3'
import {store} from '../store/'

let pollContract = function (state) {
  let web3 = window.web3
  web3 = new Web3(web3.currentProvider)

  setInterval(() => {
    if (web3 && store.state.web3.instance) {
      if (web3.eth.coinbase !== store.state.web3.coinbase) {
        store.state.contract.instance().balanceOf(web3.eth.coinbase, function (err, newBalance) {
          if (err) {
            console.log(err)
          } else {
            store.dispatch('pollContract', {
              tokenBalance: newBalance
            })
          }
        })
      } else {
        store.state.contract.instance().balanceOf(web3.eth.coinbase, (err, polledBalance) => {
          if (err) {
            console.log(err)
          } else if (polledBalance !== store.state.web3.balance) {
            store.dispatch('pollContract', {
              tokenBalance: polledBalance
            })
          }
        })
      }
    }
  }, 500)
}

export default pollContract
