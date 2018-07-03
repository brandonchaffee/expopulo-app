<template>
    <div id="dashcontent">
        <component
            class="dashcontainer"
            v-bind:is="dynamicComponents[$store.state.sidebar]"
        >
       </component>
    </div>
</template>

<script>
import TaskBox from './TaskBox.vue'
import ProjectBox from './ProjectBox.vue'
import ContributionBox from './ContributionBox.vue'
import OrganizationBox from './OrganizationBox.vue'

export default {
  name: 'DashContent',
  components: {
    TaskBox,
    ProjectBox,
    ContributionBox,
    OrganizationBox
  },
  data () {
    return {
      dynamicComponents: [
        ProjectBox,
        TaskBox,
        ContributionBox,
        OrganizationBox
      ],
      msg: 'This is the dash'
    }
  }
}
</script>

<style scoped>
#dashcontent {
    display: flex;
}

.dashcontainer {
    float: left;
    flex-grow: 100;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    margin: 20px;
}

</style>
