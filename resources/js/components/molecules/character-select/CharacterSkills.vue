<template>
  <ul class="character-skills">
    <character-skill
      v-for="(skill, key) in characterList[characterIndex].skills"
      :key="key"
    >
      {{ skill.name }}
    </character-skill>
  </ul>
</template>

<script>
import CharacterSkill from '../../atoms/character-select/CharacterSkill.vue'
export default {
  components: {
    CharacterSkill
  },
  computed: {
    characterList() {
      return this.$store.state.characterSelect.characterList
    },
    characterIndex() {
      return this.$store.getters['characterSelect/characterIndex']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-skills {
  color: $text-color;
  font-size: 1.4rem;
  padding: 10px 5px 5px;
  @include tab {
    padding: 10px;
  }
}
</style>