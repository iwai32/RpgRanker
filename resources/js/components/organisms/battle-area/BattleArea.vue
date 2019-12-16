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
    this.setCharacterIndex()
    this.setIndexRandomMonster()
    this.resetData()
  },
  mounted() {
    this.setCharacterHp()
    this.setMonsterHp()
  },
  computed: {
    battleMonsterData() {
      return this.$store.getters['battleArea/battleMonsterData']
    },
    recoveryUseTimes() {
      return this.$store.state.battleArea.recoveryUseTimes
    }
  },
  methods: {
    setCharacterIndex() {
      this.$store.dispatch('battleArea/setCharacterIndex')
    },
    setCharacterHp() {
      this.$store.commit('battleArea/setCharacterHp')
    },
    setIndexRandomMonster() {
      this.$store.commit('battleArea/setIndexRandomMonster')
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