<template lang="html">
<div class="form">
  <div class="form--inner">
    <h2>Add {{formState.name}}</h2>
    <form @submit.prevent="submit">
      <input type="text" v-model="name" placeholder="Title">
      <button class="button"><i class="fas fa-save"></i></button>
      <span @click="close" class="button"><i class="fas fa-window-close"></i></span>
    </form>
    <div v-if="error.length" class="errors">{{error}}</div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      name: "",
      error: ""
    }
  },
  mounted () {
    if (this.formState.title) {
      this.name = this.formState.title
    }
  },
  methods: {
    close () {
      this.$store.dispatch('closeForm')
    },
    submit () {
      this.error = ""
      if (this.name.length < 5) {
        return this.error = "is too short (minimum is 5 characters)"
      }
      this.$axios({
        "url": this.formState.path,
        "data": {
          "list": {
            "name": this.name
          }
        },
        "method": this.formState.action
      })
      .then(res => {
        if (res.status === 201) {
          this.$store.dispatch('addList', res.data)
        } else {
          this.$store.dispatch('updateList', res.data)
        }
        this.$store.dispatch('closeForm')
      })
      .catch(err => {
        console.log(Object.assign({}, err));
      })
    }
  },
  computed: {
    ...mapState([
      'formState'
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
