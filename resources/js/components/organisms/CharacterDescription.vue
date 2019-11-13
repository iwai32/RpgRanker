<template>
  <div class="character-description">
    <character-name>
      {{ characterList[indexForCharacterId].name }}
    </character-name>

    <character-details>
      <template slot="title">profile</template>
      <character-details-txt slot="contents">
        {{ characterList[indexForCharacterId].profile }}
      </character-details-txt>
    </character-details>

    <character-details>
      <template slot="title">skill</template>
      <character-skills slot="contents"></character-skills>
    </character-details>
  </div>
</template>

<script>
import CharacterName from '../atoms/CharacterName.vue'
import CharacterDetails from '../molecules/CharacterDetails.vue'
import CharacterDetailsTxt from '../atoms/CharacterDetailsTxt.vue'
import CharacterSkills from '../molecules/CharacterSkills.vue'
export default {
  components: {
    CharacterName,
    CharacterDetails,
    CharacterDetailsTxt,
    CharacterSkills
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
.character-description {
  margin-bottom: 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  letter-spacing: .08em;
  line-height: 1.5;
  padding: 10px;
}
</style>