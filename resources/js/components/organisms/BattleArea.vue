<template>
  <section class="battle-area">
    <section-title>{{ battleMonsterData.name }}</section-title>

    <!-- モンスターエリア -->
    <div class="battle-monster-con"
      :style="`background: url('../../../images/${battleMonsterData.field}.jpg') no-repeat center center/cover;`"
    >

      <p class="battle-monster">
        <img
          :class="{ 'battle-monster__motion': monsterMotion } "
          :src="'../../../images/' + battleMonsterData.pass + '.png'"
          :alt="battleMonsterData.name">
      </p>
    </div>
    <p>hp {{ monsterHp }}</p><!--モンスターのhpデバッグ-->

    <!-- ログ -->
    <p class="battle-log"
      id="battleLog"
      v-html="battleLog"
    >
    </p>


    <!-- キャラクター情報 -->
    <div class="battle-character">
      <div class="battle-character__state">

        <!-- 円グラフ -->
        <svg class="sp-skill-guage" viewBox="0 0 63.6619772368 63.6619772368">
          <circle class="sp-skill-guage__circle" cx="31.8309886184" cy="31.8309886184" r="15.9154943092" fill="rgba(0,0,0,0)"
            stroke="#35c77c" stroke-width="31.8309886184"
            stroke-dashoffset="25"
            :stroke-dasharray="spSkillGaugeCircle + ',' + remainingSpSkillGaugeCircle">
          </circle>
        </svg>

        <p class="battle-character__icon">
          <img
            :src="'../../../images/'+ battleCharacterData.pass +'.png'"
            :alt="battleCharacterData.name">
        </p>

        <p class="sp-skill-active"
          v-if="hasSpSkill"
          @click="useSpSkill(characterSpSkill[0].name, characterSpSkill[0].power, characterSpSkill[0].attribute)"
        >
          <img src="../../../images/sp-skill-active.png" alt="必殺技発動">
        </p>

        <p class="battle-character__life">
          {{ battleCharacterData.hp }}/{{ characterHp }}
        </p>
      </div>

      <ul class="battle-character__skills">
        <li class="battle-character__skill"
          v-for="(skill, key) in characterNormalSkill"
          :key="key"
          @click="useSkill(skill.name, skill.power, skill.attribute)">{{ skill.name }}
        </li>
        <li class="battle-character__skill heal"
          @click="openConfirmationDisplay()">回復</li>
      </ul>
    </div>

    <confirmation-display>
      <recovery-confirmation slot="contents"></recovery-confirmation>
    </confirmation-display>

    <div class="skill-effect-display"
      v-if="skillTrigger"
    >
      <p class="skill-effect">
        <img 
          :src="'../../../images/' + skillEffectAttribute + '.gif'" 
          alt="スキルのエフェクト"
        >
      </p>
    </div>
  </section>
</template>

<script>
import SectionTitle from '../atoms/common/SectionTitle.vue'
import ConfirmationDisplay from '../organisms/common/ConfirmationDisplay.vue'
import RecoveryConfirmation from '../molecules/RecoveryConfirmation.vue'
export default {
  components: {
    SectionTitle,
    ConfirmationDisplay,
    RecoveryConfirmation
  },
  data() {
    return {
      battleLog: '',
      characterHp: "",
      monsterHp: "",
      monsterMotion: false,
      skillTrigger: false,
      skillEffectAttribute: "",
      spSkillGaugeCircle: 0,
      maxSpSkillGaugeCircle: 100,
      hasSpSkill: false,
      recoveryUseTimes: 5,
      totalTurn: 0,
      totalDamage: 0,
      totalMonsterCount: 0
    }
  },
  mounted: function() {
    this.getIndexRandomMonster()
    this.characterHp = this.battleCharacterData.hp
    this.monsterHp = this.battleMonsterData.hp
    this.battleLog = this.battleMonsterData.name + 'があらわれた！<br>'
  },
  watch: {
    battleLog() {
      this.showNewBattleLog()
    }
  },
  computed: {
    characterIndex() {
      return this.$route.params.characterIndex
    },
    characterList() {
      return this.$store.state.characterSelect.characterList
    },
    battleCharacterData() {
      return this.characterList[this.characterIndex]
    },
    remainingSpSkillGaugeCircle() {
      return this.maxSpSkillGaugeCircle - this.spSkillGaugeCircle
    },
    characterSpSkill() {
      return this.battleCharacterData.skills
        .filter( function(skill) {
          return skill.type === 'special'
        })
    },
    characterNormalSkill() {
      return this.battleCharacterData.skills
        .filter( function(skill) {
          return skill.type === 'normal'
        })
    },
    //モンスター
    monsterList() {
      return this.$store.state.battleArea.monsterList
    },
    monsterIndex() {
      return this.$store.state.battleArea.monsterIndex
    },
    battleMonsterData() {
      return this.monsterList[this.monsterIndex]
    }
  },
  methods: {
    // バトルログ
    addBattleLog(log) {
      this.battleLog += log + '<br>'
    },
    showNewBattleLog() {
      const battleLog = document.getElementById('battleLog')
      battleLog.scrollTop = battleLog.scrollHeight
    },
    //SPスキル
    useSpSkill(skillName, damage, attribute) {
      this.myAttack('必殺！' + skillName, damage, attribute)
      this.showSkillEffect('sp-' + attribute)
      this.detachSpSkill()
    },
    attachSpSkill() {
      this.hasSpSkill = true
    },
    detachSpSkill() {
      this.spSkillGaugeCircle = 0
      this.hasSpSkill = false
    },
    //スキル
    useSkill(skillName, damage, attribute) {
      this.increaseGauge()
      this.myAttack(skillName, damage, attribute)
      this.showSkillEffect(attribute)
    },
    //スキルのエフェクト
    showSkillEffect(attribute) {
      this.skillTrigger = true
      this.skillEffectAttribute = attribute
      
      setTimeout(this.resetEffect, 1000)
      //１秒後に敵の攻撃
      setTimeout(this.enemyAttack, 1000)
    },
    //gif画像のループ処理をリセットする
    resetEffect() {
      this.skillEffectAttribute = ""
    },
    //ゲージ増加
    increaseGauge() {
      this.characterGaugeFilter()
      if (this.spSkillGaugeCircle >= this.maxSpSkillGaugeCircle) {
        this.spSkillGaugeCircle = this.maxSpSkillGaugeCircle
        this.attachSpSkill()
      }
    },
    //勇者なら8ターン
    characterGaugeFilter() {
      if (this.battleCharacterData.name === '勇者') {
        this.spSkillGaugeCircle += this.maxSpSkillGaugeCircle / 8
      } else {
        this.spSkillGaugeCircle += this.maxSpSkillGaugeCircle / 5
      }
    },
    //自分の攻撃
    myAttack(skillName, damage, attribute) {
      var damageResult = this.damageCalculation(damage, attribute)
      this.addBattleLog(skillName + '！' +this.battleMonsterData.name + 'に' + damageResult + 'のダメージ！')
      //モンスターのhpを引く、0ならモンスターを倒したと表示する,討伐数を増やす,次のモンスターを表示する
      this.reduceMonsterHp(damageResult)
      //データの集計
      this.getTotalData(damageResult)
    },
    //ダメージ計算
    damageCalculation(damage, attribute){
      //モンスターの弱点を計算
      if (this.battleMonsterData.weak.includes(attribute)) {
        return damage * 2
      }
      //攻撃にランダム性を与える
      return damage + Math.floor(Math.random() * 10)
    },
    //モンスターのHPを減らす
    reduceMonsterHp(damageResult) {
      this.monsterHp -= damageResult
      if (this.monsterHp <= 0) {
        this.addBattleLog(this.battleMonsterData.name + 'を倒した！')
        setTimeout(this.nextMonster, 1000)
        if (this.totalMonsterCount === 5) {
          console.log('サタンを倒した!!!!')//リダイレクト
        }
        //討伐数を一増やす,次のモンスターを表示する五体倒してるならリダイレクト
        console.log('モンスター討伐数' + this.totalMonsterCount)
      }
    },
    //次のモンスターを出現させる
    nextMonster() {
      //4体をランダムで出現させ、討伐数が4なら魔王を出現させる。
      this.totalMonsterCount++
      if (this.totalMonsterCount === 4) {
        this.$store.dispatch('battleArea/descendSatan')
      } else {
        this.getIndexRandomMonster()
      }
      this.battleLog += this.battleMonsterData.name + 'があらわれた！<br>'
      this.monsterHp = this.battleMonsterData.hp
    },
    getIndexRandomMonster() {
      this.$store.dispatch('battleArea/getIndexRandomMonster')
    },
    //回復
    toRecover() {
      this.$store.dispatch('commonModule/closeConfirmationDisplay')
      console.log('ヒール')
      //回復の確認画面を開く。最大使用回数は5回で、使うごとに減らしていく。
      //キャラクターを回復させる。最大hpを超えたら、そのhp以上にならないようにする。ターンを増加させる。
      this.increaseGauge()
      this.recoveryUseTimes--
      this.characterHp = this.battleCharacterData.hp
      this.addBattleLog(`${this.battleCharacterData.name}はHPを回復した！`)
      this.getTotalData(0)
    },
    openConfirmationDisplay() {
      this.$store.dispatch('commonModule/openConfirmationDisplay')
    },
    //敵の攻撃
    enemyAttack() {
      var monsterSkill = this.battleMonsterData.skills[ Math.floor(Math.random() * this.battleMonsterData.skills.length)]
      var damage = monsterSkill.power
      var damageResult = this.damageCalculation(damage)

      //自身のエフェクトウィンドウを閉じる
      this.skillTrigger = false

      //登場時は攻撃しない
      if (this.monsterHp === this.battleMonsterData.hp) {
        return
      } else {
        this.monsterMotion = true
        setTimeout(this.removeMonsterMotion,300)
        
        //モンスターは攻撃をランダムで使用する
        this.addBattleLog(`${this.battleMonsterData.name}の${monsterSkill.name}！<br>${this.battleCharacterData.name}は${damageResult}のダメージをうけた！`)
        //自身のhpを引く、0以下になったら,負けてしまったと表示し、result画面へ遷移する
        this.characterHp -= damageResult
      }

      if (this.characterHp <= 0) {
        this.characterHp = 0
        console.log('負けてしまった')
      }
    },
    removeMonsterMotion() {
      this.monsterMotion = false
    },
    //合計データ、あとでDBに保存する用
    getTotalData(damageResult) {
      this.totalTurn++
      this.totalDamage += damageResult
      console.log(this.totalTurn, this.totalDamage)
    }
  }
}
</script>

<style lang="scss" scoped>

.battle-monster-con {
  border: 2px solid #E0CB8E;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #222;
  height: 200px;
  margin: 0 auto 30px;
  position: relative;
}

.battle-monster {
  text-align: center;
  max-width: 200px;
  height: max-content;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  &__motion {
    animation: enemy-motion .1s  infinite;
  }

  @keyframes enemy-motion {
    0% { transform: translate(0px, 0px) rotateZ(0deg) }
    25% { transform: translate(2px, 2px) rotateZ(1deg) }
    50% { transform: translate(0px, 2px) rotateZ(0deg) }
    75% { transform: translate(2px, 0px) rotateZ(-1deg) }
    100% { transform: translate(0px, 0px) rotateZ(0deg) }
  }
}

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

.battle-character {
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #dddccc;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #222,
  0 0 0 1px #222 inset;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  &__state {
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
      background: url('../../../images/heart-icon.png') no-repeat center center/contain;
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

  &__skills {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    padding: 5px 0 5px 10px;
    width: 68%;
  }
  &__skill {
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
    & + & + & {
      margin-bottom: 0;
    }
  }
}

.skill-effect-display {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.skill-effect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  position: absolute;
  top: -200px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>