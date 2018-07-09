var Web3 = require('web3')
var web3 = new Web3(web3.currentProvider)
var fs = require('file-system')
const Expopulo = artifacts.require('./Expopulo.sol')
const metaJSON = require('../static/metaCreations.json')
const secondJSON = require('../static/secondaryCreations.json')
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

async function initializeTask (JSONObj, byteObj) {
  const projectID = JSONObj[byteObj['parent']]['parentIndex']
  await this.token.createTask(MetaAddress, projectID, byteObj['bytes32'])
  await this.token.contributeToTask(
    MetaAddress, projectID, byteObj['parentIndex'], 250)
}

async function initializeSubmission (JSONObj, byteObj) {
  const task = JSONObj[byteObj['parent']]
  const projectId = JSONObj[task['parent']]['parentIndex']
  await this.token.createSubmission(
    MetaAddress, projectId, task['parentIndex'], byteObj['bytes32'])
}

function initializeJSON (creationJSON) {
  for (var key in creationJSON) {
    var byteObj = creationJSON[key]

    switch (byteObj['typeID']) {
      case 0:
        initializeOrg(byteObj)
        break
      case 1:
        initializeProject(byteObj)
        break
      case 2:
        initializeTask(creationJSON, byteObj)
        break
      case 3:
        initializeSubmission(creationJSON, byteObj)
        break
      default:
        throw 'Invalid type ID'
    }
  }
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

  initializeJSON(metaJSON)

  //Switch coinbase
  // initializeJSON(secondJSON)


  await generateContractJSON(
    this.token.address,
    this.token.abi,
    web3.eth.accounts
  )
}
