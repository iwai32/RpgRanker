<template>
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
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
import CharacterPanels from '../../molecules/character-select/CharacterPanels.vue'
import CharacterSelectBtn from '../../atoms/character-select/CharacterSelectBtn.vue'
import CharacterDescription from '../../organisms/character-select/CharacterDescription.vue'
import AttentionComment from '../../atoms/common/AttentionComment.vue'
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
    CharacterOkBtn,
    ConfirmationDisplay,
    CharacterConfirmation
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
    nextCharacter() {
      if (this.characterList.length === this.endCount) {
        return
      } else {
        this.$store.dispatch('characterSelect/nextCharacter')
        this.characterList.slice(this.startCharacterNum, this.endCount)
      }
    },
    prevCharacter() {
      if (this.startCharacterNum === 0) {
        return
      } else {
        this.$store.dispatch('characterSelect/prevCharacter')
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