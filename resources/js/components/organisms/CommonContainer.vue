<template>
  <div class="container">
    <section class="character-selection">
      <section-title>キャラクターを選んでね</section-title>
      <!-- <character-panels></character-panels> -->
      <ul class="character-panels">
        <li class="character-panel"
        v-for="character in characterDisplayNumber"
        :key="character.id"
        :id="'character' + toPascalCase(character.pass)"
        :class="{ 'character-panel__active': character.id === characterId }"
        @click="selectedCharacter(character.id)"
        >
          <img :src="'../../../images/' + character.pass + '.png'" 
            :alt="character.name" class="character-img">
        </li>
      </ul><!-- .character-panels-->

      <div class="character-select-btns">
        <button class="character-select-btn"
          @click="prevCharacter"
          :class="{ inactive: startCharacterNum === 0 }"
        >
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </button>

        <button class="character-select-btn"
          @click="nextCharacter"
          :class="{ inactive: endCount === characterList.length }"
        >
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </button>
      </div>

      <div class="character-description"
      >
        <h3 class="character-name">{{ characterList[keyForCharacterId].name }}</h3>
        <div class="character-details profile">
          <h4 class="character-details__title">profile</h4>
          <p class="character-details__txt">{{ characterList[keyForCharacterId].profile }}</p>
        </div>

        <div class="character-details skill">
          <h4 class="character-details__title">skill</h4>
          <ul class="character-skill">
            <li class="character-skill__list"
              v-for="(skill, key) in characterList[keyForCharacterId].skills"
              :key="key"
            >{{ skill }}</li>
          </ul>
        </div>
      </div>
      <span class="notes">※ランキング機能はログインユーザーのみ使用できます。</span>
      <button
        class="confirm-btn"
        @click="openConfirmationDisplay"
      >OK
      </button>

      <transition name="confirmation-display">
        <div class="overlay"
          v-show="showConfirmationDisplay"
        >
          <div class="character-confirmation">
            <p class="character-confirmation__name">
              {{ characterList[keyForCharacterId].name }}にしますか？
            </p>
            <div class="character-confirmation__btns">
              <button
                class="character-confirmation__btn character-confirmation__btn--yes"
              >yes
              </button>
              <button
                class="character-confirmation__btn character-confirmation__btn--no"
                @click="closeConfirmationDisplay"
              >no
              </button>
            </div>
          </div>
        </div>
      </transition>
      
    </section>
  </div>
</template>

<script>
import SectionTitle from '../atoms/SectionTitle.vue'
import CharacterPanels from '../molecules/CharacterPanels.vue'
export default {
  components: {
    SectionTitle,
    CharacterPanels
  },
  data() {
    return {
      characterId: 1,
      startCharacterNum: 0,
      endCount: 3,
      showConfirmationDisplay: false
    }
  },
  computed: {
    toPascalCase() {
      return function(string) {
        var upperCase = string.charAt().toUpperCase()
        var otherString = string.substring(1)
        var mergedString = ''

        if (string.includes('-')) {
          var divided_strings = string.split('-')
          for(var i = 0; i < divided_strings.length; i++) {
            mergedString += divided_strings[i].charAt().toUpperCase()
            + divided_strings[i].substring(1)
          }
        } else {
          mergedString = upperCase + otherString
        }
        return mergedString
      }
    },
    characterDisplayNumber() {
      return this.characterList.slice(this.startCharacterNum, this.endCount)
    },
    characterList() {//キャラクターリスト
      return this.$store.state.characterList
    },
    keyForCharacterId() {
      return this.characterId -1
    }
  },
  methods: {
    selectedCharacter(characterId) {
      this.characterId = characterId
    },
    nextCharacter() {
      if (this.characterList.length === this.endCount) {
        return
      } else {
        this.startCharacterNum++
        this.endCount++
        return this.characterList.slice(this.startCharacterNum, this.endCount)
      }
    },
    prevCharacter() {
      if (this.startCharacterNum === 0) {
        return
      } else {
        this.startCharacterNum--
        this.endCount--
        return this.characterList.slice(this.startCharacterNum, this.endCount)
      }
    },
    openConfirmationDisplay() {
      this.showConfirmationDisplay = true
    },
    closeConfirmationDisplay() {
      this.showConfirmationDisplay = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #dddccc;
  box-shadow:0px 0px 4px 2px #BE9960
  ,0px 0px 4px 2px #BE9960 inset;
  border-radius: 2px;
  padding: 10px;
  width: 96%;
  margin-bottom: 30px;
}
//テスト用

.character-panels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.character-panel {
  box-shadow: 0 0 1px 1px #b79532;
  border-radius: 2px;
  width: 30%;
  &__active {
    box-shadow: 0 0 2px 2px darken(#b79532, 10%);
  }
}

.character-select-btns {
  margin-bottom: 20px;
}

.character-select-btn {
  font-size: 2.4rem;
}

.inactive {
  color: #666666;
}

.character-description {
  margin-bottom: 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  letter-spacing: .08em;
  line-height: 1.5;
  padding: 10px;
}

.character-name {
  background: lighten(#5C3D22, 10%);
  border-radius: 2px;
  color: #eeeeee;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  padding: 5px;
}

.character-details {
  box-shadow: 0 0 1px 1px #b79532;
  border-radius: 1px;
  margin-bottom: 30px;
  padding-top: 5px;
  position: relative;
  & + & {
    margin-bottom: 0;
  }
}

.character-details__title {
  background: #b79532;
  border-radius: 2px;
  color: #eeeeee;
  padding: 2px 5px;
  position: absolute;
  top: 0;
  left: -1px;
  transform: translateY(-50%);
}

.character-details__txt {
  color: #444444;
  padding: 10px 5px 5px;
}

.character-skill {
  color: #444444;
  font-size: 1.4rem;
  padding: 10px 5px 5px;
  &__list {
    padding: 2px;
  }
}

.notes {
  color: #444444;
  display: block;
  text-align: right;
  font-size: 1rem;
  margin-bottom: 20px;
}

.confirm-btn {
  background: #a66e3e;
  border-radius: 8px;
  color: #eeeeee;
  display: block;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  width: 40%;
}

//モーダルウィンドウ
.confirmation-display-enter-active,
.confirmation-display-leave-active {
  transition: opacity .2s;
}

.confirmation-display-enter,
.confirmation-display-leave-to {
  opacity: 0;
}

.overlay {
  background: rgba(0,0,0,0.2);
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
}

.character-confirmation {
  background: #a66e3e;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  letter-spacing: .1em;
  width: 70%;
  height: 120px;
  &__name {
    color: #eeeeee;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
  }
  &__btns {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  &__btn {
    border-radius: 2px;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: .1em;
    padding: 4px 20px;
    &--yes {
      background: #b79532;
      color: #815630;
    }
    &--no {
      background: #815630;
      color: #eeeeee;
    }
  }
}
</style>