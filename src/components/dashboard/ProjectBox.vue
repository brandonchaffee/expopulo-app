<template>
    <div id="projectbox">
      <div class="project-item"
           v-for="item in projects"
           :key="item.index"
      >
          <div class="titlebox">{{item.creator}}</div>
          <div class="detailbox">{{item.project}}</div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'ProjectBox',
  data () {
    return {
      projects: null
    }
  },
  methods: {
    getProjects () {
      if (this.$store.state.contract.instance !== null) {
        var eventArray = []
        this.$store.state.contract.instance().ProjectCreated({}, {
          fromBlock: 0,
          toBlock: 'latest'
        }).get((error, events) => {
          if (error) {
            console.log('Error in project event handler: ' + error)
          } else {
            events.forEach(function (x) {
              eventArray.push(x.args)
            })
            this.projects = eventArray
          }
        })
      }
    }
  },
  beforeCreated () {
    this.$store.dispatch('pollContract')
  },
  beforeMount () {
    this.getProjects()
  }
}
</script>

<style scoped>
#projectbox {
    text-align: left;
}
.project-item {
    width: 500px;
    height: 100px;
    margin: 10px;
    transition: background 500ms ease;
    background: rgba(220, 223, 229, 0.25);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .25);
    border-radius: 5px;

}
.titlebox {
    background: rgba(220, 223, 229, 0.5);
    padding: 15px 10px;
    font-weight: 400;
}
.detailbox {
    padding: 10px;
}

</style>
