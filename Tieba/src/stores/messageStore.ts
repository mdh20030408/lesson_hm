import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
    ShopTopBarItem,
    recommendItem
} from "@/types/message";

export const useMessageStore = defineStore('shop', () => {
    const topBarState = ref<ShopTopBarItem[]>([
        {
            title: "贴吧官方",
            icon: "smile",
        },
        {
            title: "点赞",
            icon: "good-job",
        },
        {
            title: "评论",
            icon: "chat",
        },
        {
            title: "关注",
            icon: "friends",
        },
        {
            title: "分享",
            icon: "share",
        }
    ])
    const recommendItemState = ref<recommendItem[]>([
        {
            title: "你的消息",
            items: [
                {
                    type: '1',
                    title: "刚旅行完回来怎么调整学习状态",
                    image: "https://img2.baidu.com/it/u=4151619466,867850242&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1198",
                    price: "36800",
                    place: "旅游吧",
                    market: "6750"
                },
                {   type: '1',
                    title: "马上就开学了，作业还没写怎么办",
                    image: "https://img2.baidu.com/it/u=3960396678,2920529431&fm=253&fmt=auto&app=120&f=JPEG?w=685&h=500",
                    price: "1238",
                    place: "学习吧",
                    market: "232"
                },
                {   type: '1',
                    title: "怎么才能追到女孩子，在线求教程",
                    image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F8dc35a2f-ddc7-c444-08b7-542b027090cb%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1741838393&t=ce42ee041ba304af741a7e80fbfb549c",
                    price: "3500",
                    place: "恋爱吧",
                    market: "456"
                },
                {   
                    type: '1',
                    title: "颐和园真是美啊",
                    image: "https://img0.baidu.com/it/u=3396923623,2585856524&fm=253&fmt=auto&app=138&f=PNG?w=755&h=500",
                    price: "15500",
                    place: "风景吧",
                    market: "999"
                },
                {   
                    type: '2',
                    title: "西湖美食推荐",
                    image: "https://img1.baidu.com/it/u=2702082938,1098691968&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
                    price: "15500",
                    place: "美食吧",
                    market: "456"
                },
                {
                    type: '2',
                    title: "家庭不和谐怎么办",
                    image: "https://img0.baidu.com/it/u=1931928949,237938317&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500",
                    price: "1563",
                    place: "家庭吧",
                    market: "123"
                },
                {
                    type: '2',
                    title: "这件事怎么办？？",
                    image: "https://pic.rmb.bdstatic.com/bjh/240524/57de6ffcbc8106f63ecb924a4ec0a2ec6075.jpeg@h_1280",
                    price: "12533",
                    place: "求助吧",
                    market: "343"
                },
                {
                    type:'3',
                    title: "求推荐一个旅行的地方，急急急！",
                    image: "https://img1.baidu.com/it/u=3254657915,1827014886&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
                    place: "旅行吧",
                    price: "4570",
                    market: "869"
                },
                {
                    type: '3',
                    title: "江西的经济发展速度",
                    image: "https://img0.baidu.com/it/u=1676921563,3084678739&fm=253&fmt=auto&app=120&f=JPEG?w=655&h=428",
                    place: "江西吧",
                    price: "5540",
                    market: "344"
                },
                {
                    type: '3',
                    title: "詹姆斯真是无敌啊",
                    image: "https://img2.baidu.com/it/u=2066297237,2667015913&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=514",
                    place: "NBA吧",
                    price: "4500",
                    market: "124"
                }
            ]
        },
    ])
    return {
        topBarState,
        recommendItemState
    }
})

