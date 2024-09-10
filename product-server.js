require("dotenv").config();

const express = require("express");
const router = require("./product-service/infrastructure/router");
const config = require("./product-service/infrastructure/config");
const app = express();
const port = process.env.PRODUCT_PORT;

app.use(express.json());
app.use("/product", router);

app.listen(port, async() => {
    await config().sequelize.sync();

    console.log("start http://localhost:" + port);
})
