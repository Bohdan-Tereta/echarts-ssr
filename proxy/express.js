const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const svelteKitProxy = createProxyMiddleware({ target: 'http://localhost:3000/dev/sveltekit', changeOrigin: true });
const staticProxy = createProxyMiddleware({ target: 'http://localhost:8081', changeOrigin: true });

app.use(['/_app/*'], staticProxy);
app.use(['/*.png'], staticProxy);
app.use(['/*.webp'], staticProxy);
app.use(['/*.robots.txt'], staticProxy);
app.use('/*', svelteKitProxy);

app.listen(3001);