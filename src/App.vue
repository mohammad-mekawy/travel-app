<template>
<TheNavigation/>
  <div class="container">
    <router-view v-slot="{ Component}">
  <transition name="fade">
    <component :is="Component" :key="$route.path" />
  </transition>
</router-view>
  </div>
</template>
<script>
import TheNavigation from './components/TheNavigation.vue'
export default{
  components:{TheNavigation}
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
