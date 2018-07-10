import getWeb3 from '../util/getWeb3'
import getContract from '../util/getContract'

export default {
  registerWeb3: ({commit}) => getWeb3.then(result => {
    commit('registerWeb3Instance', result)
  }).catch(e => console.log(e)),

  getContractInstance: ({commit}) => getContract.then(result => {
    commit('registerContractInstance', result)
  }).catch(e => console.log(e)),

  pollWeb3: ({commit}, payload) => commit('pollWeb3Instance', payload),
  pollContract: ({commit}, payload) => commit('pollContractInstance', payload),
  getExternals: ({commit}, payload) => commit('registerExternals', payload),
  setSidebar: ({ commit }, payload) => commit('setSidebar', payload),
  setCreation: ({ commit }, payload) => commit('setCreation', payload)
}
