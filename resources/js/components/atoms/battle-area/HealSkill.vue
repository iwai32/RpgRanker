<template>
  <li class="battle-character-skill"
    :class="{ inactive: recoveryUseTimes === 0 }"
    @click="openConfirmationDisplay()"
  >回復
  </li>
</template>

<script>
export default {
  computed: {
    recoveryUseTimes() {
      return this.$store.state.battleArea.recoveryUseTimes
    }
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
.battle-character-skill {
  background: linear-gradient($main-color 30%, $accent-color);
  border: 1px solid $contents-color;
  border-radius: 10px;
  box-shadow: 0 0 0 1px $text-color,
   0 0 0 1px $text-color inset;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: .08em;
  font-size: 3.4vw;
  margin-bottom: 10px;
  padding: 8px 5px;
  text-shadow: 2px 1px 1px $text-color;
  width: 46%;
  white-space: nowrap;
  &:hover {
    opacity: .8;
  }
  &.inactive {
    background: linear-gradient($contents-color 30%, $text-color);
  }

  @include tab {
    font-size: 2rem;
    padding: 16px 5px;
    margin-bottom: 20px;
  }

  @include pc {
    font-size: 1.6rem;
    margin-bottom: 0;
    padding: 12px 5px;
    width: 210px;
  }
}
</style>