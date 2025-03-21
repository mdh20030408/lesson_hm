// 引入OpenAI模块
// AI 模块 es6 推出的模块化能力
import OpenAI from 'openai';

//实例化Openai
const openai = new OpenAI({
    // 付费
    apiKey:'sk-5PUDrQhFqCVr0KluhSbYcCgIx6S21dNcxGJOxhpo3BEtIhRw',
    //国内转发
    baseURL:'http://api.302.ai/v1'
}); 
// 完成生成 GC
const response =await openai.completions.create({
    model:'gpt-3.5-turbo-instruct',// 模型名称
    max_tokens:256,// 生成的最大字数
    // 使用` `可直接，随便的换行
    prompt:`假如你是林夕这样的爱情歌曲作词大家，
    请你以写一首100字,主题为爱上森林北的摇滚歌曲。
    森林北是一位美丽、洒脱、有活力的女孩`,


})
console.log(response)

