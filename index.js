require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require("./db/connect")
const app = express();
const port = process.env.PORT;//panggil env port n
const userRouter = require("./routes/auth.js");

app.use(cors({
    origin:"*",
    methods:["GET", "POST", "PUT", "DELETE", "PATCH"]    //ooooo
}));
app.use(express.json());


app.use("/api/auth", userRouter)//sebelah kiri bikin pathnya /api/auth , pake kutip , userRouter

//bikin .env wep,bikin folder routes sama controller

//99% wendi bantu 

const connectDB = async () => await connect(app,port);

connectDB();
//gaade muncul localhost sekian