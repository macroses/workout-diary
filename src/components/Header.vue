<template>
  <header>
    <AddTaskButton :isMenuOpen="isMenuOpen"/>
    <Burger @click="hideMenu"/>
    <Logo/>
    <Button @click="resetDate" :title="now.format('dddd, Do MMM')">Сегодня</Button>
    <CurrentDate />
    <ToggleTheme />
  </header>
</template>

<script setup>
import Burger from '@/components/Burger/Burger.vue'
import Logo from "@/components/HeaderLogo/Logo"
import Button from "@/components/UI/Button"
import CurrentDate from "@/components/HeaderCurrentDate/CurrentDate"
import AddTaskButton from "@/components/AddTaskButton/AddTaskButton"
import moment from 'moment'
import { useStore } from '@/store'
import ToggleTheme from "@/components/ToggleTheme/ToggleTheme";

const store = useStore()

const props = defineProps({
  isMenuOpen: {type: Boolean}
})

const now = moment()

const emit = defineEmits(['toggleMenu'])
const hideMenu = () => emit('toggleMenu')
const resetDate = () => store.resetCurrentDate()
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