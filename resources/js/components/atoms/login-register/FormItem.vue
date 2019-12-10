<template>
  <div class="form-item">
    <label class="form-label" 
      :for="idName"
    >
      <slot></slot>
    </label>
    <input class="input-init"
      :type="typeName"
      :id="idName"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    typeName: String,
    idName: String,
    value: String
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .form-label {
    color: #444;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: .08em;
  }
}
</style>