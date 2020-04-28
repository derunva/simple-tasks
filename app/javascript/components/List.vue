<template lang="html">
<div class="list">
  <div class="list--heading">
    <i class="fas fa-calendar-alt"></i>
    <div class="list--name">
      {{list.name}}
    </div>
    <form>
      <input type="text" v-model="name">
    </form>
  </div>
</div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      name: "",
      editable: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
