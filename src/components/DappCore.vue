<template>
  <div>
    <account/>
    <transfer/>
  </div>
</template>
<script>
import Account from '@/components/account'
import Transfer from '@/components/transfer'

export default {
  name: 'DappCore',
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
  },
  components: {
    'account': Account,
    'transfer': Transfer
  }
}
</script>
<style scoped>
</style>
