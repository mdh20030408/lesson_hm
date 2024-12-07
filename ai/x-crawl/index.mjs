// es6 模块化 导包
// 结构运算符
import{
  createCrawl,   // 返回爬虫实例
 createCrawlOpenAI  // openai 配置项
} from 'x-crawl';

// 实例化爬虫应用
const crawlApp = createCrawl({
    maxRetry:3,
    intervalTime:{ max:2000 , min:1000 }
})

const crawlOpenAIApp = createCrawlOpenAI({
   clientOptions:{
      apiKey:'sk-1ZRXa6OtBAdZto2mDr6BjVeP1D7nUDaVxcFkWcyz9UoD2tZK',
      baseURL:'http://api.302.ai/v1'
   },
   defaultModel:{
    chatModel:'gpt-4-turbo-preview',
   }
})

crawlApp.crawlPage('https://movie.douban.com/chart')
.then(async(res)=>{
   const { page , browser }= (res.data);
   const targetSelector = '.indent';
   await page.waitForSelector(targetSelector);
   const highlyHTML = await page.$eval(
      targetSelector,
      (el) => el.innerHTML
    )
//    console.log(highlyHTML)
const result =  await crawlOpenAIApp.parseElements(
   highlyHTML,
   `获取图片链接，电影名称，电影评分，电影简介
   输出格式为json 数组
   如：[{
   "src":"....",
   "title":"....",
   "score":"....",
   "desc":"...."
   }]
   `
)
   browser.close();
   console.log(result)

//    crawlApp.crawlFile({
//     targets:result.elements[0].src,
//     storeDirs:'./upload'
//    })

})


