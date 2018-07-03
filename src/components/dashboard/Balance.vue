<template>
    <div id="accountinfo">
      <div class="balance">Tokens: {{ tokenBalance }}</div>
      <div class="balance">Ether: {{ ethBalance }}</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import separator from '../../util/formatNumber'

export default {
  name: 'AccountInfo',
  data () {
    return {
      msg: 'This is the dashboard',
      test: 'gopher'
    }
  },
  computed: mapState({
    ethBalance: state => {
      if (state.web3.instance !== null) {
        return separator(state.web3.instance().fromWei(state.web3.balance, 'ether'))
      }
    },
    tokenBalance: state => separator(state.contract.balance)
  }),
  beforeCreated () {
    this.$store.dispatch('pollContract')
  }
}
</script>

<style scoped>
#accountinfo {
  height: 50px;
  padding: 15px;
  padding-right: 45px;
  margin-left: auto;
  text-align: right;
  font-weight: 600;
  font-size: 1.15em;
}
.balance {
  padding: 5px;
}
</style>
