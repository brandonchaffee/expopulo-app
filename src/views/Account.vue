<template>
    <div id="account">
        <NavBar></NavBar>
        <AccountLayout></AccountLayout>
    </div>
</template>

<script>
import NavBar from '../components/generic/NavBar.vue'
import AccountLayout from '../components/AccountLayout.vue'

export default {
  name: 'Account',
  components: {
    NavBar,
    AccountLayout
  }
}
</script>

<style scoped>

</style>
