<template>
  <svg viewBox="0 0 24 24" :title="title">
    <use :xlink:href="`/light.svg#${iconName}`"></use>
  </svg>
</template>

<script setup>

const props = defineProps({
  iconName: { type: String, require: true },
  title: String
});

</script>

<style scoped>
svg {
  width: auto;
  height: 24px;
  fill: var(--c-text);
}
</style>