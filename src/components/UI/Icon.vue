<template>
  <svg viewBox="0 0 24 24">
    <use :xlink:href="`/thin.svg#${iconName}`"></use>
  </svg>
</template>

<script setup>

const props = defineProps({
  iconName: { type: String, require: true },
});

</script>

<style scoped>
svg {
  width: 24px;
  height: 24px;
  fill: var(--c-text);
}
</style>