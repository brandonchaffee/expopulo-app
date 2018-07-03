<template>
<div id="search-input">
  <input v-bind:placeholder="preText">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 451 451" style="enable-background:new 0 0 451 451;" xml:space="preserve" width="512px" height="512px">
    <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"
    fill="#6a696e"/>
    </svg>
</div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      preText: 'Search'
    }
  }
}
</script>

<style scoped>
#search-input {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  margin: auto;
}

svg {
  position: absolute;
  left: 15px;
  width: 15px;
  height: 15px;
}

input {
  transition: background-color 300ms ease, width 300ms ease;
  margin: 0;
  padding-left: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-family: 'Lato', sans-serif;
  height: 40px;
  width: 400px;
  padding-top: 4px;
  padding-bottom: 4px;
}

input:focus {
  outline-width: 0;
  background-color: rgba(255, 255, 255, 0.95);
  width: 600px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .25);
}

::placeholder {
  color: rgba(255, 255, 255, 0.5);
  transition: color 300ms ease;
}

:focus::placeholder {
  color: #9aa2af;
}

svg path {
  fill: rgba(255, 255, 255, 0.5);
}

input:focus+svg path {
  fill: #2c3e50;
}

input:not(:focus) {
  color: rgba(255, 255, 255, 0.5);
}
</style>
