let state = {
  sidebar: 0,
  inCreation: false,
  web3: {
    isInjected: false,
    instance: null,
    networkId: null,
    coinbase: null,
    balance: null,
    error: null
  },
  contract: {
    instance: null,
    balance: null
  },
  externals: null
}
export default state
