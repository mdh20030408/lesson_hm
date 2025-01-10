// 全局共享的用户状态
import {defineStore} from 'pinia'
import {
    ref,
    reactive
} from 'vue'
// hooks 编程
export const useUserStore = defineStore("user",()=>{
    const isLogin = ref(false)
    const toLogin = ()=>{
        isLogin.value = true
    }
    const toLogout = ()=>{
        isLogin.value = false
    }

    const userInfo = reactive({
        name:'',
        avatar:"",
        message:0,
        uid:null
    })
    const setUserInfo =()=>{
     userInfo.name="黑马王子13";
     userInfo.avatar="https://p6-passport.byteacctimg.com/img/user-avatar/7ff742db3305fa2fbcf1e6fadfaedb1e~140x140.awebp"
     userInfo.message = 10;
     userInfo.uid = 123456789;
        }

    return {
        isLogin,
        toLogin,
        toLogout,
        userInfo,
        setUserInfo
    }
})