<template>
  <Header
      @toggleMenu="toggleOpen"
      :isMenuOpen="open"/>
  <main>
    <div class="container">
      <AsideMenu :isMenuOpen="open"/>
      <router-view />
    </div>
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu'
import Modal from '@/components/Modal/Modal'
import { useMenu } from '@/composables/useMenu'

const [open, toggleOpen] = useMenu()
</script>

<style>
.container {
  display: flex;
  width: 100%;
}
</style>