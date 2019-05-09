import Mock from 'mockjs';
Mock.mock('api/shortAll', {
    "short|5-10": [{
        'id|+3': 1,
        'form|1-3':[{
            'email':Mock.mock('@EMAIL()'), //随机生成一个邮箱
            'classroom|1':['精品语文班','精品作业A班','英语班','语文班'],
        }],
        'name': '@cname',   //中文名称
        'age|1-100': 100,   //100以内随机整数
        'birthday': '@date("yyyy-MM-dd")',  //日期
        'city': '@city(true)',   //中国城市
        "sex|1":["男","女"],//随机生成一个整数，0/1 ，根据这个来给“男” “女”
        'moblie|1':['13531544954','13632250649','15820292420','15999905612'], //在数组中随机找一个
        'num1|1-100.2':1, //1-100 中随机生成一个保留两位小数点
        'num2|100-300.2':1,
        'from|1':['到店咨询','微店','壹家教','学习服务平台'],
        'status|1':['意识强烈','预报名','意向一般','暂无意向'],
         'time':Mock.Random.date('yyyy-MM-dd'),
         'mobile2':/^1[0-9]{10}$/  //用正则匹配1开头的11位数字的手机号
    }]
});
Mock.mock("api/userInfo",{
    "user":[{
        'name': "admin",
        "pwd":123456
        } ,
        {
        'name': "usermu",
        "pwd":123456
        } ,
        {
        'name': "userZan",
        "pwd":123456
        }  ,
         {
        'name': "userLi",
        "pwd":123456
        }   
    ]
})

