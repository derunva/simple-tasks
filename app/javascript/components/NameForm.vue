<template lang="html">
<div class="form">
  <div class="form--inner">
    <h2>Add list</h2>
    <form>
      <input type="text" v-model="name" placeholder="List name">
      <button class="button"><i class="fas fa-save"></i></button>
      <span class="button"><i class="fas fa-window-close"></i></span>
    </form>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'val',
    'path'
  ],
  data () {
    return {
      name: ""
    }
  }
}
</script>

<style lang="css" scoped>
</style>
