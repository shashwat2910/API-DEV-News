const mongoose = require('mongoose')
const Schema = mongoose.Schema

let dataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Data = mongoose.model("Data", dataSchema)
module.exports = Data