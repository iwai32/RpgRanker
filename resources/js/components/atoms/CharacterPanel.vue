<template>
  <li class="character-panel"
    :id="idName"
    :class="className"
    @click="selectedCharacter(characterId)"
  >
    <img class="character-img"
      :src="imgPass"
      :alt="altName"
    >
  </li>
</template>

<script>
export default {
  props: {
    idName: String,
    className: Object,
    characterId: Number,
    imgPass: String,
    altName: String,
  },
  methods: {
    selectedCharacter(characterId) {
      this.$store.dispatch('selectedCharacter', characterId)
    }
  }
}
</script>

<style lang="scss">
.character-panel {
  box-shadow: 0 0 1px 1px #b79532;
  border-radius: 2px;
  width: 30%;
  &__active {
    box-shadow: 0 0 2px 2px darken(#b79532, 10%);
  }
}
</style>