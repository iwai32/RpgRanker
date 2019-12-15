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
      this.$store.commit('characterSelect/selectedCharacter', characterId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-panel {
  box-shadow: 0 0 1px 1px $box-color;
  border-radius: 2px;
  text-align: center;
  width: 30%;
  max-width: 140px;
  @include tab {
    max-width: 180px;
  }
    @include pc {
    max-width: 140px;
  }
}

.active {
  box-shadow: 0 0 2px 2px $border-color;
}
</style>