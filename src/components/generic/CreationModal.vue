<template>
    <div id="creation">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <p><strong>Create</strong></p>
                <img @click="setCreation(false)" src="../../assets/cancel.svg">
              </div>

              <div class="modal-body">
                <button @click="isFinished = true">Set to Finish</button>
              </div>

              <div :class="{ finished: isFinished }" class="modal-footer">
                Submit
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CreationModal',
  data () {
    return {
      isFinished: false
    }
  },
  methods: {
    ...mapActions(['setCreation'])
  }
}
</script>

<style scoped>
#creation {
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  /* height: 400px; */
  margin: 0px auto;
}

/* Header Styling */
.modal-header {
  background: #396afc;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 10px;
}
img {
  height: 30px;
  cursor: pointer;
}
.modal-header p {
  color: white;
  font-size: 1.25em;
}

/* Body Styling */
.modal-body {
  background: white;
  height: 300px;
}

/* Footer Styling */
.modal-footer {
  border-radius: 0px 0px 10px 10px;
  color: white;
  font-weight: 500;
  background: #d4d8dd;
  cursor: default;
  text-align: center;
  padding: 10px;
  transition: 0.5s;
}

.finished {
  cursor: pointer;
  background: #396afc;
  transition: background 500ms ease;
}

.finished:hover {
  background: #2948ff;
}
</style>
