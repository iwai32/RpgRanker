<template>
  <p class="character-confirmation__name">
    {{ characterList[indexForCharacterId].name }}にしますか？
  </p>
</template>

<script>
export default {
  computed: {
    characterList() {
      return this.$store.state.characterList
    },
    indexForCharacterId() {
      return this.$store.getters.characterIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.character-confirmation__name {
  color: #eeeeee;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}
</style>