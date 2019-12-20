<template>
  <li class="ranking-list">
    <p class="rank"
      :class="'rank' + rankNumber"
    >{{ rankNumber }}
    </p>

    <p class="character-icon">
      <img src="../../../../images/swords-man.png" alt="使用キャラクターのアイコン">
    </p>

    <div class="battle-data">
      <p class="user-name">iwa</p>
      <p class="monster-count">4体討伐</p>
      <ul class="total-data">
        <li class="total-turn">Turn6</li>
        <li class="total-damage">Damage728</li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    rankNumber: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";

.ranking-list {
  border-bottom: 2px solid $border-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  .rank {
    color: $accent-color;
    font-weight: bold;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 9%;
    &.rank1 {
      background: url('../../../../images/rank_gold.png') no-repeat center center/cover;
    }
    &.rank2 {
      background: url('../../../../images/rank_silver.png') no-repeat center center/cover;
    }
    &.rank3 {
      background: url('../../../../images/rank_bronze.png') no-repeat center center/cover;
    }
  }
  .character-icon {
    background: $white;
    border: 2px solid $accent-color;
    border-radius: 4px;
    width: 18%;
  }
  .battle-data {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    letter-spacing: .05em;
    padding: 0 3%;
    width: 65.6%;
    .user-name {
      color: $accent-color;
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 1.5;
      margin-bottom: 5px;
      width: 100%;
    }
    .monster-count {
      color: #EAA400;
      font-weight: bold;
      font-size: 2rem;
      text-shadow: 1px 2px 2px #888;
      width: 50%;
      &.defeated-satan {
        color: #7b2cd6;
      }
    }
    .total-data {
      color: $text-color;
      font-size: 1.2rem;
      width: 50%;
    }
  }
}
</style>