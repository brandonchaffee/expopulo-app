<template>
    <div id="taskbox">
        <div class="taskitem"
             v-for="(item, index) in items"
             :class="{active:index == selected}"
             @click="selected = index"
             :key="item.id"
        >
            <div class="titlebox">{{item.title}}</div>
            <div class="detailbox">{{item.details}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TaskBox',
  data () {
    return {
      selected: undefined,
      items: [
        {title: 'Gopher', details: 'Testing details here'},
        {title: 'Gophet', details: 'Testing other details here'},
        {title: 'Gophem', details: 'Those details there'},
        {title: 'Gophew', details: 'These details here'}
      ]
    }
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
