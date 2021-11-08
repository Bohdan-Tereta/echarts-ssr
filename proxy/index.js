var http = require('http'),
    httpProxy = require('http-proxy');
const target = 'http://localhost:3000/dev/sveltekit';
const proxyPort = 3001;
console.log(`Target: ${target}, proxyPort: ${proxyPort}`)
httpProxy.createProxyServer({target}).listen(proxyPort);