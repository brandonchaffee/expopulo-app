import pollWeb3 from '../util/pollWeb3'
import pollContract from '../util/pollContract'
import externalsJSON from '../util/generated/externals.json'

export default {
  registerWeb3Instance (state, payload) {
    let result = payload
    state.web3.coinbase = result.coinbase
    state.web3.networkId = result.networkId
    state.web3.balance = result.balance
    state.web3.isInjected = result.injectedWeb3
    state.web3.instance = result.web3
    pollWeb3()
  },
  pollWeb3Instance (state, payload) {
    state.web3.coinbase = payload.coinbase
    state.web3.balance = payload.balance
  },
  registerContractInstance (state, payload) {
    let result = payload
    state.contract.instance = result.contractInstance
    state.contract.balance = result.tokenBalance
    pollContract()
  },
  pollContractInstance (state, payload) {
    state.contract.balance = payload.tokenBalance
  },
  registerExternals (state, payload) {
    state.externals = externalsJSON.accounts
  },
  setSidebar (state, {payload}) {
    state.sidebar = payload
  }
}
