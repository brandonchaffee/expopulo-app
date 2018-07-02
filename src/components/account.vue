<template>
  <div id='account'>
    <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</p>
    <p v-else id="no-metamask"><i aria-hidden="true" class="fa fa-times"></i> Metamask not found</p>
    <p>Network: {{ network }}</p>
    <p>Account: {{ coinbase }}</p>
    <p>Balance: {{ balance }} Wei // {{ ethBalance }} Eth</p>
    <p>Token: {{ tokenBalance }} </p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Account',
  computed: mapState({
    isInjected: state => state.web3.isInjected,
    network: state => state.web3.networkId,
    coinbase: state => state.web3.coinbase,
    balance: state => state.web3.balance,
    tokenBalance: state => state.contract.balance,
    ethBalance: state => {
      if (state.web3.instance !== null) return state.web3.instance().fromWei(state.web3.balance, 'ether')
    }
  })
}
</script>

<style scoped>
.account {
  text-align:center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}</style>
