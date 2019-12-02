<template>
  <!-- ノーマルスキル -->
  <ul class="battle-character__skills">
    <normal-skill
      v-for="(skill, key) in characterNormalSkill"
      :key="key"
      :name="skill.name"
      :power="skill.power"
      :attribute="skill.attribute"
    >
    </normal-skill>

    <heal-skill></heal-skill>
  </ul>
</template>

<script>
import NormalSkill from '../../atoms/battle-area/NormalSkill.vue'
import HealSkill from '../../atoms/battle-area/HealSkill.vue'
export default {
  components: {
    NormalSkill,
    HealSkill
  },
  computed: {
    battleCharacterData() {
      return this.$store.getters['battleArea/battleCharacterData']
    },
    characterNormalSkill() {
      return this.battleCharacterData.skills
        .filter( function(skill) {
          return skill.type === 'normal'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.battle-character__skills {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 5px 0 5px 10px;
  width: 68%;
}
</style>