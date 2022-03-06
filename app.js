const mongoose = require('mongoose')
const csv = require('csv-parser')
const fs = require('fs')
const results = []
const file = "data.csv"
const Data = require('./model/model')
const { MongoClient } = require('mongodb');
const express = require('express')
const bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

fs.createReadStream(file)
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(results);
    })

const uri = "mongodb+srv://shashwat2910:Shashwat%4001@cluster0.t1ljg.mongodb.net/db01?retryWrites=true&w=majority"
const client = new MongoClient(uri);
const dbName = 'db01';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('freecodecampNews');
    const insertResult = await collection.insertMany(results);
    console.log("success", insertResult);
    return 'done.';
  }

 
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());