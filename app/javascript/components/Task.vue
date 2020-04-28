<template lang="html">
  <div class="task">
    <div class="task--status">
      <input @change="statusChange($event)" type="checkbox" :checked="task.status">
    </div>
    <div class="task--name">
      {{task.name}}
    </div>
    <div class="task--optionals">
      <i @click="taskToEdit(task)" class="fas fa-pencil-alt"></i>
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
  methods: {
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
