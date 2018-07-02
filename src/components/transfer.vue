<template>
  <div id="tranfer">
    <button @click="getExternals">Get Accounts</button>
    <button @click="transferOut">Transfer Out</button>
    <li v-for="target in targets" :key="target.id">
      {{target}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data () {
    return {
      targets: null
    }
  },
  methods: {
    getExternals () {
      this.targets = this.$store.state.externals
    },
    transferOut () {
      console.log(this.targets[2])
      this.$store.state.contract.instance().transfer(this.targets[2], 500, {
        gas: 300000,
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          console.log('Worked')
        }
      })
    }
  },
  mounted () {
    this.$store.dispatch('getContractInstance')
    this.$store.dispatch('getExternals')
  }
}
</script>

<style scoped>
#tranfer{
  background: orange;
  padding: 40px;
  text-align: left;
}
</style>
