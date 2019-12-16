<template>
  <li class="battle-character-skill"
    @click="useSkill(name, power, attribute)"
  >{{ name }}
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    attribute: String,
    power: Number
  },
  methods: {
    useSkill(skillName, damage, attribute) {
      this.increaseGauge()
      this.myAttack(skillName, damage, attribute)
      this.showSkillEffect(attribute)
    },
    //ゲージ増加
    increaseGauge() {
      this.$store.dispatch('battleArea/increaseGauge')
    },
    //自分の攻撃
    myAttack(skillName, damage, attribute) {
      this.$store.dispatch('battleArea/myAttack', {
        skillName: skillName,
        damage: damage,
        attribute: attribute
        })
    },
    showSkillEffect(attribute) {
      this.$store.dispatch('battleArea/showSkillEffect', attribute)
    },

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
  &:last-child{
    margin-bottom: 0;
  }

  @include tab {
    font-size: 2rem;
    padding: 16px 5px;
    margin-bottom: 20px;
  }

  @include pc {
    font-size: 1.6rem;
    width: 160px;
    padding: 12px 5px;
    &:nth-child(n + 3) {
      margin-bottom: 0;
    }
  }
}
</style>