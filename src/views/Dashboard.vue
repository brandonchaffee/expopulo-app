<template>
    <div id="dashboard">
        <NavBar></NavBar>
        <SideBar></SideBar>
        <Balance></Balance>
        <DashContent></DashContent>
    </div>
</template>

<script>
import NavBar from '../components/generic/NavBar.vue'
import SideBar from '../components/dashboard/SideBar.vue'
import DashContent from '../components/dashboard/DashContent.vue'
import Balance from '../components/dashboard/Balance.vue'
export default {
  name: 'Dashboard',
  components: {
    NavBar,
    SideBar,
    DashContent,
    Balance
  }
}
</script>
