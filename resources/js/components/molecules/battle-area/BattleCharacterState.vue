<template>
  <div class="battle-character__state">
      
    <!-- 円グラフ -->
      <svg class="sp-skill-guage" viewBox="0 0 63.6619772368 63.6619772368">
        <circle class="sp-skill-guage__circle" cx="31.8309886184" cy="31.8309886184" r="15.9154943092" fill="rgba(0,0,0,0)"
          stroke="#35c77c" stroke-width="31.8309886184"
          stroke-dashoffset="25"
          :stroke-dasharray="spSkillGaugeCircle + ',' + remainingSpSkillGaugeCircle">
        </circle>
      </svg>

      <!-- キャラアイコン -->
      <p class="battle-character__state__icon">
        <img
          :src="'../../../../images/'+ battleCharacterData.pass +'.png'"
          :alt="battleCharacterData.name">
      </p>

      <!-- 必殺技 -->
      <p class="sp-skill-active"
        v-if="hasSpSkill"
        @click="useSpSkill(characterSpSkill[0].name, characterSpSkill[0].power, characterSpSkill[0].attribute)"
      >
        <img src="../../../../images/sp-skill-active.png" alt="必殺技発動">
      </p>

      <p class="battle-character__state__life">
        {{ battleCharacterData.hp }}/{{ characterHp }}
      </p>
    </div>
</template>

<script>
export default {
  computed: {
    characterHp() {
      return this.$store.state.battleArea.characterHp
    },
    spSkillGaugeCircle() {
      return this.$store.state.battleArea.spSkillGaugeCircle
    },
    maxSpSkillGaugeCircle() {
      return this.$store.state.battleArea.maxSpSkillGaugeCircle
    },
    hasSpSkill() {
      return this.$store.state.battleArea.hasSpSkill
    },
    remainingSpSkillGaugeCircle() {
      return this.maxSpSkillGaugeCircle - this.spSkillGaugeCircle
    },
    battleCharacterData() {
      return this.$store.getters['battleArea/battleCharacterData']
    },
    characterSpSkill() {
      return this.battleCharacterData.skills
        .filter( function(skill) {
          return skill.type === 'special'
        })
    },
  },
  methods: {
    //SPスキル
    useSpSkill(skillName, damage, attribute) {
      this.myAttack('必殺！' + skillName, damage, attribute)
      this.showSkillEffect('sp-' + attribute)
      this.detachSpSkill()
    },
    //自分の攻撃
    myAttack(skillName, damage, attribute) {
      this.$store.dispatch('battleArea/myAttack', { skillName: skillName, damage: damage, attribute: attribute})
    },
    showSkillEffect(attribute) {
      this.$store.dispatch('battleArea/showSkillEffect', attribute)
    },
    detachSpSkill() {
      this.$store.dispatch('battleArea/detachSpSkill')
    },
  }
}
</script>

<style lang="scss" scoped>
.battle-character__state {
  background: linear-gradient(#b9875d 40%, #7b5535);
  border: 1px solid #dddccc;
  box-shadow: 0 0 0 1px #222,
   0 0 0 1px #222 inset;
  border-radius: 5px 5px 5px 20px;
  padding: 5px;
  position: relative;
  max-width: 144px;
  width: 30%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  &__icon {
    background: #777;
    border-radius: 50%;
    border: 1px solid #dddccc;
    box-shadow: 0 0 0 1px #222,
     0 0 0 1px #222 inset;
    overflow: hidden;
    text-align: center;
    position: absolute;
    top: -10px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 1;
    width: calc(100% - 20px);
    height: max-content;
  }


  .sp-skill-guage {
    border-radius: 50%;
    border: 1px solid #dddccc;
    box-shadow: 0 0 0 1px #222,
     0 0 0 1px #222 inset;
    position: absolute;
    top: -10px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 0;
    width: calc(100% - 10px);
    &__circle {
      transition: .4s;
    }
  }

  .sp-skill-active {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 2;
    animation: 2s infinite alternate sp-skill-on;
  }

  @keyframes sp-skill-on {
    from {
      opacity: 0;
    }

    to {
      opacity: .4;
    }
  }

  &__life {
    color: #ffffff;
    font-size: 3.4vw;
    position: relative;
    padding: 4px 0 0 16px;
    text-shadow: 2px 1px 1px #222;
    letter-spacing: .08em;
    &:before {
      background: url('../../../../images/heart-icon.png') no-repeat center center/contain;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 18px;
      height: 18px;
    }
  }
}
</style>