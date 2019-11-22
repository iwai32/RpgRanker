<template>
  <ul class="character-panels">
    <character-panel 
      v-for="character in characterDisplayNumber"
      :key="character.id"
      :id-name="'character' + toPascalCase(character.pass)"
      :class-name="{ 'active': character.id === characterId }"
      :img-pass="'../../../images/' + character.pass + '.png'"
      :alt-name="character.name"
      :character-id="character.id"
    ></character-panel>
  </ul>
</template>

<script>
import CharacterPanel from '../../atoms/character-select/CharacterPanel.vue'
export default {
  components: {
    CharacterPanel
  },
  computed: {
    toPascalCase() {
      return function(string) {
        var upperCase = string.charAt().toUpperCase()
        var otherString = string.substring(1)
        var mergedString = ''

        if (string.includes('-')) {
          var divided_strings = string.split('-')
          for(var i = 0; i < divided_strings.length; i++) {
            mergedString += divided_strings[i].charAt().toUpperCase()
            + divided_strings[i].substring(1)
          }
        } else {
          mergedString = upperCase + otherString
        }
        return mergedString
      }
    },
    characterId() {
      return this.$store.state.characterSelect.characterId
    },
    characterDisplayNumber() {
      return this.$store.getters['characterSelect/characterDisplayNumber']
    }
  }
}
</script>

<style lang="scss" scoped>
.character-panels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>