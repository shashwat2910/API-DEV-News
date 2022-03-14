const mongoose = require('mongoose')
const express = require('express')
const model = require('./model/model')
const MongoClient = require("mongodb").MongoClient;

var app = express()
app.use(express.json())

const CONNECTION_URL = "mongodb+srv://shashwat2910:Shashwat%4001@cluster0.t1ljg.mongodb.net/db01?retryWrites=true&w=majority"
const DATABASE_NAME = 'db01';



app.listen(8000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("freecodecampNews");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
})


app.get("/news", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});