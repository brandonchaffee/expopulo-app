<template>
    <div id="organizationbox">
        Orgs
        <!-- <button @click="eventTest">Get Event</button> -->
        <!-- <div> {{ eventTest }} </div> -->
    </div>
</template>

<script>

export default {

  name: 'OrganizationBox',
  data () {
    return {
      organization: null
    }
  },
  // methods: {
  //   eventTest () {
  //     var eventArray = []
  //     this.$store.state.contract.instance().ProjectCreated({}, {
  //       fromBlock: 0,
  //       toBlock: 'latest'
  //     }).get((error, events) => {
  //       if (error) {
  //         console.log('Error in project event handler: ' + error)
  //       } else {
  //         events.forEach(function (x) {
  //           eventArray.push(JSON.stringify(x.args))
  //         })
  //       }
  //     }).then(function () {
  //       console.log(eventArray)
  //     })
  //     return eventArray
  //   }
  // },
  beforeCreated () {
    this.$store.dispatch('pollContract')
  }
}
</script>

<style scoped>

</style>
