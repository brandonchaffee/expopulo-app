<template>
    <div id="projectbox">
        Projects!
        <li v-for="project in projects" :key="project.index">
          {{project.creator}}
        </li>
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

</style>
