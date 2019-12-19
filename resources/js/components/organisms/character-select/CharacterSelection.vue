<template>
  <section class="character-selection">
    <section-title>キャラクターを選んでね</section-title>

    <div class="character-wrapper">
      <character-panels></character-panels>

      <div class="character-select-btns">
        <character-select-btn
          :class-name="{ inactive: startCharacterNum === 0 }"
          :character-select="prevCharacter"
        >
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </character-select-btn>

        <character-select-btn
          :class-name="{ inactive: characterList.length === endCount }"
          :character-select="nextCharacter"
        >
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </character-select-btn>
      </div>

      <character-description></character-description>

      <attention-comment>ランキング機能はログインユーザーが表示されます。</attention-comment>

    </div>

    <character-big-icon></character-big-icon>

    <character-ok-btn
      :mediaOn="'sp-tab-on'"
     ></character-ok-btn>
      
    <confirmation-display>
      <character-confirmation slot="contents"></character-confirmation>
    </confirmation-display>
  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
import CharacterPanels from '../../molecules/character-select/CharacterPanels.vue'
import CharacterSelectBtn from '../../atoms/character-select/CharacterSelectBtn.vue'
import CharacterDescription from '../../organisms/character-select/CharacterDescription.vue'
import AttentionComment from '../../atoms/common/AttentionComment.vue'
import CharacterBigIcon from '../../molecules/character-select/CharacterBigIcon.vue'
import CharacterOkBtn from '../../atoms/character-select/CharacterOkBtn.vue'
import ConfirmationDisplay from '../../organisms/common/ConfirmationDisplay.vue'
import CharacterConfirmation from '../../molecules/character-select/CharacterConfirmation.vue'
export default {
  components: {
    SectionTitle,
    CharacterPanels,
    CharacterSelectBtn,
    CharacterDescription,
    AttentionComment,
    CharacterBigIcon,
    CharacterOkBtn,
    ConfirmationDisplay,
    CharacterConfirmation
  },
  created() {
    this.getCharacterList()
  },
  computed: {
    startCharacterNum() {
      return this.$store.state.characterSelect.startCharacterNum
    },
    endCount() {
      return this.$store.state.characterSelect.endCount
    },
    characterList() {
      return this.$store.state.characterSelect.characterList
    }
  },
  methods: {
    getCharacterList() {
      this.$store.dispatch('characterSelect/getCharacterList')
    },
    nextCharacter() {
      if (this.characterList.length === this.endCount) {
        return
      } else {
        this.$store.commit('characterSelect/nextCharacter')
      }
    },
    prevCharacter() {
      if (this.startCharacterNum === 0) {
        return
      } else {
        this.$store.commit('characterSelect/prevCharacter')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-selection {
  .character-wrapper {
    margin-bottom: 30px;
    .character-select-btns {
      margin-bottom: 20px;
    }
  }

  @include tab {
    .character-wrapper {
      margin-bottom: 60px;
    }
  }
  @include pc {
    display: flex;
    flex-flow: row wrap;
    flex-direction: row-reverse;
    justify-content: space-between;
    .character-wrapper {
      margin-bottom: 0;
      width: 480px;
      .character-select-btns {
        margin-bottom: 30px;
      }
    }
  }
}
</style>