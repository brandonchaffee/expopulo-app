<template>
    <div id="dashboard">
        <NavBar></NavBar>
        <SideBar></SideBar>
        <DashContent></DashContent>
    </div>
</template>

<script>
import NavBar from '../components/generic/NavBar.vue'
import SideBar from '../components/dashboard/SideBar.vue'
import DashContent from '../components/dashboard/DashContent.vue'

export default {
  name: 'Dashboard',
  components: {
    NavBar,
    SideBar,
    DashContent
  },
  data () {
    return {
      msg: 'This is the dashboard'
    }
  }
}
</script>

<style scoped>
#dashboard {
}
</style>
