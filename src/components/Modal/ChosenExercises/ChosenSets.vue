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
          <div v-if="!set.isSettingActive">{{set.weight}}</div>
          <input
            v-else
            type="text"
            @focus="$event.target.select()"
            @keydown="useOnlyNumbers"
            v-model="set.weight">
        </div>
        <div class="col" title="повторы">
          <Icon iconName="repeat"/>
          <div v-if="!set.isSettingActive">{{set.repeats}}</div>
          <input
              v-else
              type="text"
              @focus="$event.target.select()"
              @keydown="useOnlyNumbers"
              v-model="set.repeats">
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
            <div
                @click="editSet(set)"
                class="set-settings-icon__item">
              <Icon
                  :iconName="!set.isSettingActive ? 'marker' : 'check'"
                  :style="[set.isSettingActive ? 'fill: green': '']"
              />
            </div>
            <div
                @click="deleteSetItem(set)"
                class="set-settings-icon__item">
              <Icon iconName="xmark"/>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { vFocusOnLoad } from "@/directives/myDirectives"
import { useStore } from '@/store'
import { useOnlyNumbers } from "@/composables/useOnlyNumbers"
import Icon from "@/components/UI/Icon";

const props = defineProps({
  sets: Array
})

const store = useStore()
const deleteSetItem = item => store.deleteSetItem(item)
const editSet = (item) => item.isSettingActive = !item.isSettingActive
</script>

<style lang="scss" scoped>
.sets {
  gap: 12px;
}

.set-item {
  padding: 0 6px 0 16px;
  display: flex;
  min-height: 30px;
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

  input {
    width: 40px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid var(--c-border);
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
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
  display: flex;
  height: 100%;
  svg {
    margin: 0
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    width: 30px;
    border-radius: 50%;
    &:hover {
      background: var(--c-block-hover);
      svg {
        fill: var(--c-text);
      }
    }
  }
}
</style>