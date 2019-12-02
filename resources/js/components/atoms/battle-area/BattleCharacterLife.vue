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
.battle-character-life {
  color: #ffffff;
  font-size: 3.2vw;
  position: relative;
  padding: 6px 0 0 16px;
  text-shadow: 2px 1px 1px #222;
  letter-spacing: .08em;
  &:before {
    background: url('../../../../images/heart-icon.png') no-repeat center center/contain;
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    bottom: 0;
    width: 18px;
    height: 18px;
  }
}
</style>