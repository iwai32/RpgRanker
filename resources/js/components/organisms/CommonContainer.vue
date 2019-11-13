<template>
  <div class="container">
    <section class="character-selection">
      <section-title>キャラクターを選んでね</section-title>
      
      <character-panels></character-panels>
      
      <div class="character-select-btns">
        <character-select-btn
          :class-name="{ inactive: startCharacterNum === 0 }"
          :character-select="prevCharacter"
        >
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </character-select-btn>

        <character-select-btn
          :class-name="{ inactive: endCount === characterList.length }"
          :character-select="nextCharacter"
        >
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </character-select-btn>
      </div>
      
      <character-description></character-description>

      <attention-comment>
        ※ランキング機能はログインユーザーのみ使用できます。
      </attention-comment>

      <character-ok-btn></character-ok-btn>
      
      <confirmation-display>
        <character-confirmation slot="contents"></character-confirmation>
      </confirmation-display>

    </section>
  </div>
</template>

<script>
import SectionTitle from '../atoms/SectionTitle.vue'
import CharacterPanels from '../molecules/CharacterPanels.vue'
import CharacterSelectBtn from '../atoms/CharacterSelectBtn.vue'
import CharacterDescription from '../organisms/CharacterDescription.vue'
import AttentionComment from '../atoms/AttentionComment.vue'
import CharacterOkBtn from '../atoms/CharacterOkBtn.vue'
import ConfirmationDisplay from '../organisms/ConfirmationDisplay.vue'
import CharacterConfirmation from '../molecules/CharacterConfirmation.vue'
export default {
  components: {
    SectionTitle,
    CharacterPanels,
    CharacterSelectBtn,
    CharacterDescription,
    AttentionComment,
    CharacterOkBtn,
    ConfirmationDisplay,
    CharacterConfirmation
  },
  computed: {
    characterId() {
      return this.$store.state.characterId
    },
    startCharacterNum() {
      return this.$store.state.startCharacterNum
    },
    endCount() {
      return this.$store.state.endCount
    },
    characterList() {
      return this.$store.state.characterList
    }
  },
  methods: {
    nextCharacter() {
      if (this.characterList.length === this.endCount) {
        return
      } else {
        this.$store.dispatch('nextCharacter')
        this.characterList.slice(this.startCharacterNum, this.endCount)
      }
    },
    prevCharacter() {
      if (this.startCharacterNum === 0) {
        return
      } else {
        this.$store.dispatch('prevCharacter')
        this.characterList.slice(this.startCharacterNum, this.endCount)
      }
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

.character-select-btns {
  margin-bottom: 20px;
}
</style>