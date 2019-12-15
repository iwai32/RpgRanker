<template>
  <div class="character-confirmation">
    <character-name-confirmation></character-name-confirmation>

    <div class="character-confirmation__btns">
      <confirmation-btn
        :state="'yes'"
        :action="toBattle"
      ></confirmation-btn>

      <confirmation-btn
        :state="'no'"
        :action="closeConfirmationDisplay"
      ></confirmation-btn>
    </div>
  </div>
</template>

<script>
import CharacterNameConfirmation from '../../atoms/character-select/CharacterNameConfirmation.vue'
import ConfirmationBtn from '../../atoms/common/ConfirmationBtn.vue'
export default {
  components: {
    CharacterNameConfirmation,
    ConfirmationBtn
  },
  computed: {
    characterIndex() {
      return this.$store.getters['characterSelect/characterIndex']
    }
  },
  methods: {
    toBattle() {
      this.$store.commit('commonModule/closeConfirmationDisplay')
      this.$router.push({ path: `battle/${this.characterIndex }` })
    },
    closeConfirmationDisplay() {
      this.$store.commit('commonModule/closeConfirmationDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-confirmation {
  background: $main-color;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  letter-spacing: .1em;
  width: 260px;
  height: fit-content;
  &__btns {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  @include tab {
    width: 520px;
  }
}
</style>