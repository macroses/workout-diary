<template>
  <ul class="sets">
    <li
        v-for="set in sets"
        :key="set.id"
        class="set-item">
      <div
        class="setType-indicator"
        :style="{backgroundColor: set.setType}"
      ></div>
      <div class="weight-item">{{set.weight}} <span>кг</span></div>
      <div class="repeats-item">{{set.repeats}} <span>пт</span></div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  sets: Object
})
</script>

<style lang="scss" scoped>
.sets {
  display: flex;
  gap: 12px;
  padding: 0 6px 0;
  .set-item {
    cursor: pointer;
    padding-bottom: 6px;
  }
}

.weight-item, .repeats-item {
  font-size: 13px;
  font-weight: 600;
  span {
    font-size: 10px;
    color: var(--c-text-light);
  }
}

.setType-indicator {
  width: 100%;
  height: 4px;
  border-radius: 4px;
  margin: 0 auto;
}
</style>