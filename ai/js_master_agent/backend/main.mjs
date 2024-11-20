import OpenAI from 'openai';
// es5 js 没有模块化能力 以前 前端简单 不需要模块化,  交给函数就可以了
// 入口文件
// mjs es6 模块化

const client = new OpenAI({
  apiKey: 'sk-EotDnSmaUpIchUFfXMOpmx0QBHUPe43c2Rr8UOUiEzBwCYUJ',
  baseURL:'https://api.302.ai/v1'
});
const main = async () => {
    // AIGC  图片
    const respose= await client.images.generate({
        model : "dall-e-3",
        prompt:'A spaceship flying through the universe',
        n:1,
        size:'1024x1024'
    })
    console.log(respose.data[0].url)
}
main();