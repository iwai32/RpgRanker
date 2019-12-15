<template>
  <button class="character-ok-btn"
    :class="mediaOn"
    @click="openConfirmationDisplay"
  >OK
  </button>
</template>

<script>
export default {
  props: {
    mediaOn: String
  },
  methods: {
    openConfirmationDisplay() {
      this.$store.commit('commonModule/openConfirmationDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-ok-btn {
  background: $main-color;
  border-radius: 8px;
  color: $white;
  display: block;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  padding: 5px;
  width: 40%;
  @include tab {
    font-size: 2.6rem;
    padding: 10px;
  }
  @include pc {
    &.sp-tab-on {
      display: none;
    }
    &.pc-on {
      width: 350px;
    }
  }
}
</style>