// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const userInfo = {
    code: '00',
    data: {
        username: 'admin'
    },
    message: '',
    result: true
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/tools/get_user_info/', 'get', userInfo)
