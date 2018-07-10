<template>
    <div id="taskbox">
        <div class="taskitem"
             v-for="(item, index) in tasks"
             :class="{active:index == selected}"
             @click="selected = index"
             :key="item.index"
        >
            <div class="titlebox">{{item.org}}</div>
            <div class="detailbox">{{item.project}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TaskBox',
  data () {
    return {
      selected: undefined,
      tasks: null
    }
  },
  methods: {
    getTasks () {
      if (this.$store.state.contract.instance !== null) {
        var eventArray = []
        this.$store.state.contract.instance().TaskCreated({}, {
          fromBlock: 0,
          toBlock: 'latest'
        }).get((error, events) => {
          if (error) {
            console.log('Error in project event handler: ' + error)
          } else {
            events.forEach(function (x) {
              eventArray.push(x.args)
            })
            this.tasks = eventArray
          }
        })
      }
    }
  },
  beforeCreated () {
    this.$store.dispatch('pollContract')
  },
  beforeMount () {
    this.getTasks()
  }
}
</script>

<style scoped>
#taskbox {
    text-align: left;
}
.taskitem {
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

.active {
    background: #96beff;
}
</style>
