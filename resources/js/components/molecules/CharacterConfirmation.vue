<template>
  <div class="character-confirmation">
    <character-name-confirmation></character-name-confirmation>

    <div class="character-confirmation__btns">
      <character-confirmation-btn
        :state="'yes'"
        :action="closeConfirmationDisplay"
      ></character-confirmation-btn><!--ここのアクションは未定-->

      <character-confirmation-btn
        :state="'no'"
        :action="closeConfirmationDisplay"
      ></character-confirmation-btn>
          
    </div>
  </div>
</template>

<script>
import CharacterNameConfirmation from '../atoms/CharacterNameConfirmation.vue'
import CharacterConfirmationBtn from '../atoms/CharacterConfirmationBtn.vue'
export default {
  components: {
    CharacterNameConfirmation,
    CharacterConfirmationBtn
  },
  methods: {
    closeConfirmationDisplay() {
      this.$store.dispatch('closeConfirmationDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>

.character-confirmation {
  background: #a66e3e;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  letter-spacing: .1em;
  width: 70%;
  height: 120px;
  &__btns {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
}
</style>