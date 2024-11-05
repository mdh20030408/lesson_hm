# talk in data

nba 赛季统计投篮数据 设计一个shot表， 设计哪些字段
## 数据化
player_id  player_name shot_made(投中) shot_type(2,3) game_id 

team_id team_name season_1(03-04) 
event_type free throw罚球 | rebound 篮板|....
action_type layup 上篮 | dunk 扣篮 | jump 跳投 | Hook shot 勾手| Fadeway 后仰跳投....

shotDate
distance 

## 赛季投篮

一切皆可数据化,细致的去数学表达主题（shot）
赛季，球队，队员，得分（分数、动作、原因、结果）、zone(区域、距离、坐标)、 position(位置、投篮位置)、left（分，秒）重要性


## AI如何帮助我们设计数据表呢？
-数据助理
 吴恩达的`prompt` engineering 提示词（提问）善于向ai提问
   -给定一个角色 role
   -约束明确的任务
   -约束必须做什么，不做什么
   -一步步做，细化任务
   -prompt过程其实也是coding过程

-我想要设计一张nba 赛季投篮数据表，请给出相关字段，字段尽可能详细。
-假设你是一位数据库工程师， 给他一个角色
请你帮我设计一张nba赛季投篮数据表 shots 指定任务
数据表需满足mysql的约束
请包含赛季、球队、球员、得分(得分与否、投篮动作、得分原因)、投篮位置、球员位置(如SG)、比赛时间、距离结束时间（分，秒）
其他字段不需要给出
请返回sql，并给出原因