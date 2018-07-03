<template>
    <div id="home">
        <NavBar></NavBar>
        <HomeBoard></HomeBoard>
    </div>
</template>

<script>
import NavBar from '../components/generic/NavBar.vue'
import HomeBoard from '../components/home/HomeBoard.vue'

export default {
  name: 'Dashboard',
  components: {
    NavBar,
    HomeBoard
  }
}
</script>

<style scoped>
#home {
    text-align: center;
}
</style>
