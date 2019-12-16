<template>
  <!-- ノーマルスキル -->
  <ul class="battle-character-skills">
    <battle-character-normal-skill
      v-for="(skill, key) in skills"
      :key="key"
      :name="skill.name"
      :power="skill.power"
      :attribute="skill.attribute"
    >
    </battle-character-normal-skill>

    <battle-character-heal-skill></battle-character-heal-skill>
  </ul>
</template>

<script>
import BattleCharacterNormalSkill from '../../atoms/battle-area/BattleCharacterNormalSkill.vue'
import BattleCharacterHealSkill from '../../atoms/battle-area/BattleCharacterHealSkill.vue'
export default {
  components: {
    BattleCharacterNormalSkill,
    BattleCharacterHealSkill
  },
  data() {
    return {
      skills: []
    }
  },
  mounted() {
    if(this.battleCharacterData){
      this.fetchNormalSkills()
    }
  },
  watch: {
    battleCharacterData() {
      this.fetchNormalSkills()
    }
  },
  computed: {
    battleCharacterData() {
      return this.$store.getters['battleArea/battleCharacterData']
    }
  },
  methods: {
    fetchNormalSkills() {
      if(this.battleCharacterData.skills) {
        this.skills = this.battleCharacterData.skills
            .filter( function(skill) {
                return skill.type === 'normal'
            })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-character-skills {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 5px 0 5px 10px;
  width: 68%;
  @include tab {
    padding: 10px;
    width: 350px;
  }
  @include pc {
    padding: 0;
    width: 340px;
  }
}
</style>