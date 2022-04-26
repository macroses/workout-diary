<template>
  <ul class="chosen-list">
    <slot />
  </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.chosen-list {
  width: 300px;
  border-left: 1px solid var(--c-border);
}
</style>