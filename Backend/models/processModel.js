const mongoose = require('mongoose')
const Schema = mongoose.Schema

const processSchema = new Schema({
    steps: [{type: String, required: true}]
})

module.exports = mongoose.model('Process', processSchema)