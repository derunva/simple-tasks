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
      <i class="far fa-trash-alt"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    listToEdit (item) {
      this.$store.dispatch('editList', item)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
