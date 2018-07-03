<template>
    <div id="homeboard">
        <div class="segment" v-for="item in segments" :key="item.id">
            <div class="topbar" :style="{background: item.topColor}"></div>
            <div class="title"> {{item.text}} </div>
            <div class="segment-container">
                <router-link
                    class="segment-item"
                    v-for="subset in item.subsets"
                    :to=" item.typePath + subset.text "
                    :key="subset.id"
                    :style="{'border-color': item.midColor}"
                > {{subset.text}} </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'HomeBoard',
  data () {
    return {
      segments: [
        {
          text: 'Trending Projects',
          typePath: '/project/',
          midColor: '#22CC8C',
          topColor: 'linear-gradient(to right, #23D484, #21C495)',
          subsets: [
            {text: 'Atom Editor'},
            {text: 'FreeCAD'},
            {text: 'Open AI'},
            {text: 'TensorFlow'},
            {text: 'Node.js'},
            {text: 'Vue.js'}
          ]
        },
        {
          text: 'Trending Tasks',
          typePath: '/task/',
          midColor: '#20ba9e',
          topColor: 'linear-gradient(to right, #21C495, #1EB0A8)',
          subsets: [
            {text: 'Atom Editor'},
            {text: 'FreeCAD'},
            {text: 'Open AI'},
            {text: 'TensorFlow'},
            {text: 'Node.js'},
            {text: 'Vue.js'}
          ]
        },
        {
          text: 'Top Organizations',
          typePath: '/org/',
          midColor: '#1da7b2',
          topColor: 'linear-gradient(to right, #1EB0A8, #1C9EBD)',
          subsets: [
            {text: 'Atom Editor'},
            {text: 'FreeCAD'},
            {text: 'Open AI'},
            {text: 'TensorFlow'},
            {text: 'Node.js'},
            {text: 'Vue.js'}
          ]
        },
        {
          text: 'Outstanding Contributions',
          typePath: '/task/',
          midColor: '#1a96c4',
          topColor: 'linear-gradient(to right, #1C9EBD, #198ECC)',
          subsets: [
            {text: 'Atom Editor'},
            {text: 'FreeCAD'},
            {text: 'Open AI'},
            {text: 'TensorFlow'},
            {text: 'Node.js'},
            {text: 'Vue.js'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
#homeboard {
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
    max-width: 1700px;
}
.segment {
    height: 500px;
    width: 575px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .25);
    background: #eaedf2;
    margin: 15px;
    border-radius: 5px;
    transition: box-shadow 300ms ease;
}
.segment:hover {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
}
.segment:hover .topbar {
    opacity: 1.0;
}
.title {
    font-weight: 700;
    margin: 10px 0px;
    padding: 5px;
}
.topbar {
    height: 20px;
    border-radius: 5px 5px 0px 0px;
    opacity: 0.7;
    transition: opacity 300ms ease;
}
.segment-container {
    float: left;
    width: 100%;
}
.segment-item {
    text-decoration: none;
    color: inherit;
    display: block;
    text-align: left;
    padding: 10px 15px;
    margin: 0px 40px;
    border-left: 0px solid;
    transition: background 300ms ease, border-left 300ms ease;
}
.segment-item:hover {
    background: rgba(0, 0, 0, .05);
    border-left: 12px solid;
}
.segment-container  > .segment-item ~ .segment-item  {
    border-top: 1px solid rgba(9, 29, 61, 0.5) !important;
}
</style>
