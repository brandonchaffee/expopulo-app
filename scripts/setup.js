var Web3 = require('web3')
var web3 = new Web3(web3.currentProvider)
var fs = require('file-system')
const Expopulo = artifacts.require('./Expopulo.sol')

module.exports = async function (callback) {
    const accounts = web3.eth.accounts
    const MetaAddress = accounts[0]
    this.token = await Expopulo.new(50000, 1000)
    const supply = await this.token.totalSupply()
    let balance = await this.token.balanceOf(MetaAddress)
    console.log(balance)

    await this.token.transfer(accounts[1], 500)

    balance = await this.token.balanceOf(MetaAddress)
    console.log(balance)

    // web3.eth.sendTransaction()
    const contractJSON = {
        'address': this.token.address,
        'abi': this.token.abi
    }
    fs.writeFileSync(
        './src/util/generated/expopulo.json',
        JSON.stringify(contractJSON),
        (err) => {
            if(err){
                console.log(err)
                return
            }
        }
    )

}
