<script setup>
import { toRefs } from 'vue';
import CompA from './components/CompA.vue';
import CompB from './components/CompB.vue';
import { useUserStore} from './store/user.js';


const userStore = useUserStore();
const {isLogin,userInfo} = toRefs(userStore);
const {toLogin,toLogout,setUserInfo} = userStore;
const login = () => {
  toLogin();
  setUserInfo();
}
</script>

<template>
  <div>
    <div v-if="isLogin">
      <img :src="userInfo.avatar" alt="">
    </div>
    <div v-else>
     <button @click="login">登录</button>
    </div>
    <CompA />
    <CompB />
  </div>
</template>

<style scoped> 
</style>