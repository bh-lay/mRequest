var mReq = require('../lib/index.js');

mReq.req({
    url: '10.21.3.62:4008/blacklist',
    type: 'post',
    data: {
        'poster': '123123',
        'touser': 1231,
        'access_token':'123',
        'action':123
    },
    success: function(data) {
        console.log(data)
    },
    fail: function(e) {
        console.log('fa', e)
    }
})