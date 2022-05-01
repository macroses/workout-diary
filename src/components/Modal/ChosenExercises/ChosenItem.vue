<template>
  <li class="chosen-item">
    <slot />
  </li>
</template>

<style lang="scss" scoped>
.chosen-item {
  border-bottom: 1px solid var(--c-border);
}
</style>