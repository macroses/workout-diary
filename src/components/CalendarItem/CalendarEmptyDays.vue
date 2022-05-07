<template v-if="store.getEmptyDays() !== 7">
  <li v-for="(_, index) in store.getEmptyDays()" :key="index"></li>
</template>

<script setup>
import { useStore } from '@/store'

const store = useStore()
</script>

<style lang="scss" scoped>
li {
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  text-align: center;
}
</style>