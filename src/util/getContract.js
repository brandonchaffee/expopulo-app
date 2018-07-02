import Web3 from 'web3'
import expopulo from './generated/expopulo.json'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let contractForm = web3.eth.contract(expopulo.abi)
  let contractInstance = contractForm.at(expopulo.address)
  resolve({
    acct: web3.eth.accounts[0],
    contractInstance () {
      return contractInstance
    }
  })
})
  .then(result => {
    return new Promise(function (resolve, reject) {
      result.contractInstance().balanceOf(result.acct, (err, tokenBalance) => {
        if (err) {
          reject(new Error('Unable to retrieve token balance'))
        } else {
          result = Object.assign({}, result, { tokenBalance })
          resolve(result)
        }
      })
    })
  })

export default getContract
