<template>
    <div id="sidebar">
        <li
            v-for="(item, index) in items"
            :class="{active:index == $store.state.sidebar}"
            @click="setSidebar(index)"
            v-bind:key="item.id"
        >
            {{item.name}}
        </li>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SideBar',
  data () {
    return {
      items: [
        {name: 'Organizations'},
        {name: 'Projects'},
        {name: 'Tasks'},
        {name: 'Contributions'}
      ]
    }
  },
  methods: mapActions([
    'setSidebar'
  ])
}
</script>

<style scoped>
#sidebar {
    width: 275px;
    height: 95vh;
    float: left;
    padding-top: 20px;
}
li {
    transition: background 500ms ease, border-left 400ms ease;
    padding: 20px 30px;
    list-style-type: none;
    text-align: left;
    border-left: 0px solid;
    border-color:rgb(9, 29, 61)
}
li:not(.active):hover {
    background: rgba(237, 241, 247, 0.85);
    border-left: 12px solid;
    font-weight: 700;
}
.active {
    font-weight: 700;
    background: rgb(9, 29, 61);
    color: white;
}

</style>
