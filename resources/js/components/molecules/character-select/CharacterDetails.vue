<template>
  <div class="character-details">
    <character-details-title>
      <slot name="title"></slot>
    </character-details-title>
    <slot name="contents"></slot>
  </div>
</template>

<script>
import CharacterDetailsTitle from '../../atoms/character-select/CharacterDetailsTitle.vue'
export default {
  components: {
    CharacterDetailsTitle
  }
}
</script>


<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-details {
  box-shadow: 0 0 1px 1px $box-color;
  border-radius: 1px;
  margin-bottom: 30px;
  padding-top: 5px;
  position: relative;
  & + & {
    margin-bottom: 0;
  }
  @include tab {
    padding-top: 10px;
    margin-bottom: 0;
    width: 300px;
  }
  @include pc {
    margin-bottom: 30px;
    width: 100%;
  }
}
</style>