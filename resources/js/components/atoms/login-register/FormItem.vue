<template>
  <div class="form-item">
    <label class="form-label"
      :for="idName"
    >
      <slot></slot>
      <span class="required">※</span>
    </label>
    <input class="form-input input-init"
      :type="typeName"
      :id="idName"
      :value="value"
      :placeholder="initialValue"
      @input="$emit('input', $event.target.value)"
      required
    >
  </div>
</template>

<script>
export default {
  props: {
    typeName: String,
    idName: String,
    value: String,
    initialValue: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .form-label {
    color: $text-color;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: .08em;
    .required {
      color: $error-color;
      font-size: 1rem;
    }
  }
  .form-input {
    font-size: 1.2rem;
    &::placeholder {
      font-size: 1rem;
    }
  }
  @include tab {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
    .form-label {
      font-size: 1.8rem;
    }
    .form-input {
      font-size: 1.6rem;
      width: 440px;
      &::placeholder {
        font-size: 1.2rem;
      }
    }
  }
  @include pc {
    margin-bottom: 35px;
  }
}
</style>