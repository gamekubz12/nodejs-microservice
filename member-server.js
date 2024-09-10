require("dotenv").config();

const express = require("express");
const router = require("./member-service/infrastructure/router");
const config = require("./member-service/infrastructure/config");
const app = express();
const port = process.env.MEMBER_PORT;

app.use(express.json());
app.use("/member", router);

app.listen(port, async() => {
    await config().sequelize.sync();
    console.log("start http://localhost:" + port);
})
