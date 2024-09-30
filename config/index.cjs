/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx55b405bad9b25ca2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'bc56e2a2e4aba2980866b7776495289f',
  PROVINCE: '浙江',
  CITY: '金华',
   // 学生课表
SWITCH: {
  courseSchedule: true,
  weather: true,
  earthyLoveWords: true,
  holidaytts: true,
},
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouEaB6DYtsYo49bFN2Y_qkyOSfRI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'iePM2xtS-NZf3C2x0e0UeXXpf-ZnyTeci0r_3HZGT2I',
   
      courseSchedule: {
        // 单双周的基准
        benchmark: {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          date: '2022-09-23',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
              '语文',
                   ,
                   ,
              '语文',
                   ,
              '道德与法治'
            ],
            // 周二
            [
              '语文',
              '语文'
            ],
            // 周三
            [
              '语文',
              '道德与法治'
            ],
            // 周四
            [
              '语文',
    
            ],
            // 周五
            [
             ,
             ,
            '语文',
              ,
              '班队活动',
              '地方.校本'
            ],
            // 周六
            [
              
            ],
            // 周日
            [
             
            ]
          ],
          // 双周课表
          even: [
            [],
            [],
            [],
            [],
            [],
            [],
            []
           ]
          }
        },
      },
     
     
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ouEaB6DYtsYo49bFN2Y_qkyOSfRI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouEaB6DYtsYo49bFN2Y_qkyOSfRI',
    }
  ],

}

module.exports = USER_CONFIG

