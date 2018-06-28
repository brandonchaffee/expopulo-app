var Web3 = require('web3')
var web3 = new Web3()
var fs = require('file-system')
const Expopulo = artifacts.require('./Expopulo.sol')

module.exports = async function (callback) {
    this.token = await Expopulo.new(50000, 1000)
    // const supply = await this.token.totalSupply()
    console.log(this.token.address)
    console.log(this.token.abi)
}
