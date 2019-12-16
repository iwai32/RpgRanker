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
@import "../../../../sass/app.scss";
.user-data {
  width: 26%;
  @include tab {
    min-height: 140px;
    width: 140px;
  }
    @include pc {
    min-height: 120px;
    width: 120px;
  }
}
</style>