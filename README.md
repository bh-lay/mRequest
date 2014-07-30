mRequest
===

mRequest is a simple way to send request with node.js



# Install

```javascript
npm install mrequest@latest
```

# Usage

```javascript
var mReq = require('mrequest');

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


##syntax
mRequest(option,callback);

###option.url
Remote addres,contain `hostname`,`port` and `path`
```javascript
option.url = "10.22.34.54:4008/blacklist";
//the default port is 80,if the port is 80,you can miss it
option.url = "google.com";
```

###option.type
HTTP request method. Defaults to 'GET'.

###option.data
The data send to the server
Both `object` and `String` are work
```javascript
option.data={
	name:'mofei',
	age:88,
	location:'SH'
}
//you alse can write like this:
option.data='name="mofei"&age=88&locatio="SH"'
```
###callback(err,data)
Callback is function,the frist argument is `error`,if some thing wrong,this key will help get the error,the sencond argument is the data from the server.
