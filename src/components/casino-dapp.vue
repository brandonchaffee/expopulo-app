<template>
  <div>
<hello-world/>
 <hello-metamask/>
 <casino-component/>
</div>
</template>
<script>
import HelloMetamask from '@/components/hello-metamask'
import CasinoComponent from '@/components/casino-component'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'casino-dapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    'hello-metamask': HelloMetamask,
    'casino-component': CasinoComponent,
    'hello-world': HelloWorld
  }
}
</script>
<style scoped>
</style>
