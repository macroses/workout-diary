<template>
  <div class="default-message">
    Добавьте хотя бы одну
    <router-link to="/">тренировку</router-link>
  </div>
</template>

<style lang="scss" scoped>
.default-message {
  margin-top: 32px;
  font-weight: 600;
  flex: 1 1 auto;
  font-size: 20px;
  text-align: center;
  a {
    color: var(--c-accent);
  }
}
</style>