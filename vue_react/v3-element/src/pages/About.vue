<template>
    <div>
     About
    </div>
</template>

<script setup>
import {onMounted} from 'vue'
import {getUserInfo} from '../api/'
// console.log('---')
// api/getUserInfo() fetch

onMounted(()=>{
    const getUserInfoCb = async () =>{
        // 本地的token 在http 请求中带上
        const res = await getUserInfo();
        console.log(res);
    }
    getUserInfoCb();
})
</script>

<style scoped>

</style>