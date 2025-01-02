<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue';
import { ref } from 'vue';
const count = ref(0);
const showComponent = ref(true); // 
const width = ref(100);
const change = () => {
  width.value += 100;
}

const toggleComponent = () => {
  showComponent.value = !showComponent.value;
}

const incrementCount = () => {
  count.value++;
}
</script>

<template>
  <div>
   <button @click="toggleComponent">Toggle Component</button>
   <button @click="incrementCount">Increment Count</button>
   <p>Count: {{ count }}</p>
   <transition name ="fade">
   <LifecycleComponent v-show="showComponent" :count="count"/>
   </transition>
   <div class="box1" :style="{width:width+ 'px'}"></div>
   <button @click="change">click</button>
   <transition name="fade">
    <h1 v-if="showComponent">你好 vue</h1>
   </transition>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.box1{
  background-color: #d88986;
  height: 100px;
  transition: width 1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

</style>