mRequest
===

# Install

```javascript
npm install mrequest@latest
```

# Usage

```javascript
var mReq = require('../lib/index.js');

mReq.req({
    url: '10.22.34.54:4008/blacklist',
    type: 'post',
    //data can be a object or a string
    //data: 'poster=12314&test=abc'
    data: {
        'poster': '123123',
    }
},function(err,data){
	//do sth
})

```