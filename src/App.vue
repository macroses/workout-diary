<template>
  <Header
      @toggleMenu="toggleMenu"
      :isMenuOpen="isMenuOpen"/>
  <main>
    <div class="container">
      <AsideMenu :isMenuOpen="isMenuOpen"/>
      <router-view :isMenuOpen="isMenuOpen" />
    </div>
  </main>
  <footer></footer>
</template>

<script setup>
import Header from '@/components/Header.vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu'
import {ref} from 'vue'

let isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
.container {
  display: flex;
  width: 100%;
}
</style>