<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
  },
  mounted () {
    this.$store.dispatch('getContractInstance')
    this.$store.dispatch('getExternals')
  }
}
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
}
body {
    margin: 0 !important;
}
</style>
<style scoped>
</style>
