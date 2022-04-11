<template>
  <div
      class="aside-menu"
      :class="{hide: !isMenuOpen}">
    <Checkbox>Только чтение</Checkbox>
    <div class="aside-menu_item">
      <router-link to="/exercises">
        <Icon iconName="person-biking"/>
        Упражнения
      </router-link>
      <router-link to="/calories">
        <Icon iconName="burger-fries"/>
        Каллории
      </router-link>
    </div>

  </div>
</template>

<script setup>
import Checkbox from "@/components/UI/Checkbox";
import Icon from "@/components/UI/Icon";

const props = defineProps({
  isMenuOpen: {type: Boolean}
})

</script>

<style lang="scss" scoped>
.aside-menu {
  height: calc(100vh - 65px);
  border-right: 1px solid var(--c-border);
  width: 260px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  overflow: hidden;
  padding: 100px 24px 0;

  &.hide {
    transform: translateX(-260px);
    width: 0;
    padding: 0;
  }
}

.aside-menu_item {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

a {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: var(--c-text);

  svg {
    margin-right: 12px;
  }
}
</style>