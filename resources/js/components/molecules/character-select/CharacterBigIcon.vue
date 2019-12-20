<template>
  <div class="character-big-icon pc-on"
    @click="openConfirmationDisplay"
  >
    <character-icon></character-icon>
    <character-ok-btn
      :mediaOn="'pc-on'"
    ></character-ok-btn>
  </div>
</template>

<script>
import CharacterIcon from '../../atoms/character-select/CharacterIcon.vue'
import CharacterOkBtn from '../../atoms/character-select/CharacterOkBtn.vue'
export default {
  components: {
    CharacterIcon,
    CharacterOkBtn
  },
  methods: {
    openConfirmationDisplay() {
      this.$store.commit('commonModule/openConfirmationDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-big-icon.pc-on {
  display: none;
  @include pc {
    border: 1px solid $border-color;
    box-shadow: 0 0 1px 1px $box-color;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    &:hover {
      opacity: .8;
      cursor: pointer;
    }
  }
}
</style>