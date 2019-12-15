<template>
  <p class="character-confirmation-name">
    {{ characterList[indexForCharacterId].name }}にしますか？
  </p>
</template>

<script>
export default {
  computed: {
    characterList() {
      return this.$store.state.characterSelect.characterList
    },
    indexForCharacterId() {
      return this.$store.getters['characterSelect/characterIndex']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-confirmation-name {
  color: $white;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
  @include tab {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
}
</style>