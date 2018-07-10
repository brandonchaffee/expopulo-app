<template>
    <div id="submissionBox">
        <!-- <button @click="getOrganization">Get Event</button> -->
        <!-- <div> {{ eventTest }} </div> -->
    </div>
</template>

<script>

export default {
  name: 'SubmissionBox'
  // data () {
  //   return {
  //     organization: null
  //   }
  // },
  // methods: {
  //   getOrganization () {
  //     var eventArray = []
  //     this.$store.state.contract.instance().OrganizationFormed({}, {
  //       fromBlock: 0,
  //       toBlock: 'latest'
  //     }).get((error, events) => {
  //       if (error) {
  //         console.log('Error in organization event handler: ' + error)
  //       } else {
  //         events.forEach(function (x) {
  //           eventArray.push(x.args)
  //         })
  //         console.log(eventArray)
  //         this.organization = eventArray
  //       }
  //     })
  //   }
  // },
  // beforeCreated () {
  //   this.$store.dispatch('pollContract')
  // },
  // beforeUpdate () {
  //   this.getOrganization()
  // }
}
</script>

<style scoped>

</style>
