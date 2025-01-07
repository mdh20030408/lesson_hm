<template>
  <div>
    <p>Mouse X: {{ mousePos.x }}</p>
    <p>Mouse Y: {{ mousePos.y }}</p>
  </div>
</template>

<script setup>
import  {useMemo, useMouse}  from '../hooks/useMouse';
import Hook from '../hooks/useMouse';
// 调用useMouse并解构出x和y
const mousePos = useMouse();
useMemo()

console.log(Hook)
</script>

<style scoped>

</style>