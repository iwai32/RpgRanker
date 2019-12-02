<template>
  <li class="battle-character__skill"
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
      this.$store.dispatch('commonModule/openConfirmationDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>
.battle-character__skill {
  background: linear-gradient(#b9875d 30%, #7b5535);
  border: 1px solid #dddccc;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #222,
   0 0 0 1px #222 inset;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: .08em;
  font-size: 3.4vw;
  margin-bottom: 10px;
  padding: 8px 5px;
  text-shadow: 2px 1px 1px #222;
  width: 46%;
  white-space: nowrap;
  &:hover {
    opacity: .8;
  }
  &.inactive {
    background: linear-gradient(#babac4 30%, #444);
  }
}
</style>