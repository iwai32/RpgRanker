<template>
  <button class="character-ok-btn"
    @click="openConfirmationDisplay"
  >OK
  </button>
</template>

<script>
export default {
  methods: {
    openConfirmationDisplay() {
      this.$store.commit('commonModule/openConfirmationDisplay')
    }
  }
}
</script>

<style lang="scss" scoped>
.character-ok-btn {
  background: #a66e3e;
  border-radius: 8px;
  color: #eeeeee;
  display: block;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  padding: 5px;
  width: 40%;
}
</style>