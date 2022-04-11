<template>
  <header>
    <AddTaskButton :isMenuOpen="isMenuOpen"/>
    <Burger @click="hideMenu"/>
    <Logo/>
    <Button>Сегодня</Button>
    <CurrentDate />
  </header>
</template>

<script setup>
import Burger from '@/components/Burger/Burger.vue'
import Logo from "@/components/HeaderLogo/Logo";
import Button from "@/components/UI/Button";
import CurrentDate from "@/components/HeaderCurrentDate/CurrentDate";
import AddTaskButton from "@/components/AddTaskButton/AddTaskButton";

const props = defineProps({
  isMenuOpen: {type: Boolean}
})
const emit = defineEmits(['toggleMenu'])

const hideMenu = () => {
  emit('toggleMenu')
}

console.log(props)
</script>

<style scoped lang="scss">
header {
  padding: 8px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--c-border);
  position: relative;
}
</style>