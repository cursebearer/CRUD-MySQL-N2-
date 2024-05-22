const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/route")
const connection = require("./config/db")
const tabelas = require("./config/tables")

router(app, express);
tabelas.init(connection)

app.listen(port, (error) => {
    if(error){
        console.log("Error");
        return;
    }
    console.log("Online");
});



