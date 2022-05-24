<template>
  <Header
      @toggleMenu="toggleOpen"
      :isMenuOpen="open"/>
  <main>
    <div class="container">
      <AsideMenu :isMenuOpen="open"/>
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import AsideMenu from '@/components/AsideMenu/AsideMenu'
import { useMenu } from '@/composables/useMenu'

const [open, toggleOpen] = useMenu()
</script>

<style>
.container {
  display: flex;
  width: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
  overflow: hidden;
}
</style>