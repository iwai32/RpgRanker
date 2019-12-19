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
    },
    monsterHp() {
      if (this.monsterHp === this.battleMonsterData.hp) {
        this.monsterPopLog()
      }
    }
  },
  computed: {
    battleLog() {
      return this.$store.state.battleArea.battleLog
    },
    battleMonsterData() {
      return this.$store.state.battleArea.battleMonsterData
    },
    monsterHp() {
      return this.$store.state.battleArea.monsterHp
    }
  },
  methods: {
    scrollNewBattleLog() {
      const battleLog = document.getElementById('battleLog')
      battleLog.scrollTop = battleLog.scrollHeight
    },
    monsterPopLog() {
      this.$store.commit('battleArea/addBattleLog', this.battleMonsterData.name + 'があらわれた！')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-log {
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid $contents-color;
  border-radius: 8px;
  box-shadow: 0 0 0 1px $text-color,
  0 0 0 1px $text-color inset;
  color: $white;
  line-height: 1.5;
  letter-spacing: .05em;
  overflow-y: auto;
  padding: 10px 10px 45px;
  text-shadow: 2px 1px 1px $text-color;
  margin-bottom: 10px;
  height: 68px;
  @include tab {
    border: none;
    font-size: 1.4rem;
    height: 100px;
    padding: 16px 16px 50px;
    box-shadow: 0 0 0 1px $white,
    0 0 0 1px $white inset;
    line-height: 1.8;
    margin-bottom: 20px;
  }
}
</style>