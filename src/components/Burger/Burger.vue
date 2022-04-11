<template>
  <div class="burger">
    <Icon iconName="bars" />
  </div>
</template>

<script setup>
import Icon from "@/components/UI/Icon.vue"

</script>

<style scoped lang="scss">
.burger {
  border-radius: 50%;
  padding: 12px;
  margin: 0 4px;
  flex: 0 0 auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: var(--c-block-hover);
  }
}
</style>