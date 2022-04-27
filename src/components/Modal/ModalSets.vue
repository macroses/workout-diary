<template>
  <ul class="sets">
    <li
        v-for="set in sets"
        :key="set.id"
        class="set-item"
    >
      <div
          class="setType-indicator"
          :style="{backgroundColor: set.setType.color}"
      ></div>
      <div class="weight-item">{{set.weight}} <span>кг</span></div>
      <div class="repeats-item">{{set.repeats}} <span>пт</span></div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  sets: Array
})
</script>

<style lang="scss" scoped>
.setType-indicator {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 0 auto;
}

.sets {
  display: flex;
  gap: 8px;
  padding: 0 6px;
  .set-item {
    cursor: pointer;
    padding-bottom: 6px;
  }
}

.weight-item, .repeats-item {
  font-size: 11px;
  span {
    font-size: 10px;
    color: var(--c-text-light);
  }
}

</style>