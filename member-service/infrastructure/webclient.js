const request = require('request');

const interfaceCustomer = () => new Promise((resolve, reject) => {
    let body = [];

    request.get("http://" + process.env.GATEWAY_HOST + ":" + process.env.GATEWAY_PORT + "/customer")
    .on('data', function(chunk) {
        body.push(chunk);
    })
    .on('end', function() {
        body = JSON.parse(Buffer.concat(body).toString());

        resolve(body);
    })
})

module.exports = interfaceCustomer;
