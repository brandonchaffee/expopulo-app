var Web3 = require('web3')
var web3 = new Web3(web3.currentProvider)
var fs = require('file-system')
const Expopulo = artifacts.require('./Expopulo.sol')
const byteJSON = require('../static/byteDetails.json')
const accounts = web3.eth.accounts
const MetaAddress = accounts[0]

async function initializeOrg (byteObj) {
  await this.token.formOrganization(byteObj['bytes32'])
  await this.token.contributeToOrganization(MetaAddress, 5000)
}

async function initializeProject (byteObj) {
  await this.token.createProject(MetaAddress, byteObj['bytes32'])
  await this.token.contributeToProject(
    MetaAddress, byteObj['parentIndex'], 1000)
}

async function initializeTask (byteObj) {
  const projectID = byteJSON[byteObj['parent']]['parentIndex']
  await this.token.createTask(MetaAddress, projectID, byteObj['bytes32'])
  await this.token.contributeToTask(
    MetaAddress, projectID, byteObj['parentIndex'], 250)
}

async function initializeSubmission (byteObj) {
  const task = byteJSON[byteObj['parent']]
  const projectId = byteJSON[task['parent']]['parentIndex']
  await this.token.createSubmission(
    MetaAddress, projectId, task['parentIndex'], byteObj['bytes32'])
}

function createJSONFile(filename, payload) {
  fs.writeFile(filename, JSON.stringify(payload), function (err) {
    if (err) {
      console.log(err)
      return
    }

    fs.exists(filename, function (exists) {
      if (exists) {
        return true
      }
    })
  })
}

function generateContractJSON (address, abi, externals) {
  const contractJSON = {
    'address': address,
    'abi': abi
  }

  const externalJSON = {
    accounts: externals
  }

  createJSONFile('./src/util/generated/expopulo.json', contractJSON)
  createJSONFile('./src/util/generated/externals.json', externalJSON)
}

module.exports = async function (callback) {
  this.token = await Expopulo.new(50000, 1000)
  const supply = await this.token.totalSupply()

  for (var key in byteJSON) {
    var byteObj = byteJSON[key]

    switch (byteObj['typeID']) {
      case 0:
        initializeOrg(byteObj)
        break
      case 1:
        initializeProject(byteObj)
        break
      case 2:
        initializeTask(byteObj)
        break
      case 3:
        initializeSubmission(byteObj)
        break
      default:
        throw 'Invalid type ID'
    }
  }

  await generateContractJSON(
    this.token.address,
    this.token.abi,
    web3.eth.accounts
  )
}
