<template>
  <div class="user-data">
    <character-icon
      :characterPass="characterData.pass"
      :characterName="characterData.name"
    ></character-icon>

    <user-name>{{ userName }}</user-name>
  </div>
</template>

<script>
import CharacterIcon from '../../atoms/battle-result/CharacterIcon.vue'
import UserName from '../../atoms/battle-result/UserName.vue'
export default {
  props: {
    characterIndex: String,
    userName: String
  },
  components: {
    CharacterIcon,
    UserName
  },
  computed: {
    characterData() {
      return this.$store.state.characterSelect.characterList[this.characterIndex]
    }
  }
}
</script>

<style lang="scss" scoped>
.user-data {
  width: 26%;
}
</style>