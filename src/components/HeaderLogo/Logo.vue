<template>
  <router-link to="/" class="logo-link">
    <div class="logo">
      <Icon iconName="dumbbell"/>
      Дневник тренировок
    </div>
  </router-link>
</template>

<script setup>
import Icon from '@/components/UI/Icon'

</script>

<style scoped lang="scss">
.logo {
  font-size: 22px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-right: 30px;
}

a {
  color: var(--c-text);
}

svg {
  margin-right: 8px;
  width: 40px;
  height: 40px;
}
</style>