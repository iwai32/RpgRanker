<template>
  <li class="battle-character__skill"
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
  &:last-child{
    margin-bottom: 0;
  }
}
</style>