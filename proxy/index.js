var http = require('http'),
    httpProxy = require('http-proxy');
httpProxy.createProxyServer({target:'http://localhost:3000/dev/sveltekit'}).listen(3001);