<template>
    <div id="navbar">
        <router-link :to="{ name: 'Home'}">
            <h1>{{title}}</h1>
        </router-link>
        <SearchBar></SearchBar>
        <router-link :to="{ name: 'Dashboard'}">
            <img src="../../assets/user.svg">
        </router-link>
        <router-link to="/org/gopher">
            <img src="../../assets/layers.svg">
        </router-link>
        <img src="../../assets/ethereum.svg">
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'NavBar',
  components: {
    SearchBar
  },
  data () {
    return {
      title: 'Expopulo',
      preText: 'Search'
    }
  }
}
</script>

<style scoped>
#navbar {
    display: flex;
    align-items: center;
    width: 100%;
    background: #11998e;
    background: -webkit-linear-gradient(to left, #4de285, #11998e);
    background: linear-gradient(to left, #4de285, #11998e);
    text-align: left;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .25);
    position: relative;
}
h1 {
    color: white;
    padding: 7px;
    padding-left: 40px;
    font-size: 35px;
    font-family: 'Hind', sans-serif;
    font-weight: 600;
    margin: 0;
    transform: translate(0px, 3px);
}
a {
    text-decoration: none;
}
img {
    opacity: 0.75;
    transition: opacity 300ms ease;
    float: right;
    height: 37px;
    margin-right: 50px;
}
img:hover {
    opacity: 0.95;
}
#balance {
  padding: 5px 25px;
  color: white;
  font-weight: 600;
  font-size: 1.15em;
}
</style>
