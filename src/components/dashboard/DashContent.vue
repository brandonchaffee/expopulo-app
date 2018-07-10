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
import SubmissionBox from './SubmissionBox.vue'

export default {
  name: 'DashContent',
  components: {
    ProjectBox,
    TaskBox,
    SubmissionBox,
    ContributionBox
  },
  data () {
    return {
      dynamicComponents: [
        ProjectBox,
        TaskBox,
        SubmissionBox,
        ContributionBox
      ]
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
