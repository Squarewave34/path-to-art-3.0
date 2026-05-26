const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artworkTypeSchema = new Schema({})

module.exports = mongoose.model('ArtworkType', artworkTypeSchema)