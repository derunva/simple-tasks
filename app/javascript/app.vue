<template>
  <div id="app">
    <NameForm/>
    <div class="add-list-button">
      <button>
        <i class="fas fa-plus"></i>
        Add TODO List
      </button>
    </div>
  </div>
</template>

<script>
import NameForm from './components/NameForm.vue'
export default {
  components: {
    NameForm
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
