<template>
  <div class="user-data">
    <character-icon
      :characterPass="resultData.characterPass"
      :characterName="resultData.characterName"
    ></character-icon>

    <user-name>{{ userName }}</user-name>
  </div>
</template>

<script>
import CharacterIcon from '../../atoms/battle-result/CharacterIcon.vue'
import UserName from '../../atoms/battle-result/UserName.vue'
export default {
  props: {
    userName: String
  },
  components: {
    CharacterIcon,
    UserName
  },
  computed: {
    resultData() {
      return this.$route.query
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