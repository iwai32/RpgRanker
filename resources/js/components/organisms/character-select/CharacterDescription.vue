<template>
  <div class="character-description">
    <character-name>
      {{ characterList[characterIndex].name }}
    </character-name>

    <character-details>
      <template slot="title">profile</template>
      <character-details-txt slot="contents">
        {{ characterList[characterIndex].profile }}
      </character-details-txt>
    </character-details>

    <character-details>
      <template slot="title">skill</template>
      <character-skills slot="contents"></character-skills>
    </character-details>
  </div>
</template>

<script>
import CharacterName from '../../atoms/character-select/CharacterName.vue'
import CharacterDetails from '../../molecules/character-select/CharacterDetails.vue'
import CharacterDetailsTxt from '../../atoms/character-select/CharacterDetailsTxt.vue'
import CharacterSkills from '../../molecules/character-select/CharacterSkills.vue'
export default {
  components: {
    CharacterName,
    CharacterDetails,
    CharacterDetailsTxt,
    CharacterSkills
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
.character-description {
  margin-bottom: 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  letter-spacing: .08em;
  line-height: 1.5;
  padding: 10px;
}
</style>