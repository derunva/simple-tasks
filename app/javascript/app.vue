<template>
  <div id="app">
    <transition name="main">
      <NameForm v-if="formState.active"/>
    </transition>
    <List v-for="list in lists" :list="list"/>
    <div class="add-list-button">
      <button @click="newList">
        <i class="fas fa-plus"></i>
        Add TODO List
      </button>
    </div>
  </div>
</template>

<script>
import NameForm from './components/NameForm.vue'
import List from './components/List.vue'
import { mapState } from 'vuex'
export default {
  components: {
    NameForm,
    List
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    newList () {
      this.$store.dispatch('newList')
    }
  },
  mounted () {
    this.$axios.get('/lists.json')
      .then(res => {
        this.$store.dispatch('setLists', res.data)
      })
      .catch(err => {
        console.log(Object.assign({}, err));
      })
  },
  computed: {
    ...mapState([
      'formState',
      'lists'
    ])
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
