import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import feedRoutes from "./routes/feed.js";
import dotenv from 'dotenv';
dotenv.config();


const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyparser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ojau0.mongodb.net/test`
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));