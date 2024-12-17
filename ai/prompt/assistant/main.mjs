// 导入 OpenAI 库，用于与 OpenAI API 进行交互
import OpenAI from "openai";
// 导入 dotenv 库，用于加载环境变量
import dotenv from "dotenv";

// 加载环境变量配置文件
dotenv.config();

// 从环境变量中获取 OpenAI API 密钥和基础 URL
const {
  OPENAI_API_KEY,
  OPENAI_BASE_URL
} = process.env;

// 使用 OpenAI API 密钥和基础 URL 实例化 OpenAI 客户端
const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: OPENAI_BASE_URL
});

// 定义一个异步函数，用于获取 OpenAI API 的文本补全
const get_completion = async (prompt, model = 'gpt-3.5-turbo') => {
  // 创建一个包含用户提示的消息数组
  const messages = [{
    role: 'user',
    content: prompt
  }];

  // 使用 OpenAI 客户端创建一个聊天补全请求
  const response = await client.chat.completions.create({
    model: model,
    messages: messages,
    temperature: 0
  });

  // 返回响应中第一个选择的消息内容
  return response.choices[0].message.content;
}

const main = async() => {
    // nlp 情感分析
    // const sentiment = "negative" 消极
    // const review = `
    // 因此，他们仍然以 70-10 左右的价格在季节性销售，价格也比之前的 29 美元低。
    // 所以它看起来还不错，但如果你看看底座，刀片锁定到位的部分看起来不如几年前的版本那么好，
    // 但我打算非常温柔地使用它（例如，我先在搅拌机中粉碎非常硬的物品，如豆子、冰、米饭等。
    // 然后在搅拌机中将它们粉碎成我想要的份量，然后切换到搅拌刀片以获得更细的面粉，
    // 并在制作冰沙时先使用十字切割刀片，然后如果我需要它们更细/更少的浆状，则使用平刀片）。
    // 制作冰沙的特别提示：将水果和蔬菜切碎并冷冻（如果使用菠菜，请稍微炖一下，然后冷冻直至可以使用；
    // 如果制作冰糕，请使用小型或中型食品加工机），这样就可以避免在制作冰沙时添加太多冰块。
    // 大约一年后，电机发出奇怪的声音。
    // 我打电话给客服，但保修期已过，所以我不得不再买一个。仅供参考：这类产品的整体质量已经下降，
    // 因此他们有点指望品牌认知度和消费者忠诚度来维持销售。大约两天后就收到了。
    // `
    // const prompt=`
    //   你是一名客服AI助理。
    //   你的任务是向珍贵的客户发送电子邮件回复。
    //   给定以'''分隔评论的客户发送电子邮件
    //   生成回复以感谢客户的评论。
    //   如果情绪是正面或中性的，感谢他们的评论。
    //   如果情绪是负面的，道歉并建议他们可以联系客服。
    //   确保使用评论中的具体细节
    //   用简洁专业的语气写作。
    //   在电子邮件中签名为"AI客服代理"
    //   客户评论:'''${review}'''
    //   评论情绪:${sentiment}
    // `
    // const response = await get_completion(prompt);
    // console.log(response);
    const lamp_review = `
    需要一盏漂亮的灯放在我的卧室，这盏灯有额外的存储空间，而且价格也不太高。 
    很快就收到了。我们灯的灯串在运输过程中断了，公司很乐意给我们寄来一根新的。
    几天之内就到了。组装起来很容易。
    我缺少一个零件，所以我联系了他们的支持人员，他们很快就给我找到了缺失的零件！ 
    在我看来,Lumina 是一家关心客户和产品的好公司！！
    `
    // 吴恩达prompt 系列 machine learning 机器学习
    // NLP 
    // const prompt=`
    // 以下产品评论的情绪是什么,
    // 以三个反引号分隔
    // 请用一个词来回答，可以是“积极”、“中立”或“消极”。
    // 评论内容:'''${lamp_review}'''
    // `


    // const prompt=`
    // 以下产品评论的情绪是什么,
    // 以三个反引号分隔
    // 确定以下评论作者表达的感情列表。
    // 列表中最多包含5项。将你的答案格式化为逗号分隔的单词列表
    // 评论内容:'''${lamp_review}'''
    // `

    // const prompt=`
    // 以下评论作者是否在表达愤怒？
    // 评论以三个反引号分隔。
    // 请回答是或否
    // 评论内容:'''${lamp_review}'''
    // `

    const prompt = `
    从评论文本中识别以下项目：
    - 情绪（正面或负面）
    - 评论者是否表达愤怒？（真或假）
    - 评论者购买的商品
    - 制造商品的公司
  
    评论以三个反引号分隔。
    将您的回复格式化为 JSON 对象，其中
    “情绪”、“愤怒”、“商品”和“品牌”作为键。
    如果信息不存在，请使用“未知”作为值。
    让您的回复尽可能简短。
    将愤怒值格式化为布尔值。
  
    评论文本: '''${lamp_review}'''
    `
    const response = await get_completion(prompt);
    console.log(response);
}

main()
