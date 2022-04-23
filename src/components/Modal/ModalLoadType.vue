<template>
  <ul class="load-type">
    <li
        v-for="(type, index) in loadTypes"
        :key="index"
        @click="dropType(type)"
    >
      {{ type }}
    </li>
  </ul>
</template>

<script setup>
const emit = defineEmits(['dropType'])
const dropType = (value) => {
  emit('dropType', value)
}

const loadTypes = ["размин", "легк", "норм", "тяж"]
</script>

<style lang="scss" scoped>
.load-type {
  display: flex;
  margin-top: 4px;

  li {
    font-size: 10px;
    margin-right: 8px;
    padding: 1px 4px 2px;
    border: 1px solid var(--c-border);
    border-radius: 10px;
    color: var(--c-text);
  }
}
</style>