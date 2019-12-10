<template>
  <button type="submit" class="submit-btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.submit-btn {
  background: #a66e3e;
  border-radius: 4px;
  color: #eeeeee;
  display: block;
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: .08em;
  padding: 5px;
  position: absolute;
  right: 0;
  left: 0;
  width: 40%;
  margin: auto;
}
</style>