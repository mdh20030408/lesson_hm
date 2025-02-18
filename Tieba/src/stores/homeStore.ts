import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
    HomeTopBarItem,
    PopularTieba,
    HomeNavBarItem,
    MaybeLike
} from "../types/home";

export const useHomeStore = defineStore('home', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<HomeTopBarItem[]>([
        {
            title: "热门",
            icon: "hot-o",
        },
        {
            title: "推荐",
            icon: "wap-home-o",
        },
        {
            title: "关注",
            icon: "friends-o",
        },
        {
            title: "直播",
            icon: "eye-o",
        },
        {
            title: "会员",
            icon: "diamond-o",
        }
    ])
    const navBarState = ref<HomeNavBarItem[]>([
        {
            title: "最多人看",
            icon: "fire-o",
            msg: "最热门的帖"
        },
        {
            title: "最多评论",
            icon: "chat-o",
            msg: "热火朝天"
        },
        {
            title: "最多收藏",
            icon: "star-o",
            msg: "经典老帖"
        }
    ])
    const PopularTie = ref<PopularTieba[]>([

        {
            area: "搞笑吧",
            type: "讨论最多",
            img:
                "https://imgsa.baidu.com/forum/pic/item/f703738da97739127237f5e1fa198618367ae219.jpg",
        },
        {
            area: "江西吧",
            type: "猜你喜欢",
            img:
                "https://img1.baidu.com/it/u=3793477550,3225034004&fm=253&fmt=auto&app=138&f=JPEG?w=767&h=500",

        },
        {
            area: "剑来吧",
            type: "热门精选",
            img:
                "https://imgsa.baidu.com/forum/pic/item/7a899e510fb30f24ffbdf966c295d143ad4b03ab.jpg",

        },
        {
            area: "NBA吧",
            type: "每日精选",
            img:
                "https://imgsa.baidu.com/forum/pic/item/9825bc315c6034a8c0ae628cc41349540923766b.jpg",

        },
        {
            area: "美食吧",
            type: "美食精选",
            img:
                "https://imgsa.baidu.com/forum/pic/item/0df3d7ca7bcb0a46447e3b486363f6246b60af67.jpg",

        },
        {
            area: "旅行吧",
            type: "当季精选",
            img:
                "https://imgsa.baidu.com/forum/pic/item/d1a20cf431adcbef482e7fe3adaf2edda3cc9f38.jpg",

        },
    ])
    const Maylike = ref<MaybeLike[]>([
        {
            nickName: "非久",
            title: "给弟弟买了一个笔记本电脑，应该够用很久吧",
            img: "https://img1.baidu.com/it/u=2437177972,3975004517&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 480
        },
        {
            nickName: "张日天",
            title: "高中毕业只能进厂吗？？",
            img: "https://ww3.sinaimg.cn/mw690/7736d59fly1hsobaab1okj20uo0u0q97.jpg",
            loveNum: 330
        },
        {
            nickName: "风雪压我两三年",
            title: "求助！ 我要找张图",
            img: "https://img0.baidu.com/it/u=1124383009,339295930&fm=253&fmt=auto&app=138&f=JPEG?w=669&h=500",

            loveNum: 989
        },
        {
            nickName: "小李爱旅游",
            title: "北京旅游攻略|终于有人一次性说清楚了！",
            img: "https://img1.baidu.com/it/u=1709212598,131203521&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            loveNum: 4315
        },
        {
            nickName: "周周不吃菜",
            title: "这种题目有几个人能满分",
            img: "https://img1.baidu.com/it/u=2649117887,3271414181&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 780
        },
        {
            nickName: "爱旅游的小王",
            title: "可遇不可求的蓝眼泪",
            img: "https://img0.baidu.com/it/u=2302978910,4270623494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 9520
        },
        {
            nickName: "考研日记",
            title: "终于攻克了这道难题！",
            img: "https://img1.baidu.com/it/u=94811216,4057875479&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1416",
            loveNum: 9899
        },
        {
            nickName: "小李爱旅游",
            title: "北京旅游攻略|终于有人一次性说清楚了！",
            img: "https://img1.baidu.com/it/u=1709212598,131203521&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            loveNum: 4315
        },
        {
            nickName: "星星",
            title: "穷游海边城市千万不要错过 甚至一天300",
            img: "https://img1.baidu.com/it/u=1389924459,2280418880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 780
        },
    ])
    return {
        topBarState,
        navBarState,
        PopularTie,
        Maylike
    }

})