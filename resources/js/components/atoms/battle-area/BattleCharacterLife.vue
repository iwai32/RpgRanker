<template>
  <p class="battle-character-life">
    {{ battleCharacterData.hp }}/{{ characterHp }}
  </p>
</template>

<script>
export default {
  computed: {
    characterHp() {
      return this.$store.state.battleArea.characterHp
    },
    battleCharacterData() {
      return this.$store.getters['battleArea/battleCharacterData']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-character-life {
  color: $white;
  font-size: 3vw;
  position: relative;
  padding: 4px 0 0 16px;
  text-shadow: 2px 1px 1px $text-color;
  letter-spacing: .08em;
  &:before {
    background: url('../../../../images/heart-icon.png') no-repeat center center/contain;
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    bottom: 0;
    width: 18px;
    height: 18px;
  }
  @include tab {
    font-size: 1.8rem;
    letter-spacing: .2em;
    padding: 0;
    padding-left: 32px;
    &:before {
      top: -8px;
      width: 32px;
      height: 32px;
    }
  }
  @include pc {
    font-size: 1.6rem;
    display: flex;
    padding-left: 28px;
    align-items: center;
    &:before {
      top: 0;
      margin: auto;
      width: 28px;
      height: 28px;
    }
  }
}
</style>