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
  studentCourses: true,
  coursesSchedule: true,
  studentCourses: {
      // 课程表相关配置
      // 如果courseSchedule不存在或者为空（null）则认为没有课程
      // 如果coursesSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可
      // 如果coursesSchedule是一个对象（如下面所示）
      coursesSchedule: {
        // 单双周的基准
        benchmark: {
          // 一个日期
          date: '2022-09-23',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日地课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
              '1.语文',
              '4.语文'
            ],
            ['1.语文',2'语文'],
            [],
            [],
            [],
            [],
            []
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
      },
     },
  },
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouEaB6DYtsYo49bFN2Y_qkyOSfRI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3THV8oT4mQNqB2Bg-rgrTV6kR6RlnhlfajOTcsaUbzg',
   

      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
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

