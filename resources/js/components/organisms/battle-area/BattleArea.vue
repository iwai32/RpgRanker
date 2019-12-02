<template>
  <section class="battle-area">
    <section-title>{{ battleMonsterData.name }}</section-title>

    <!-- モンスターエリア -->
    <battle-monster-con></battle-monster-con>
    
    <!-- ログ -->
    <battle-log></battle-log>

    <!-- キャラクター情報 -->
    <battle-character></battle-character>

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
import BattleMonsterCon from '../../molecules/battle-area/BattleMonsterCon.vue'
import BattleLog from '../../atoms/battle-area/BattleLog.vue'
import BattleCharacter from '../../organisms/battle-area/BattleCharacter.vue'
import ConfirmationDisplay from '../../organisms/common/ConfirmationDisplay.vue'
import RecoveryConfirmation from '../../molecules/battle-area/RecoveryConfirmation.vue'
export default {
  components: {
    SectionTitle,
    BattleMonsterCon,
    BattleLog,
    BattleCharacter,
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
      this.$store.dispatch('battleArea/setCharacterHp')
    },
    setIndexRandomMonster() {
      this.$store.dispatch('battleArea/setIndexRandomMonster')
    },
    setMonsterHp() {
      this.$store.dispatch('battleArea/setMonsterHp')
    },
    //遷移時一度データをリセットする
    resetData() {
      this.$store.dispatch('battleArea/resetData')
    }
  }
}
</script>