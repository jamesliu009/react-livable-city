const express = require("express");
const app = express();
const router = require("./router")
const cors = require("cors")

app.use(cors())
app.use("/api",router)

app.listen(5566,()=>{
    console.log("The server runs on port 5566")
})