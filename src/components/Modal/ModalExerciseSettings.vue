<template>
  <div class="settings-inputs">
    <div>
      <input type="text" placeholder="кг" @keydown="useOnlyNumbers">
    </div>
    <div>
      <input type="text" placeholder="повт." @keydown="useOnlyNumbers">
    </div>
  </div>
</template>

<script setup>
import {useOnlyNumbers} from "@/composables/useOnlyNumbers"

</script>

<style lang="scss" scoped>
.settings-inputs {
  display: flex;
  gap: 16px;
  padding: 0 8px;
  margin-top: 8px;
  div {
    width: 50px;

  }
}

input {
  font-size: 12px;
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid var(--c-border);
}
</style>