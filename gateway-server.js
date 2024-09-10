require("dotenv").config();

const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const host = process.env.GATEWAY_HOST
const port = process.env.GATEWAY_PORT;

app.use('/product', createProxyMiddleware({
    target: "http://localhost:" + process.env.PRODUCT_PORT + "/product",
    changeOrigin: true,
    pathRewrite: {
        [`^/product`]: '',
    },
}))

app.use('/customer', createProxyMiddleware({
    target: "http://localhost:" + process.env.CUSTOMER_PORT + "/customer",
    changeOrigin: true,
    pathRewrite: {
        [`^/customer`]: '',
    },
}))

app.use('/member', createProxyMiddleware({
    target: "http://localhost:" + process.env.MEMBER_PORT + "/member",
    changeOrigin: true,
    pathRewrite: {
        [`^/member`]: '',
    },
}))

app.listen(port, host, () => {
    console.log("start gateway http://" + host + ":" + port);
})
