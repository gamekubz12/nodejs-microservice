require("dotenv").config();

const express = require("express");
const router = require("./customer-service/infrastructure/router");
const config = require("./customer-service/infrastructure/config");
const app = express();
const port = process.env.CUSTOMER_PORT;

app.use(express.json());
app.use("/customer", router);

app.listen(port, async() => {
    await config().sequelize.sync();

    console.log("start http://localhost:" + port);
})
