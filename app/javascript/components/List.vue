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
</div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
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
