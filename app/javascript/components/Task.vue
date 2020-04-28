<template lang="html">
  <div class="task">
    <div class="task--status">
      <input @change="statusChange($event)" type="checkbox" :checked="task.status">
    </div>
    <div class="task--name" @blur="save($event)" :contenteditable="editable">
      {{task.name}}
    </div>
    <div class="task--optionals">
      <i @click="downTask()" class="fas fa-long-arrow-alt-down"></i>
      |
      <i @click="upTask()" class="fas fa-long-arrow-alt-up"></i>
      |
      <i @click="editable = true" title="will updated on blur" class="fas fa-pencil-alt"></i>
      |
      <i @click="deleteTask()" class="far fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'task'
  ],
  data () {
    return {
      editable: false
    }
  },
  methods: {
    downTask () {
      this.$axios.get(`/down_position/${this.task.id}.json`)
      .then(res => {
        this.$store.dispatch('setLists', res.data)
      })
      .catch(err => {
        console.log(Object.assign({}, err));
      })
    },
    upTask () {
      this.$axios.get(`/up_position/${this.task.id}.json`)
      .then(res => {
        this.$store.dispatch('setLists', res.data)
      })
      .catch(err => {
        console.log(Object.assign({}, err));
      })
    },
    save (evt) {
      this.$axios.put(`/tasks/${this.task.id}.json`, {
        "task": {
          "name": evt.target.innerHTML
        }
      })
      .then(res => {
        console.log(res.data);
        this.editable = false
      })
      .catch(err => {
        console.log(Object.assign({}, err));
      })
    },
    deleteTask () {
      this.$axios.delete(`/tasks/${this.task.id}.json`)
      .then(res => {
        this.$store.dispatch('deleteTask', this.task.id)
      })
    },
    statusChange (evt) {
      console.log(evt.target.checked, this.task.id);
      this.$axios.put(`/tasks/${this.task.id}.json`, {
        "task": {
          "status": evt.target.checked
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(Object.assign({}, err));
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
