<template>
  <li class="monster-count"
    :class="{'defeated-satan': monsterCount == 5}"
  >
    {{ monsterCountMessage }}
  </li>
</template>

<script>
export default {
  props: {
    monsterCount: String
  },
  computed: {
    monsterCountMessage() {
      if (this.monsterCount === '5') {
        return '魔王討伐'
      } else {
        return this.monsterCount + '体討伐'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.monster-count {
  color: #EAA400;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: .05em;
  -webkit-text-stroke: 1px #888;
  text-shadow: 1px 2px 2px #888;
  line-height: 1.5;
  margin-bottom: 10px;
  white-space: nowrap;
  width: 100%;
  &.defeated-satan {
    color: #7b2cd6;
    -webkit-text-stroke: 1px #444;
    text-shadow: 1px 2px 2px #444;
  }
}
</style>