<template>
  <p class="battle-log" id="battleLog"
    v-html="battleLog"
  >
  </p>
</template>

<script>
export default {
  watch: {
    battleLog() {
      this.scrollNewBattleLog()
    }
  },
  mounted: function() {
    this.firstMonsterAppearanceLog
  },
  computed: {
    battleLog() {
      return this.$store.state.battleArea.battleLog
    },
    firstMonsterAppearanceLog() {
      return this.$store.getters['battleArea/firstMonsterAppearanceLog']
    }
  },
  methods: {
    scrollNewBattleLog() {
      const battleLog = document.getElementById('battleLog')
      battleLog.scrollTop = battleLog.scrollHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.battle-log {
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #dddccc;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #222,
  0 0 0 1px #222 inset;
  color: #ffffff;
  line-height: 1.5;
  letter-spacing: .05em;
  overflow-y: auto;
  padding: 10px 10px 45px;
  text-shadow: 2px 1px 1px #222;
  height: 68px;
  margin-bottom: 14px;
}
</style>