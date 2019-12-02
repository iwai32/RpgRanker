<template>
  <section class="battle-result">
    <section-title>RESULT</section-title>

    <p class="result-message">
      {{ resultMessage }}
    </p>

    <div class="score-wrapper">
      <h3 class="title">SCORE</h3>

      <div class="user-data">
        <p class="character-icon">
          <img
            :src="'../../../../images/' + characterData.pass + '.png'"
            :alt="characterData.name">
        </p>
        <p class="user-name">{{ resultData.userName }}</p>
      </div>

      <ul class="total-data">
        <li class="list monster-count">{{ monsterCount }}</li>
        <li class="list turn">Turn<span>{{ resultData.totalTurn }}</span></li>
        <li class="list damage">Damage<span>{{ resultData.totalDamage }}</span></li>
      </ul>
    </div>

    <ul class="battle-result__next-nav">
      <li class="link">
        <router-link class="anchor" :to="'/game/battle/' + resultData.characterIndex"><!-- バトルエリアで渡したキャラクターのパラメーターを渡す -->
          Retry
        </router-link>
      </li>

      <li class="link">
        <router-link class="anchor" :to="'/game/character-selection'">
          CharacterSelect
        </router-link>
      </li>

      <li class="link">
        <router-link class="anchor" :to="'/game/ranking'">
          Ranking
        </router-link>
      </li>
    </ul>

  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  },
  computed: {
    characterData() {
      return this.$store.state.characterSelect.characterList[this.resultData.characterIndex]
    },
    resultData() {
      return this.$route.query
    },
    resultMessage() {
      if (this.resultData.monsterCount == 5) {
        return 'おめでとう！サタンをやっつけた！'
      } else {
        return 'オレたちの戦いはこれからだ！'
      }
    },
    monsterCount() {
      if (this.resultData.monsterCount == 5) {
        return '魔王討伐'
      } else {
        return this.resultData.monsterCount + '体討伐'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.result-message {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
}

.score-wrapper {
  box-shadow: 0 0 1px 1px #b79532;
  border-radius: 1px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 10px;
  .title {
    color: #e0cb8e;
    font-size: 2.8rem;
    text-align: center;
    letter-spacing: .05em;
    margin-bottom: 10px;
    -webkit-text-stroke: 1px #b9875d;
    text-shadow: 1px 2px 2px #b9875d;
    width: 100%;
  }

  .user-data {
    width: 26%;
    .character-icon {
      border-radius: 50%;
      box-shadow: 0 0 2px 2px #b79532;
      overflow: hidden;
      margin-bottom: 10px;
    }
    .user-name {
      font-size: 1.4rem;
      text-align: center;
    }
  }

  .total-data {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 60%;
    .list {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      line-height: 1.5;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .monster-count {
      color: #7b2cd6;
      font-size: 4rem;
      font-weight: bold;
      letter-spacing: .05em;
      text-align: center;
      -webkit-text-stroke: 1px #444;
      text-shadow: 1px 2px 2px #444;
      margin-bottom: 10px;
      white-space: nowrap;
    }
  }
}

.battle-result__next-nav {
  width: 200px;
  margin: 0 auto;
  .link {
    background: #a66e3e;
    border: 2px solid #666666;
    border-radius: 4px;
    font-size: 1.8rem;
    margin-bottom: 10px;
    text-align: center;
    &:last-child {
      margin-bottom: 0;
    }
    .anchor {
      color: #eeeeee;
      display: block;
      letter-spacing: 0.1em;
      padding: 5px;
    }
  }
}
</style>