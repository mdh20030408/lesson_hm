<template>
  <div class="mine h-100rem">
    <!-- 背景 -->
    <div
      class="minePage container h-[8rem] relative shadow-md
       bg-[url('https://pic.rmb.bdstatic.com/bjh/news/63fa8bfc2cf3df495e72bb07a0d0cdba6867.jpeg?x-bce-process=image/watermark,bucket_baidu-rmb-video-cover-1,image_YmpoL25ld3MvNjUzZjZkMjRlMDJiNjdjZWU1NzEzODg0MDNhYTQ0YzQucG5n,type_RlpMYW5UaW5nSGVpU01HQg==,w_27,text_QOmjjuaZr-aRhOW9seaKgOW3p-ePrQ==,size_27,x_20,y_20,interval_2,color_FFFFFF,effect_softoutline,shc_000000,blr_2,align_1')] 
       bg-cover bg-center"
    >
      <div class="text-center text-lg text-white font-bold pt-[2rem] ">
        
        个人中心
      </div>
      <!-- 头像 -->
      <img
        src="https://miaobi-lite.bj.bcebos.com/miaobi/5mao/b%275Y%2Bv54ix5Y2h6YCa5aS05YOPXzE3Mjg5NDc4NzcuMjA1MTUwNA%3D%3D%27/0.png"
        alt=""
        class="rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400 absolute bottom-0 left-5 transform translate-y-[3rem]"
      />
    </div>
    <!-- 页面主体 -->
    <main class="mine-main">
      <!-- 登录注册 -->
      <div class="login-register container text-right px-5 pt-2">
        <van-button round type="success" color="#00BFFF" class="font-bold"
          >&nbsp;&nbsp;登录&nbsp;&nbsp;</van-button
        >
      </div>
      <!-- 菜单栏 -->
      <section
        class="rounded-xl mt-[1rem] pb-[0.5rem] shadow-md bg-gray-90 mx-2 border"
      >
        <div class="topbar flex justify-around mt-[1.5rem]">
          <div
            class="topbar-item flex flex-col items-center"
            v-for="item in topBarState"
            :key="item.title"
          >
            <div class="topbar-item__icon">
              <van-icon
                class="iconfont text-[1.5rem]"
                color="#87CEFA"
                class-prefix="icon"
                :name="item.icon"
              />
            </div>
            <div class="topbar-item__text">{{ item.title }}</div>
          </div>
        </div>
      </section>
      <!-- 发布记录 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="a-lvhanglvyoujilu"
          />
          帖子分享</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">分享你此刻的想法</div>
        <div class="absolute right-0 top-0 mt-5 mr-3">
          <van-button round type="success" color="#00BFFF">立即发布</van-button>
        </div>
      </section>
      <!-- 足迹 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon name="star-o" />
          收藏</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">你收藏的帖子</div>
      </section>
      <!-- 浏览记录 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon name="clock-o" />
          浏览记录</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">你看过的帖子</div>
      </section>
      <!-- 设置 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="shezhi"
          />
          设置
        </div>
        <div class="text-[0.8rem] text-gray-500 mt-4">管理你的个人信息</div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toRefs } from "vue";
import { useMineStore } from "@/stores/mineStore";

const mineStore = useMineStore();
const { topBarState } = toRefs(mineStore);
</script>

<style lang="scss" scoped></style>
