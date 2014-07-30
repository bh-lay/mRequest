'use strict';

var http = require('http');
var https = require('https');
var querystring = require('querystring');

exports.req = function(obj, callback) {
    var options = resolveUrl(obj.url);
    options.method = (obj.type || 'GET').toUpperCase();

    var reqMod = /^https/.test(obj.url) ? https : http;
    var req = reqMod.request(options, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            if (callback) callback(null, data);
        });
    });

    req.on('error', function(e) {
    	if (callback) callback(e);
    });

    // write data to request body
    var query = typeof(obj.data) == 'object' ? querystring.stringify(obj.data) : obj.data;
    req.write(query);

    req.end();
};

//get hostname,port,path
function resolveUrl(url) {
    url = url.replace(/^http(s{0,1})\:\/\//, '');
    var urlParts = url.split('/');
    var hostPort = urlParts.shift().split(':');

    var retUrl = {};
    retUrl.hostname = hostPort[0];
    retUrl.port = hostPort[1] || 80;
    retUrl.path = '/' + urlParts.join('/');
    return retUrl;
}