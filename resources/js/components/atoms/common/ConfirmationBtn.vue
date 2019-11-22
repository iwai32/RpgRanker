<template>
  <button
    class="confirmation-btn"
    :class="state"
    @click="action"
  >{{ state }}
  </button>
</template>

<script>
export default {
  props: {
    state: String,
    action: Function
  }
}
</script>

<style lang="scss" scoped>
.confirmation-btn {
  border-radius: 2px;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: .1em;
  padding: 4px 20px;
}
.yes {
  background: #b79532;
  color: #815630;
}

.no {
  background: #815630;
  color: #eeeeee;
}
</style>