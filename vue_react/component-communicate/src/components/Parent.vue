<template>
    <div>
<Child ref="comp"/>
<button @click="handlerClick">按钮</button>
    </div>
</template>

<script setup>
import Child from './Child.vue'
import {ref} from 'vue'

const comp = ref(null) //标记DOM元素 null 组件还没有挂载 DOM也不在
const title = ref('hello') // 标记数据
const handlerClick = () => {
console.log(comp.value.childName);
// console.log(title)
comp.value.someMethod();
}
</script>

<style scoped>

</style>