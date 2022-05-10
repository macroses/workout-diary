<template>
  <label>
    <input type="checkbox">
    <span>
      <slot />
    </span>
  </label>
</template>

<script setup>

</script>

<style lang="scss" scoped>
input {
  visibility: hidden;
  position: absolute;
}

label {
  cursor: pointer;
}

span {
  position: relative;
  padding-left: 32px;
  color: var(--c-text-invert);
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1px solid var(--c-border);
  }
}

input:checked + span:after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--c-accent);
  top: 4px;
  left: 4px;
}
</style>