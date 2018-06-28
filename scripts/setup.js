var Web3 = require('web3')
var web3 = new Web3()
var fs = require('file-system')
const Expopulo = artifacts.require('./Expopulo.sol')

module.exports = async function (callback) {
    this.token = await Expopulo.new(50000, 1000)
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
