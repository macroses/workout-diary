<template>
  <ul class="sets">
    <li
        v-for="set in sets"
        :key="set.id"
        class="set-item"
    >
      <div class="set-item__row">
        <div class="col" title="вес">
          <Icon iconName="weight-scale"/>
          {{set.weight}}
        </div>
        <div class="col" title="повторы">
          <Icon iconName="repeat"/>
          {{set.repeats}}
          <span v-if="set.isSettingActive">lol</span>
        </div>
        <div class="col" title="тип нагрузки">
          <Icon iconName="chart-line-up"/>
          <div
              v-if="set.setType"
              class="setType-indicator"
              :style="{backgroundColor: set.setType.color}"
          ></div>
          <span v-else>—</span>
        </div>
        <div class="col">
          <div class="set-settings-icon">
            <Icon
              @click="editSet(set)"
              iconName="marker"/>
            <Icon
              @click="deleteSetItem(set)"
              iconName="xmark"/>
          </div>

        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import Icon from "@/components/UI/Icon";

const props = defineProps({
  sets: Array
})

const emit = defineEmits(['deleteSetItem'])
const deleteSetItem = (value) => emit('deleteSetItem', value)

const editSet = (item) => {
  for (let key in props.sets) {
    let value = props.sets[key]
    if(value.id === item.id) {
      item.isSettingActive = !item.isSettingActive
      console.log(item.isSettingActive)
    }
  }
}
</script>

<style lang="scss" scoped>
.sets {
  gap: 12px;
}

.set-item {
  cursor: pointer;
  padding: 6px;
  display: flex;
  &:not(:last-child) {
    border-bottom: 1px solid var(--c-border);
  }
}

.set-item__row {
  display: flex;
  width: 100%;
}

.col {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  svg {
    width: 13px;
    height: 13px;
    fill: var(--c-text-light);
    margin-right: 8px;
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
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.set-settings-icon {
  margin-left: auto;
  svg {
    &:hover {
      fill: var(--c-text);
    }
  }
}
</style>