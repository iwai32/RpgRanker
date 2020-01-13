<template>
  <section class="battle-area">
    <section-title>{{ battleMonsterData.name }}</section-title>

    <!-- モンスターエリア -->
    <battle-container></battle-container>
    
    <!-- 回復確認 -->
    <confirmation-display
      v-if="recoveryUseTimes > 0"
    >
      <recovery-confirmation slot="contents"></recovery-confirmation>
    </confirmation-display>

  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
import BattleContainer from '../../molecules/battle-area/BattleContainer.vue'
import ConfirmationDisplay from '../../organisms/common/ConfirmationDisplay.vue'
import RecoveryConfirmation from '../../molecules/battle-area/RecoveryConfirmation.vue'
export default {
  components: {
    SectionTitle,
    BattleContainer,
    ConfirmationDisplay,
    RecoveryConfirmation
  },
  created() {
    this.getBattleCharacterData()
    this.getRandomMonster()
    this.resetData()
  },
  watch: {
    battleMonsterData() {
      if (this.battleMonsterData === null) {
        this.setRandomBattleMonster()
      }
      this.setMonsterHp()
    }
  },
  computed: {
    battleMonsterData() {
      return this.$store.state.battleArea.battleMonsterData
    },
    recoveryUseTimes() {
      return this.$store.state.battleArea.recoveryUseTimes
    }
  },
  methods: {
    getBattleCharacterData() {
      this.$store.dispatch('battleArea/getBattleCharacterData')
    },
    getRandomMonster() {
      this.$store.dispatch('battleArea/getRandomMonster')
    },
    setRandomBattleMonster() {
      this.$store.commit('battleArea/setRandomBattleMonster')
    },
    setMonsterHp() {
      this.$store.commit('battleArea/setMonsterHp')
    },
    resetData() {
      this.$store.commit('battleArea/resetData')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-area {
  @include tab {
    padding: 20px;
  }
    @include pc {
    padding: 0;
  }
}
</style>