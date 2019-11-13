<template>
  <ul class="character-skills">
    <character-skill
      v-for="(skill, key) in characterList[indexForCharacterId].skills"
      :key="key"
    >
      {{ skill }}
    </character-skill>
  </ul>
</template>

<script>
import CharacterSkill from '../atoms/CharacterSkill.vue'
export default {
  components: {
    CharacterSkill
  },
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
.character-skills {
  color: #444444;
  font-size: 1.4rem;
  padding: 10px 5px 5px;
}
</style>