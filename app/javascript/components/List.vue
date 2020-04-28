<template lang="html">
<div class="list">
  <div class="list--heading">
    <i class="fas fa-calendar-alt"></i>
    <div class="list--name">
      {{list.name}}
    </div>
    <div class="list--optionals">
      <i @click="listToEdit(list)" class="fas fa-pencil-alt"></i>
      |
      <i @click="deleteList(list)" class="far fa-trash-alt"></i>
    </div>
  </div>
  <div class="list--task-form">
    <i class="fas fa-plus"></i>
    <form @submit.prevent="newTask(list.id)">
      <input type="text" v-model="new_task_name" placeholder="Start typing here to create a task ...">
      <button>Add Task</button>
    </form>
  </div>
  <div v-if="new_task_error.length" class="errors">
    {{new_task_error}}
  </div>
  <div class="list--tasks">
    <Task v-for="task in list.tasks" :task="task"/>
  </div>
</div>
</template>

<script>
import Task from './Task.vue'
export default {
  components: {
    Task
  },
  props: ['list'],
  data () {
    return {
      new_task_name: "",
      new_task_error: ""
    }
  },
  methods: {
    newTask (list_id) {
      this.new_task_error = ""
      if (this.new_task_name.length < 5) {
        return this.new_task_error = "is too short (minimum is 5 characters)"
      }
      const data = {
        "task": {
          list_id,
          name: this.new_task_name
        }
      }
      this.$axios.post('/tasks.json', data)
      .then(res => {
        this.new_task_name = ""
        this.$store.dispatch('addTask', res.data)
      })
      .catch(err => {
        console.log(Object.assign({}, err));
      })
    },
    deleteList (item) {
      var res = confirm(`Are you sure want to delete record ${item.name} ?`);
      if (res) {
        this.$axios.delete(`/lists/${item.id}.json`)
        .then(res => {
          this.$store.dispatch('deleteList', item.id)
        })
        .catch(err => {
          console.log(Object.assign({}, err));
        })
      }
    },
    listToEdit (item) {
      this.$store.dispatch('editList', item)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
